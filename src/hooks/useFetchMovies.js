import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MOOD_GENRES = {
  'feel-good': [35, 10751],
  'intense': [28, 53],
  'thought-provoking': [18, 9648],
  'scary': [27],
  'inspiring': [18, 12],
};

export default function useFetchMovies(mood, searchQuery = '' ) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mood && !searchQuery) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let url;

        if (searchQuery) {
          url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&page=1`;
        } else {
          const genreIds = MOOD_GENRES[mood]?.join(',') || '';
          url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}&sort_by=popularity.desc&page=1`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch movies');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [mood, searchQuery]);

  return { movies, loading, error };
}
