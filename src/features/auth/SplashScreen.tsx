import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {splashStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';

const SplashScreen: FC = () => {
  const {styles} = useStyles(splashStyles);
  return <View style={styles.container}></View>;
};

export default SplashScreen;
