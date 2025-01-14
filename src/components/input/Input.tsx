// src/features/search/components/MovieInput.tsx
import React from 'react';

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
    />
  );
};

export default MovieInput;