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
import {resetAndNavigate} from '@utils/NavigationUtils';
import SocialLogin from '@components/ui/SocialLogin';

const LoginScreen = () => {
  const {styles} = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTab');
    }, 2000);
  };

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
          onPress={handleLogin}
          activeOpacity={0.8}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText variant="h5" fontFamily="Okra-Medium" color="#fff">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>

        <BreakerText text={'or'} />
        <SocialLogin />
      </Animated.ScrollView>
      \
      <View style={styles.footer}>
        <CustomText fontSize={12}>By continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
