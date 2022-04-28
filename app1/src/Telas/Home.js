import React,{useState} from 'react';
import '../css/home.css';
import Corpo1 from '../img/corpo1.jpg';
import Corpo2 from '../img/banana.jpg';
import Slid from '../componentes/Slide.js';

export default function Home() {
  document.title = "Home";
  var imag = [Corpo1,Corpo2,Corpo1];
  var count = -1;

  function trocarImagem() {
    if((count+1)==imag.length)
      count=0;

    count++;
    document.getElementById("slider").src = imag[count];
    // console.log(count)
    

    console.log(imag.length)
  }
  
  // var contador = setInterval(function() {
  //   trocarImagem();
  // }, 5000)


  return (
    <>
      <div className="corpo">
            <div className="corpo-img">
              <img id="slider" src={Corpo1}/>     
            </div>
            <div className="texto">
              <span className="destaque">Precisa de ajuda</span>
              <p>Temos um site de apoio para nosso clientes, para aprender a mexer no site clique logo em baixo nesse botão</p><br/>
              <button>Clique aqui</button>
            </div>
        
      </div>
      <Slid titulo="Top supermercados para você" />
    </>
    
  );
}

