import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Form ({
    chosen,
    setClientInfo
}) {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const APIUrl = "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many";
    const navigate = useNavigate();

    function handleForm (e) {
        e.preventDefault();
        if (chosen.length === 0) {
            alert("Nenhum assento selecionado.");
            return;
        }

        const request = axios.post(APIUrl, {
            ids: chosen,
            name,
            cpf,
        });

        request.then (result => {
            setClientInfo({
                name,
                cpf,
            })
            setName("");
            setCpf("");
            navigate("/sucesso");
        })

    }


    

    return (
        <form onSubmit={handleForm}>
            <label htmlFor="userName">Nome do comprador:</label>
            <input type="text" id="userName" required placeholder="Digite seu nome..." onChange={e => setName(e.target.value)} value={name}/>

            <label htmlFor="userCPF">CPF do comprador:</label>
            <input type="text" id="userCPF" required placeholder="Digite seu CPF(apenas números)... " maxLength={11} pattern="[0-9]{11}" value={cpf} onChange={e => setCpf(e.target.value)}/>

            <button type="submit">Reservar assento(s)</button>
        </form>
    )
}