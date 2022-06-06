import React ,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Supermercado_produto.css';
import api from "../service/api_compro";

export default function SupermercadoProduto(props) {
    const [supermercado,setSupermercado] = useState({});
    useEffect (() => {
        
        api
            .get(`/supermercado/exibir/${props._idSuper}`)
            .then((response) => {
                setSupermercado(response.data)
            ;})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        },[])
    return (

        <>
            <div className='supermercado-produto'>
                <div className="img-supermercado-produto">
                    <img src={supermercado.urlImg} alt="produto"/>
                </div>
                <div className="descricao-supermercado-produto">
                    <h3>{supermercado.nome}</h3>
                    <p>Valor encontrado R${(Math.round( Number(props.preco) * 100) / 100).toFixed(2).toString().replace(".",",")}</p>
                    <Link to={`/Supermercado/informacoes/${props._idSuper}`}>Ver Supermercado</Link>
                    
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

                    }}>Adicionar produto</button>
                    
                </div>
            </div>  
        </>
    )
} 