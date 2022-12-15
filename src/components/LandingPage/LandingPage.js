import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { startQuiz } from "../../actions/quizSetupActions";
import { useDispatch } from "react-redux";
import { getQuizData } from "../../actions/quizDataActions";
import "./LandingPage.css";

export default function LandingPage() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const dispatch = useDispatch();

  function another(e) {
    e.preventDefault();
    console.log("pressed");
    const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`;

    dispatch(startQuiz());
    dispatch(getQuizData(url));
  }

  return (
    <Card className="main-card ">
      <Card.Body className="card-content">
        <h3>Setup Quiz </h3>
        <form type="sumbit" onSubmit={another}>
          <div className="mt-3">
            <h6 htmlFor="amount">
              <label>Number of Questions</label>
            </h6>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              onChange={(e) => setNumOfQuestions(e.target.value)}
              value={numOfQuestions}
              min={1}
              max={20}
            />
          </div>
          <div className="mt-3">
            <h6>
              <label htmlFor="category">Category</label>
            </h6>
            <select
              name="category"
              id="category"
              className="form-input"
              onChange={(e) => {
                const x = e.target.value;
                setCategory(x);
              }}
            >
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="24">Politics</option>
            </select>
          </div>
          <div className="mt-3">
            <h6>
              <label htmlFor="category">Difficulty</label>
            </h6>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              onChange={(e) => {
                const x = e.target.value;
                setDifficulty(x);
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <Button type="submit" variant="warning" className="start-btn mt-5">
            Start
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
