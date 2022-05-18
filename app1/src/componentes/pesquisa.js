import React from 'react';
import '../css/pesquisa.css';
import Img from '../img/lupa.png';

export default function pesquisa(props) {

    return (
        <>
        <div className="pesquisa">
            <img src={Img} alt="Pesquisar"/>
            <input type="text" placeholder={props.hint}/>
            
        </div>
        </>
    )
} 