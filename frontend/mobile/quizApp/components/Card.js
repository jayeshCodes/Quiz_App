import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;


const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Card</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'#700B97',
        width: windowWidth * 0.8,
        borderRadius: 5,
        overflow:'hidden',
        background:'transparent'
    },
    cardHeader:{
        height:30,
        alignItems: 'baseline',
        justifyContent:'flex-end'
    },
    headerText:{
        fontSize: 18,
        color:'#fff',
        fontWeight: 600,
        marginLeft: '1%',
    }
})