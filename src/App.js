import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./components/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import QuizPage from "./components/QuizPage/QuizPage";
function App() {
  const isQuizStarted = useSelector((state) => state.quizSetup.startQuiz);
  return (
    <div className="App">{isQuizStarted ? <QuizPage /> : <LandingPage />}</div>
  );
}

export default App;
