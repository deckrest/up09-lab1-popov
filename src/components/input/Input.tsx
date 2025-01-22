// src/features/search/components/MovieInput.tsx
import React from 'react';
import './input.css';

interface MovieInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovieInput: React.FC<MovieInputProps> = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder="Введите название фильма" 
      className='searchInput'
    />
  );
};

export default MovieInput;