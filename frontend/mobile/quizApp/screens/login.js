import { View, Text, SafeAreaView, StyleSheet, Dimensions, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;


const Login = ({navigation, route}) => {

    const { handleLogin } = route.params;

    const handleLoginPress = () => {
        // Perform login logic and check if login is successful
        const loginSuccessful = true; // Replace with your login logic

        handleLogin(loginSuccessful); // Pass the login status to the callback function in App.js
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                {/* <Text style={styles.text}>Welcome!</Text> */}
            </View>
            <View style={styles.imageContainer}>
                <ImageBackground resizeMode='contain' source={require('../assets/logo/logo-no-background.png')} style={styles.image} />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput color="#fff" placeholderTextColor="#fff" placeholder="Username" style={styles.textInput} />
                <TextInput secureTextEntry={true} color="#fff" placeholderTextColor="#fff" placeholder="Password" style={styles.textInput} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                    <Text style={
                        styles.buttonText
                    }
                    >Login</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: windowHeight,
        marginTop: StatusBar.currentHeight,
        alignItems: 'center'
    },
    header: {
        marginTop: 10
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '900',
    },
    textInputContainer: {
        width: '80%',
        marginTop: '10%'
    },
    textInput: {
        backgroundColor: '#3E065F', width: '100%', borderRadius: 10, padding: 10,
        marginBottom: 20,
        height: '20%'
    },
    button: {
        width: '30%',
        backgroundColor: '#700B97',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 16,
        marginLeft: '60%'

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    buttonContainer: {
        marginTop: '-20%'
    },
    image: {
        height:180,
    },
    imageContainer:{
        marginTop:'10%',
        height:200,
        width:'80%',
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'center',
        // backgroundColor:'#3E065F'
    }

})