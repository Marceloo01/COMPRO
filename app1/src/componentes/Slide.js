import React from "react";
import Bloco from "./blocoSupermercado.js"
import '../css/EstiloSlide.css';
import Supermercado from '../img/SupermercadoSlide.jpg'; 

export default function Slid(){
    return (
        <>
        <div className="titulo">
            Supermercados    
        </div>
        <div className="corpoSlide">
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
        </div>

        </>
    )
}