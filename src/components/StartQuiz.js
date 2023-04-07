import React, { useState, useEffect, useContext} from 'react'
import { useHistory, useParams } from 'react-router';
import { GetQuizByID } from '../api';
import QuizContext from '../Context';
import '../App.css';

function StartQuiz() {

    const params = useParams();
    const quizID = +params.id;
    const history = useHistory();

    const { score, setScore } = useContext(QuizContext);
    const [topicData, setTopicData] = useState({});
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('')
    const [question, setQuestion] = useState('');
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [option1, setOption1 ] = useState('');
    const [option2, setOption2 ] = useState('');
    const [option3, setOption3 ] = useState('');
    const [option4, setOption4 ] = useState('');
    const [timer, setTimer] = useState(60);
    const [isOptionClicked, setIsOptionClicked] = useState(false);

    async function getQuizData(){
        let response = await GetQuizByID(quizID);
        setTopicData(response.data);
        setQuestion(response.data.questions[currentQuestion].question)
        setTotalQuestions(response.data.questions.length)
        setOption1(response.data.questions[currentQuestion].option1)
        setOption2(response.data.questions[currentQuestion].option2)
        setOption3(response.data.questions[currentQuestion].option3)
        setOption4(response.data.questions[currentQuestion].option4) 
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted) getQuizData();
        return(() => {isMounted = false});
    }, [currentQuestion])

    
    useEffect(() => {
        if(timer>0){
            setTimeout(() => {
                setTimer(timer-1)
            }, 1000)
        }
        else{
            clearTimeout();
            history.push('/result')
        }
    },[quizID, timer]);

    const handleNextQuestion = () => {
        if( topicData.questions[currentQuestion].answer === optionChosen ){
            setScore( score + 1 );
        }
        else{
            setScore( score - 1 );
        }
        setcurrentQuestion( currentQuestion + 1 );
        setIsOptionClicked(false);
    }

    const handleFinish = () => {
        if( topicData.questions[currentQuestion].answer === optionChosen ){
            setScore( score + 1 );
        }
        else{
            setScore( score - 1 );
        }
        history.push('/result');
    }

    return (
        <div className='startquiz'>
            <div className="startquiz_container">
                <h1>Time left : {timer}</h1>
                <h1>{question}</h1>
                <div className='options'>
                    <button onClick={ () => {setOptionChosen('1'); setIsOptionClicked(true)} }>{option1}</button>
                    <button onClick={ () => {setOptionChosen('2'); setIsOptionClicked(true)} }>{option2}</button>
                    <button onClick={ () => {setOptionChosen('3'); setIsOptionClicked(true)} }>{option3}</button>
                    <button onClick={ () => {setOptionChosen('4'); setIsOptionClicked(true)} }>{option4}</button>
                </div>       
                {
                    isOptionClicked  ? (
                        <h2>Your selected option is {optionChosen}</h2>
                    ) : (
                        <h2>Choose an option</h2>
                    )
                }
                <div className="decidebuttons">
                {
                    currentQuestion === totalQuestions-1 ? (
                        <button onClick={handleFinish}>Finish Quiz</button>
                    ) : (
                        <button onClick={handleNextQuestion}>Next Question</button>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default StartQuiz
