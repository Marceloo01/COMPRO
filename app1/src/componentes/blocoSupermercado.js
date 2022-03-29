import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';

export default function bloco() {
    return (
        <div className="conjunto">
            <div className="Supermercado-img">
                <img src={Supermercado}/>
            </div>
            <div className="nome-supermercado">
                <h1>texo de Exemplio</h1>
            </div>
        </div>
        
    )
}