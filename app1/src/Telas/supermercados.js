import React from "react";
import '../css/supermercados.css';
import Slid from '../componentes/Slide.js';

export default function superMercados(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Supermercados";
    return (
        <>
        {/* <div className="titulo">
            <h1>Veja os Supermercados</h1>
        </div> */}

        <Slid  titulo="Supermercados em destaque" />
        <Slid  titulo="Supermercados com maior avaliação" />

        <div className="supermercados-all">
            <button><p>Mais supermercados</p></button>
        </div>

        </>
    )
}