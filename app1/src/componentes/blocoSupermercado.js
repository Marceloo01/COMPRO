import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';


export default function bloco(props) {
    function abriTela(id){
        window.location.href = `Supermercado/informacoes/${id}`;
    }
    return (
        
        <div className="conjunto">
            <div className="Supermercado-img">
                <h2>{props.nome}</h2>
                <img draggable="false" src={Supermercado}/>
            </div>
            <div className="dado-supermercado">
                <span className="dado">Localização</span><p>&nbsp;&nbsp; {props.rua} - {props.bairro} - {props.cidade} - {props.estado}</p>
                <span className="dado">Horário de atendimento</span><p>&nbsp;&nbsp; 10h - 22h</p>
                <input 
                    type="button"
                    value="MAIS INFORMAÇÕES"
                    onClick={ ()=>abriTela(props._id) }    
                />
            </div>
        </div>
        
        
    )
} 