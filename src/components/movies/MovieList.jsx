import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movieList, rating, title }) => {
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
