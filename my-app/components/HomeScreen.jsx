import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const HomeScreen = ({route}) => {
    const { name, email } = route.params;

    return (

    <ScrollView contentContainerStyle={styles.container}>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5F5F5',
      padding: 20,
    },
  
  
  });
  
  export default HomeScreen;
  