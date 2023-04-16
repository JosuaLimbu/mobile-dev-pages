import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from '../../atoms/Button';
import CustomTextInput from '../../molecules/TextInput';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onName = text => {
    setName(text);
  };
  const onUsername = text => {
    setUsername(text);
  };
  const onEmail = text => {
    setEmail(text);
  };
  const onAddress = text => {
    setAddress(text);
  };
  const onPhoneNumber = text => {
    setPhoneNumber(text.replace(/[^0-9]/g, '')); 
  };

  const handleRegister = () => {
    console.log(
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}`,
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Register</Text>
      <CustomTextInput
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        value={name}
        onChangeText={onName}
      />
      <CustomTextInput
        label="Username"
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={onUsername}
      />
      <CustomTextInput
        label="Email"
        placeholder="Masukkan email anda"
        value={email}
        onChangeText={onEmail}
      />
      <CustomTextInput
        label="Address"
        placeholder="Masukkan alamat anda"
        value={address}
        onChangeText={onAddress}
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="Masukkan nomor telepon anda"
        value={phoneNumber}
        keyboardType="numeric"
        onChangeText={onPhoneNumber}
      />
      <Button label="Register" onPress={handleRegister} />
    </ScrollView>
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
});

export default Register;
