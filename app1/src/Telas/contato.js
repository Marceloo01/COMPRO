import React from 'react';
import '../css/contato.css';
import Integrantes from '../componentes/integrante.js';
import Yulian from '../img/integrantes/Yulian.jpg';
import Marcelo from '../img/integrantes/Marcelinho.jpg';
import Nat from '../img/integrantes/IMG_1788.jpg';
import Thaissa from '../img/integrantes/Thaissa.jpg';
import Renato from '../img/integrantes/Renato.jpg';

export default function Contato (props){
    document.title = "Contato"; 
    props.AlterarTela(window.location.pathname);
    return (
        <>
            <div id="contato">
                <Integrantes nome="Marcelo Augusto" img={Marcelo} email="marcelinhooliveria2090" cargo="ProgramadorFront-End" numero="12 99174-7752"/>
                <Integrantes nome="Yulian Santiago" img={Yulian} email="knoob0733" cargo="Programador Back-End" numero="12 99171-2418"/>
                <Integrantes nome="Natiely Vitor" img={Nat} email="natielyandrade30" cargo="Diretora" numero="12 99168-2913"/> 
                <Integrantes nome="Thaissa Guedes" img={Thaissa} email="thaissaguedes16" cargo="Coordenadora" numero="12 99139-9087"/>
                <Integrantes nome="Renato Ribeiro" img={Renato} email="renatoribeiro.256991" cargo="Coordenador" numero="12 99112-9009"/>
            </div>
        </>
    )
}
