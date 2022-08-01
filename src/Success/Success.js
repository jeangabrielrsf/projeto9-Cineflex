import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Success ({
    movieTitle,
    sessionDay,
    sessionHour,
    seatsBought,
    clientInfo
}) {
    const navigate = useNavigate();

    function backToHome() {
        navigate("/");
    }

    return (
        <>  
            <div className="sucess-title">
                <h2>Pedido feito com sucesso!</h2>
            </div>

            <div className="movie-info">
                <h2>Filme e sessão</h2>
                <p>{movieTitle}</p>
                <p>{sessionDay} - {sessionHour}</p>
            </div>

            <div className="seats-info">
                <h2>Ingressos</h2>
                {seatsBought.map((value,index) => <p key={index}>Assento {value}</p>)}
            </div>

            <div className="client-info">
                <h2>Comprador</h2>
                <p>Nome: {clientInfo.name}</p>
                <p>CPF: {clientInfo.cpf}</p>
            </div>

            <div className="home-button" onClick={() => backToHome()}>
                Voltar pra Home
            </div>
        </>
    );
}