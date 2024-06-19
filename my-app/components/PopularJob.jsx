import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

const PopularJob = ({ image, title, company, location }) => {
  return (
    <TouchableOpacity style={styles.jobCard}>
      <Image source={image} style={styles.jobImage} />
      <View style={styles.textContainer}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.jobCompany}>{company}</Text>
        <Text style={styles.jobLocation}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jobCard: {
    width: '100%',  
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  jobImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 16,
    color: '#555',
  },
  jobLocation: {
    fontSize: 14,
    color: '#888',
  },
});

export default PopularJob;
