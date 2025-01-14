import React from 'react';
import Search from './features/search/Search.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Поиск фильмов</h1>
      <Search />
    </div>
  );
};

export default App;