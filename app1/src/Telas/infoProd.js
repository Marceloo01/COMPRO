import React, {useEffect, useState}from 'react';
import '../css/infoProduto.css';
import SupermercadoProduto from '../componentes/Supermercado_produto';
import api from '../service/api_compro';
import { useParams } from 'react-router-dom';
import '../css/variaveis.css';

export default function InformacaoProduto(props) {
    props.AlterarTela(window.location.pathname);
    const [produto,setProd] = useState({});
    const [produtos,setProds] = useState([]);
    const { id } = useParams();
    useEffect (() => {
        api
        .get(`/produto/exibir/${id}`)
        .then((response) => {
            setProd(response.data);
            api
                .get(`/produto/barato/${response.data.nome}`)
                .then((response) => {
                    setProds(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            }); 
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[]);

    return(
        <>
            <div className="conjunto-info-produto">
                <div className="img-info-produto">
                    {(produto._idSupermercado !== "629125e146583b24293df781")?
                        <button id="Mapa" onClick={()=>{
                            let srcImg = document.getElementById('imagem_m_p');    
                        
                            srcImg.src === produto.urlImg ? 
                            srcImg.src = produto.urlImgLocal :
                            srcImg.src = produto.urlImg;
                        
                        }}
                        >mapa do supermercado</button>
                        :<></>
                    }
                    <img id="imagem_m_p" src={produto.urlImg} alt="produto"/>
                </div>
                <div className="info-produto">
                    <h3>{produto.nome}</h3>
                    <p>Encontrado em {Math.floor(Math.random()*400+1)} supermercados</p>
                    <p>Diferença de preço <span> R$90 </span> <span>R${produto.preco}</span> {produto.preco_medida}</p>
                    <p>{produto.classeProduto}</p>
                    {
                        (produto._idSupermercado !== "629125e146583b24293df781")?
                        <p><button className='adicionar'>Adicionar ao carrinho</button></p>
                        :<></>
                    }
                </div>
            </div>
            <div className='subititulo'>Supermercados com este produto</div>

            {
                produtos.map( v => {
                    if(v._idSupermercado !== "629125e146583b24293df781"){
                        return(
                            <SupermercadoProduto key={v._id} _id={v._id} _idSuper={v._idSupermercado} preco={v.preco.toString().replace(".",",")}/>
                        )
                    }
                    return(<></>);
                })
            }
            {/* <SupermercadoProduto img={Banana}/>
            <SupermercadoProduto img={Banana}/>
            <SupermercadoProduto img={Banana}/>
            <SupermercadoProduto img={Banana}/> */}
        </>
    )
} 