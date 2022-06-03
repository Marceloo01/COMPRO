import React from 'react';
import '../css/home.css';

export default function Home(props) {
  document.title = "Home";
  props.AlterarTela(window.location.pathname);
  return (
    <>
      <div className='imagem-home'>
        <p>A sua procura acaba aqui</p>
        <p>em nosso site você pode achar o que precisa sem ter que sair de casa e com facilidade, comparar preços de produtos e mais</p>
      </div> 
    </>
  );
}

 