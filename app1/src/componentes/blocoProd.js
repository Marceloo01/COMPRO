import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banana from '../img/banana.png';
import '../css/produtos.css';
import api from '../service/api_compro';

export default function blocoProd(props) {
    const [diferenca, setDiferenca] = useState(null);

    useEffect(()=> {
        
        
        api
        .get(`/produto/diferenca/${props.nome}`)
        .then((response) => {
            setDiferenca(response.data)
        ;})
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[])
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
                    {
                    props._idSuper === "629125e146583b24293df781" ?
                    <p>
                        <span className='maiorPreco'>{diferenca && diferenca.diferenca[0] ?"R$ "+(Math.round(diferenca.diferenca[1].preco * 100) / 100).toFixed(2).toString().replace(".",","):"---  ---"} </span> 
                        <span className='menorPreco'>{diferenca && diferenca.diferenca[1] ?"R$ "+(Math.round(diferenca.diferenca[0].preco * 100) / 100).toFixed(2).toString().replace(".",","):"---  ---"}</span>
                    </p>
                    : 
                    <p>
    
                        <span className='menorPreco'>{"R$ "+(Math.round(props.preco * 100) / 100).toFixed(2).toString().replace(".",",")}</span>
                    </p>
                    }

                    {
                    props._idSuper !== "629125e146583b24293df781" ?
                    <button onClick={()=>{
                        if(localStorage.getItem("carrinho")){ 
                            if(!localStorage.getItem("carrinho").match(props._id)){
                                localStorage.setItem("carrinho", localStorage.getItem("carrinho")+"-"+ props._id);
                            }else{
                                return
                            }
                        }else { localStorage.setItem("carrinho", props._id); }

                        let btn_carrinho = document.getElementById('carrinho');
                        
                        if(btn_carrinho.classList.value === "animar"){ return }
                        
                        btn_carrinho.classList.toggle('animar');
                        setTimeout(()=>{btn_carrinho.classList.toggle('animar')},2500);

                    }}><p>Adicionar ao carrinho</p></button>
                    : <></>}
                    <Link to={`/Produtos/informacoes/${props._id}` }><p>Informações</p></Link>
                </div>
            </div> 
        </div>
    )
}