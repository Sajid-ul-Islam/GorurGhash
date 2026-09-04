import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';

export interface FullScreenContainerProps {
  style?: any;
  children: React.ReactNode;
  useTopInset?: boolean;
  useBottomInset?: boolean;
}

/**
 * FullScreenContainer occupies the entire device viewport in edge-to-edge mode.
 * Headers handle their own top safe area padding so their background seamlessly
 * extends to the physical top edge of the device without a blank gap.
 */
const FullScreenContainer: React.FC<FullScreenContainerProps> = ({
  style,
  children,
  useTopInset = false,
  useBottomInset = false,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        useTopInset && { paddingTop: insets.top },
        useBottomInset && { paddingBottom: insets.bottom },
        style,
      ]}
    >
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
