import "./style.css";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function SessionSelect ({
    movieTitle,
    setMovieTitle,
    moviePoster,
    setMoviePoster
}) {

    const { idFilme } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(result => {
            setSessions(result.data.days);
            setMoviePoster(result.data.posterURL);
            setMovieTitle(result.data.title);
        });
    }, []);
    return (
        <>
            <div className="container-select">
                <div className="select-session">
                    <h2>Selecione o horário</h2>
                </div>

                {sessions.map((session,index) => {

                    return (
                        <div className="sessions" key={index}>
                            <div className="session-day">
                                {session.weekday} - {session.date}
                            </div>
                            <div className="session-hours">
                                {session.showtimes.map((show, index) => {
                                    return (
                                        <div className="hour" key={index}>
                                            {show.name}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    );
                })}

                
            </div>
            <footer>
                <div className="movie-poster">
                    <img src={moviePoster} alt="" />
                </div>
                <div className="movie-title">
                    {movieTitle}
                </div>
            </footer>
        </>
        

    )
}