import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import FeatureJob from './FeatureJob';

const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', Image:require('../assets/software.jpg') },
    { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Mountain View, US', Image:require('../assets/productmanager.png') },
    { id: '3', title: 'Systems Administrator', company: 'Arise', salary: '$130,000', location: 'Kumasi, Ghana', Image:require('../assets/sys-admin.jpg') },
    { id: '4', title: 'Data Analyst', company: 'OpenAI', salary: '$200,000', location: 'East London, Uk', Image:require('../assets/data-analyst.jpg') },
    { id: '5', title: 'QA Tester', company: 'Cod Games', salary: '$230,000', location: 'New York, US', Image:require('../assets/QA.jpg') },
    { id: '6', title: 'Product Manager', company: 'J.E Farms', salary: '$160,000', location: 'Osu, Ghana', Image:require('../assets/productmanager.png') },
    { id: '7', title: 'Front-end Dev', company: 'Twitter', salary: '$110,000', location: 'Seattle, US', Image:require('../assets/Front-end.jpg') },
    { id: '8', title: 'Database Manager', company: 'Cocoboard', salary: '$80,000', location: 'Kingsway, Ghana', Image:require('../assets/db.jpg') },
  ];

const HomeScreen = ({route}) => {
    const { name, email } = route.params;

    return (

    <ScrollView contentContainerStyle={styles.container}>
       <Header name={name} email={email} /> 
       <SearchBar/>
       <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.FeatureJob}>
      {featuredJobs.map(job => (
        <FeatureJob
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          location={job.location}
          image={job.Image}
        />
      ))}
      </View>
      </ScrollView>
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
    horizontalScroll: {
        marginVertical: 20,
    },
    FeatureJob: {
      flexDirection: 'row',
      justifyContent: 'flex-start',  
    },
  
  });
  
  export default HomeScreen;
  