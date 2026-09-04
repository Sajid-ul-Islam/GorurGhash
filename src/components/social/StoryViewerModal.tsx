import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useVideoPlayer, VideoView } from 'expo-video';
import { SocialStory } from '../../services/social/ISocialService';
import { Colors, Typography, BorderRadius, Spacing } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const StoryVideo: React.FC<{ url: string; isPaused: boolean }> = ({ url, isPaused }) => {
  const player = useVideoPlayer(url, (p) => {
    p.loop = true;
    p.play();
  });

  useEffect(() => {
    if (isPaused) {
      player.pause();
    } else {
      player.play();
    }
  }, [isPaused, player]);

  return (
    <VideoView
      style={styles.fullMedia}
      player={player}
      contentFit="cover"
      nativeControls={false}
    />
  );
};

interface StoryViewerModalProps {
  visible: boolean;
  stories: SocialStory[];
  initialIndex?: number;
  onClose: () => void;
}

export const StoryViewerModal: React.FC<StoryViewerModalProps> = ({
  visible,
  stories,
  initialIndex = 0,
  onClose,
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setProgress(0);
  }, [initialIndex, visible]);

  const activeStory = stories[currentIndex];

  useEffect(() => {
    if (!visible || !activeStory) return;

    setProgress(0);
    const duration = (activeStory.durationSeconds || 5) * 1000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          handleNext();
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, visible]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  const handleViewProduct = (productId: string) => {
    onClose();
    router.push(`/product/${productId}`);
  };

  if (!visible || !activeStory) return null;

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.backdrop}>
        {/* Main media: In-App Video or Image */}
        {activeStory.mediaType === 'video' ? (
          <StoryVideo url={activeStory.mediaUrl} isPaused={!visible} />
        ) : (
          <Image
            source={{ uri: activeStory.mediaUrl }}
            style={styles.fullMedia}
            resizeMode="cover"
          />
        )}

        {/* Overlay gradient darkness for text readability */}
        <View style={styles.topGradient} />
        <View style={styles.bottomGradient} />

        {/* Story progress segments */}
        <View style={styles.progressRow}>
          {stories.map((story, idx) => (
            <View key={story.id} style={styles.progressBarTrack}>
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width:
                      idx < currentIndex
                        ? '100%'
                        : idx === currentIndex
                        ? `${progress}%`
                        : '0%',
                  },
                ]}
              />
            </View>
          ))}
        </View>

        {/* Top Header info */}
        <View style={styles.headerRow}>
          <View style={styles.authorBadge}>
            <Image
              source={require('../../../assets/images/gorurghash-cow.png')}
              style={styles.authorAvatar}
            />
            <View>
              <Text style={styles.authorName}>Gorur Ghash Official</Text>
              <Text style={styles.storyTitle}>{activeStory.title}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Tap areas for prev / next story */}
        <TouchableOpacity style={styles.leftTapArea} onPress={handlePrev} activeOpacity={1} />
        <TouchableOpacity style={styles.rightTapArea} onPress={handleNext} activeOpacity={1} />

        {/* Bottom Content Area */}
        <View style={styles.bottomContent}>
          {activeStory.caption && (
            <Text style={styles.captionText}>{activeStory.caption}</Text>
          )}

          {activeStory.taggedProduct && (
            <TouchableOpacity
              style={styles.productPill}
              activeOpacity={0.85}
              onPress={() => handleViewProduct(activeStory.taggedProduct!.productId)}
            >
              <Image
                source={{ uri: activeStory.taggedProduct.imageUrl }}
                style={styles.productThumb}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productName} numberOfLines={1}>
                  {activeStory.taggedProduct.productName}
                </Text>
                <Text style={styles.productPrice}>
                  {formatPrice(activeStory.taggedProduct.price)}
                </Text>
              </View>
              <View style={styles.shopNowBadge}>
                <Text style={styles.shopNowText}>Shop Drop</Text>
                <Ionicons name="arrow-forward" size={14} color="#000000" />
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.instagramCta}
            onPress={() => Linking.openURL('https://www.instagram.com/gorurghash/?hl=en')}
          >
            <Ionicons name="logo-instagram" size={16} color="#FFFFFF" />
            <Text style={styles.instagramCtaText}>Follow @gorurghash on Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#000000',
  },
  fullMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  progressRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 36,
    left: 12,
    right: 12,
    gap: 4,
    zIndex: 10,
  },
  progressBarTrack: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FBDD01',
  },
  headerRow: {
    position: 'absolute',
    top: 48,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  authorBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  authorAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FBDD01',
    borderWidth: 2,
    borderColor: '#FBDD01',
  },
  authorName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  storyTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    fontWeight: '500',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftTapArea: {
    position: 'absolute',
    top: 100,
    bottom: 180,
    left: 0,
    width: SCREEN_WIDTH * 0.35,
    zIndex: 5,
  },
  rightTapArea: {
    position: 'absolute',
    top: 100,
    bottom: 180,
    right: 0,
    width: SCREEN_WIDTH * 0.65,
    zIndex: 5,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 28,
    left: 16,
    right: 16,
    zIndex: 10,
  },
  captionText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  productPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: BorderRadius.lg,
    padding: 8,
    marginBottom: 12,
  },
  productThumb: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.border,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.brandRed,
    marginTop: 2,
  },
  shopNowBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBDD01',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  shopNowText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000000',
  },
  instagramCta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 6,
  },
  instagramCtaText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    fontWeight: '600',
  },
});
