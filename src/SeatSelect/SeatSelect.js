import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";


export default function SeatSelect ({
    movieTitle,
    moviePoster
}) {

    const {idSessao} = useParams();
    const [movieInfo, setMovieInfo] = useState("");
    const [seats, setSeats] = useState([]);
    const [date, setDate] = useState("");

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(result => {
            setMovieInfo(result.data);
            setDate(result.data.day);
            setSeats(result.data.seats);
        })
    }, []);




    return (
        <>
            <div className="seat-select-title">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className="seats-container">
                <div className="seats">
                    {seats.map((seat) => {
                        return (
                            <div className={(seat.isAvailable? "seat available": "seat unavailable")} key={seat.id}>
                                {seat.name}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="seats-help-container">
                <div className="seats-help">
                        <div className="seat selected"></div>
                        <p>Selecionado</p>
                </div>
                <div className="seats-help">
                        <div className="seat available"></div>
                        <p>Disponível</p>
                </div>
                <div className="seats-help">
                        <div className="seat unavailable"></div>
                        <p>Indisponível</p>
                </div>
            </div>
            
            <form >
                <label for="userName">Nome do comprador:</label>
                <input type="text" id="userName" required placeholder="Digite seu nome..."/>

                <label for="userCPF">CPF do comprador:</label>
                <input type="text" id="userCPF" required placeholder="Digite seu CPF..."/>

                <button type="submit">Reservar assento(s)</button>
            </form>
                    
            <footer>
                <div className="movie-poster">
                    <img src={moviePoster} alt="" />
                </div>
                <div className="movie-title">
                    <p>{movieTitle}</p>
                    <p>{date.weekday} - {movieInfo.name}</p>
                </div>

                
            </footer>
        </>
    );
}