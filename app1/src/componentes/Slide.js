import React from "react";
import Bloco from "./blocoSupermercado.js"
import '../css/EstiloSlide.css';

export default function Slid(){
    return (
        <div id="conjuntoSlide">
        <div className="titulo">
            Supermercados    
        </div>
        <div className="corpoSlide">
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
            <Bloco/>
        </div>

        </div>
    )
}