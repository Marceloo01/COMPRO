import React from "react";
import '../css/Supermercado_produto.css';

export default function SupermercadoProduto(props) {
    return (
        <>
            <div className='supermercado-produto'>
                <div className="img-supermercado-produto">
                    <img src={props.img} alt="produto"/>
                </div>
                <div className="descricao-supermercado-produto">
                    <h3>nome supermercado</h3>
                    <p>R$50</p>
                    <button>Ver Supermercado</button>
                </div>
            </div>  
        </>
    )
} 