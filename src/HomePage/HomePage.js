import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function HomePage () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(result => {
            setMovies(result.data);
        });
    }, []);
    


    return (
        <>
            <div className="select-title">
                <h2>Selecione o filme</h2>
            </div>

            <div className="movies">
                {movies.map((movie,index) => {
                    return (
                        <Link to={`/sessoes/${movie.id}`} key={index} >
                            <div className="movie-poster" >
                                <img src={movie.posterURL}  alt=""/>
                            </div>
                        </Link>
                   
                    );
                })}
            </div>
        
        </>
    );
}