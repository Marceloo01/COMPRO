import react from 'react';
import '../css/variaveis.css';
import Pesquisa from '../componentes/pesquisa.js';

export default function Produtos() {

    return(
        <>
            <div className="titulo">
                <h1>Veja os Produtos</h1>
            </div>
            <Pesquisa hint="Procure por produtos"/>
            
            <div className="subititulo">Tipo De Produtos</div>

        </>
    )
}