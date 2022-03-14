import React,{useState} from 'react';
import Home from './Telas/Home.js'
import menuLateral from './img/menu-lateral.png'
import carrinho from './img/carrinho.png'
import COMPRO from './img/COMPRO.png'
import './css/menu.css';
import {Routes,Route,Link} from 'react-router-dom'
import Rodape from './componentes/rodape.js'
import Login from './Telas/login.js'
//id projeto: compro-94dcf
function App() {

  const [sel,setSel]=useState(1);
  
  const [logou,setLogou]=useState(0);
  
  const verificarLogin = async (u)=>{
    let newUser={
      id:u.uid,
      name:u.displayName,
      avatar:u.photoURL
    }
    setLogou(newUser);
  }

  const abrirMenu=()=>{ 
    var menu = document.getElementById('nav');
    if(menu.style.height=='230px'){
      menu.style.height='0px';
    }else{
      menu.style.height='230px';
    }
  }
  const abrirCarrinho = ()=>{
    var carrinho = document.getElementById('menuCarrinho');
    var fundo=document.getElementById('fundoMenu');
    console.log('oi2')
    if(carrinho.style.left!='70%') {
      console.log('oi')
      fundo.style.display="block"
      carrinho.style.opacity="1"
      carrinho.style.left='70%';
      
    } else {
      console.log('oi1')
      fundo.style.display="none"
      carrinho.style.opacity="0"
      carrinho.style.left='100%';

      
    }
  }

    if(logou!=null){
      {document.title="Home"}
      return(
        
      <div className="App">
        <div id="fundoMenu">
          
        </div>
        <div id="menuCarrinho">
            <div className="headerCarrinho">
              
              <div className="textoCarrinho">
                Seu Carrinho
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
          <img src={logou.avatar}/>
          <div className="inicioTxt">Compre fácil com COMPRO</div>
        </div>
        
        <div className="menu">
          <div className="sub">

            <div id="icone">
              <img src={menuLateral} onClick={abrirMenu}/>
            </div>

            <nav id="nav">
              <Link  onClick={()=>setSel(1)} className={sel==1?'':"selecionado"} to='/'>Home</Link>
              <Link  onClick={()=>setSel(2)} className={sel==2?'':"selecionado"} to='/Supermercado'>Supermercado</Link>
              <Link  onClick={()=>setSel(3)} className={sel==3?'':"selecionado"} to='/Produtos'>Produtos</Link>
              <Link  onClick={()=>setSel(4)} className={sel==4?'':"selecionado"} to='/Contato'>Contato</Link>
              <Link  onClick={()=>setSel(5)} className={sel==5?'':"selecionado"} to='/Ajuda'>Ajuda</Link>
              
              
            </nav>
            
            <div id="carrinho" onClick={abrirCarrinho}>
              <img src={carrinho}/>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contato' element={<p>Contato</p>}></Route>
          <Route path='/Produtos' element={<p>Produtos</p>}></Route>
          <Route path='/Supermercado' element={<p>Supermercado</p>}></Route>
          <Route path='/Ajuda' element={<p>Ajuda</p>}></Route>
        </Routes>

        </header>
  
        <Rodape/>
      </div>
      )
    }else{
      {document.title="Login"}
      return <Login verificarLogin={verificarLogin} logou={logou} setLogou={setLogou} />
    }

  return (
    <>
      {verificarLogin()}
    </>
  );
}

export default App;
