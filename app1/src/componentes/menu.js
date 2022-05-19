import menuLateral from '.././img/menu-lateral.png';
import carrinho from '.././img/carrinho.png';
import COMPRO from '.././img/COMPRO.png';
import React from 'react';
import '../css/menu.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from '../Telas/Home';

export default function menu(props){
    const abrirMenu=()=>{ 
        var menu = document.getElementById('nav');
        if(menu.style.height=='230px'){
          menu.style.height='0px';
        }else{
          menu.style.height='230px'; 
        }
      }

    return(
    <header>
      
      <div className="cab">
        <img src={COMPRO}/>
      </div>

      
      
        <div className="menu">
          <div className="sub">

            <div id="icone">
              <img src={menuLateral} onClick={abrirMenu}/>
            </div>

            <nav id="nav">
              <Link to="/Home" onClick={()=>props.setSel(1)} className={props.sel==1?"selecionado":null}></Link>
              <a href="#" onClick={()=>props.setSel(2)} className={props.sel==2?"selecionado":null}>
                Supermercados
              </a>
              <a href="#" onClick={()=>props.setSel(3)} className={props.sel==3?"selecionado":null}>
                Contato
              </a>
              <a href="#" onClick={()=>props.setSel(4)} className={props.sel==4?"selecionado":null}>
                Sobre
              </a>
            </nav>
            
            <div id="carrinho">
              <img src={carrinho}/>
            </div>
            
          </div>
        </div>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Login" element={<p>Login</p>}></Route>
      </Routes>
    </header>
    );
}