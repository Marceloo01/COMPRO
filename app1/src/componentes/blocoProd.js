import React from 'react';
import banana from '../img/banana.png';
import '../css/produtos.css';

export default function blocoProd(props) {
    return(
        
        <div className='produto'>
            <div className='img-produto'>
                <img draggable="false" src={props.urlImg || banana} alt="produto"/>
            </div>
            <div className='nome-produto'>
                <span>{props.nome}</span>
            </div>
            <div className='informacao-produto'>
                <p>Encontrado em 7 supermercados</p>
            </div>
            <div className='btns-produto'>
                <div className='diferenca-preco-produto'>
                    <p><span className='maiorPreco'>R$ {props.preco+90} </span> <span className='menorPreco'> R$ {props.preco}</span></p>
                    <button onClick={()=>{alert("Produto adicionado ao carrinho")}}><p>Adicionar ao carrinho</p></button>
                    <button onClick={()=>{window.location.href=`/Produtos/informacoes/${props._id}`}}><p>Informações</p></button>
                </div>
            </div> 
        </div>
    )
}