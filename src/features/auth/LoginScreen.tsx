import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {use, useState} from 'react';
import {loginStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';

const LoginScreen = () => {
  const {styles} = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={'on-drag'}
        contentContainerStyle={styles.bottomContainer}>
        <CustomText
          variant="h2"
          style={styles.title}
          fontFamily="Okra-Bold"
          color="black">
          India's #1 Food Delivery & Dining App
        </CustomText>
        <BreakerText text={'Log in or sign up'} />

        <PhoneInput
          onBlur={() => {}}
          onFocus={() => {}}
          onChangeText={setPhone}
          value={phone}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          // onPress= {}
          activeOpacity={0.8}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText variant="h5" fontFamily="Okra-Medium" color="#fff">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
      </Animated.ScrollView>
    </View>
  );
};

export default LoginScreen;
