import { View, Text, SafeAreaView, StyleSheet, Dimensions, StatusBar, Image } from 'react-native'
import React from 'react'
import QuizCard from '../components/quizCard';
import Startquiz from './startquiz';
import StartQuizScreen from './startquizscreen';

const windowHeight = Dimensions.get('window').height;

const Tests = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.content}>
                    <Text style={styles.headerText}>Quizes for Today!</Text>
                </View>
                <View style={styles.imageContainer}>

                </View>
            </View>
      <View style={styles.cardContainer}>
        <QuizCard title="Science Trivia" imageAddress={require('../assets/quiz.jpg')} navigation={navigation}
        />
        <QuizCard title="General Knowledge" imageAddress={require('../assets/general.png')} />
        <QuizCard title="Technology" imageAddress={require('../assets/tech.jpg')} />
      </View>
    </SafeAreaView>
  )
}

export default Tests

const styles = StyleSheet.create({
  mainContainer: {
      backgroundColor: '#000',
      height: windowHeight,
      marginTop: StatusBar.currentHeight
  },
  headerText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '900'
  },
  header: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    height: windowHeight * 0.15,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'white'    
},

content: {
    flex: 4,
    justifyContent: 'center',
    marginLeft:10
},
imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
cardContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3%',
      marginLeft:10,
      marginRight:10
  }
})