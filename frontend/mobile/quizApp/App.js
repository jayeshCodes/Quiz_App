import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'
import StartQuizScreen from './screens/startquizscreen';

import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {


  return (

      <NavigationContainer>
        <Tabs />
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
