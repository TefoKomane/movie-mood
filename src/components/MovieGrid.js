import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

function MovieGrid({ movies }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <p>No movies found. Try a different mood or search term!</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
