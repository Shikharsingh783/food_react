import {FC} from 'react';
import {Animated, TouchableOpacity, ViewStyle} from 'react-native';
import {View} from 'react-native-reanimated/lib/typescript/Animated';
import {AnimatedView} from 'react-native-reanimated/lib/typescript/component/View';

interface ScalePressProps {
  onPress: () => void;
  onLongPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const ScalePress: FC<ScalePressProps> = ({
  onPress,
  onLongPress,
  children,
  style,
}) => {
  const scaleValue = new Animated.Value(1);

  const onPressin = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1}
      onPressIn={onPressin}
      onPressOut={onPressOut}
      style={{...style}}>
      <Animated.View style={{transform: [{scale: scaleValue}], width: '100%'}}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
