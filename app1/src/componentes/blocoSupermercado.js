import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';


export default function bloco() {
    function abriTela(id){
        window.location.href = `Supermercado/informacoes?id=${id}`;
    }
    return (
        
        <div className="conjunto">
            <div className="Supermercado-img">
                <h2>Senhor dos pasteis</h2>
                <img src={Supermercado}/>
            </div>
            <div className="dado-supermercado">
                <span className="dado">Localização</span><p>&nbsp;&nbsp; Avenida Baden Powell - Jardim Nova Europa, Campinas - SP, Taubate Feirinha</p>
                <span className="dado">Horário de atendimento</span><p>&nbsp;&nbsp; 10h - 22h</p>
                <input 
                    type="button"
                    value="MAIS INFORMAÇÕES"
                    onClick={ ()=>abriTela(1) }    
                />
            </div>
        </div>
        
        
    )
} 