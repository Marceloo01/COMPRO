import React, { useEffect, useState } from 'react';
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';
import api from '../service/api_compro';
import { useParams } from 'react-router-dom';

export default function Produtos(props) {
    props.AlterarTela(window.location.pathname);
    const [produtos,setProd] = useState(null);
    const [produtosF,setProdF] = useState(null);
    const { classe, id } = useParams()
    document.title = "Produtos";

    function mostrarProdClasses(classe) {
        window.location.pathname = `/Supermercado/${id}/Produtos/${classe}`;
    }
    
    useEffect(() => {
        api
        .get(`supermercado/produto/${id}/${classe}`)
        .then((response) => {
            setProd(response.data);
            setProdF(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });        
    }, []);

    useEffect(() => {
        
        let filtroP = new RegExp(`(${props.filtro}){1,}`, 'gi');

        if(!produtos) return;
        setProdF(
            produtos.filter( v =>{
                return !!v.nome.match(filtroP);
            })
        );
    },[props.filtro])
    
    useEffect(()=>{

    },[produtosF])

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

            {  produtosF?
                <>
                    <SlideProduto titulo="Produtos mais procurados" indice={0} Many={true} array_prod={
                    produtosF.sort(function(a, b){
                        if (a.preco > b.preco) return 1;
                        if (a.preco < b.preco) return -1;
                        return 0;
                    })
                    } filtro={props.filtro} />
                    <SlideProduto titulo="Mais Baratos" indice={1} Many={true} array_prod={
                        produtosF.sort(function(a, b){
                            if (a.preco > b.preco) return -1;
                            if (a.preco < b.preco) return 1;
                            return 0;
                        })
                    } filtro={props.filtro} />
                </>
                : <div className="carregando">
                    <div className="quadrado" style={{animationDelay : "-.1s"}}></div>
                    <div className="quadrado" style={{animationDelay : "-.2s"}}></div>
                    <div className="quadrado" style={{animationDelay : "-.4s"}}></div>
                </div>
            }
            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>

        </>
    )
}