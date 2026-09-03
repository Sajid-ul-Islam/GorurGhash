import React, { useEffect, useState } from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, Image, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';

/**
 * UpdatesHandler checks for OTA updates on app launch.
 * It shows the official Gorur Ghash branded startup screen while checking/applying updates.
 * Wrap your app navigation with this component.
 */
const UpdatesHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          // Keep splash screen while downloading update
          await SplashScreen.preventAutoHideAsync();
          await Updates.fetchUpdateAsync();
          // Apply the update and reload the app
          await Updates.reloadAsync();
        }
      } catch (e) {
        console.log('OTA updates check status:', e);
      } finally {
        setIsChecking(false);
        // Ensure splash screen is hidden
        SplashScreen.hideAsync().catch(() => {});
      }
    };
    checkUpdates();
  }, []);

  if (isChecking) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FBDD01" />
        <View style={styles.content}>
          <Image
            source={require('../../assets/images/gorurghash-cow.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>GORUR GHASH</Text>
          <Text style={styles.subtitle}>গরুর ঘাস • DHAKA STREETWEAR</Text>
          
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#000000" />
            <Text style={styles.loaderText}>Loading freshest drops...</Text>
          </View>
        </View>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBDD01',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 2,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.7)',
    letterSpacing: 1,
    marginBottom: 32,
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loaderText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
  },
});

export default UpdatesHandler;

