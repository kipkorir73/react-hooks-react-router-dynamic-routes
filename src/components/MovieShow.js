import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow({ movies }) {
  const { movieId } = useParams();
  const movie = movies[movieId];

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Add more details of the movie here */}
    </div>
  );
}

export default MovieShow;
