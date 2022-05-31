import React from 'react';
import '../css/ajuda.css';
import '../css/variaveis.css';
import Supermercados from '../img/ajuda/supermercados.png';
import SupermercadoInfo from  '../img/ajuda/supermercado-info.png';


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
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                </ul>

                <ul>
                    <h3>Carrinho</h3>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                    <li>
                        <a href='#'>not found - Tradução em português</a>
                    </li>
                </ul>
            </div>

            <div className='subititulo' id="supermercado-detalhes">os supermercados</div>
            <div className='links' >
                <div id="supermercado-detalhes1" className='ponto-ajuda' style={{left:15+"%", top: 52.76+"%" }}>
                    <p>Clicando aqui você pode ver todos os dados do supermercado slecionado</p>
                </div>
                <div  className='ponto-ajuda' style={{left:50+"%", top: 94+"%" }}>
                    <p>Clicando aqui você carrega mais supermercados</p>
                </div>
                <img src={Supermercados}/>
            </div>

            <div  className='subititulo'>informações do supermercado</div>
            <div className='links' >
                <div className='ponto-ajuda' style={{left:72.50+"%", top: 69+"%" }}>
                    <p>clique aqui para ver todos os produtos do supermercado selecionado</p>
                </div>
                <img id="supermercado-detalhes2" src={SupermercadoInfo}/>
            </div>
        </>
    )
}