import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Button, Text, TouchableOpacity, TouchableNativeFeedback, ImageBackground } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from './quiz';

const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Startquiz = ({navigation}) => {

    const handleStartQuiz = () =>{
        navigation.navigate('Quiz');
    }

    return (

        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground resizeMode='cover' style={styles.image} source={require('../assets/quiz.jpg')}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ready?</Text>
            </View>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.button} onPress={handleStartQuiz}>
                    <Text style={{
                        fontWeight:'600',
                        ...styles.text}}
                    >Start Quiz</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Startquiz

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: windowHeight,
        marginTop: StatusBar.currentHeight
    },
    headerText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '900'
    },
    header: {
        marginTop: 100,
        marginLeft: 0,
        justifyContent:'center',
        alignItems:'center'
    }, 
    cardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80%'
    },
    text:{
        color: '#fff',
        fontSize:18
    },
    button:{
        width:'50%',
        backgroundColor:'#700B97',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:16,
        marginLeft:5
    },
    image:{
        height:'100%'
    }
})