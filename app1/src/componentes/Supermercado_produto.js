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
                    <h3>{props._idSuper}</h3> 
                    <p>R${props.preco}</p>
                    <button onClick={()=>{window.location.pathname = `Supermercado/informacoes/${props._idSuper}`}}>Ver Supermercado</button>
                </div>
            </div>  
        </>
    )
} 