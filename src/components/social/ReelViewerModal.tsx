import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Share,
  Linking,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { SocialReel } from '../../services/social/ISocialService';
import { Colors, Typography, BorderRadius, Spacing, Shadows } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface ReelViewerModalProps {
  visible: boolean;
  reels: SocialReel[];
  initialIndex?: number;
  onClose: () => void;
}

interface SingleReelPlayerProps {
  reel: SocialReel;
  isActive: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const SingleReelPlayer: React.FC<SingleReelPlayerProps> = ({
  reel,
  isActive,
  isMuted,
  onToggleMute,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [likes, setLikes] = useState(reel.likesCount);
  const [isLiked, setIsLiked] = useState(false);
  const heartScale = useRef(new Animated.Value(1)).current;
  const playPauseOpacity = useRef(new Animated.Value(0)).current;

  const player = useVideoPlayer(reel.videoUrl, (p) => {
    p.loop = true;
    p.muted = isMuted;
    if (isActive) {
      p.play();
    }
  });

  useEffect(() => {
    player.muted = isMuted;
  }, [isMuted, player]);

  useEffect(() => {
    if (isActive) {
      player.play();
      setIsPlaying(true);
    } else {
      player.pause();
      setIsPlaying(false);
    }
  }, [isActive, player]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }

    playPauseOpacity.setValue(1);
    Animated.timing(playPauseOpacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const handleToggleLike = () => {
    Animated.sequence([
      Animated.timing(heartScale, { toValue: 1.4, duration: 120, useNativeDriver: true }),
      Animated.spring(heartScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
    ]).start();

    if (isLiked) {
      setIsLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        title: reel.title,
        message: `Check out this Gorur Ghash streetwear drop: "${reel.title}" on Instagram & Gorur Ghash App! https://gorurghash.com`,
      });
    } catch {
      // Handled
    }
  };

  const handleShopProduct = (productId: string) => {
    onClose();
    router.push(`/product/${productId}`);
  };

  return (
    <View style={styles.reelContainer}>
      {/* Video View */}
      <VideoView
        style={styles.fullVideo}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />

      {/* Tap area to toggle play/pause */}
      <TouchableOpacity
        style={styles.touchOverlay}
        activeOpacity={1}
        onPress={handleTogglePlay}
      >
        <Animated.View style={[styles.centerPlayIndicator, { opacity: playPauseOpacity }]}>
          <Ionicons
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={72}
            color="rgba(255, 255, 255, 0.85)"
          />
        </Animated.View>
      </TouchableOpacity>

      {/* Top Header Controls */}
      <View style={styles.topBar}>
        <View style={styles.brandBadge}>
          <Image
            source={require('../../../assets/images/gorurghash-cow.png')}
            style={styles.cowAvatar}
            resizeMode="contain"
          />
          <Text style={styles.brandTitle}>GORUR GHASH REELS</Text>
        </View>

        <View style={styles.topActions}>
          <TouchableOpacity
            style={styles.iconCircle}
            onPress={onToggleMute}
            accessibilityLabel={isMuted ? 'Unmute video' : 'Mute video'}
          >
            <Ionicons
              name={isMuted ? 'volume-mute' : 'volume-high'}
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconCircle}
            onPress={onClose}
            accessibilityLabel="Close reels"
          >
            <Ionicons name="close" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Interaction Sidebar */}
      <View style={styles.rightSidebar}>
        {/* Like Button */}
        <TouchableOpacity
          style={styles.sidebarBtn}
          onPress={handleToggleLike}
          activeOpacity={0.8}
        >
          <Animated.View style={{ transform: [{ scale: heartScale }] }}>
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={28}
              color={isLiked ? Colors.brandRed : '#FFFFFF'}
            />
          </Animated.View>
          <Text style={styles.sidebarCount}>{likes.toLocaleString()}</Text>
        </TouchableOpacity>

        {/* Views Info */}
        <View style={styles.sidebarBtn}>
          <Ionicons name="eye-outline" size={24} color="#FFFFFF" />
          <Text style={styles.sidebarCount}>{(reel.viewsCount / 1000).toFixed(1)}k</Text>
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles.sidebarBtn} onPress={handleShare} activeOpacity={0.8}>
          <Ionicons name="arrow-redo-outline" size={26} color="#FFFFFF" />
          <Text style={styles.sidebarCount}>Share</Text>
        </TouchableOpacity>

