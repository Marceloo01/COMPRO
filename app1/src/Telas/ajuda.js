import React from 'react';
import '../css/ajuda.css';
import '../css/variaveis.css';
import Supermercados from '../img/ajuda/supermercados.png';
import Supermercados2 from '../img/ajuda/supermercados2.png';
import SupermercadoInfo from  '../img/ajuda/supermercado-info.png';
import InformacaoProduto from '../img/ajuda/informacao-produto.png';
import InformacaoProduto2 from '../img/ajuda/informacao-produto2.png';
import CarrinhoTela from '../img/ajuda/carrinho-Tela.png';
import CarrinhoTela2 from '../img/ajuda/carrinho-Tela2.png';
import Barrapesquisa from '../img/ajuda/barra-pesquisa.png';


export default function Ajuda(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Ajuda";
    return(
        <>
            <div className="links">
                <ul>
                    <h3>Supermercado</h3>
                    <li>
                        <a href='#supermercado-detalhes'>Ver informações do supermercado</a>
                    </li>
                    <li>
                        <a href='#carregar-mais-supermercados'>Carregar mais supermercados</a>
                    </li>
                    <li>
                        <a href='#supermercado-detalhes2'>Informações do supermercado</a>
                    </li>
                </ul>
                        
                <ul>
                    <h3>Produto</h3>
                <li>
                        <a href='#classe-de-produtos'>Classe de produtos</a>
                    </li>
                    <li>
                        <a href='#classe-de-produtos'>Como adicionar o produto no carrinho</a>
                    </li>
                    <li>
                        <a href='#classe-de-produtos'>Informações do produto</a>
                    </li>
                    <li>
                        <a href='#produto-info'>Informações do produto 2</a>
                    </li>
                </ul>

                <ul>
                    <h3>Carrinho</h3>
                    <li>
                        <a href='#carro-detalhes1'>Carrinho</a>
                    </li>
                    <li>
                        <a href='#carro-detalhes2'>Conteúdo do carrinho</a>
                    </li>
                </ul>
            </div>


            <div className='titulo'>
                <h1>Supermercado</h1>
            </div>

            <div className='subititulo' id="supermercado-detalhes">Os supermercados</div>
            <div className='links' >
                <div id="supermercado-detalhes1" className='ponto-ajuda' style={{left:16+"%", top: 41.60+"%" }}>
                    <p>Clicando aqui você pode ver todos os dados do supermercado slecionado</p>
                </div>
                <div  id="supermercado-detalhes1-1" className='ponto-ajuda' style={{left:50+"%", top: 94+"%" }}>
                    <p>Clicando aqui você carrega mais supermercados</p>
                </div>
                <img alt="ajuda" src={Supermercados}/>
                <img alt="ajuda" id="carregar-mais-supermercados" src={Supermercados2}/>
            </div>

            <div  className='subititulo'>Informações do supermercado</div>
            <div className='links' >
                <div  id="supermercado-detalhes1-2" className='ponto-ajuda' style={{left:75.50+"%", top: 70+"%" }}>
                    <p>Clique aqui para ver todos os produtos do supermercado selecionado</p>
                </div>
                <img alt="ajuda" id="supermercado-detalhes2" src={SupermercadoInfo}/>
            </div>




            <div className='titulo'>
                <h1>Produtos</h1>
            </div>

            <div id="classe-de-produtos" className='subititulo'>Navegando na tela de produtos</div>
            <div className='links' >
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:89+"%", top: 9.50+"%" }}>
                    <p>pesquise por produtos</p>
                </div>
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 30+"%" }}>
                    <p>escolha o tipo de classe de produto aparecerá</p>
                </div>
                <div  id="produto-detalhes1-1" className='ponto-ajuda' style={{left:15+"%", top: 86.50+"%" }}>
                    <p>Para ver as informações do produto</p>
                </div>
                <img alt="ajuda" id="supermercado-detalhes2" src={Barrapesquisa}/>
            </div>

            <div  className='subititulo'>Informações do produto</div>
            <div className='links' >
                <div  id="produto-detalhes1-2" className='ponto-ajuda' style={{left:30.50+"%", top: 12+"%" }}>
                    <p>Aqui mosstra onde o produto fica no supermercado</p>
                </div>
                <img alt="ajuda" id="produto-info" src={InformacaoProduto}/>
            </div>

            <div  className='subititulo'>Informações do produto</div>
            <div className='links' >
            <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 50+"%" }}>
                    <p>Abaixo temos os supermercados com este produto</p>
                </div>
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 50+"%" }}>
                    <p>Abaixo temos os supermercados com este produto</p>
                </div>
                <img alt="ajuda" id="supermercado-detalhes2" src={InformacaoProduto2}/>
                
            </div>



            <div className='titulo'>
                <h1>Carrinho</h1>
            </div>

            <div  className='subititulo'>Carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:95+"%", top: 90+"%" }}>
                    <p>clique aqui para abrir e fechar o carrinho</p>
                </div>

                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:90+"%", top: 50+"%" }}>
                    <p>Precisa-se ir para a tela de produtos para adiciona-los ao carrinho</p>
                </div>
                <img alt="ajuda" id="carro-detalhes1" src={CarrinhoTela}/>
            </div>

            <div  className='subititulo'>conteudo do carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1-1" className='ponto-ajuda' style={{left:88+"%", top: 23+"%" }}>
                    <p>Abaixe e aumente a quantidade de produtos</p>
                </div>

                <div  id="carrro-saldo" className='ponto-ajuda' style={{left:85+"%", top: 75+"%" }}>
                    <p>Seu saldo</p>
                </div>

                <img alt="ajuda" id="carro-detalhes2" src={CarrinhoTela2}/>
            </div>
        </>
    )
}