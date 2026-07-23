import React from 'react';
import './MoodSelector.css';

const MOODS = [
  { id: 'feel-good', label: 'Feel Good', emoji: '😊' },
  { id: 'intense', label: 'Intense', emoji: '🔥' },
  { id: 'thought-provoking', label: 'Thought Provoking', emoji: '🧠' },
  { id: 'scary', label: 'Scary', emoji: '👻' },
  { id: 'inspiring', label: 'Inspiring', emoji: '✨' },
];

function MoodSelector({ selectedMood, onMoodChange }) {
  return (
    <div className="mood-selector">
      <h2>What's your mood?</h2>
      <div className="mood-buttons">
        {MOODS.map((mood) => (
          <button
            key={mood.id}
            className={`mood-button ${selectedMood === mood.id ? 'active' : ''}`}
            onClick={() => onMoodChange(mood.id)}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
