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
                    <p>Valor encontrado R${props.preco}</p>
                    <Link to={`/Supermercado/informacoes/${props._idSuper}`}>Ver Supermercado</Link>
                </div>
            </div>  
        </>
    )
} 