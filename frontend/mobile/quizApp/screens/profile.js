import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from './login';

const windowHeight = Dimensions.get('window').height;


const Profile = () => {

  // const navigation = useNavigation();

  // const handleLogout = () => {
  //   // Perform logout logic here
  //   // For example, clear user session, reset state, etc.
    
  //   navigation.navigate('Login');
  // };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.pfp}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 100,
              width: 100,
              // borderRadius:'100%'
            }}
            source={require('../assets/profile.jpg')} />
        </View>
        <View style={styles.headerContent}>
          <Text style={{
            fontSize: 24,
            fontWeight: '900',
            marginLeft: 5,
            ...styles.text
          }}>Jayesh Gajbhar</Text>
          <Text style={{
            fontSize: 18,
            fontWeight: '500',
            marginLeft: 5,
            ...styles.text
          }}>Student</Text>

        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={{ marginTop: 10 }}>

          <TouchableOpacity style={styles.optionButton}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../assets/progress-report.png')} style={{
            width:25,
            height:25,
            marginRight:'20%'}} />
            </View>
            <Text style={styles.option}>Progress Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../assets/badge.png')} style={{
            width:25,
            height:25,
            marginRight:'20%',
            }} />
            </View>
            <Text style={styles.option}>Achievements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../assets/pencil.png')} style={{
            width:25,
            height:25,
            marginRight:'20%',
            color:'#fff'}} />
            </View>
            <Text style={styles.option}>Edit Profile</Text>
          </TouchableOpacity>


        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} 
        // onPress={handleLogout}
        >
          <Text style={
            styles.text
          }
          >Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

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
    marginLeft: 10,
    marginRight: 10,
    height: windowHeight * 0.2,
    display: 'flex',
    flexDirection: 'row'
  },
  pfp: {
    flex: 1,
    // backgroundColor:'#ff1',
    justifyContent: 'center',
    alignItems: 'center'

  },
  headerContent: {
    // backgroundColor: 'blue',
    flex: 2,
    justifyContent: 'center',
  },
  contentContainer: {
    height: windowHeight * 0.4,
    // backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10,
  },
  footer: {
    height: windowHeight * 0.15,
    // backgroundColor: 'blue',
    marginLeft: 10,
    marginRight: 10,
    justifyContent:'center'
  },
  text: {
    color: '#fff'
  },
  option: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    flex: 5,
  },
  optionButton: {
    backgroundColor: '#3E065F',
    padding: 25,
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    backgroundColor: '#700B97',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    
  },

})

export default Profile