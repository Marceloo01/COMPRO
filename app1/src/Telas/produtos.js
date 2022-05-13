import React from 'react';
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';

export default function Produtos() {
    document.title = "Produtos";
    var contador = 0;

    return(
        <>
            

                <center><button className="filtro"
                onClick={()=> {
                    var tiposGrid = document.getElementsByClassName('tipos-produtos')[0];
                    console.log('oi');
                    tiposGrid.classList.toggle("aberto");
                    
                }}><p>Filtro</p></button></center>
            <div className="tipos-produtos aberto">
                <div className="tipos"><p>brinquedos</p></div>
                <div className="tipos"><p>frutas/verduras</p></div>
                <div className="tipos"><p>eletrodomesticos</p></div>
                <div className="tipos"><p>notebooks/celulares</p></div>
                <div className="tipos"><p>processados</p></div>
            </div>

            <SlideProduto titulo="Produtos mais procurados" indice={0}/>
            <SlideProduto titulo="Mais Baratos" indice={1}/>

            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>


        </>
    )
}