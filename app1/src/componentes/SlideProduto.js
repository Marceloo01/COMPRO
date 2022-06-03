import React, {useEffect, useState} from 'react';
import '../css/produtos.css';
import ConjuntoProd from './blocoProd.js';

export default function SlideProduto(props) {
    document.title = "Produtos";
    var contador = 0;
    const [carrinho,setCarrinho] = useState("");
    // const [quantidade,setQuantidade] = useState("");

    useEffect(() => {
        
        if(!localStorage.getItem("carrinho")) localStorage.setItem("carrinho",""); 

    }, []);

    useEffect(()=>{

        if(carrinho !== localStorage.getItem("carrinho"))
                setCarrinho(localStorage.getItem("carrinho"));

    },[carrinho])
    



    async function slideToRight(e) {
        var contador = Number(getComputedStyle(e).getPropertyValue('--espaco'));
        const value = getComputedStyle(e).getPropertyValue('--qt');
        
        if( contador-value-1 < document.getElementsByClassName("Slide-produto")[props.indice].children.length*-1 ) {return}
        
        contador--;

        e.style = `--espaco:${contador}`
    }
    

    function slideToLeft(e) {
        var contador = Number(getComputedStyle(e).getPropertyValue('--espaco'));
        const value = getComputedStyle(e).getPropertyValue('--qt');

        if( contador+value+1 > 0 ) {return}
        
        contador++;
        e.style = `--espaco:${contador}`
        
    }

    return(
        <>
        <div className="titulo-slide" style={{marginTop: '100px'}}>{props.titulo}</div>
            <div className='base-slide-produto'>
                <div onClick={()=>slideToLeft(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto left'></div>
                <div className='Slide-produto'>  

                { props.array_prod.length > 0 ? props.array_prod.map((value) =>{
                    return (<ConjuntoProd 
                        key={value._id} 
                        _id={value._id}
                        _idSuper={value._idSupermercado}
                        urlImg={value.urlImg}
                        urlImgLocal={value.urlImgLocal}
                        nome={value.nome} 
                        marca={value.marca} 
                        MinPreco={value.preco}
                        MaxPreco={props.Many ?value.preco+90: ""}
                        preco_medida={value.preco_medida}
                        classeProduto={value.classeProduto}
                        carrinho={carrinho} setCarrinho={setCarrinho}
                        />);
                    }) : <div className='naoEncontrado'>nenhum produto encontrado com este valor: {props.filtro}</div>}
                </div>
                <div onClick={()=>slideToRight(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto right'></div> 
            </div>
        </>
    )
}