import React, {useEffect, useState} from 'react';
import '../css/produtos.css';
import ConjuntoProd from './blocoProd.js';
import api from '../service/api_compro';

export default function SlideProduto(props) {
    document.title = "Produtos";
    var contador = 0;
    const [produtos,setProd] = useState([]);

    useEffect(() => {
        console.log(props.array_prod)
        setProd(props.array_prod);
            
        
    }, []);

    function slideToRight(e) {
        const value = getComputedStyle(e).getPropertyValue('--qt');
        if( contador-value-1 < document.getElementsByClassName("Slide-produto")[0].children.length*-1 ) return
        
        contador--;
        e.style = `--espaco:${contador}`
        
    }

    function slideToLeft(e) {
        if( contador+1 > 0 ) return
        contador++;
        e.style = `--espaco:${contador}`
        
    }
    return(
        <>
        <div className="titulo-slide" style={{marginTop: '100px'}}>{props.titulo}</div>
            <div className='base-slide-produto'>
                <div onClick={()=>slideToLeft(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto left'></div>
                <div className='Slide-produto'>  
                {produtos.map((value) =>{
                    return (<ConjuntoProd 
                        key={value._id} 
                        _id={value._id} 
                        urlImg={value.urlImg}
                        urlImgLocal={value.urlImgLocal}
                        nome={value.nome} 
                        marca={value.marca} 
                        MinPreco={value.preco}
                        MaxPreco={props.Many ?value.preco+90: ""}
                        preco_medida={value.preco_medida}
                        classeProduto={value.classeProduto}
                        carrinho={props.carrinho} setCarrinho={props.setCarrinho}
                        />);
                    })}
                </div>
                <div onClick={()=>slideToRight(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto right'></div> 
            </div>
        </>
    )
}