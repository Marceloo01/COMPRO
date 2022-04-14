import React from 'react';
import '../css/rodape.css'
import logo from '../img/N-Y-R-M-T.ico'
import zap from '../img/zap.png'
import inst from '../img/inst.png'
import facebook from '../img/facebook.png'


export default function Rodape() {
  
  
  
  return (
    <>
    <footer className="rodape">
        <div className="rodLogo">
            <img src={logo}/>
            <h2>ComPro</h2>            
        </div>
        <div className="rodtxt">
            <div className="rod-titulo">
                <b>Patrocinadores</b>
            </div>
            <p className="text">Ferrari</p>
            <p className="text">Hannesey</p>
            <p className="text">Nike</p>
            <p className="text">Grávida de Taubaté</p>
        </div>
        
        <div className="rodtxt">
            <div className="rod-titulo">
                <b>Contato</b>
            </div>
            <p className="text">knoob077@gmail.com</p>
            <p className="text">12991747752</p>
            <p className="text">Taubaté,Rua Euclides da Cunha</p>
            <p className="text">Piscininha</p>

        </div>
        <div className="rodRedes"> 
        <div className="rod-titulo"><b>Redes Sociais</b></div>
            <div id="redeS">
                <img src={zap}/>
                <img src={inst}/>
                <img src={facebook}/>
            </div>
        </div>
        
    </footer>
        <div className="cop">
            Copyright 2022 &copy; Todos os direitos reservados.
            <br/>
            O conteúdo do site não pode ser editado, copiado ou distribuído sem expressa autorização do SENAI-SP.
        </div>
    </>
    
  );
}

