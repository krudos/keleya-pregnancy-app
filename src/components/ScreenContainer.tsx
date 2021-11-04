import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface ScreenContainerProps {
  source: ImageSourcePropType;
  imageBackgroundStyle?: ViewStyle;
  safeAreaViewStyle?: ViewStyle;
}
export const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  source,
  imageBackgroundStyle,
  safeAreaViewStyle,
}) => {
  return (
    <ImageBackground
      source={source ? source : require('../assets/first-intro-image.png')}
      style={[styles.background, imageBackgroundStyle]}>
      <SafeAreaView style={[styles.container, safeAreaViewStyle]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
