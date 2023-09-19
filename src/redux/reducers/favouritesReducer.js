import {
  ADD_TO_FAVOURITE_COMPANIES,
  REMOVE_FAVORITE_COMPANY,
} from "../actions";

const initalState = {
  companies: [],
};

const favouriteReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_COMPANIES:
      return {
        companies: [...state.companies, action.payload],
      };
    case REMOVE_FAVORITE_COMPANY:
      return {
        companies: state.companies.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
