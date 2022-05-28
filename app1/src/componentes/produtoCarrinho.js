import React, { useState, useEffect} from "react";
import '../css/produtoCarrinho.css';
import api from "../service/api_compro";

export default function ProdutoCarrinho(props) {
    let rId = new RegExp(`-{0,1}${props.id}`, 'g');
    
    const [temporario,setT] = useState(1);
    const [prodC,setProdC] = useState({});

    useEffect (() => {
        api
        .get(`/produto/exibir/${props.id}`)
        .then((response) => {
            setProdC(response.data)
        ;})
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[])

    return(
        <div className="componente-ProdCar">
            <div className="remove-ProdCar" 
                onClick={()=>{
                    console.log(rId)
                    localStorage.setItem("carrinho",
                    localStorage.getItem("carrinho").
                        replaceAll(rId,""));
                            
                    props.setCar(localStorage.getItem("carrinho"));
                }}
            >x</div>
            <div className="ProdCar-img">
                <img src={prodC.urlImg} alt={prodC.nome}></img>
            </div>
            <div className="ProdCar-desc">
                <div> {prodC.nome}</div>
                <div className="preco-prod"> R$ {(Math.round(prodC.preco * 100) / 100).toFixed(2).toString().replace(".",",")+`\t${prodC.preco_medida}`}</div>
                <div className="controle-prod">
                    <button onClick={()=>{if(temporario!==1)setT(temporario-1)}} >-</button>
                    <input 
                        type="number" 
                        value={temporario} 
                        min="1" 
                        onChange={(event)=>{setT(Number(event.target.value))
                    }}></input>
                    <button onClick={()=>{setT(temporario+1)}} >+</button>
                </div>
            </div>
        </div>
    )
}