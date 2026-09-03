import AsyncStorage from '@react-native-async-storage/async-storage';

export type NotificationCategory = 'orders' | 'promotions' | 'new_arrivals' | 'personalized';

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  category: NotificationCategory;
  timestamp: string;
  isRead: boolean;
  actionRoute?: string;
}

export interface NotificationPreferences {
  orderUpdates: boolean;
  promotionsAndDrops: boolean;
  newArrivals: boolean;
  personalizedOffers: boolean;
}

const STORAGE_KEY_NOTIFICATIONS = '@gg_notifications';
const STORAGE_KEY_PREFS = '@gg_notification_prefs';

const DEFAULT_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: '🔥 Winter Drop 2.0 Live Now!',
    body: 'Vintage wale corduroy overshirts and 380 GSM fleece hoodies are now stocked. Courier on-spot trial available.',
    category: 'promotions',
    timestamp: '10m ago',
    isRead: false,
    actionRoute: '/(tabs)/shop',
  },
  {
    id: 'notif-2',
    title: '📦 Order #GG-8924 Dispatched',
    body: 'Your package is on its way via Steadfast Courier with tracking code #ST-99124. Expect arrival tomorrow.',
    category: 'orders',
    timestamp: '2h ago',
    isRead: false,
    actionRoute: '/(tabs)/profile',
  },
  {
    id: 'notif-3',
    title: '🎉 15% OFF Welcome Coupon Ready',
    body: 'Use code GHASH15 at checkout on your first order. Free delivery inside Dhaka over ৳2,000!',
    category: 'promotions',
    timestamp: 'Yesterday',
    isRead: false,
    actionRoute: '/(tabs)/shop',
  },
  {
    id: 'notif-4',
    title: '👀 Restock Alert: Washed Black Cargos',
    body: 'The item in your wishlist has restocked in Size 32 and Size 34. Grab yours before it runs out.',
    category: 'personalized',
    timestamp: '2 days ago',
    isRead: true,
    actionRoute: '/(tabs)/wishlist',
  },
  {
    id: 'notif-5',
    title: '✨ Friday Fresh Drop Announced',
    body: 'Block-print camp collar Cuban shirts launching this Friday 8 PM. Turn notifications on!',
    category: 'new_arrivals',
    timestamp: '3 days ago',
    isRead: true,
    actionRoute: '/(tabs)/shop',
  },
];

const DEFAULT_PREFS: NotificationPreferences = {
  orderUpdates: true,
  promotionsAndDrops: true,
  newArrivals: true,
  personalizedOffers: true,
};

class NotificationService {
  private listeners: (() => void)[] = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((l) => l());
  }

  async getNotifications(): Promise<AppNotification[]> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY_NOTIFICATIONS);
      if (stored) {
        return JSON.parse(stored);
      }
      await AsyncStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(DEFAULT_NOTIFICATIONS));
      return DEFAULT_NOTIFICATIONS;
    } catch {
      return DEFAULT_NOTIFICATIONS;
    }
  }

  async getUnreadCount(): Promise<number> {
    const list = await this.getNotifications();
    return list.filter((n) => !n.isRead).length;
  }

  async markAsRead(id: string): Promise<void> {
    const list = await this.getNotifications();
    const updated = list.map((n) => (n.id === id ? { ...n, isRead: true } : n));
    await AsyncStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(updated));
    this.notifyListeners();
  }

  async markAllAsRead(): Promise<void> {
    const list = await this.getNotifications();
    const updated = list.map((n) => ({ ...n, isRead: true }));
    await AsyncStorage.setItem(STORAGE_KEY_NOTIFICATIONS, JSON.stringify(updated));
    this.notifyListeners();
  }

  async getPreferences(): Promise<NotificationPreferences> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY_PREFS);
      if (stored) return JSON.parse(stored);
    } catch {}
    return DEFAULT_PREFS;
  }

  async updatePreferences(prefs: Partial<NotificationPreferences>): Promise<void> {
    const current = await this.getPreferences();
    const updated = { ...current, ...prefs };
    await AsyncStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(updated));
    this.notifyListeners();
  }
}

export const notificationService = new NotificationService();
