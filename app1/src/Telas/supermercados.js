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
        <Pesquisa hint="Procure por supermercados"/>

        <Slid  titulo="Supermercados em destaque" />
        <Slid  titulo="Supermercados com maior avaliação" />

        <div className="supermercados-all">
            <button>Veja a Lista completa dos supermercados</button>
        </div>

        </>
    )
}