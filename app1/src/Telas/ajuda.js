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
import AdicionarProduto from '../img/ajuda/adicionar-produto-carrinho.png';


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
                        <a href='#produtos-detalhes'>Barra de pesquisa</a>
                    </li>
                    <li>
                        <a href='#produtos-detalhes'>Classe de produtos</a>
                    </li>
                    <li>
                        <a href='#produtos-detalhes'>Como ver as informações do produto</a>
                    </li>
                    <li>
                        <a href='#produtos-informacao'>Informações do produto</a>
                    </li>
                </ul>

                <ul>
                    <h3>Carrinho</h3>
                    <li>
                        <a href='#Carrinho'>Carrinho</a>
                    </li>
                    <li>
                        <a href='#adicionar-ao-carrinho'>como adicinar um produto ao carrinho</a>
                    </li>
                    <li>
                        <a href='#conteudo-carrinho'>Conteúdo do carrinho</a>
                    </li>
                </ul>
            </div>


            <div className='titulo'>
                <h1>Supermercado</h1>
            </div>

            <div className='subititulo' id="supermercado-detalhes">Os supermercados</div>
            <div className='links' >
                <div id="supermercado-detalhes1" className='ponto-ajuda' style={{left:16+"%", top: 41.60+"%" }}>
                    <p>Clicando aqui você pode ver todos os dados do supermercado slecionado.</p>
                </div>
                <div  id="supermercado-detalhes1-1" className='ponto-ajuda' style={{left:50+"%", top: 94+"%" }}>
                    <p>Clicando aqui você carrega mais supermercados.</p>
                </div>
                <img alt="ajuda" src={Supermercados}/>
                <img alt="ajuda" id="carregar-mais-supermercados" src={Supermercados2}/>
            </div>

            <div  className='subititulo'>Informações do supermercado</div>
            <div className='links' >
                <div  id="supermercado-detalhes1-2" className='ponto-ajuda' style={{left:75.50+"%", top: 70+"%" }}>
                    <p>Clique aqui para ver todos os produtos do supermercado selecionado.</p>
                </div>
                <img alt="ajuda" id="supermercado-detalhes2" src={SupermercadoInfo}/>
            </div>




            <div className='titulo'>
                <h1>Produtos</h1>
            </div>

            <div id="produtos-detalhes" className='subititulo'>Navegando na tela de produtos.</div>
            <div className='links' >
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:89+"%", top: 7.90+"%" }}>
                    <p>Pesquise por produtos.</p>
                </div>
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 25+"%" }}>
                    <p>Escolha o tipo de classe de produto aparecerá.</p>
                </div>
                <div  id="produto-detalhes1-1" className='ponto-ajuda' style={{left:15+"%", top: 75+"%" }}>
                    <p>Para ver as informações do produto.</p>
                </div>
                <img alt="ajuda" id="supermercado-detalhes2" src={Barrapesquisa}/>
                <p>Na tela de produtos temos os comparadores de preço, para adicionar ao carrinho você precisa clicar em informações ou ver os produtos de um supermercado especifico.</p>
            </div>

            <div  className='subititulo'>Informações do produto</div>
            <div className='links' >
            <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 30+"%" }}>
                    <p>Alguns dados do produto.</p>
                </div>
                <div  id="produto-detalhes1" className='ponto-ajuda' style={{left:50+"%", top: 50+"%" }}>
                    <p>Abaixo temos os supermercados com este produto.</p>
                </div>
                <img alt="ajuda" id="produtos-informacao" src={InformacaoProduto2}/>
                
            </div>



            <div className='titulo'>
                <h1>Carrinho</h1>
            </div>

            <div id="Carrinho" className='subititulo'>Carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:95+"%", top: 90+"%" }}>
                    <p>clique aqui para abrir e fechar o carrinho.</p>
                </div>

                <div  id="carrinho-detalhes1" className='ponto-ajuda' style={{left:90+"%", top: 50+"%" }}>
                    <p>Na tela de informações do porduto você pode adicionar o produto ao carrinho.</p>
                </div>
                <img alt="ajuda" id="carro-detalhes1" src={CarrinhoTela}/>
            </div>

            <div id="adicionar-ao-carrinho" className='subititulo'>adicionando produto no carrinho</div>
            
            <div className='links' >
                
                <div  id="carrro-saldo" className='ponto-ajuda' style={{left:50+"%", top: 70+"%" }}>
                    <p>Aqui você pode adicionar o produto ao carrinho com preço do supermercado selecionado.</p>
                </div>

                <img alt="ajuda" id="carro-detalhes2" src={AdicionarProduto}/>
                <p>Tela de informaçõesdo produto.</p>
            </div>

            <div id="conteudo-carrinho" className='subititulo'>conteudo do carrinho</div>
            <div className='links' >
                <div  id="carrinho-detalhes1-1" className='ponto-ajuda' style={{left:88+"%", top: 23+"%" }}>
                    <p>Abaixe ou aumente a quantidade de um produto.</p>
                </div>

                <div  id="carrro-saldo" className='ponto-ajuda' style={{left:85+"%", top: 75+"%" }}>
                    <p>Seu saldo.</p>
                </div>

                <img alt="ajuda" id="carro-detalhes2" src={CarrinhoTela2}/>
            </div>
        </>
    )
}
