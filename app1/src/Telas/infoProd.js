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
    const [diferenca, setDiferenca] = useState(null);

    const { id } = useParams();
    useEffect (() => {
        api
        
        .get(`/produto/exibir/${id}`)
        .then((responseP) => {
            setProd(responseP.data);
            api
                .get(`/produto/barato/${responseP.data.nome}`)
                .then((response) => {
                    setProds(response.data);
                    api
                    .get(`/produto/diferenca/${responseP.data.nome}`)
                        .then((response) => {
                        
                            setDiferenca(response.data);
                    })
                    .catch((err) => {
                        console.error("ops! ocorreu um erro" + err);
                    });
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
                    <p>Diferença de preço &nbsp;
                    <span>{diferenca && diferenca.diferenca[0] ?"R$ "+(Math.round(diferenca.diferenca[1].preco * 100) / 100).toFixed(2).toString().replace(".",","):"---"} </span> 
                    &nbsp;
                    <span>{diferenca && diferenca.diferenca[1] ?"R$ "+(Math.round(diferenca.diferenca[0].preco * 100) / 100).toFixed(2).toString().replace(".",","):"---"}</span> 
                    &nbsp;
                    {produto.preco_medida}</p>
                    <p>{produto.classeProduto}</p>
                    {
                        (produto._idSupermercado !== "629125e146583b24293df781")?
                        <p><button className='adicionar' onClick={()=>{
                            if(localStorage.getItem("carrinho")){ 
                                if(!localStorage.getItem("carrinho").match(produto._id)){
                                    localStorage.setItem("carrinho", localStorage.getItem("carrinho")+"-"+ produto._id);
                                }else{
                                    return
                                }
                            }else { localStorage.setItem("carrinho", produto._id);}
    
                            let btn_carrinho = document.getElementById('carrinho');
                            
                            if(btn_carrinho.classList.value === "animar"){ return }
                            
                            btn_carrinho.classList.toggle('animar');
                            setTimeout(()=>{btn_carrinho.classList.toggle('animar')},2500);
    
                        }}>Adicionar ao carrinho</button></p>
                        :<></>
                    }
                </div>
            </div>
            <div className='subititulo'>Supermercados com este produto</div>

            {
                
                produtos.map( v => {
                    if(v._idSupermercado !== "629125e146583b24293df781"){
                        return(
                            <SupermercadoProduto key={v._id} _id={v._id} _idSuper={v._idSupermercado} preco={v.preco}/>
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