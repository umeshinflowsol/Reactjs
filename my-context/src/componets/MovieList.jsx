import React, { useState } from "react";
import Movie from "./Movie";
function MovieList() {
  const [movie, setMovie] = useState([
    {
      name: "Harry potter",
      price: "2727",
      id: "12345",
    },
    {
      name: "silent voice",
      price: "2000",
      id: "123456",
    },
    {
      name: "one piece",
      price: "20001",
      id: "12345",
    },
  ]);
  return (
    <div>
      {movie.map((movie, index) => {
        return (
          <>
            <Movie name={movie.name}></Movie>
          </>
        );
      })}
    </div>
  );
}

export default MovieList;
