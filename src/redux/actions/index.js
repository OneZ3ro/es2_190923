export const ADD_TO_FAVOURITE_COMPANIES = "ADD_TO_FAVOURITE_COMPANIES";
export const REMOVE_FAVORITE_COMPANY = "REMOVE_FAVORITE_COMPANY";
export const GET_JOB = "GET_JOB";
export const GET_COMPANY = "GET_COMPANY";

export const addToFavouriteCompaniesAction = (companyName) => ({
  type: ADD_TO_FAVOURITE_COMPANIES,
  payload: companyName,
});

export const removeFavouriteCompanyAction = (index) => ({
  type: REMOVE_FAVORITE_COMPANY,
  payload: index,
});

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({ type: GET_JOB, payload: data });
        console.log("getJobsAction getState", getState);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompanyAction = (param) => {
  return async (dispatch, getState) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    try {
      const response = await fetch(baseEndpoint + param);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY, payload: data });
        console.log("getCompanyAction getState", getState);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
