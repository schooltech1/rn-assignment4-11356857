import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search for a job or position" style={styles.searchInput} />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  filterButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
  },
});

export default SearchBar;
