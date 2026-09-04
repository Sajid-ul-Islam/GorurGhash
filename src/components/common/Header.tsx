import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Platform, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography } from '../../constants/theme';
import { useWishlist } from '../../context/WishlistContext';
import { notificationService } from '../../services/notifications/NotificationService';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showSearch?: boolean;
  showWishlist?: boolean;
  showNotifications?: boolean;
  showCart?: boolean;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  showSearch = true,
  showWishlist = true,
  showNotifications = true,
  showCart = false,
  rightAction,
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { count: wishlistCount } = useWishlist();
  const [unreadNotifs, setUnreadNotifs] = useState(0);

  const wishlistBadgeScale = useRef(new Animated.Value(1)).current;
  const notifBadgeScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (wishlistCount > 0) {
      Animated.sequence([
        Animated.timing(wishlistBadgeScale, { toValue: 1.3, duration: 120, useNativeDriver: true }),
        Animated.spring(wishlistBadgeScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
      ]).start();
    }
  }, [wishlistCount]);

  useEffect(() => {
    notificationService.getUnreadCount().then((count) => {
      setUnreadNotifs(count);
      if (count > 0) {
        Animated.sequence([
          Animated.timing(notifBadgeScale, { toValue: 1.3, duration: 120, useNativeDriver: true }),
          Animated.spring(notifBadgeScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
        ]).start();
      }
    });
    const unsubscribe = notificationService.subscribe(() => {
      notificationService.getUnreadCount().then((count) => {
        setUnreadNotifs(count);
        if (count > 0) {
          Animated.sequence([
            Animated.timing(notifBadgeScale, { toValue: 1.3, duration: 120, useNativeDriver: true }),
            Animated.spring(notifBadgeScale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }),
          ]).start();
        }
      });
    });
    return unsubscribe;
  }, []);

  const topInset =
    Platform.OS === 'android' ? Math.max(insets.top, StatusBar.currentHeight || 0) : insets.top;

  return (
    <View style={[styles.container, { paddingTop: topInset }]}>
      <View style={styles.headerContent}>
        <View style={styles.leftSection}>
          {showBack ? (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.back()}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          ) : null}

          {title ? (
            <View style={styles.titleContainer}>
              <Text style={styles.screenTitle} numberOfLines={1}>
                {title}
              </Text>
              {subtitle && <Text style={styles.screenSubtitle}>{subtitle}</Text>}
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push('/(tabs)')}
              style={styles.brandContainer}
            >
              <View style={styles.brandBadge}>
                <Image
                  source={require('../../../assets/images/gorurghash-cow.png')}
                  style={styles.brandLogoImage}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.brandTitle}>GORUR GHASH</Text>
                <Text style={styles.brandTagline}>গরুর ঘাস • DHAKA STREETWEAR</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.rightSection}>
          {rightAction}

          {showSearch && !title && (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push('/(tabs)/shop')}
              accessibilityLabel="Search catalog"
            >
              <Ionicons name="search-outline" size={22} color={Colors.textPrimary} />
            </TouchableOpacity>
          )}

          {showWishlist && (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push('/(tabs)/wishlist')}
              accessibilityLabel="Saved Wishlist"
            >
              <Ionicons name="heart-outline" size={22} color={Colors.textPrimary} />
              {wishlistCount > 0 && (
                <Animated.View
                  style={[
                    styles.badge,
                    { backgroundColor: Colors.brandRed, transform: [{ scale: wishlistBadgeScale }] },
                  ]}
                >
                  <Text style={styles.badgeText}>{wishlistCount}</Text>
                </Animated.View>
              )}
            </TouchableOpacity>
          )}

          {showNotifications && (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push('/notifications')}
              accessibilityLabel="Notifications & Offers"
            >
              <Ionicons name="notifications-outline" size={22} color={Colors.textPrimary} />
              {unreadNotifs > 0 && (
                <Animated.View
                  style={[
                    styles.badge,
                    { backgroundColor: '#FBDD01', transform: [{ scale: notifBadgeScale }] },
                  ]}
                >
                  <Text style={[styles.badgeText, { color: '#000000' }]}>{unreadNotifs}</Text>
                </Animated.View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandBadge: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
    padding: 2,
  },
  brandLogoImage: {
    width: 28,
    height: 28,
  },
  brandBadgeText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: Colors.textPrimary,
  },
  brandTagline: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.primaryDark,
    letterSpacing: 0.8,
  },
  titleContainer: {
    marginLeft: Spacing.xs,
    flex: 1,
  },
  screenTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  screenSubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.xs,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: Colors.textWhite,
    fontSize: 9,
    fontWeight: '700',
  },
});
