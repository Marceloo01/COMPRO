import React from "react";
import Bloco from "./blocoSupermercado.js";
import '../css/EstiloSlide.css';

export default function Slid(){
    return (
        <div id="conjuntoSlide">
            <div className="titulo">
                Top supermercados para você  
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
            </div>
            <div className="botoes-slide">
                <input type="button" value="<"/>
                <input type="button" value=">"/>
            </div>

        </div>
    )
}