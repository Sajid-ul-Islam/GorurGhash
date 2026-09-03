import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UpdatesHandler from '../src/components/UpdatesHandler';
import { AuthProvider } from '../src/context/AuthContext';
import { CartProvider } from '../src/context/CartContext';
import { WishlistProvider } from '../src/context/WishlistContext';
import { OrderProvider } from '../src/context/OrderContext';
import { Colors } from '../src/constants/theme';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <OrderProvider>
              <UpdatesHandler>
                <StatusBar style="dark" />
                <Stack
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.background },
                    animation: 'slide_from_right',
                  }}
                >
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
                  <Stack.Screen name="checkout/index" options={{ headerShown: false }} />
                  <Stack.Screen name="checkout/success" options={{ headerShown: false }} />
                  <Stack.Screen name="order/[id]" options={{ headerShown: false }} />
                  <Stack.Screen name="auth/login" options={{ headerShown: false }} />
                  <Stack.Screen name="auth/verify-otp" options={{ headerShown: false }} />
                  <Stack.Screen name="admin/index" options={{ headerShown: false }} />
                  <Stack.Screen name="admin/products" options={{ headerShown: false }} />
                  <Stack.Screen name="admin/orders" options={{ headerShown: false }} />
                  <Stack.Screen name="support/faq" options={{ headerShown: false }} />
                  <Stack.Screen name="support/assistant" options={{ headerShown: false }} />
                  <Stack.Screen name="notifications/index" options={{ headerShown: false }} />
                  <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                </Stack>
              </UpdatesHandler>
            </OrderProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
