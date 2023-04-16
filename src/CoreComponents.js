import React from "react";
import {Image, ScrollView, Text, TextInput, View, StyleSheet} from "react-native";
import PUAN from '../img/PUAN.png'
const CoreComponents = props => {
   const hello = 'hello gaes';
    return (
      
      <ScrollView>
        <Text>{hello}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
        <Text>Hello Josua, Hello World</Text>
        <View style={styles.yellowBox}/>
        <Image
          source={require('../img/PUAN.png')}
          style={styles.image}
        />
        <Image
          source={PUAN}
          style={styles.image}
        />
        <Image 
        source={{
          uri: 'https://yt3.googleusercontent.com/gpE1l-c6bD_RCA7Yma5FZfl2r8nlYq8-TYy6QeNAL6PVpSlzGm_W16CQg0QnEdf1wj2480TdFg=s900-c-k-c0x00ffffff-no-rj'}}
          style={styles.image}
        />
        <Image 
        source={{
          uri: 'https://scontent.fcgk22-1.fna.fbcdn.net/v/t39.30808-6/320254940_681373090149381_5633546675405614254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHeZ0RFv6rulZLjvk7wptwFJtPzo5yIzmwm0_OjnIjObKiRaeNQJQi3bJSU6Eyo6BbnJHmmRUoMGuW3XQChHq2H&_nc_ohc=50eeihIyz28AX9dRuvj&_nc_ht=scontent.fcgk22-1.fna&oh=00_AfDl7JMDpHz-fzbt7-MfGJxZWmQp57MjTIctq0-wzrbPUA&oe=641D08BE'}}
          style={styles.image}
        />
        <Image 
        source={{
          uri: 'https://1.bp.blogspot.com/-tqNtRLLT2CM/YLWmgbg_G_I/AAAAAAAAIg8/2TKDFLfxYFsiitpGYoyFOlpQuWl686ONwCLcBGAsYHQ/s1080/logo-pdp.png'}}
          style={styles.image}
        />
        <TextInput
          placeholder="Masukkan nama anda"
          style={styles.textInput}
        />
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 20
    },
    subTitle:{
      fontSize: 18,
      fontWeight: 'semibold',
      color: 'black',
      textAlign: 'center',
      marginTop: 0
    },
    yellowBox: {
      width:100, 
      height:100, 
      backgroundColor: 'yellow'
    },
    image:{
      width: 200, 
      height: 200, 
      marginVertical: 10
    },
    textInput:{
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 10,
      margin: 10,
      padding: 10,
    }
  });
  export default CoreComponents