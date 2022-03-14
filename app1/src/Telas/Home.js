import React,{useState} from 'react';
import '../css/home.css';
import corpo1 from '../img/corpo1.jpg'
import Slid from '../componentes/Slide.js'

export default function Home() {
  
  
  
  return (
    <>
      <div className="corpo">
        <div className="corpo1">
            <div className="corpo1-img1"><img src={corpo1}/>
              <div className="texto">Precisa de ajuda para aprender a mexer no site<br/><br/><button>Clique aqui</button></div>  
            </div>
        </div>
      </div>
      <Slid/>
    </>
    
  );
}

