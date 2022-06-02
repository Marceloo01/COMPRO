import React from 'react';
import '../css/ajuda.css';
import '../css/variaveis.css';
import Supermercados from '../img/ajuda/supermercados.png';
import SupermercadoInfo from  '../img/ajuda/supermercado-info.png';
import ProdutosTela from '../img/ajuda/produtos-Tela.png';
import InformacaoProduto from '../img/ajuda/informacao-produto.png';
import InformacaoProduto2 from '../img/ajuda/informacao-produto2.png';
import CarrinhoTela from '../img/ajuda/carrinho-Tela.png';
import CarrinhoTela2 from '../img/ajuda/carrinho-Tela2.png';


export default function Ajuda(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Ajuda";
    return(
        <>
            <div className="links">
                <ul>
                    <h3>Supermercado</h3>
                    <li>
                        <a href='#supermercado-detalhes'>ver informações do supermercado</a>
                    </li>
                    <li>
                        <a href='#supermercado-detalhes1'>carregar mais uspermercados</a>
                    </li>
                    <li>
                        <a href='#supermercado-detalhes2'>informações do supermercado</a>
                    </li>
                </ul>
                        
                <ul>
                    <h3>Produto</h3>
                <li>
                        <a href='#classe-de-produtos'>classe de produtos</a>
                    </li>
                    <li>
                        <a href='#classe-de-produtos'>como adicionar o produto no carrinho</a>
                    </li>
                    <li>
                        <a href='#classe-de-produtos'>informações do produto</a>
                    </li>
                    <li>
                        <a href='#produto-info'>informações do produto 2</a>
                    </li>
                </ul>

                <ul>
                    <h3>Carrinho</h3>
                    <li>
                        <a href='#carro-detalhes1'>carrinho</a>
                    </li>
                    <li>
                        <a href='#carro-detalhes2'>cconteúdo do carrinho</a>
                    </li>
                </ul>
            </div>

            <div className='titulo'>
                <h1>supermercado</h1>
            </div>

            <div className='subititulo' id="supermercado-detalhes">os supermercados</div>
            <div className='links' >
                <div id="supermercado-detalhes1" className='ponto-ajuda' style={{left:15+"%", top: 52.76+"%" }}>
                    <p>Clicando aqui você pode ver todos os dados do supermercado slecionado</p>
                </div>
                <div  id="supermercado-detalhes1-1" className='ponto-ajuda' style={{left:50+"%", top: 94+"%" }}>
                    <p>Clicando aqui você carrega mais supermercados</p>
                </div>
                <img src={Supermercados}/>
            </div>

            <div  className='subititulo'>informações do supermercado</div>
            <div className='links' >
                <div  id="supermercado-detalhes1-2" className='ponto-ajuda' style={{left:72.50+"%", top: 69+"%" }}>
                    <p>clique aqui para ver todos os produtos do supermercado selecionado</p>
                </div>
                <img id="supermercado-detalhes2" src={SupermercadoInfo}/>
            </div>

            <div className='titulo'>
                <h1>produtos</h1>
            </div>

            <div id="classe-de-produtos" className='subititulo'>navegando na tela e produtos</div>
            <div className='links' >
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 27+"%" }}>
                    <p>aqui você pode esclher que tipo de produtos quer ver</p>
                </div>
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 85+"%" }}>
                    <p>adiciona o produto no Carrinho</p>
                </div>
                <div  id="produto-detalhes1-1" className='ponto-ajuda' style={{left:30+"%", top: 90+"%" }}>
                    <p>para ver as informações do produto</p>
                </div>
                <img id="supermercado-detalhes2" src={ProdutosTela}/>
            </div>

            <div  className='subititulo'>informações do produto</div>
            <div className='links' >
                <div  id="produto-detalhes1-2" className='ponto-ajuda' style={{left:30.50+"%", top: 12+"%" }}>
                    <p>aqui mosstra onde o produto fica no supermercado</p>
                </div>
                <img id="produto-info" src={InformacaoProduto}/>
            </div>

            <div  className='subititulo'>informações do produto</div>
            <div className='links' >
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 50+"%" }}>
                    <p>abaixo temos os upermercados com este produto</p>
                </div>
                <img id="supermercado-detalhes2" src={InformacaoProduto2}/>
            </div>

            <div className='titulo'>
                <h1>carrinho</h1>
            </div>

            <div  className='subititulo'>sobre o carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:95+"%", top: 90+"%" }}>
                    <p>clique aqui para abrir e fechar o carrinho</p>
                </div>

                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:90+"%", top: 50+"%" }}>
                    <p>precisa-se ir para a tela de produtos para adiciona-los ao carrinho</p>
                </div>
                <img id="carro-detalhes1" src={CarrinhoTela}/>
            </div>

            <div  className='subititulo'>conteúdo do carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1-1" className='ponto-ajuda' style={{left:88+"%", top: 23+"%" }}>
                    <p>abaixe e aumene a quantidade de produtos</p>
                </div>

                <div  id="carrro-saldo" className='ponto-ajuda' style={{left:85+"%", top: 75+"%" }}>
                    <p>seu saldo</p>
                </div>

                <img id="carro-detalhes2" src={CarrinhoTela2}/>
            </div>
        </>
    )
}
