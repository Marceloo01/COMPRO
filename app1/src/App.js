import React,{useState} from 'react';
import Home from './Telas/Home.js';
import menuLateral from './img/menu-lateral.png';
import carrinho from './img/carrinho1.png';
import COMPRO from './img/COMPRO_Linha.png';
import './css/menu.css';
import {Routes,Route,Link} from 'react-router-dom';
import Rodape from './componentes/rodape.js';
import Login from './Telas/login.js';
import Supermercados from './Telas/supermercados.js';
import { click } from '@testing-library/user-event/dist/click';
import Ajuda from './Telas/ajuda.js';
import './css/variaveis.css';
import Contato from './Telas/contato.js';
import Produtos from './Telas/produtos.js';
import Supers from './Telas/InfoSuper.js'
import Pesquisa from './componentes/pesquisa.js';

//Nunito font
//id projeto: compro-94dcf
function App() {
  
  const [sel,setSel]=useState(1);
  const [logou,setLogou]=useState(0);
  const heightMenu=270
  const verificarLogin = async (u)=>{
    let newUser={
      id:u.uid,
      name:u.displayName,
      avatar:u.photoURL
    }
    setLogou(newUser);
  }
  document.body.onload=()=>{
    let urlPagina=window.location.pathname;
    if(urlPagina=='/')
      setSel(1)
    else if(urlPagina=='/Supermercado')
      setSel(2)
    else if(urlPagina=='/Produtos')
      setSel(3)
    else if(urlPagina=='/Contato')
      setSel(4)
    else if(urlPagina=='/Ajuda')
      setSel(5)
    else
      setSel(-1)
  }
  const abrirMenu=()=>{
    if(window.innerWidth>950)  return;
    var menu = document.getElementById('nav');
    menu.classList.toggle('MenuAbre')
  }
  const abrirCarrinho = ()=>{
    var carrinho = document.getElementById('menuCarrinho');
    var fundo=document.getElementById('fundoMenu');

    carrinho.classList.toggle('carrinhoAbre');
    fundo.classList.toggle('fundoCarrinho');
  }

    if(logou!=null){
      return(
        
        
      <div className="App">
        <div id="fundoMenu">
          
        </div>
        <div id="menuCarrinho">
            <div className="headerCarrinho">
              
              <div className="tituloCarrinho">
                Carrinho de produtos
              </div>
              <button id="x"onClick={abrirCarrinho}>X</button>
              </div>
              <div className="bodyCarrinho">
                <div className="semProdutos">
                  <p>Clique aqui para adicionar produtos no carrinho</p>
                  <button>Adicionar</button>
                </div>
              </div>
        </div>
        <header>
        
        <div className="cab">
          <img src={COMPRO}/>
          {/* <div className="inicioTxt">Compre fácil com COMPRO</div> */}
        </div>
        
        <div className="menu">
          <div className="sub">

            <div id="icone">
              <img src={menuLateral} onClick={abrirMenu}/>
            </div>

            <nav id="nav">
              <Link  
                onClick={()=>{ setSel(1); abrirMenu() }} 
                className={sel==1?"selecionado":""} 
                to='/' >Home
              </Link>
                
              <Link  
                onClick={()=>{ setSel(2); abrirMenu() }}
                className={sel==2?"selecionado":""}
                to='/Supermercado'>Supermercado
              </Link>
              
              <Link  
                onClick={()=>{ setSel(3); abrirMenu() }}
                className={sel==3?"selecionado":""}
                to='/Produtos'>Produtos
              </Link>
              
              <Link  
                onClick={()=>{ setSel(4); abrirMenu() }}
                className={sel==4?"selecionado":""} 
                to='/Contato'>Contato
              </Link>

              <Link  
                onClick={()=>{ setSel(5); abrirMenu() }} 
                className={sel==5?"selecionado":""} 
                to='/Ajuda'>Ajuda
              </Link>
              
              
            </nav>
            
            <div id="carrinho" onClick={abrirCarrinho}>
              <img src={carrinho}/>
            </div>
          </div>
        </div>
      </header> 
        <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/Produtos' element={<Produtos/>}></Route>
          <Route path='/Supermercado' element={ <Supermercados/>}></Route>
          <Route path='/Ajuda' element={<Ajuda/>}></Route>
          <Route path='/Supermercado/informacoes' element={<Supers/>}></Route>
        </Routes>
        </main>
        
  
        <Rodape/>
      </div>
      )
    }else{
      return <Login verificarLogin={verificarLogin} logou={logou} setLogou={setLogou} />
    }

  return (
    <>
      {verificarLogin()}
    </>
  );
}

export default App;
