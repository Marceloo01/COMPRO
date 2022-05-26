import React from 'react';

export default function NaoEncontrado(props) {
    props.AlterarTela(window.location.pathname);
    return(
        <>
            <div className="titulo">
                <h1>Página não encontrada</h1>
            </div>
        </>
    )
}