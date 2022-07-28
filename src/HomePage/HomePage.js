import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";



export default function HomePage () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(result => {
            setMovies(result.data);
            console.log(movies);
        });
    }, []);
    


    return (
        <div className="homepage-container">
            <header>
                CINEFLEX
            </header>
            <div className="select-title">
                <h2>Selecione o filme</h2>
            </div>

            <div className="movies">
                {movies.map((movie,index) => {
                    return (
                    <div className="movie-poster" key={index} >
                        <img src={movie.posterURL} />
                    </div>
                    );
                })}
            </div>
        
        </div>
    );
}