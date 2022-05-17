import React from "react";
import '../css/Supermercado_produto.css';

export default function SupermercadoProduto(props) {
    return (
        <>
            <div className='Informacoes-supermercado-produto'>
                <img className="supermercado-produto-img" src={props.img} />
                <p>OI</p>
                
            </div>
        </>
    )
}