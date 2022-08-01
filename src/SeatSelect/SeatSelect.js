import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Form from "../Form/Form";


function Seat ({
    available,
    id,
    name,
    chosen,
    setChosen
}) {
    const [seatClass, setSeatClass] = useState(available? "seat available" : "seat unavailable");

    function selectSeat () {
        if (available) {
            if (seatClass === "seat available") {
                setSeatClass("seat selected");
                setChosen([...chosen, id]);

            } else {
                setSeatClass("seat available");
                chosen.splice(chosen.indexOf(id), 1);
            }
            
        } else {
            alert("Esse assento já foi comprado!");
        }
 
    }
    return (
        <div className={seatClass} onClick={selectSeat}>
            {name}
        </div>
    )
}


export default function SeatSelect ({
    movieTitle,
    moviePoster
}) {

    const {idSessao} = useParams();
    const [movieInfo, setMovieInfo] = useState("");
    const [seats, setSeats] = useState([]);
    const [date, setDate] = useState("");
    const [chosen, setChosen] = useState([]);


    useEffect (() => {
        console.log("entrei no effect");
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then(result => {
            setMovieInfo(result.data);
            setDate(result.data.day);
            setSeats(result.data.seats);
        })
    }, []);

    

    

    // function selectSeat (available) {
    //     console.log("entrei na selectSeat");
    //     if (available) {
    //         alert("ta disponível")
    //         seatClass = "seat selected";
    //     } else {
    //         alert("nao ta disponível")
    //     }
    //     return;
    // }

    return (
        <>
            <div className="seat-select-title">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className="seats-container">
                <div className="seats">
                    {seats.map((seat, index) => {

                        return (
                            <Seat key={index} available={seat.isAvailable} id={seat.id} name={seat.name} chosen={chosen} setChosen={setChosen} />
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
            
            <Form chosen={chosen}/>
                    
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