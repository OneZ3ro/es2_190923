import { GET_COMPANY, GET_JOB } from "../actions";

const initialState = {
  content: [],
  company: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
