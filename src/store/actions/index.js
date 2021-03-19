import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURF_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURF_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_SMURFS_ERROR });
      });
  };
};

export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};
