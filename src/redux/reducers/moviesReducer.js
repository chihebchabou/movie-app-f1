import { moviesData } from '../../data';
import { ADD_NEW_MOVIE, SET_RATING, SET_TITLE } from '../actions/types';

const initialState = {
  movieList: moviesData,
  title: '',
  rating: 0,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MOVIE:
      return {
        ...state,
        movieList: [...state.movieList, action.payload],
      };

    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
