import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;

const Result = ({navigation, route}) => {
    const {score} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.top}>
            <Text style={{
                marginTop:10,
                fontSize:24,
                fontWeight:'900',
                color:'#fff'
                }}>Result</Text>
        </View>
        <View style={styles.mid}>
                <Text
                style={{
                    fontSize:40,
                    fontWeight:'900',
                    color:'#fff'
                    }}>Score: {score}</Text>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Result

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: windowHeight,
        marginTop: StatusBar.currentHeight
    },
    banner:{
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    top:{
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    mid:{
        marginLeft:40,
        marginRight:10,
        height:300,
        width:300,
        alignItems:'center',
        justifyContent:'center'

    },
    bottom:{
        marginLeft:10,
        marginRight:10
    }


})