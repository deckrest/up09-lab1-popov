// src/features/search/components/MovieButton.tsx
import React from 'react';

interface MovieButtonProps {
  onClick: () => void;
}

const MovieButton: React.FC<MovieButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Поиск</button>
  );
};

export default MovieButton;