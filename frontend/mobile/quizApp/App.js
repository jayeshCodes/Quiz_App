import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'
import StartQuizScreen from './screens/startquizscreen';
import { createStackNavigator } from '@react-navigation/stack';

import Quiz from './screens/quiz';
import Result from './screens/result';
import Login from './screens/login';

const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    // <Login />

    <NavigationContainer>
      <StatusBar
      backgroundColor='#3E065F'
      style="auto" />
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            initialParams={{ handleLogin }}
          />
        )}
          </Stack.Navigator>

    </NavigationContainer>
    // <Quiz />
    // <Result />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
