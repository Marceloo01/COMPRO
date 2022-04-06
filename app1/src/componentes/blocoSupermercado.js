import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';


export default function bloco() {
    function abriTela(id){
        window.location.href = `Supermercado/informacoes?id=${id}`;
    }
    return (
        
        <div className="conjunto">
            <div className="Supermercado-img">
                <img src={Supermercado}/>
            </div>
            <div className="dado-supermercado">
                <h2>Senhor dos pasteis</h2>
                <p><span className="dado">Localização:</span> Avenida Baden Powell - Jardim Nova Europa, Campinas - SP</p>

                <input 
                    type="button"
                    value="MAIS INFORMAÇÕES"
                    onClick={ ()=>abriTela(1) }    
                />
            </div>
        </div>
        
        
    )
} 