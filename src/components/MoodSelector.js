import React from 'react';
import './MoodSelector.css';
import feelGoodIcon from '../assets/images/icons/feel-good-icon.png';
import intenseIcon from '../assets/images/icons/intense-icon.png';
import thoughtProvokingIcon from '../assets/images/icons/thought-provoking-icon.png';
import scaryIcon from '../assets/images/icons/scary-icon.png';
import inspiringIcon from '../assets/images/icons/inspiring-icon.png';

const MOODS = [
  { id: 'feel-good', label: 'Feel Good', icon: feelGoodIcon },
  { id: 'intense', label: 'Intense', icon: intenseIcon },
  { id: 'thought-provoking', label: 'Thought Provoking', icon: thoughtProvokingIcon },
  { id: 'scary', label: 'Scary', icon: scaryIcon },
  { id: 'inspiring', label: 'Inspiring', icon: inspiringIcon },
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
            <img src={mood.icon} alt={mood.label} className="mood-icon" />
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
