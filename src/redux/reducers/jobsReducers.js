import { GET_JOB } from "../../components/MainSearch";
import { GET_COMPANY, RESET_IS_LOADING } from "../actions";

const initialState = {
  // content: [],
  company: [],
  isLoading: true,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_JOB:
      return {
        ...state,
        // content: action.payload,
        isLoading: false,
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
