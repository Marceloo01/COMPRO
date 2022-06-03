import React from 'react';
import '../css/rodape.css';
import logo from '../img/N-Y-R-M-T.ico';
import zap from '../img/zap.png';
import inst from '../img/inst.png';
import facebook from '../img/facebook.png';

export default function Rodape() {
  return (
      
    <>
    <footer className="rodape">
        <div className="rodLogo">
            <img draggable="false" src={logo} alt="rodape"/>
            <h2>ComPro</h2>            
        </div>
        
        <div className="rodRedes">
            <div id="redeS">
                <img draggable="false" src={zap} alt="rodape"/>
                <img draggable="false" src={inst} alt="rodape"/>
                <img draggable="false" src={facebook} alt="rodape"/>
            </div>
        </div>
        <div className="cop">
            <p>&copy;2022 Todos os direitos reservados NYRMT.</p>
        </div>
        
    </footer>
    </>
    
  );
}

