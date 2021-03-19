import React from "react";
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  ADD_SMURF,
  SET_ERROR,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_SMURFS_START:
      return { ...state, isLoading: true, error: "" };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCH_SMURFS_ERROR:
      return state;
    case ADD_SMURF:
      return { ...state, smurfs: [...state.smurfs, action.payload] };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
  }
};
