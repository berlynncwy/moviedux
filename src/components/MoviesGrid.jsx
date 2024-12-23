import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

function MovieGrid() {
    const [movies, setMovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json()) // convert movies.json into json
            .then((res) => setMovie(res));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                className="search-input"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handleSearchChange}
            ></input>
            <div className="movies-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default MovieGrid;
