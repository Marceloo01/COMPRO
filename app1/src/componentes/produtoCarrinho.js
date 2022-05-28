import React, { useState } from "react";
import '../css/produtoCarrinho.css'

export default function ProdutoCarrinho(props) {
    let rId = new RegExp(`-{0,1}${props.id}`, 'g');
    const [temporario,setT] = useState(1);
    return(
        <div className="componente-ProdCar">
            <div className="remove-ProdCar" 
                onClick={()=>{
                    console.log(rId)
                    localStorage.setItem("carrinho",
                        localStorage.getItem("carrinho").
                            replaceAll(rId,""))
                            
                    props.setCar(localStorage.getItem("carrinho"));
                }}
            >x</div>
            <div className="ProdCar-img"></div>
            <div className="ProdCar-desc">
                <div> {props.id}Guarana 200ml test tes te ste sa</div>
                <div className="controle-prod">
                    <button onClick={()=>{if(temporario!==1)setT(temporario-1)}} >-</button>
                    <input type="number" value={temporario} min="1" onChange={(event)=>{setT(Number(event.target.value))}}></input>
                    <button onClick={()=>{setT(temporario+1)}} >+</button>
                </div>
            </div>
        </div>
    )
}