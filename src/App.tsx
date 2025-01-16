import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from '../src/components/card/MovieCard'; // Component to display the list of movies
import MovieDetail from '../src/pages/MovieDetail'; // Component for movie details

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<MovieList/> />
        <Route path="/movie/:id" element=<MovieDetail /> />
      </Routes>
    </Router>
  );
};

export default App;
