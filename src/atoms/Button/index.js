import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 50,
      backgroundColor: 'purple',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
export default Button