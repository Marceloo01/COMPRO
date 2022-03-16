import React,{useState} from 'react';
import '../css/home.css';
import corpo1 from '../img/corpo1.jpg'
import Slid from '../componentes/Slide.js'

export default function Home() {
  
  
  
  return (
    <>
      <div className="corpo">
            <div className="corpo-img">
              <img src={corpo1}/>    
            </div>
            <div className="texto">
              <span className="destaque">Precisa de ajuda</span><p>Temos um site de apoio para nosso clientes, para aprender a mexer no site clique logo em baixo nesse botão</p>
              <button>Clique aqui</button>
            </div>
        
      </div>
      <Slid/>
    </>
    
  );
}