        {/* Instagram Link */}
        <TouchableOpacity
          style={styles.sidebarBtn}
          onPress={() => Linking.openURL('https://www.instagram.com/gorurghash/?hl=en')}
          activeOpacity={0.8}
        >
          <Ionicons name="logo-instagram" size={24} color="#FBDD01" />
          <Text style={styles.sidebarCount}>Insta</Text>
        </TouchableOpacity>

        {/* Prev / Next buttons */}
        <View style={styles.navArrows}>
          {hasPrev && (
            <TouchableOpacity style={styles.arrowBtn} onPress={onPrev}>
              <Ionicons name="chevron-up" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          )}
          {hasNext && (
            <TouchableOpacity style={styles.arrowBtn} onPress={onNext}>
              <Ionicons name="chevron-down" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Bottom Information & Product Tag */}
      <View style={styles.bottomInfoContainer}>
        {/* Caption & Title */}
        <View style={styles.captionBox}>
          <Text style={styles.reelTitle}>{reel.title}</Text>
          <Text style={styles.hashtags}>
            #GorurGhash #DhakaStreetwear #260GSM #AuthenticLocal
          </Text>
        </View>

        {/* Shoppable Product Pill */}
        {reel.taggedProduct && (
          <TouchableOpacity
            style={styles.productPill}
            activeOpacity={0.9}
            onPress={() => handleShopProduct(reel.taggedProduct!.productId)}
          >
            <Image
              source={{ uri: reel.taggedProduct.imageUrl }}
              style={styles.productThumb}
              resizeMode="cover"
            />
            <View style={styles.productTextContainer}>
              <Text style={styles.productTagBadge}>FEATURED IN REEL</Text>
              <Text style={styles.productName} numberOfLines={1}>
                {reel.taggedProduct.productName}
              </Text>
              <Text style={styles.productPrice}>
                {formatPrice(reel.taggedProduct.price)}
              </Text>
            </View>
            <View style={styles.shopCtaBtn}>
              <Text style={styles.shopCtaText}>SHOP FIT</Text>
              <Ionicons name="arrow-forward" size={14} color="#000000" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const ReelViewerModal: React.FC<ReelViewerModalProps> = ({
  visible,
  reels,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, visible]);

  if (!visible || reels.length === 0) return null;

  const currentReel = reels[currentIndex] || reels[0];

  const handleNext = () => {
    if (currentIndex < reels.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.backdrop}>
        <SingleReelPlayer
          reel={currentReel}
          isActive={visible}
          isMuted={isMuted}
          onToggleMute={() => setIsMuted((prev) => !prev)}
          onClose={onClose}
          onNext={handleNext}
          onPrev={handlePrev}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < reels.length - 1}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#000000',
  },
  reelContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  fullVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  touchOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerPlayIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingHorizontal: Spacing.lg,
    zIndex: 10,
  },
  brandBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(251, 221, 1, 0.3)',
  },
  cowAvatar: {
    width: 22,
    height: 22,
    marginRight: 6,
  },
  brandTitle: {
    color: '#FBDD01',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 0.8,
  },
  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  rightSidebar: {
    position: 'absolute',
    right: Spacing.md,
    bottom: 150,
    alignItems: 'center',
    gap: 18,
    zIndex: 10,
  },
  sidebarBtn: {
    alignItems: 'center',
  },
  sidebarCount: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  navArrows: {
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomInfoContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 36,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  captionBox: {
    marginBottom: Spacing.sm,
    maxWidth: '82%',
  },
  reelTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  hashtags: {
    color: '#FBDD01',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  productPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.82)',
    borderRadius: BorderRadius.lg,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(251, 221, 1, 0.4)',
    ...Shadows.lg,
  },
  productThumb: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.sm,
  },
  productTextContainer: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  productTagBadge: {
    color: '#FBDD01',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  productName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 1,
  },
  productPrice: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
  },
  shopCtaBtn: {
    backgroundColor: '#FBDD01',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: BorderRadius.md,
    marginLeft: Spacing.sm,
  },
  shopCtaText: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 11,
    letterSpacing: 0.5,
  },
});
