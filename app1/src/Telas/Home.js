import React,{useState} from 'react';
import '../css/home.css';
import Corpo1 from '../img/corpo1.jpg';
import Corpo2 from '../img/banana.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  document.title = "Home";

  return (
    <>
      <div className="corpo">
            <div className="corpo-img">
              <img id="slider" src={Corpo1}/>     
            </div>
            <div className="texto">
              <span className="destaque">Precisa de ajuda</span>
              <p>Temos um site de apoio para nosso clientes, para aprender a mexer no site clique logo em baixo nesse botão</p><br/>
              <Link class="btn-ajuda" to={'/Ajuda'}>Clique aqui</Link>
            </div>
        
      </div>
    </>
  );
}

