import React from "react";
import Supermercado from '../img/SupermercadoSlide.jpg';
import { Link } from 'react-router-dom';


export default function bloco(props) {
   
    return (
        
        
        <div className="conjunto">
            <div className="Supermercado-img">
                {/* <h2>{props.nome}</h2> */}
                <img draggable="false" src={ props.urlImg || Supermercado  } alt="supermercado"/>
            </div>
            <div className="dado-supermercado">
                <span className="dado">Localização</span><p>&nbsp;&nbsp; {props.rua} - {props.bairro} - {props.cidade} - {props.estado}</p>
                <span className="dado">Horário de atendimento</span><p>&nbsp;&nbsp; {props.abertura} - {props.fechamento}</p>
                <Link to={`/Supermercado/informacoes/${props._id}`} >MAIS INFORMAÇÕES </Link>
            </div>
        </div>
        
        
    )
} 