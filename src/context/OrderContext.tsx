import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Order, OrderStatus } from '../types';
import { orderService } from '../services';
import { CreateOrderPayload } from '../services/orders/IOrderService';

interface OrderContextType {
  orders: Order[];
  isLoading: boolean;
  createOrder: (payload: CreateOrderPayload) => Promise<Order>;
  getOrderById: (orderId: string) => Promise<Order | null>;
  updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<Order>;
  cancelOrder: (orderId: string, reason?: string) => Promise<Order>;
  refreshOrders: () => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshOrders = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetched = await orderService.getOrders();
      setOrders(fetched);
    } catch {
      // Handled
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshOrders();
  }, [refreshOrders]);

  const createOrder = async (payload: CreateOrderPayload): Promise<Order> => {
    setIsLoading(true);
    try {
      const newOrder = await orderService.createOrder(payload);
      setOrders((prev) => [newOrder, ...prev]);
      return newOrder;
    } finally {
      setIsLoading(false);
    }
  };

  const getOrderById = async (orderId: string): Promise<Order | null> => {
    const existing = orders.find((o) => o.id === orderId || o.orderNumber === orderId);
    if (existing) return existing;
    return orderService.getOrderById(orderId);
  };

  const updateOrderStatus = async (orderId: string, status: OrderStatus): Promise<Order> => {
    const updated = await orderService.updateOrderStatus(orderId, status);
    setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
    return updated;
  };

  const cancelOrder = async (orderId: string, reason?: string): Promise<Order> => {
    const updated = await orderService.cancelOrder(orderId, reason);
    setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
    return updated;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        isLoading,
        createOrder,
        getOrderById,
        updateOrderStatus,
        cancelOrder,
        refreshOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders must be used within an OrderProvider');
  return context;
};
