import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import Startquiz from '../screens/startquiz'

const QuizCard = ({title, imageAddress, navigation}) => {

    const handleTakeQuiz= () =>{
        navigation.navigate('Startquiz')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <ImageBackground 
                resizeMode='cover'
                source={imageAddress}
                style={styles.image} >

                <Text style={{...styles.titleText, color:'black'}}>{title}</Text>
                </ImageBackground>
            </View>
                <View style={styles.verticleLine}></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touch} onPress={handleTakeQuiz}>
                    <Text style={{...styles.titleText}}>Take Quiz</Text>
                    <Image resizeMode='contain' source={require('../assets/right-arrow.png')} 
                    style={{height:20, width:20}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuizCard

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#3E065F',
        height: 100,
        width: "95%",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:10
    },
    contentContainer: {
        flex: 2,
        justifyContent: 'center',
        // borderTopLeftRadius:'10%',
        // borderBottomLeftRadius:'10%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        overflow:'hidden'
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: '5%',
    },
    buttonContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        // borderTopLeftRadius:'10%',
        // borderBottomLeftRadius:'10%',
        opacity:0.9,
        borderRadius:10
      },
      touch:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
      }
})