import React from 'react';
import MovieCard from './MovieCard';

import { useSelector } from 'react-redux';

const MovieList = () => {
  // const movieList = useSelector(state => state.moviesReducer.movieList);
  // const title = useSelector(state => state.moviesReducer.title);
  // const rating = useSelector(state => state.moviesReducer.rating);

  const { movieList, title, rating } = useSelector(
    state => state.moviesReducer
  );

  const filteredMovieList = movieList.filter(
    movie =>
      movie.rating >= rating &&
      movie.title.toLowerCase().includes(title.toLowerCase().trim())
  );

  return filteredMovieList.map(movie => (
    <MovieCard movie={movie} key={movie.id} />
  ));
};

export default MovieList;
