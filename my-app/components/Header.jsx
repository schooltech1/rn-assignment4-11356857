import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ name, email }) => {
    
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Welcome, {name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/Ellipse 1.png')} style={styles.backgroundImage} />
        <Image source={require('../assets/person.png')} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    //textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    //textAlign: 'center',
  },
  profileContainer: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  backgroundImage: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    top: 5,
    left: 5,
  },
});

export default Header;
