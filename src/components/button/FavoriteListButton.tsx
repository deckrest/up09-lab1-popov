import React from 'react';
import { useNavigate } from 'react-router-dom';
import './favoritesList.css'

const FavoriteListButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/favorites');
  };

  return (
    <button onClick={handleClick} className='favoriteButton'>
      Избранное
    </button>
  );
};

export default FavoriteListButton;