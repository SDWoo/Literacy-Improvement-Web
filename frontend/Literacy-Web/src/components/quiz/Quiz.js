import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import M from 'materialize-css';

import questions from '../../questions.json';
import { quizRequest } from "../../redux";
import { Link, useHistory } from 'react-router-dom';
import isEmpty from './is-empty';
import './_quiz.scss';
import classnames from 'classnames';
import * as _ from 'lodash';

function Quiz({ quizStatus, quizRequest}){
    
    
    let history = useHistory();

    let myquestions = {};
    const [myQuestions, setMyQuestions] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [previousQuestion, setPreviousQuestion] = useState({});
    var currentAnswer = '';
    const [numberOfQuestions,setNumberOfQuestions] = useState(0);
    const [numberOfAnswered,setNumberOfAnswered] = useState(0);
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [score,setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers,setWrongAnswers] = useState(0);
    const [time, setTime] = useState({});
    const [interval, setInterval] = useState(null);
    const [NBDisabled,setNBDisabled] = useState(false);
    const [PBDisabled,setPBDisabled] = useState(false);

    useEffect(()=> {
        quizRequest();
        displayQuestions();
        startTimer();
    }, []);

    const displayQuestions = () => { 
        if(currentQuestionIndex == 0) {
            setCurrentQuestionIndex(currentQuestionIndex + 1 );
        }
        myquestions = _.cloneDeep(questions);
        console.log(questions);
        console.log(myquestions);
        console.log(currentQuestionIndex);
        setCurrentQuestion(myquestions[currentQuestionIndex]);
        setNextQuestion(myquestions[currentQuestionIndex + 1]);
        console.log(nextQuestion.question);
        setNumberOfQuestions(myquestions.length);
        currentAnswer = currentQuestion.answer;
        handleDisableButton();
        if(currentQuestionIndex <= 1) {
            setPreviousQuestion(myquestions[currentQuestionIndex -1]);
        }
    }
    const endGame = () => {
        if (window.confirm('투표가 끝났습니다.')) {
            history.push('/Home');
        }

    }
    const handleOptionClick = (e) => {
        currentAnswer = currentQuestion.answer;
        console.log(currentAnswer);
        setCurrentQuestionIndex(currentQuestionIndex +1);
        if (e.target.innerHTML.toString().toLowerCase() === currentAnswer.toLowerCase())  {
            clickCorrect();
        }else {
            clickWrong();
        }
    }
    const clickCorrect = () => {
        M.toast({
            html: '정답입니다!',
            classes: 'toast-valid',
            displayLength: 1500
        });
   
        if(currentQuestionIndex == 0){ 
            setScore(score+1);
            setCorrectAnswers(correctAnswers+1);
            setNumberOfAnswered(numberOfAnswered+1);
        }
        else if(currentQuestionIndex != 0) {
            setScore(score+1);
            setCorrectAnswers(correctAnswers+1);
            let CQI = currentQuestionIndex +1;
            setCurrentQuestionIndex(CQI);
            console.log(currentQuestionIndex);
            setNumberOfAnswered(numberOfAnswered+1);
        }
        if (nextQuestion === undefined) {
            endGame();
        } else {
            displayQuestions();
        }
    }
    const clickWrong = () => {
        navigator.vibrate(1000);
        M.toast({
            html: '틀렸습니다!',
            classes: 'toast-invalid',
            displayLength: 1500
        });
        if(currentQuestionIndex == 0) {
            setWrongAnswers(wrongAnswers+1);
            setNumberOfAnswered(numberOfAnswered);
        }
        else if(currentQuestionIndex != 0) {
            setWrongAnswers(wrongAnswers+1);
            setNumberOfAnswered(numberOfAnswered);
            let CQI = currentQuestionIndex +1;
            setCurrentQuestionIndex(CQI);
            console.log(currentQuestionIndex);
            setNumberOfAnswered(numberOfAnswered+1);
        }   
        if (nextQuestion === undefined) {
            endGame();
        } else {
            displayQuestions();
        }
    }
    const handleNextButtonClick = () => {
        if (nextQuestion !== undefined) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            displayQuestions();
        }
    };
    const handlePreviousButtonClick = () => {
        if (previousQuestion == undefined) {
            M.toast({
                html: '이전 문제가 없습니다.',
                classes: 'toast-invalid',
                displayLength: 1500
            });
            displayQuestions();
        }
        else if (nextQuestion !== undefined) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            displayQuestions();
        }
    };
    const handleQuitButtonClick = () => {
        if (window.confirm('나가시겠습니까?')) {
            history.push('/Home');
        }
    };
    const handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                handleNextButtonClick();
                break;
            case 'previous-button':
                handlePreviousButtonClick();
                break;
            case 'quit-button':
                handleQuitButtonClick();
                break;
            default:
                break;
        }
    };
    const startTimer = () => {
        const countDownTime = Date.now + 180000;
        console.log(countDownTime);
        setInterval(() => {
            let now = new Date();
            let distance = countDownTime - now;

            let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(distance % (1000 * 60) / (1000));

            if (distance < 0) {
                clearInterval(interval);
                setTime({
                        minutes: 0,
                        seconds: 0
                }, () => {
                    alert('퀴즈가 끝났습니다!');
                    history.push('/Home');
                });
            } else {
                setTime({
                        minutes,
                        seconds,
                        distance
                    }
                )
            }
        }, 1000);
    }
    const handleDisableButton = () => {
        if(currentQuestionIndex === 0 || currentQuestionIndex < 0) {
            setPBDisabled(true);
        }
        else {
            setPBDisabled(false);
        }

        if(nextQuestion === undefined || currentQuestionIndex + 1 === numberOfQuestions) {
            setNBDisabled(true);
        }
        else {
            setNBDisabled(false);
        }
    }
    return (
        <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <div className = "questions">
                <h2>오늘의 퀴즈</h2>
                <div className = "lifeline-container">
                    {/* <p>
                        <span className = "mdi mdi-clock-outline mdi-24px"></span>
                        <span className = "lifeline">5</span>
                    </p>
                    <p>
                        <span className = "mdi mdi-clock-outline mdi-24px"></span>
                        <span className = "lifeline">5</span>
                    </p> */}
                </div>
                <div className = "timer-container">
                    <p>
                        <span className= "left" style={{float: 'left'}}>
                            {currentQuestionIndex+1} of {numberOfQuestions}</span>
                        <span className= "right">
                                {time.minutes}:{time.seconds}
                            <span  className="mdi mdi-clock-outline mdi-24px"></span></span>
                    </p>
                </div>
                <h5>{currentQuestion.question}</h5>
                {console.log(currentQuestion)}
                {console.log(currentQuestionIndex)}
                {console.log(time.minutes)}
                {console.log(time)}
                <div className="options-container">
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionA}</p>
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionB}</p>
                </div>
                <div className="options-container">
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionC}</p>
                    <p onClick={handleOptionClick} className="option">{currentQuestion.optionD}</p>
                </div>
                <div className="button-container">
                    <button
                        className = {classnames('', {'disable' : PBDisabled})}
                        id="previous-button"
                        onClick={handleButtonClick}>
                        이전
                    </button>
                    <button
                        className = {classnames('', {'disable' : NBDisabled})}
                        id="next-button"
                        onClick={handleButtonClick}>
                        다음
                    </button>
                    <button id="quit-button" onClick={handleButtonClick}>나가기</button>
                </div>
            </div>
        </Fragment>
        
    );
}

const mapStateToProps = (state) => {
    return {
        quizStatus: state.quiz.status.quizStatus,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        quizRequest: () => {
            return dispatch(quizRequest());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);