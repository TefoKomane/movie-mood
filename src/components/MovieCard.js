import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  const rating = movie.vote_average ? movie.vote_average.toFixed(1 ) : 'N/A';

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <p className="movie-description">{movie.overview || 'No description available'}</p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span className="rating">⭐ {rating}/10</span>
          <span className="year">{movie.release_date?.split('-')[0] || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
