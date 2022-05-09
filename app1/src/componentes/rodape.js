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
        
        <div className="rodRedes">
            <div id="redeS">
                <img src={zap}/>
                <img src={inst}/>
                <img src={facebook}/>
            </div>
        </div>
        <div className="cop">
            <p>&copy;2022 Todos os direitos reservados NYRMT.</p>
        </div>
        
    </footer>
    </>
    
  );
}

