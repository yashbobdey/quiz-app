let initialState = {
  startQuiz: false,
};

const quizSetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        startQuiz: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default quizSetupReducer;
