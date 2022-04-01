import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';


export default function bloco() {
    function abriTela(id){
        window.location.href += `informacoes?id=${id}`;
    }
    return (
        
        <div className="conjunto" onClick={()=>abriTela(1)}>
            <div className="Supermercado-img">
                <img src={Supermercado}/>
            </div>
            <div className="nome-supermercado">
                <h1>Senhor dos pasteis</h1>
                <h2>Localização: Avenida Baden Powell - Jardim Nova Europa, Campinas - SP</h2>
            </div>
        </div>
        
        
    )
} 