import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image } from "react-native";

import Home from "../screens/home";
import Tests from "../screens/tests";
import Profile from "../screens/profile";
import Startquiz from "../screens/startquiz";
import StartQuizScreen from "../screens/startquizscreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,

                tabBarStyle:[

                    {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#3E065F',
                        borderRadius: 10,
                        height: 90,
                        overflow: 'hidden',
                        background: 'transparent',
                        shadowColor: '#000',
                        ...styles.shadow
                    }, null
                ] ,
                headerShown: false
            }}


        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#fff' : '#700B97'
                            }}
                        />
                        {/* <Text style={{color: focused ? '#fff' : '#000'}}>Home</Text>  */}
                    </View>
                ),
            }} />
            <Tab.Screen name="Tests"  options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/test.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fff' : '#700B97'
                            }}
                        />
                        {/* <Text>Tests</Text>  */}
                    </View>
                ),
            }} >
                {(props) => (
                    <Tests
                        {...props}
                        navigation={props.navigation}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="StartQuiz" component={StartQuizScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/quiz.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fff' : '#700B97'
                            }}
                        />
                        {/* <Text style={{color: focused ? '#fff' : '#000'}}>Home</Text>  */}
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/profile.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#fff' : '#700B97'
                            }}
                        />
                        {/* <Text>Profile</Text>   */}
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
    }
})