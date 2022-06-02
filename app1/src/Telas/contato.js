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
                <Integrantes nome="Natiely Vitor" img={Nat} email="natielyandrade30" cargo="Diretora" numero="12 99168-2912"/>
                <Integrantes nome="Thaissa Guedes" img={Thaissa} email="thaissaguedes16" cargo="Coordenadora" numero="12 99139-9087"/>
                <Integrantes nome="Renato Ribeiro" img={Renato} email="renatoribeiro.256991" cargo="Coordenador" numero="12 99112-9009"/>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6408421519327!2d-45.58215248441616!3d-23.036955848321703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf8ed628b4757%3A0x65641c38ea0424cc!2sEscola%20SENAI%20F%C3%A9lix%20Guisard!5e0!3m2!1spt-BR!2sbr!4v1653594397538!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
