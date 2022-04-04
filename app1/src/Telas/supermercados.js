import react from "react";
import Supermercado from "../img/SupermercadoSlide.jpg";
import '../css/supermercados.css';
import Slid from '../componentes/Slide.js';
import Pesquisa from '../componentes/pesquisa.js';

export default function superMercados() {

    return (
        <>
        <div className="titulo">
            <h1>Veja os Supermercados</h1>
        </div>
        <Pesquisa/>

        <div className="subititulo">supermercados em destaque</div>

        <div className="conjunto-supermercados">
            <div className="Supermercado-img-supermercados">
                <img src={Supermercado}/>
            </div>
            <div className="nome-supermercado-supermercados">
                <h1>Senhor dos pasteis</h1>
                <h2>Localização: Avenida Baden Powell - Jardim Nova Europa, Campinas - SP</h2>
            </div>
        </div>

        <Slid  titulo="Supermercados em destaque" />
        <Slid  titulo="Supermercados com maior avaliação" />

        </>
    )
}