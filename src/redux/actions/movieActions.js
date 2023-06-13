import { ADD_NEW_MOVIE, SET_RATING, SET_TITLE } from './types';

export const addNewMovie = newMovie => {
  return { type: ADD_NEW_MOVIE, payload: newMovie };
};

export const setTitle = str => {
  return { type: SET_TITLE, payload: str };
};

export const setRating = rating => {
  return { type: SET_RATING, payload: rating };
};
