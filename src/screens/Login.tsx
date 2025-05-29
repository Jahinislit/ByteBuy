import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreensParamsList } from '@app/types';


type Props = NativeStackScreenProps<AppScreensParamsList, 'Login'>;


const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [firstname, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = () => {
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomNavBar' }],
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inner}>
        <Text style={styles.headerText}>Hello!</Text>
        <Text style={styles.subHeaderText}>Sign in</Text>

        <View style={styles.formContainer}>
          
          <Text style={styles.label}>E-Mail</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="example@gg.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {email !== '' && (
              <Ionicons name="checkmark-circle" size={20} color="#888" />
            )}
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPass}
              style={styles.input}
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Ionicons
                name={showPass ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <View style={styles.solidButton}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <Text style={styles.linkText}> Sign up</Text>
            </TouchableOpacity>
          </View>
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
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600',
  },
  subHeaderText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    padding: 28,
  },
  label: {
    color: '#e65c00',
    fontWeight: '600',
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    color: '#000',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#4a0c8a',
    marginBottom: 20,
  },
  signInButton: {
    marginBottom: 20,
  },
  solidButton: {
    backgroundColor: '#e65c00',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#888',
  },
  linkText: {
    color: '#4a0c8a',
    fontWeight: '600',
  },
});

export default LoginScreen;
