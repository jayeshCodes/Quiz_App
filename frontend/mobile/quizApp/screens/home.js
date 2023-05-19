import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Button, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const windowHeight = Dimensions.get('window').height;

const Home = () => {
    const [lineData1, setLineData1] = useState([
        { x: 0, y: -1.4 },
        { x: 1, y: -2.1 },
        { x: 2, y: -2.4 },
        { x: 3, y: -4 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
    ]);

    const [loading, setLoading] = useState(true);
    // const [lineData1, setLineData1] = useState([]);
    const [lineData2, setLineData2] = useState([]);

    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://192.168.1.6:5000/theta');
            const data = await res.json();

            if (Array.isArray(data)) {
                setLineData1(data);
                console.log('linedata1: ',lineData1);
            } else {
                console.error('Invalid data format for lineData');
            }
        } catch (error) {
            console.error('Error fetching theta:', error);
        }

        const res2 = await fetch('http://192.168.1.6:5000/diff')
        const data2 = await res2.json();
        const formattedData = data2.data.map(({ x, y }) => ({ x, y }));
        setLineData2(formattedData);
        console.log(lineData2);
    }

    const lineData = [
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
    ]

    const [currentDate, setCurrentDate] = useState('');
    const [greet, setGreet] = useState('');


    useEffect(() => {
        var hours = new Date().getHours(); //Current Hours
        var minutes = new Date().getMinutes();

        let greet = 'Greetings of the day!'

        if (hours > 16) {
            setGreet('Good Evening!')
        } else if (hours > 12) {
            setGreet('Good Afternoon!')
        } else if (hours > 0 && minutes > 1) {
            setGreet('Good Morning!')
        }

    }, []);


    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.content}>
                    <Text style={styles.headerText}>{greet}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 80,
                            width: 80,
                            // borderRadius:'100%'
                        }}
                        source={require('../assets/logo/logo-white.png')} />

                </View>
            </View>
            {/* <View style={styles.graphContainer}>
                <View style={styles.graph}>
                    <Image resizeMode="contain" style={styles.image} source={require('../assets/temp.png')} />
                </View>
            </View> */}
            <View style={styles.graphContainer}>
                <View style={styles.graph}>
                    <Text style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: 18,
                        fontWeight: '600'
                    }}>Question Difficulty:</Text>
                    {lineData &&

                        <Chart
                            style={{ height: 200, width: 350 }}
                            data={lineData1}
                            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                            xDomain={{ min: 0, max: 14 }}
                            yDomain={{ min: -4, max: 4 }}
                        >
                            <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                            <HorizontalAxis tickCount={5} />
                            <Area theme={{ gradient: { from: { color: '#700B97' }, to: { color: '#000', opacity: 0.4 } } }} />
                            <Line theme={{ stroke: { color: '#700B97', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
                        </Chart>
                    }

                </View>
                <View style={styles.graph}>
                    <Text style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: 18,
                        fontWeight: '600'
                    }}>Your Performance:</Text>
                    {lineData &&

                        <Chart
                            style={{ height: 200, width: 350 }}
                            data={lineData}
                            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                            xDomain={{ min: 0, max: 14 }}
                            yDomain={{ min: -4, max: 4 }}
                        >
                            <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                            <HorizontalAxis tickCount={5} />
                            <Area theme={{ gradient: { from: { color: '#700B97' }, to: { color: '#000', opacity: 0.4 } } }} />
                            <Line theme={{ stroke: { color: '#700B97', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
                        </Chart>
                    }



                </View>
                <View>
                    <Text style={{ color: '#fff' }}>*X-Axis denotes question number</Text>
                    <Text style={{ color: '#fff' }}>*Y-Axis denotes performance metrics</Text>

                </View>
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
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
        height: windowHeight * 0.15,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor:'white'    
    },

    content: {
        flex: 4,
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'
    },
    graphContainer: {
        // backgroundColor:'#fff'
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    },
    graph: {
        backgroundColor: '#F4E3FF',
        borderRadius: 10,
        height: 225,
        width: '95%',
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        height: 300,
        width: 300
    }
})