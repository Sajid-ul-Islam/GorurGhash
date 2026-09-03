import AsyncStorage from '@react-native-async-storage/async-storage';
import { IOrderService, CreateOrderPayload } from './IOrderService';
import { Order, OrderStatus, OrderTimelineStep } from '../../types';
import { mockProducts, mockCoupons } from '../../data/mockProducts';
import { calculateOrderPricing } from '../../utils/formatters';

const STORAGE_ORDERS_KEY = '@gorurghash_orders_cache';

export class MockOrderService implements IOrderService {
  private orders: Order[] = [];

  constructor() {
    this.seedInitialOrders();
  }

  private delay<T>(data: T, ms: number = 100): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }

  private async seedInitialOrders() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_ORDERS_KEY);
      if (stored) {
        this.orders = JSON.parse(stored);
        return;
      }
    } catch {
      // Ignored
    }

    const p1 = mockProducts[0];
    const p2 = mockProducts[1] || mockProducts[0];

    const sampleOrder1: Order = {
      id: 'ord_1001',
      orderNumber: 'GG-2026-8941',
      userId: 'usr_default',
      items: [
        {
          id: `${p1.id}_M`,
          product: p1,
          selectedSize: 'M',
          quantity: 1,
          unitPrice: p1.price,
        },
      ],
      subtotal: p1.price,
      discount: 0,
      deliveryFee: 70,
      total: p1.price + 70,
      shippingAddress: {
        id: 'addr_seed_1',
        title: 'Home',
        recipientName: 'Shaon Ahmed',
        phone: '+880 1713-222653',
        division: 'Dhaka',
        district: 'Dhaka City',
        thana: 'Uttara',
        streetAddress: 'House 57, Road 3, Sector 5',
        isDefault: true,
      },
      paymentMethod: 'bkash',
      isPaid: true,
      status: 'shipped',
      timeline: [
        {
          status: 'pending',
          title: 'Order Placed',
          description: 'Your order was successfully registered.',
          timestamp: '2026-09-02T10:30:00Z',
          completed: true,
        },
        {
          status: 'confirmed',
          title: 'Order Confirmed',
          description: 'Verified by Gorur Ghash Dhaka fulfillment hub.',
          timestamp: '2026-09-02T11:15:00Z',
          completed: true,
        },
        {
          status: 'processing',
          title: 'Quality Check & Packed',
          description: 'Package boxed with brand tags and invoice.',
          timestamp: '2026-09-02T14:40:00Z',
          completed: true,
        },
        {
          status: 'shipped',
          title: 'Handed to Steadfast Courier',
          description: 'Tracking Consignment #STF-8491294. In transit to your hub.',
          timestamp: '2026-09-03T09:00:00Z',
          completed: true,
        },
        {
          status: 'delivered',
          title: 'Out for Delivery & Handover',
          description: 'Rider will call before arriving at your doorstep.',
          timestamp: 'Expected 2026-09-04',
          completed: false,
        },
      ],
      createdAt: '2026-09-02T10:30:00Z',
    };

    const sampleOrder2: Order = {
      id: 'ord_1002',
      orderNumber: 'GG-2026-7812',
      userId: 'usr_default',
      items: [
        {
          id: `${p2.id}_L`,
          product: p2,
          selectedSize: 'L',
          quantity: 2,
          unitPrice: p2.price,
        },
      ],
      subtotal: p2.price * 2,
      discount: 200,
      deliveryFee: 70,
      total: p2.price * 2 - 200 + 70,
      shippingAddress: {
        id: 'addr_seed_2',
        title: 'Office',
        recipientName: 'Shaon Ahmed',
        phone: '+880 1713-222653',
        division: 'Dhaka',
        district: 'Dhaka City',
        thana: 'Banani',
        streetAddress: 'Road 11, Block C',
        isDefault: false,
      },
      paymentMethod: 'cod',
      isPaid: true,
      status: 'delivered',
      timeline: [
        {
          status: 'pending',
          title: 'Order Placed',
          description: 'Order registered online.',
          timestamp: '2026-08-20T14:10:00Z',
          completed: true,
        },
        {
          status: 'confirmed',
          title: 'Order Confirmed',
          description: 'Payment and address verified.',
          timestamp: '2026-08-20T14:45:00Z',
          completed: true,
        },
        {
          status: 'processing',
          title: 'Packed & Dispatched',
          description: 'Ready for shipping.',
          timestamp: '2026-08-21T09:00:00Z',
          completed: true,
        },
        {
          status: 'shipped',
          title: 'Shipped via Courier',
          description: 'En route to Banani.',
          timestamp: '2026-08-21T13:20:00Z',
          completed: true,
        },
        {
          status: 'delivered',
          title: 'Delivered',
          description: 'Received by customer. Cash on delivery collected.',
          timestamp: '2026-08-22T16:00:00Z',
          completed: true,
        },
      ],
      createdAt: '2026-08-20T14:10:00Z',
    };

    this.orders = [sampleOrder1, sampleOrder2];
    this.persistOrders();
  }

  private async persistOrders() {
    try {
      await AsyncStorage.setItem(STORAGE_ORDERS_KEY, JSON.stringify(this.orders));
    } catch {
      // Ignored
    }
  }

  private generateTimeline(currentStatus: OrderStatus): OrderTimelineStep[] {
    const statuses: { status: OrderStatus; title: string; desc: string }[] = [
      { status: 'pending', title: 'Order Placed', desc: 'Order received and logged in system.' },
      { status: 'confirmed', title: 'Order Confirmed', desc: 'Fulfillment center confirmed stock availability.' },
      { status: 'processing', title: 'Packed at Hub', desc: 'Items checked, boxed with Gorur Ghash tags.' },
      { status: 'shipped', title: 'Shipped with Courier', desc: 'Package in transit with delivery partner.' },
      { status: 'delivered', title: 'Delivered', desc: 'Delivered to recipient address.' },
    ];

    const statusOrder: OrderStatus[] = ['pending', 'confirmed', 'processing', 'shipped', 'delivered'];
    const currentIdx = statusOrder.indexOf(currentStatus);

    return statuses.map((s, idx) => {
      const isDone = currentStatus === 'cancelled' ? idx === 0 : idx <= currentIdx;
      return {
        status: s.status,
        title: s.title,
        description: s.desc,
        timestamp: isDone ? new Date().toISOString() : 'Pending',
        completed: isDone,
      };
    });
  }

  async createOrder(payload: CreateOrderPayload): Promise<Order> {
    const coupon = payload.couponCode
      ? mockCoupons.find((c) => c.code.toLowerCase() === payload.couponCode?.toLowerCase()) || null
      : null;

    const { subtotal, discount, deliveryFee, total } = calculateOrderPricing(
      payload.items,
      coupon,
      payload.shippingAddress.district
    );

    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      orderNumber: `GG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: payload.userId || 'guest_user',
      items: payload.items,
      subtotal,
      discount,
      deliveryFee,
      total,
      shippingAddress: payload.shippingAddress,
      paymentMethod: payload.paymentMethod,
      isPaid: payload.paymentMethod !== 'cod',
      status: 'pending',
      timeline: this.generateTimeline('pending'),
      couponApplied: payload.couponCode,
      createdAt: new Date().toISOString(),
      notes: payload.notes,
    };

    this.orders.unshift(newOrder);
    await this.persistOrders();
    return this.delay(newOrder, 250);
  }

  async getOrders(userId?: string): Promise<Order[]> {
    if (!this.orders.length) {
      await this.seedInitialOrders();
    }
    // Return all orders or user's orders
    return this.delay([...this.orders]);
  }

  async getOrderById(id: string): Promise<Order | null> {
    if (!this.orders.length) {
      await this.seedInitialOrders();
    }
    const match = this.orders.find((o) => o.id === id || o.orderNumber === id) || null;
    return this.delay(match);
  }

  async updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order> {
    const idx = this.orders.findIndex((o) => o.id === orderId);
    if (idx === -1) throw new Error('Order not found');

    const updated: Order = {
      ...this.orders[idx],
      status,
      timeline: this.generateTimeline(status),
    };

    this.orders[idx] = updated;
    await this.persistOrders();
    return this.delay(updated, 150);
  }

  async cancelOrder(orderId: string, reason?: string): Promise<Order> {
    const idx = this.orders.findIndex((o) => o.id === orderId);
    if (idx === -1) throw new Error('Order not found');

    const updated: Order = {
      ...this.orders[idx],
      status: 'cancelled',
      notes: reason ? `Cancelled: ${reason}` : 'Cancelled by customer',
    };

    this.orders[idx] = updated;
    await this.persistOrders();
    return this.delay(updated, 150);
  }

  async getAllOrdersForAdmin(): Promise<Order[]> {
    if (!this.orders.length) {
      await this.seedInitialOrders();
    }
    return this.delay([...this.orders]);
  }
}
