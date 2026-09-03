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
import { SocialPost } from '../../services/social/ISocialService';
import { socialService } from '../../services/social/MockSocialService';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../constants/theme';
import { formatPrice } from '../../utils/formatters';

export const SocialFeedSection: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<SocialPost[]>([]);

  useEffect(() => {
    socialService.getFeedPosts().then(setPosts);
  }, []);

  if (posts.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.titleRow}>
            <Ionicons name="logo-instagram" size={20} color={Colors.textPrimary} />
            <Text style={styles.title}>SHOP THE LOOK</Text>
          </View>
          <Text style={styles.subtitle}>Streetwear in the wild • Tag @gorurghash</Text>
        </View>

        <TouchableOpacity
          style={styles.followBtn}
          onPress={() => Linking.openURL('https://www.instagram.com/gorurghash/?hl=en')}
        >
          <Text style={styles.followBtnText}>Follow</Text>
        </TouchableOpacity>
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
  followBtn: {
    backgroundColor: '#000000',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
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
