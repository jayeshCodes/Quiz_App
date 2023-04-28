import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Surface } from "@react-native-material/core";

function HomeScreen({ navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  return (
<View style={styles.container}>

<Stack.Screen
options={{ 
   headerShown: false,
}}
/>
<Image style={styles.image}  /> 
<StatusBar style="auto" />
<View style={styles.inputView}>
<TextInput
  style={styles.TextInput}
  placeholder="Email."
  placeholderTextColor="#003f5c"
  onChangeText={(email) => setEmail(email)}
/> 
</View> 
<View style={styles.inputView}>
<TextInput
  style={styles.TextInput}
  placeholder="Password."
  placeholderTextColor="#003f5c"
  secureTextEntry={true}
  onChangeText={(password) => setPassword(password)}
/> 
</View> 
<TouchableOpacity>
<Text style={styles.forgot_button}>Forgot Password?</Text> 
</TouchableOpacity> 
<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Details")} >
<Text style={styles.loginText}>LOGIN</Text> 
</TouchableOpacity> 
</View> 
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#000000",
alignItems: "center",
justifyContent: "center",
},
image: {
marginBottom: 40,
},
inputView: {
backgroundColor: "#a020f0",
borderRadius: 30,
width: "70%",
height: 45,
marginBottom: 20,
alignItems: "center",
},
TextInput: {
height: 50,
flex: 1,
padding: 10,
marginLeft: 20,
},
forgot_button: {
height: 30,
marginBottom: 30,
},
loginBtn: {
width: "80%",
borderRadius: 25,
height: 50,
alignItems: "center",
justifyContent: "center",
marginTop: 40,
backgroundColor: "#a020f0",
},
})


function DetailsScreen({ navigation}) {
    return (

        <View style={styles1.container}>
        <View style={styles1.header}></View>
        <Image
          style={styles1.avatar}
          source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' }}
        />
        <View style={styles1.body}>
          <View style={styles1.bodyContent}>
            <Text style={styles1.name}>John Doe</Text>
            <Text style={styles1.info}>Student</Text>
            <Text style={styles1.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
              omittam deseruisse consequuntur ius an,
            </Text>

            <Surface
                elevation={2}
                category="medium"
                style={{ width: 300, height: 70}}
                backgroundColor="#a020f0"
            >
            <Text>email id: xyz@abc.com</Text>
            </Surface>
            <Surface
                elevation={4}
                category="medium"
                style={{ width: 300, height: 70 }}
            >
                <Text>Phone no.: 69420</Text>
            </Surface>
            <Surface
                elevation={6}
                category="medium"
                style={{ width: 300, height: 70 }}
            >
            <Text>Student ID:42069</Text>
            </Surface>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("View Tests")} >
                <Text style={styles.loginText}>View Tests</Text> 
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    )
  }
  
  const styles1 = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        flex: 1,
        },
    header: {
      backgroundColor: '#a020f0',
      height: 200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: 'white',
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: 130,
    },
    name: {
      fontSize: 22,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    body: {
      marginTop: 40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding: 30,
    },
    name: {
      fontSize: 28,
      color: '#696969',
      fontWeight: '600',
    },
    info: {
      fontSize: 16,
      color: '#a020f0',
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      color: '#FFFFFF',
      marginTop: 10,
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: '#a020f0',
    },
  })

  function TestScreen({ navigation}) {
    return (

        <View style={styles1.container}>
        <View style={styles1.header}></View>
        <Image
          style={styles1.avatar}
          source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' }}
        />
        <View style={styles1.body}>
          <View style={styles1.bodyContent}>
            <Text style={styles1.name}>John Doe</Text>
            <Text style={styles1.info}>Student</Text>
            <Text style={styles1.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
              omittam deseruisse consequuntur ius an,
            </Text>
  
            <TouchableOpacity style={styles1.buttonContainer}>
              <Text>Test 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.buttonContainer}>
              <Text>test 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.buttonContainer}>
              <Text>Test 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true} options={{
        headerShown: false,
    }} >
      <Stack.Navigator>
        <Stack.Screen 
        options={{
            headerShown: false,
        }}
        name="Home" component={HomeScreen} />
        <Stack.Screen
        options={{
            headerShown: false,
        }}
        name="Details" component={DetailsScreen} />
                <Stack.Screen
        options={{
            headerShown: false,
        }}
        name="View Tests" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;