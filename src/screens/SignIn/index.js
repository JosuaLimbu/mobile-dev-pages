import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

const SignIn = () => {
  useEffect(() => {
    console.log('Component did mount');
  }, []);

  const [welcome, setWelcome] = useState('Welcome!!!');

  const handleSubmit = () => {
    setWelcome('Selamat Datang');
    console.log(welcome);
  };

  console.log('component rendered');
  return (
    <View>
      <Text style={styles.welcome}>{welcome}</Text>
    
      <Button title="Sign In" color="#841584" onPress={handleSubmit} />
      
    </View>

  );
};

export default SignIn;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },

});