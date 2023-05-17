import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Button, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card';

const windowHeight = Dimensions.get('window').height;

const Home = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome</Text>
            </View>
            <View style={styles.cardContainer}>
                <Card />
            </View>
        </SafeAreaView>
    )
}

export default Home

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
        marginTop: '3%'
    }
})