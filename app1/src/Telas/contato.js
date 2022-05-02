import react from 'react';
import '../css/contato.css';
import Integrantes from '../componentes/integrante.js';
import Yulian from '../img/integrantes/Yulian.jpg'
import Marcelo from '../img/integrantes/Marcelinho.jpg'
import Nat from '../img/integrantes/IMG_1788.jpg'
import Thaissa from '../img/integrantes/Thaissa.jpg'
import Renato from '../img/integrantes/Renato.jpg'

export default function Contato (){
    document.title = "Contato";
    return (
        <>
            <div className="titulo"><h1>Contato</h1></div>
            <div id="contato">
                <Integrantes nome="Marcelo Augusto de Olivera" img={Marcelo} email="marcelinhooliveria2090" cargo="ProgramadorFront-End"/>
                <Integrantes nome="Yulian Santiago Almanza" img={Yulian} email="knoob0733" cargo="Programador Back-End"/>
                <Integrantes nome="Natiely" img={Nat} email="natielyandrade30" cargo="Diretora"/>
                <Integrantes nome="Thaissa" img={Thaissa} email="ThaisaSenai" cargo="Marketing"/>
                <Integrantes nome="Renato" img={Renato} email="renatoribeiro.256991" cargo="Marketing"/>
            </div>
        </>
    )
}