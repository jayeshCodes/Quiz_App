import { View, SafeAreaView, StyleSheet, Dimensions, StatusBar, Button, Text, TouchableOpacity, Touchable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';

import animationData from '../assets/animations/loading.json';

const windowHeight = Dimensions.get('window').height;


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const Quiz = ({ navigation }) => {


    const [count, setCount] = useState(0);
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [correct_answer, setCorrect_answer] = useState('');
    const [questionAvailable, setQuestionAvailable] = useState(false);

    const getQuiz = async () => {
        setIsLoading(true);
        const url = 'http://192.168.1.6:5000/question';


        console.log('Request URL:', url);
        const res = await fetch(url);


        const data = await res.json();
        setQues(data.question);

        // setQuestions(data.results);
        setOptions([...data.incorrect_answers, data.correct_answer]);
        setCorrect_answer(data.correct_answer);
        // shuffleArray(options);
        // console.log('otpions:', options)

        // const options = data.incorrect_answers;
        // options.push(data.correct_answer);
        // shuffleArray(options);

        // generateOptionsAndShuffle();

        setIsLoading(false);
        setQuestionAvailable(true);

    };
    useEffect(() => {
        getQuiz()
    }, [])

    const handleNextPress = () => {
        fetch('http://192.168.1.6:5000/false', {
            method: 'POST',
        })
        getQuiz();
        setCount(count + 1);
        // setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }

    const generateOptionsAndShuffle = () => {
        const options = data.incorrect_answers;
        options.push(data.correct_answer);
        shuffleArray(options);

        return options;
    }

    const handleSelectedOption = (_option) => {
        console.log(correct_answer);
        if (_option === correct_answer) {
            setScore(score + 10);
            fetch('http://192.168.1.6:5000/CAT/true', {
                method: 'POST', // Use the appropriate HTTP method (e.g., POST, GET, etc.)
            })
            getQuiz();
        } else {

            fetch('http://192.168.1.6:5000/CAT/false', {
                method: 'POST',
            })
            getQuiz();
        }
        setCount(count + 1);
        console.log('from function:', count);
        // setQues(ques + 1)
        // setOptions(generateOptionsAndShuffle(questions[ques + 1]))
        // console.log(_option === questions[ques].correct_answer)
        // console.log(score)
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {isLoading ? 
            <View style={{ 
            justifyContent:'center',
            alignItems:'center',
            marginTop:100
            }}>
                <Text style={styles.text}>Loading...</Text>
                <LottieView
                source={animationData}
                autoPlay
                loop
                style={{height:300}}
            />
            </View> :
                questionAvailable && (
                    <View style={styles.parent}>

                        <View style={styles.top}>
                            <Text style={{
                                fontWeight: 700,
                                fontSize: 28,
                                ...styles.text
                            }}>Q.  {decodeURIComponent(ques)}</Text>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
                                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
                                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[2])}>
                                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[3])}>
                                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>SKIP</Text>
                        </TouchableOpacity> */}
                            {count !== 15 &&
                                <TouchableOpacity style={styles.button} onPress={handleSelectedOption}>
                                    <Text style={styles.text}>SKIP</Text>
                                </TouchableOpacity>

                            }{console.log('question:', count)}
                            {count === 15 &&
                                <TouchableOpacity style={styles.button} onPress={navigation.navigate('Result', { score: score })}>
                                    <Text style={styles.text}>RESULT</Text>
                                </TouchableOpacity>
                            }

                            {/* <TouchableOpacity onPress={() =>{navigation.navigate('Result')}}>
                    <Text style={styles.text}>END</Text>
                </TouchableOpacity> */}
                        </View>
                    </View>
                )

            }
        </SafeAreaView>
    )
}

export default Quiz

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: windowHeight,
        marginTop: StatusBar.currentHeight,
        padding: 12
    },
    top: {
        marginVertical: 16,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#700B97',
        padding: 10,
        borderRadius: 10
    },
    options: {
        marginVertical: 16,
        flex: 1,
        marginLeft: 10,
        marginRight: 10

    },
    bottom: {
        marginBottom: 120,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    button: {
        width: '25%',
        backgroundColor: '#700B75',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 16,
        margin: 10
    },
    option: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    optionButton: {
        backgroundColor: '#3E065F',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    parent: {
        height: '100%'
    }
})