import react from "react";
import Supermercado from "../img/SupermercadoSlide.jpg";

export default function superMercados() {

    return (
        <>
        <div className="titulo">
            <h1>Veja os Supermercados</h1>
        </div>

        <div className="subititulo">melhores classificações</div>

        <div className="conjunto">
            <div className="Supermercado-img">
                <img src={Supermercado}/>
            </div>
            <div className="nome-supermercado">
                <h1>Senhor dos pasteis</h1>
                <h2>Localização: Avenida Baden Powell - Jardim Nova Europa, Campinas - SP</h2>
            </div>
        </div>


        </>
    )
}