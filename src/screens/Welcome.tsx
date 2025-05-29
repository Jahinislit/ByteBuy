import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView ,Image} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreensParamsList } from '@app/types';


type Props = NativeStackScreenProps<AppScreensParamsList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Image source = {require('../../assets/images/icon.png')} style={{ width: 200, height: 200 }}/>
        <Text style={styles.title}>ByteBuy</Text>
        <Text style={styles.subtitle}>Welcome Back</Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>

        <Text style={styles.socialText}>Login with Social Media</Text>
        <View style={styles.socialIcons}>
          <Ionicons name="logo-instagram" size={24} color="white" />
          <FontAwesome name="twitter" size={24} color="white" style={styles.iconSpacing} />
          <FontAwesome name="facebook" size={24} color="white" style={styles.iconSpacing} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 40,
  },
  signInButton: {
    borderColor: '#e65c00',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginBottom: 40,
  },
  signInText: {
    color: '#e65c00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 12,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 20,
  },
});

export default WelcomeScreen;
