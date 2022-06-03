import React from 'react';
import { Link } from 'react-router-dom';

export default function Filtro(props){
    function mostrarProdClasses(classe) {
        window.location.pathname = `/Produtos/${classe}`;
    }

    return(
        <>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("") }}><p>Tirar filtro</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("brinquedos") }}><p>brinquedos</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("pets") }}><p>pets</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("frutas") }}><p>frutas/verduras</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("eletrodomesticos") }}><p>eletrodomesticos</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("eletronicos") }}><p>eletrônicos</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("processados") }}><p>processados</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("bebidas") }}><p>bebidas</p></div>
            <div className="tipos" onClick={()=>{ mostrarProdClasses("Limpeza") }}><p>Limpeza</p></div>
        </>
    )
}