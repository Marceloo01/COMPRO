import react from 'react';
import '../css/variaveis.css';
import Pesquisa from '../componentes/pesquisa.js';
import '../css/produtos.css';
import ConjuntoProd from '../componentes/blocoProd.js';

export default function Produtos() {

    return(
        <>
            <div className="titulo">
                <h1>Veja os Produtos</h1>
            </div>
            <Pesquisa hint=" Procure por produtos"/>
            
            <div className="subititulo">Tipos De Produtos</div>


            <div className="tipos-produtos">
                <div className="tipos"><p>brinquedos</p></div>
                <div className="tipos"><p>frutas/verduras</p></div>
                <div className="tipos"><p>eletrodomesticos</p></div>
                <div className="tipos"><p>notebooks/celulares</p></div>
                <div className="tipos"><p>processados</p></div>
            </div>


            <div className="grid-prod">
                <ConjuntoProd/>
                <ConjuntoProd/>
                <ConjuntoProd/>
            </div>
            

            <div className="supermercados-all">
                <button>Veja a Lista completa dos Produtos</button>
            </div>


        </>
    )
}