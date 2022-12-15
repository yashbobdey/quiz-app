let initialState = {
  quizData: [],
  loading: false,
  error: false,
};

const quizDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUIZ_DATA_LOADING":
      return {
        ...state,
        loading: action.payload,
        error: false,
        quizData: [],
      };
    case "GET_QUIZ_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        quizData: action.payload,
      };
    case "GET_QUIZ_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        quizData: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default quizDataReducer;
