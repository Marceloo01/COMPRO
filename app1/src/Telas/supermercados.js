import React, {useState} from "react";
import '../css/supermercados.css';
import Slid from '../componentes/Slide.js';
import ReactDOM from 'react-dom';

export default function superMercados(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Supermercados";
    const [slides,setSlides] = useState([
        <Slid key="0"  titulo="Supermercados em destaque" />,
        <Slid key="1" titulo="Supermercados com maior avaliação" />
    ]);
    return (
        <>
        {/* <div className="titulo">
            <h1>Veja os Supermercados</h1>
        </div> */}
        <div  id="all-slides-super">
            {slides.map(v => v)}
        </div>
        <div className="supermercados-all">
            <button onClick={()=>{
                setSlides([...slides,<Slid key={slides.length+1} 
                    titulo="" />])
            }}><p>Mais supermercados</p></button>
            
        </div>

        </>
    )
}