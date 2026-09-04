import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Modal,
} from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import {
  notificationService,
  AppNotification,
  NotificationCategory,
  NotificationPreferences,
} from '../../src/services/notifications/NotificationService';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../src/constants/theme';

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'orders' | 'promotions' | 'personalized'>('all');
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    orderUpdates: true,
    promotionsAndDrops: true,
    newArrivals: true,
    personalizedOffers: true,
  });

  const loadData = async () => {
    const list = await notificationService.getNotifications();
    setNotifications(list);
    const prefs = await notificationService.getPreferences();
    setPreferences(prefs);
  };

  useEffect(() => {
    loadData();
    const unsubscribe = notificationService.subscribe(loadData);
    return unsubscribe;
  }, []);

  const handleTogglePref = async (key: keyof NotificationPreferences) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    await notificationService.updatePreferences(updated);
  };

  const handleMarkAllRead = async () => {
    await notificationService.markAllAsRead();
  };

  const handleNotificationPress = async (notif: AppNotification) => {
    await notificationService.markAsRead(notif.id);
    if (notif.actionRoute) {
      router.push(notif.actionRoute as any);
    }
  };

  const filteredNotifications = notifications.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'orders') return item.category === 'orders';
    if (activeTab === 'promotions') return item.category === 'promotions' || item.category === 'new_arrivals';
    if (activeTab === 'personalized') return item.category === 'personalized';
    return true;
  });

  const getCategoryIcon = (category: NotificationCategory) => {
    switch (category) {
      case 'orders':
        return { name: 'cube-outline', color: Colors.primary };
      case 'promotions':
        return { name: 'flame-outline', color: Colors.brandRed };
      case 'new_arrivals':
        return { name: 'sparkles-outline', color: '#D97706' };
      case 'personalized':
        return { name: 'heart-outline', color: '#8B5CF6' };
      default:
        return { name: 'notifications-outline', color: Colors.textSecondary };
    }
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        showBack
        title="Notifications"
        subtitle="Offers, Drops & Order Tracking"
        showWishlist={false}
        showNotifications={false}
        rightAction={
          <TouchableOpacity
            style={styles.settingsIconBtn}
            onPress={() => setShowSettings(true)}
            accessibilityLabel="Notification Preferences"
          >
            <Ionicons name="options-outline" size={22} color={Colors.textPrimary} />
          </TouchableOpacity>
        }
      />

      {/* Filter Tabs */}
      <View style={styles.tabBar}>
        {[
          { key: 'all', label: 'All' },
          { key: 'orders', label: 'Orders' },
          { key: 'promotions', label: 'Drops & Offers' },
          { key: 'personalized', label: 'For You' },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabBtn, isActive && styles.tabBtnActive]}
              onPress={() => setActiveTab(tab.key as any)}
            >
              <Text style={[styles.tabBtnText, isActive && styles.tabBtnTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Mark all as read bar */}
      <View style={styles.topActionsBar}>
        <Text style={styles.resultsCount}>
          {filteredNotifications.length} notification{filteredNotifications.length === 1 ? '' : 's'}
        </Text>
        <TouchableOpacity onPress={handleMarkAllRead}>
          <Text style={styles.markAllReadText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="notifications-off-outline" size={48} color={Colors.textMuted} />
            <Text style={styles.emptyTitle}>No notifications yet</Text>
            <Text style={styles.emptySubtitle}>
              You're completely caught up on Gorur Ghash drops and order alerts!
            </Text>
          </View>
        }
        renderItem={({ item }) => {
          const icon = getCategoryIcon(item.category);
          return (
            <TouchableOpacity
              style={[styles.notifCard, !item.isRead && styles.notifCardUnread]}
              activeOpacity={0.8}
              onPress={() => handleNotificationPress(item)}
            >
              <View style={[styles.iconContainer, { backgroundColor: `${icon.color}15` }]}>
                <Ionicons name={icon.name as any} size={20} color={icon.color} />
              </View>

              <View style={styles.notifBody}>
                <View style={styles.titleRow}>
                  <Text style={styles.notifTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  {!item.isRead && <View style={styles.unreadDot} />}
                </View>
                <Text style={styles.notifText}>{item.body}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Preferences Modal */}
      <Modal visible={showSettings} animationType="slide" transparent statusBarTranslucent onRequestClose={() => setShowSettings(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Notification Channels</Text>
              <TouchableOpacity onPress={() => setShowSettings(false)}>
                <Ionicons name="close" size={24} color={Colors.textPrimary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              Customize the alerts you receive from Gorur Ghash. We respect your attention and never spam.
            </Text>

            <View style={styles.prefItem}>
              <View style={styles.prefTextGroup}>
                <Text style={styles.prefTitle}>Order Updates</Text>
                <Text style={styles.prefDesc}>Status alerts, courier tracking, and trial reminders</Text>
              </View>
              <Switch
                value={preferences.orderUpdates}
                onValueChange={() => handleTogglePref('orderUpdates')}
                thumbColor={preferences.orderUpdates ? '#FBDD01' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#000000' }}
              />
            </View>

            <View style={styles.prefItem}>
              <View style={styles.prefTextGroup}>
                <Text style={styles.prefTitle}>Promotions & Campaigns</Text>
                <Text style={styles.prefDesc}>Flash sales, seasonal archive discounts & coupon codes</Text>
              </View>
              <Switch
                value={preferences.promotionsAndDrops}
                onValueChange={() => handleTogglePref('promotionsAndDrops')}
                thumbColor={preferences.promotionsAndDrops ? '#FBDD01' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#000000' }}
              />
            </View>

            <View style={styles.prefItem}>
              <View style={styles.prefTextGroup}>
                <Text style={styles.prefTitle}>New Streetwear Drops</Text>
                <Text style={styles.prefDesc}>First alert when Friday evening collections launch</Text>
              </View>
              <Switch
                value={preferences.newArrivals}
                onValueChange={() => handleTogglePref('newArrivals')}
                thumbColor={preferences.newArrivals ? '#FBDD01' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#000000' }}
              />
            </View>

            <View style={styles.prefItem}>
              <View style={styles.prefTextGroup}>
                <Text style={styles.prefTitle}>Personalized Restocks</Text>
                <Text style={styles.prefDesc}>Back-in-stock alerts for saved wishlist favorites</Text>
              </View>
              <Switch
                value={preferences.personalizedOffers}
                onValueChange={() => handleTogglePref('personalizedOffers')}
                thumbColor={preferences.personalizedOffers ? '#FBDD01' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#000000' }}
              />
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={() => setShowSettings(false)}>
              <Text style={styles.saveBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  settingsIconBtn: {
    padding: Spacing.xs,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
    gap: 8,
  },
  tabBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surfaceAlt,
  },
  tabBtnActive: {
    backgroundColor: '#000000',
  },
  tabBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  tabBtnTextActive: {
    color: '#FFFFFF',
  },
  topActionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  resultsCount: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  markAllReadText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  listContent: {
    padding: Spacing.lg,
    gap: 12,
  },
  notifCard: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.sm,
    alignItems: 'flex-start',
  },
  notifCardUnread: {
    borderLeftWidth: 4,
    borderLeftColor: '#FBDD01',
    backgroundColor: '#FFFDF0',
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  notifBody: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  notifTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textPrimary,
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FBDD01',
    marginLeft: 6,
  },
  notifText: {
    fontSize: 13,
    lineHeight: 18,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  timestamp: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: Spacing.xl,
  },
  emptyTitle: {
    ...Typography.heading3,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    padding: Spacing.xl,
    paddingBottom: Spacing.xxxl,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  modalTitle: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  modalSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
    marginBottom: Spacing.lg,
  },
  prefItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  prefTextGroup: {
    flex: 1,
    marginRight: Spacing.md,
  },
  prefTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  prefDesc: {
    fontSize: 12,
    color: Colors.textMuted,
    lineHeight: 16,
  },
  saveBtn: {
    backgroundColor: '#000000',
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
