import React, {FC, use, useEffect} from 'react';
import {View, Text, StatusBar, Platform, Image} from 'react-native';
import {splashStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';
import Animated, {FadeInDown} from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import {resetAndNavigate} from '@utils/NavigationUtils';

const SplashScreen: FC = () => {
  const {styles} = useStyles(splashStyles);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android'} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(1000).duration(500)} // Using entering correctly
      >
        <Image
          style={styles.treeImage}
          source={require('@assets/images/tree.png')}
        />
        <CustomText
          variant="h5"
          style={styles.msgText}
          fontFamily="Okra-Medium"
          color="#fff">
          From Kitchen to doorstep, Your cravings delivered!
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
