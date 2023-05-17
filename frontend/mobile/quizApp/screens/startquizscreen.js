import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Button, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from './quiz';
import Startquiz from './startquiz';
import Result from './result';
import { useIsFocused } from '@react-navigation/native';


const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const StartQuizScreen = ({navigation}) => {

    const isFocused = useIsFocused();

    const handleStartQuiz = () =>{
        navigation.navigate('Quiz');
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Startquiz'
            component={Startquiz}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name='Quiz'
            component={Quiz}
            options={{headerShown: false, tabBarStyle: { display: isFocused ? 'none' : 'flex' }}}
            />
            <Stack.Screen
            name='Result'
            component={Result}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default StartQuizScreen

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
        marginTop: 10,
        marginLeft: 10
    }, 
    cardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },
    text:{
        color: '#fff',
        fontSize:18
    }
})