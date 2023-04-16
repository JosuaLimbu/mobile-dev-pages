import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userDetails}><Text style={styles.textBold}>Name: </Text>{item.name}</Text>
      <Text style={styles.userDetails}><Text style={styles.textBold}>Username: </Text>{`@${item.username}`}</Text>
      <Text style={styles.userDetails}><Text style={styles.textBold}>Email: </Text>{item.email}</Text>
      <Text style={styles.userDetails}><Text style={styles.textBold}>Address: </Text>{`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}</Text>
      <Text style={styles.userDetails}><Text style={styles.textBold}>Phone: </Text>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Users List</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 30,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  userItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBold: {
    fontWeight: 'bold'
  },
  userDetails: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
});

export default UserList;
