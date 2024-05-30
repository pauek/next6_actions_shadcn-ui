"use client";

import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { clientSearchMovies, serverSearchMovies } from "@/lib/movies";

export default function SearchMovies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const textRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    setSearch(textRef.current.value);
    textRef.current.value = "";
  };

  useEffect(() => {
    clientSearchMovies(search).then((movies) => {
      setMovies(movies);
    });
  }, [search]);

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          className={"border border-black rounded p-1 mr-2"}
          ref={textRef}
        />
        <button
          className={"hover:bg-gray-300 px-2 py-1 rounded"}
        >
          Search
        </button>
      </form>
      <div className="border-t mt-4 pt-2 flex flex-wrap gap-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
