import React from 'react';
import '../css/ajuda.css';


export default function Ajuda(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Ajuda";
    return(
        <>
            <div className="titulo">
                <h1>Página em construção</h1>
            </div>
        </>
    )
}