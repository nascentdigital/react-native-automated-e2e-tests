import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LoginSelector } from './e2e/components/selectors';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('')

  const handleLogin = () => {
    setError(false)

    if (!email) {
      setError(true)
      setStatus('Please enter an email')
      return
    }

    if (!password) {
      setError(true)
      setStatus('Please enter a password')
      return
    }

    setStatus('Successful login!')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading} testID={LoginSelector.heading}>Welcome to our app!</Text>
      <View style={styles.inputView}>
        <TextInput
          testID={LoginSelector.emailInput}
          style={styles.textInput}
          placeholder="Enter email"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          testID={LoginSelector.passwordInput}
          style={styles.textInput}
          placeholder="Enter password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()} testID={LoginSelector.loginButton}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <Text style={{...styles.status, color: error ? 'red' : 'green'}} testID={LoginSelector.statusText}>{status}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#e0e4e0",
    borderRadius: 15,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    width: '100%',
    height: 50,
    flex: 1,
    padding: 5,
    marginLeft: 20,
  },
  heading: {
    fontSize: 40,
    marginBottom: 48
  },
  status: {
    marginTop: 24
  },
  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#18ccbe",
  }
});
