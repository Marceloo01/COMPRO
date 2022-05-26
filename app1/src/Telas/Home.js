import React from 'react';
import '../css/home.css';
import ImagemEntrada from '../img/primeira-imagem-home(1).jpg';
import ProdutosSupermercado from './ProdutosSupermercado';

export default function Home(props) {
  document.title = "Home";
  props.AlterarTela(window.location.pathname);
  return (
    <>
      <div className='imagem-home'>
        <div className='texto-imagem-home'>
          <p>Sua procura termina aqui!</p>
          <p>em nosso site você pode achar os seus supermercados favoritos e ver quais produtos estão mais em conta</p>
        </div>
        <div className='img-imagem-home'><img src={ImagemEntrada} alt="primeira-imagem"/></div>
      </div> 
    </>
  );
}

