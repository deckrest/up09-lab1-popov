// src/features/search/components/MovieButton.tsx
import React from 'react';
import './button.css'

interface MovieButtonProps {
  onClick: () => void;
}

const MovieButton: React.FC<MovieButtonProps> = ({ onClick }) => {
  return (
    <button className='searchButton' onClick={onClick}>Поиск</button>
  );
};

export default MovieButton;