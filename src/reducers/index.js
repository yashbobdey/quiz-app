import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import quizSetupReducer from "./quizSetupReducer";
import quizDataReducer from "./quizDataReducer";
const rootReducer = combineReducers({
  quizSetup: quizSetupReducer,
  quizData: quizDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
