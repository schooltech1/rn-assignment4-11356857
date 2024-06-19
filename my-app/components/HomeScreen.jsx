import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import FeatureJob from './FeatureJob';
import PopularJob from './PopularJob';

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
  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000', location: 'Los Angeles, US', Image: require('../assets/burgerking.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US', Image: require('../assets/beats.png') },
    { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000', location: 'Florida, US' , Image :require('../assets/facebook.png')},
    { id: '4', title: 'Data Scientist', company: 'Amazon', salary: '$110,000', location: 'Seattle, WA, US', Image: require('../assets/amazon.jpg') },
    { id: '5', title: 'UX Designer', company: 'Apple', salary: '$100,000', location: 'Cupertino, CA, US', Image: require('../assets/apple.png') },
    { id: '6', title: 'Backend Developer', company: 'Microsoft', salary: '$95,000', location: 'Redmond, WA, US', Image: require('../assets/microsoft.jpg') },
    { id: '7', title: 'Frontend Developer', company: 'Netflix', salary: '$105,000', location: 'Los Gatos, CA, US', Image: require('../assets/netflix.jpg') },
    { id: '8', title: 'Product Manager', company: 'Facebook', salary: '$86,000', location: 'Florida, US', Image: require('../assets/facebook.png') },
      
      
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

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map(job => (
        <PopularJob
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          location={job.location}
          image={job.Image}
        />
      ))}
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
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
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
  