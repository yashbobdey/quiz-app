import axios from "axios";
// import { useSelector } from "react-redux";
// const url = useSelector((state) => state.quizSetup.url);

export const getQuizData = (url) => {
  return async (dispatch) => {
    dispatch(getQuizDataLoading(true));
    try {
      const response = await axios.get(url);
      console.log(response);
      await dispatch(getQuizDataSuccess(response.data.results));
    } catch (error) {
      dispatch(getQuizDataFailure(error));
    }
  };
};

export const getQuizDataLoading = (value) => {
  return {
    type: "GET_QUIZ_DATA_LOADING",
    payload: value,
  };
};

export const getQuizDataSuccess = (data) => {
  return {
    type: "GET_QUIZ_DATA_SUCCESS",
    payload: data,
  };
};

export const getQuizDataFailure = (error) => {
  return {
    type: "GET_QUIZ_DATA_FAILURE",
    payload: error,
  };
};
