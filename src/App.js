import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage/HomePage";
import SessionSelect from "./SessionSelect/SessionSelect";
import SeatSelect from "./SeatSelect/SeatSelect";
import Success from "./Success/Success";
import Header from "./Header/Header";

export default function App () {


    const [movieTitle, setMovieTitle] = useState("");
    const [moviePoster, setMoviePoster] = useState("");

    return (
        <BrowserRouter >
            <Header />
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={
                    <SessionSelect  
                        movieTitle={movieTitle}
                        setMovieTitle={setMovieTitle}
                        moviePoster={moviePoster}
                        setMoviePoster={setMoviePoster}
                    />} 
                />
                <Route path="/assentos/:idSessao" element={
                    <SeatSelect 
                        movieTitle={movieTitle}
                        moviePoster={moviePoster}
                    />}
                 />
                <Route path="/sucesso" element={<Success />} />

            </Routes>

        </BrowserRouter>
    );

}