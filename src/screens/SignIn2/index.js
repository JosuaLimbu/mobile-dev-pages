import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from '../../atoms/Button';
import CustomTextInput from '../../molecules/TextInput';

const SignIn2 = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const data = {
      userName: email,
      password: password,
    };

    console.log(data);
  };


  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>Welcome</Text>
      <CustomTextInput 
        label="Username" 
        placeholder="Masukkan username anda" 
        secureTextEntry={false}
        value={email} 
        onChangeText={e => {setUsername(e)}}/>
      <CustomTextInput 
        label="Password" 
        placeholder="Masukkan password anda" 
        secureTextEntry={true}
        value={password} 
        onChangeText={e => {setPassword(e)}}/>
      <Button label="Sign In" onPress={handleSignIn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  
});

export default SignIn2;
