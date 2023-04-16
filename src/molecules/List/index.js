import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const List = ({label, item}) => {
  return (
    <View>
      <Text style={styles.userDetails}><Text style={styles.textBold}>{label}</Text>{item}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold'
  },
  userDetails: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
});

export default List
