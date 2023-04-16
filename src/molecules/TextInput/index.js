import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

const CustomTextInput = ({label, placeholder, secure, value, onChangeText}) => {
  return (
    <View>
      <Text style={styles.textInput}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}

        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
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
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    
  });
  
export default CustomTextInput
