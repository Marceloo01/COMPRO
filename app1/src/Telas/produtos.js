import React, { useEffect, useState } from 'react';
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';
import api from '../service/api_compro';

export default function Produtos(props) {
    props.AlterarTela(window.location.pathname);
    const [produtos,setProd] = useState(null);

    const [carrinho,setCarrinho] = useState([]);

    document.title = "Produtos";

    function mostrarProdClasses(classe) {
        window.location.pathname = `/Produtos/${classe}`;
    }
    
    useEffect(() => {
        api
        .get('/produto')
        .then((response) => {
            setProd(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });        
    }, []);
    useEffect(() => {
        console.log(carrinho)       
    }, [carrinho]);
    return(
        <>
            <center><button className="filtro"
                onClick={()=> {
                    var tiposGrid = document.getElementsByClassName('tipos-produtos')[0];
                    tiposGrid.classList.toggle("aberto");
                    
                }}><p>Filtro</p></button></center>
            <div className="tipos-produtos aberto">
                <div className="tipos" onClick={()=>{ mostrarProdClasses("brinquedos") }}><p>brinquedos</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("frutas") }}><p>frutas/verduras</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("eletrodomesticos") }}><p>eletrodomesticos</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("eletrônicos") }}><p>eletrônicos</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("processados") }}><p>processados</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("bebidas") }}><p>bebidas</p></div>
                <div className="tipos" onClick={()=>{ mostrarProdClasses("Limpeza") }}><p>Limpeza</p></div>
            </div>

            {  produtos?
                <>
                    <SlideProduto titulo="Produtos mais procurados" indice={0} Many={true} array_prod = {produtos} carrinho={carrinho} setCarrinho={setCarrinho}/>
                    <SlideProduto titulo="Mais Baratos" indice={1} Many={true} array_prod = {produtos} carrinho={carrinho} setCarrinho={setCarrinho}/>
                </>
                : <p>Esperando</p>
            }

            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>


        </>
    )
}