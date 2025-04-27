import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {homeStyles} from '@unistyles/homeStyles';
import {useStyles} from 'react-native-unistyles';
import {useSharedState} from '@features/tabs/SharedContext';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DeliveryScreen: FC = () => {
  const insets = useSafeAreaInsets();
  const {styles} = useStyles(homeStyles);
  const {scrollYGlobal} = useSharedState();

  const backgroundColorChange = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);
    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY: translateY}],
    };
  });

  const moveUpStyleNotExtrapolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);
    return {
      transform: [{translateY: translateY}],
    };
  });

  return (
    <View style={[backgroundColorChange, {paddingTop: insets.top}]}>
      <Text>DeliveryScreen</Text>
    </View>
  );
};

export default DeliveryScreen;
