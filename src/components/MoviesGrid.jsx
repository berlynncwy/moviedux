import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

function MovieGrid() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json()) // convert movies.json into json
            .then((res) => setMovie(res));
    }, []);

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    );
}

export default MovieGrid;
