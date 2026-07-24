import React, { useState } from 'react';
import movieMoodLogo from './assets/images/icons/movie-mood-logo.png';
import MoodSelector from './components/MoodSelector';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useFetchMovies from './hooks/useFetchMovies';
import './App.css';

function App() {
  const [selectedMood, setSelectedMood] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, error } = useFetchMovies(selectedMood, searchQuery);

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedMood('');
  };

  const handleRetry = () => {
    if (searchQuery) {
      setSearchQuery(searchQuery);
    } else if (selectedMood) {
      setSelectedMood(selectedMood);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <img src={movieMoodLogo} alt="Movie Mood" className="app-logo" />
          <h1>Movie Mood</h1>
        </div>
        <p>Discover movies based on your vibe</p>
      </header>

      <main className="app-main">
        <MoodSelector selectedMood={selectedMood} onMoodChange={handleMoodChange} />
        <SearchBar onSearch={handleSearch} />

        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        {loading && <LoadingSpinner />}
        {!loading && !error && <MovieGrid movies={movies} />}
      </main>

      <footer className="app-footer">
        <p>Movie Mood © 2026 | Powered by TMDb | Built by Tefo Komane</p>
      </footer>
    </div>
  );
}

export default App;
