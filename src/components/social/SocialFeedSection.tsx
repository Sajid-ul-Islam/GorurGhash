import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SocialPost, SocialReel } from '../../services/social/ISocialService';
import { socialService } from '../../services/social/MockSocialService';
import { ReelViewerModal } from './ReelViewerModal';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

export const SocialFeedSection: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [reels, setReels] = useState<SocialReel[]>([]);
  const [selectedReelIndex, setSelectedReelIndex] = useState(0);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);

  useEffect(() => {
    Promise.all([socialService.getFeedPosts(), socialService.getReels()]).then(([p, r]) => {
      setPosts(p);
      setReels(r);
    });
  }, []);

  const handleOpenReel = (index: number) => {
    setSelectedReelIndex(index);
    setIsReelModalOpen(true);
  };

  if (posts.length === 0 && reels.length === 0) return null;

  return (
    <View style={styles.container}>
      {/* 1. Street Reels In-App Video Section */}
      {reels.length > 0 && (
        <View style={styles.reelsSection}>
          <View style={styles.header}>
            <View>
              <View style={styles.titleRow}>
                <Ionicons name="videocam" size={20} color={Colors.primary} />
                <Text style={styles.title}>STREET REELS</Text>
                <View style={styles.liveBadge}>
                  <Text style={styles.liveBadgeText}>WATCH IN APP</Text>
                </View>
              </View>
              <Text style={styles.subtitle}>Tap to play video lookbooks & fit trials</Text>
            </View>

            <TouchableOpacity
              style={styles.followBtn}
              onPress={() => Linking.openURL('https://www.instagram.com/gorurghash/?hl=en')}
            >
              <Ionicons name="logo-instagram" size={14} color="#FFFFFF" style={{ marginRight: 4 }} />
              <Text style={styles.followBtnText}>Follow</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.reelsScroll}
          >
            {reels.map((reel, idx) => (
              <TouchableOpacity
                key={reel.id}
                style={styles.reelCard}
                activeOpacity={0.88}
                onPress={() => handleOpenReel(idx)}
                accessibilityLabel={`Play reel ${reel.title}`}
              >
                <Image source={{ uri: reel.thumbnailUrl }} style={styles.reelThumb} />
                <View style={styles.reelDarkOverlay} />

                {/* Center Play Button Badge */}
                <View style={styles.playCircle}>
                  <Ionicons name="play" size={20} color="#000000" style={{ marginLeft: 2 }} />
                </View>

                {/* Top Duration Pill */}
                <View style={styles.durationPill}>
                  <Text style={styles.durationText}>0:{reel.durationSeconds < 10 ? `0${reel.durationSeconds}` : reel.durationSeconds}</Text>
                </View>

                {/* Bottom Info */}
                <View style={styles.reelCardBottom}>
                  <View style={styles.reelViewsRow}>
                    <Ionicons name="eye" size={12} color="#FFFFFF" />
                    <Text style={styles.reelViewsText}>{(reel.viewsCount / 1000).toFixed(1)}k</Text>
                  </View>
                  <Text style={styles.reelCardTitle} numberOfLines={2}>
                    {reel.title}
                  </Text>
                  {reel.taggedProduct && (
                    <View style={styles.reelProductBadge}>
                      <Ionicons name="pricetag" size={10} color="#000000" />
                      <Text style={styles.reelProductText} numberOfLines={1}>
                        {reel.taggedProduct.productName}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* 2. Photo Lookbook / Community Feed */}
      <View style={styles.feedSubSection}>
        <View style={styles.header}>
          <View>
            <View style={styles.titleRow}>
              <Ionicons name="camera-outline" size={20} color={Colors.textPrimary} />
              <Text style={styles.title}>SHOP THE LOOK</Text>
            </View>
            <Text style={styles.subtitle}>Streetwear in the wild • Tag @gorurghash</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.postsScroll}
        >
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => Linking.openURL(post.permalink)}
              >
                <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
                <View style={styles.platformBadge}>
                  <Ionicons
                    name={post.platform === 'instagram' ? 'logo-instagram' : 'logo-facebook'}
                    size={14}
                    color="#FFFFFF"
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.postBody}>
                <View style={styles.statsRow}>
                  <View style={styles.statItem}>
                    <Ionicons name="heart" size={14} color={Colors.brandRed} />
                    <Text style={styles.statText}>{post.likesCount}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="chatbubble-outline" size={13} color={Colors.textSecondary} />
                    <Text style={styles.statText}>{post.commentsCount}</Text>
                  </View>
                  <Text style={styles.dateText}>{post.datePosted}</Text>
                </View>

                <Text style={styles.caption} numberOfLines={2}>
                  {post.caption}
                </Text>

                {post.taggedProducts.length > 0 && (
                  <TouchableOpacity
                    style={styles.taggedProductPill}
                    activeOpacity={0.8}
                    onPress={() => router.push(`/product/${post.taggedProducts[0].productId}`)}
                  >
                    <Ionicons name="pricetag" size={12} color="#000000" />
                    <Text style={styles.taggedProductName} numberOfLines={1}>
                      {post.taggedProducts[0].productName}
                    </Text>
                    <Text style={styles.taggedProductPrice}>
                      {formatPrice(post.taggedProducts[0].price)}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* In-App Reel Video Player Modal */}
      <ReelViewerModal
        visible={isReelModalOpen}
        reels={reels}
        initialIndex={selectedReelIndex}
        onClose={() => setIsReelModalOpen(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    letterSpacing: 1,
    fontWeight: '900',
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  reelsSection: {
    marginBottom: Spacing.xl,
  },
  feedSubSection: {
    marginTop: Spacing.sm,
  },
  liveBadge: {
    backgroundColor: '#FBDD01',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
    marginLeft: 4,
  },
  liveBadgeText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  reelsScroll: {
    paddingHorizontal: Spacing.lg,
    gap: 12,
  },
  reelCard: {
    width: 170,
    height: 270,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#1E293B',
    ...Shadows.md,
  },
  reelThumb: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reelDarkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  playCircle: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -22,
    marginTop: -22,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.md,
  },
  durationPill: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  reelCardBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  reelViewsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  reelViewsText: {
    color: '#E2E8F0',
    fontSize: 10,
    fontWeight: '700',
  },
  reelCardTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 15,
    marginBottom: 4,
  },
  reelProductBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBDD01',
    borderRadius: BorderRadius.xs,
    paddingHorizontal: 4,
    paddingVertical: 2,
    gap: 3,
    alignSelf: 'flex-start',
  },
  reelProductText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '800',
    maxWidth: 120,
  },
  followBtn: {
    backgroundColor: '#000000',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  postsScroll: {
    paddingHorizontal: Spacing.lg,
    gap: 14,
  },
  postCard: {
    width: 240,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    ...Shadows.sm,
  },
  postImage: {
    width: '100%',
    height: 240,
    backgroundColor: Colors.surfaceAlt,
  },
  platformBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postBody: {
    padding: Spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  dateText: {
    marginLeft: 'auto',
    fontSize: 10,
    color: Colors.textMuted,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  taggedProductPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBDD01',
    borderRadius: BorderRadius.md,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
  },
  taggedProductName: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    color: '#000000',
  },
  taggedProductPrice: {
    fontSize: 11,
    fontWeight: '900',
    color: '#000000',
  },
});
