import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
