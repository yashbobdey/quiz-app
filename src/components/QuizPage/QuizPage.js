import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import "./QuizPage.css";
import ResultsModal from "../ResultsModal/ResultsModal";
export default function QuizPage() {
  const quizQandAS = useSelector((state) => state.quizData.quizData);
  const isLoading = useSelector((state) => state.quizData.loading);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [numOfCorrAns, setNumOfCorrAns] = useState(0);

  function randomizeArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function nextClickHandler() {
    quizQandAS[questionIndex + 1]
      ? setQuestionIndex(questionIndex + 1)
      : endQuizHandler();
  }

  function checkAnswer(selectedAnswer, correctAnswer) {
    selectedAnswer === correctAnswer && setNumOfCorrAns(numOfCorrAns + 1);
    nextClickHandler();
  }
  function endQuizHandler() {
    setEndQuiz(true);
  }

  return isLoading ? (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : !endQuiz ? (
    <div className="main-qna-container">
      <div className="qna-subcontainer">
        <h4 className="question-area">
          {quizQandAS[questionIndex] && quizQandAS[questionIndex].question}
        </h4>
        {quizQandAS[questionIndex] &&
          quizQandAS[questionIndex].correct_answer &&
          randomizeArray([
            quizQandAS[questionIndex].correct_answer,
            ...quizQandAS[questionIndex].incorrect_answers,
          ]).map((option, i) => (
            <p
              key={i}
              className="answer-area"
              onClick={(e) => {
                checkAnswer(
                  e.target.innerHTML,
                  quizQandAS[questionIndex].correct_answer
                );
              }}
            >
              {option}
            </p>
          ))}
        <Button
          variant="warning"
          onClick={nextClickHandler}
          className="next-btn"
        >
          Next Question
        </Button>
      </div>
    </div>
  ) : (
    <ResultsModal result={(numOfCorrAns / quizQandAS.length) * 100} />
  );
}
