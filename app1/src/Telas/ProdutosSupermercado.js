import React, { useEffect , useState} from "react";
import SlideProduto from '../componentes/SlideProduto';
import api from '../service/api_compro';
import { useParams } from 'react-router-dom';

export default function ProdutosSupermercado() {

    document.title = "Informações";
    const [Prod_Super,setProdSuper] = useState(null);
    const { id } = useParams();
    useEffect (() => {
        
        console.log(id);
        api
            .get(`/supermercado/produto/${id}`)
            .then((response) => {
                setProdSuper(response.data)
                console.log(response.data)
            ;})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        },[])

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
            {   Prod_Super?
                <>
                    <SlideProduto titulo="Produtos mais procurados" indice={0} array_prod = {Prod_Super}/>
                    <SlideProduto titulo="Mais Baratos" indice={1} array_prod = {Prod_Super}/>
                </>
                : <p>"Esperando"</p>
            }
            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>
            
        </>
    )
}