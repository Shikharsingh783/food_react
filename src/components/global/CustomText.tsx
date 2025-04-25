import {View, Text, TextStyle, Platform, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@unistyles/Constants';

type Varient = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'ios' | 'android';

interface CustomTextProps {
  variant: Varient;
  fontFamily?:
    | 'Okra-Bold'
    | 'Okra-Light'
    | 'Okra-Medium'
    | 'Okra-Black'
    | 'Okra-Regular';
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const fontSizeMap: Record<Varient, Record<PlatformType, number>> = {
  h1: {ios: 22, android: 24},
  h2: {ios: 20, android: 22},
  h3: {ios: 18, android: 20},
  h4: {ios: 16, android: 18},
  h5: {ios: 14, android: 16},
  h6: {ios: 10, android: 12},
  h7: {ios: 9, android: 10},
};

const CustomText: FC<CustomTextProps> = ({
  variant,
  fontFamily = 'Okra-Regular',
  fontSize,
  color,
  style,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  let computedFontSize: number =
    Platform.OS === 'android'
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 14);

  if (variant && fontSizeMap[variant]) {
    const defaultFontSize = fontSizeMap[variant][Platform.OS as PlatformType];
    computedFontSize = RFValue(fontSize || defaultFontSize);
  }

  const fontFamilyStyle = {
    fontFamily,
  };
  return (
    <Text
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      {...props}
      onLayout={onLayout}
      style={[
        styles.text,
        {color: color || Colors.text, fontSize: computedFontSize},
        fontFamilyStyle,
        style,
      ]}>
      {' '}
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
