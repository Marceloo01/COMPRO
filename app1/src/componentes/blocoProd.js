import React from 'react';
import { Link } from 'react-router-dom';
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
                    <p>
                        <span className='maiorPreco'>{props.MaxPreco?"R$ "+ (Math.round(props.MaxPreco * 100) / 100).toFixed(2).toString().replace(".",","):""} </span> 
                        <span className='menorPreco'> {"R$ "+(Math.round(props.MinPreco * 100) / 100).toFixed(2).toString().replace(".",",")}</span>
                    </p>
                    <button onClick={()=>{
                        if(localStorage.getItem("carrinho")){ 
                            if(!localStorage.getItem("carrinho").match(props._id)){
                                localStorage.setItem("carrinho", localStorage.getItem("carrinho")+"-"+ props._id);
                            }else{
                                return
                            }
                        }else { localStorage.setItem("carrinho", props._id); return }

                        let btn_carrinho = document.getElementById('carrinho');
                        
                        if(btn_carrinho.classList.value === "animar"){ return }
                        
                        btn_carrinho.classList.toggle('animar');
                        setTimeout(()=>{btn_carrinho.classList.toggle('animar')},2500);

                    }}><p>Adicionar ao carrinho</p></button>
                    <Link to={`/Produtos/informacoes/${props._id}` }><p>Informações</p></Link>
                </div>
            </div> 
        </div>
    )
}