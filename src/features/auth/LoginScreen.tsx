import {View, Text, Platform, StatusBar, Image} from 'react-native';
import React, {use} from 'react';
import {loginStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';

const LoginScreen = () => {
  const {styles} = useStyles(loginStyles);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
    </View>
  );
};

export default LoginScreen;
