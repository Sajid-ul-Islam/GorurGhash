import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Platform, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import UpdatesHandler from '../src/components/UpdatesHandler';
import { AuthProvider } from '../src/context/AuthContext';
import { CartProvider } from '../src/context/CartContext';
import { WishlistProvider } from '../src/context/WishlistContext';
import { OrderProvider } from '../src/context/OrderContext';
import { Colors } from '../src/constants/theme';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync().catch(() => {});

// Ensure Android enables true edge-to-edge translucent status bar immediately on boot
if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <OrderProvider>
              <UpdatesHandler>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
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
