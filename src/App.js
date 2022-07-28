import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import SessionSelect from "./SessionSelect/SessionSelect";
import SeatSelect from "./SeatSelect/SeatSelect";
import Success from "./Success/Success";
import Header from "./Header/Header";

export default function App () {
    return (
        <BrowserRouter >
            <Header />
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionSelect />} />
                <Route path="/assentos/:idSessao" element={<SeatSelect />} />
                <Route path="/sucesso" element={<Success />} />

            </Routes>

        </BrowserRouter>
    );

}