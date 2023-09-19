import { GET_JOBS_ERROR_OFF, GET_JOBS_ERROR_ON } from "../actions";

const initialState = {
  hasError: false,
  errorMessage: "",
};

const errorHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    case GET_JOBS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default errorHandlerReducer;
