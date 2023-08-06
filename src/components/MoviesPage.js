import React, { useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieShow from './MovieShow';

function MoviesPage() {
  const [movies] = useState({
    1: { id: 1, title: 'A River Runs Through It' },
    2: { id: 2, title: 'Se7en' },
    3: { id: 3, title: 'Inception' },
  });

  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
