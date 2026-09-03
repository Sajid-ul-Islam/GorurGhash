import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';

/**
 * FullScreenContainer occupies the entire device viewport while respecting safe area insets.
 * Use this component instead of SafeAreaView for full‑screen layouts.
 */
const FullScreenContainer: React.FC<{ style?: any; children: React.ReactNode }> = ({ style, children }) => {
  const insets = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default FullScreenContainer;
