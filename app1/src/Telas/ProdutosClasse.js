import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../service/api_compro";
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';

export default function ProdutosClasse(props) {
    props.AlterarTela(window.location.pathname);
    const { classe } = useParams()
    const [produtos,setProd] = useState(null);

    useEffect(() => {
        api
        .get(`produto/${classe}`)
        .then((response) => {
            setProd(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });        
    }, []);

    function mostrarProdClasses(classe) {
        window.location.pathname = `/Produtos/${classe}`;
    }
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
                    <SlideProduto titulo="Produtos mais procurados" indice={0} Many={true} array_prod = {produtos}/>
                    <SlideProduto titulo="Mais Baratos" indice={1} Many={true} array_prod = {produtos}/>
                </>
                : <p>Esperando</p>
            }

            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>

        </>
    )
}