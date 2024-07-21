import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Avengers');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
      const data = await response.json();
      setMovies(data.Search || []);
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <input
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 mb-4"
        />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
