import React,{useState, useEffect,} from 'react';
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
import Supers from './Telas/InfoSuper.js';
import InfoProd from './Telas/infoProd';
import Pesquisa from './componentes/pesquisa.js';
import NaoEncontrado from './Telas/naoEncontrado';

//Nunito font
//id projeto: compro-94dcf
function App() {
  const namePage = ["Home","Supermercado","Produto","Contato","Ajuda"];
  const descPage = ["Navegue por nosso menu para achar o que está procurando, ou veja um pouco dos nossos objetivos abaixo",
                    "Procure seus supermercados favoritos e mais próximo de você, veja alguns dados deles ou procure outros supermercados",
                    "Adicione produtos ao seu carrinho para comparar preços em varios supermercados da sua cidade",
                    "Entre em contato com nossa equipe",
                    "Procure tópicos que responderam suas duvidas sobre nosso site"];
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
  useEffect(()=>{
    let urlPagina=window.location.pathname;
    if(urlPagina=='/')
      setSel(1);
    else if(urlPagina.toUpperCase()=='/SUPERMERCADO')
      setSel(2);
    else if(urlPagina.toUpperCase()=='/PRODUTOS')
      setSel(3);
    else if(urlPagina.toUpperCase()=='/CONTATO')
      setSel(4);
    else if(urlPagina.toUpperCase()=='/AJUDA')
      setSel(5);
    else
      setSel(-1);
  },[window.location.href]);

  const abrirMenu=()=>{
    if(window.innerWidth>950)  return;
    var menu = document.getElementById('nav');
    menu.classList.toggle('MenuAbre');
  }
  const abrirCarrinho = ()=>{
    var carrinho = document.getElementById('menuCarrinho');
    var fundo=document.getElementsByClassName('fundoMenu')[0];

    carrinho.classList.toggle('carrinhoAbre');
    fundo.classList.toggle('fundoCarrinho');
  }

    if(logou!=null){
      return(
        
        
      <div className="App">
        <div className="fundoMenu" onClick={abrirCarrinho}></div>
        <div id="menuCarrinho">
            <div className="headerCarrinho">
              
              <div className="tituloCarrinho">
                Seu carrinho
              </div>
              
              </div>
              <div className="bodyCarrinho">
                <div className="semProdutos">
                  <button>+ Produtos</button>
                </div>
              </div>
        </div>
        <header>
        <div className={`imagem-background ${ sel== -1 ? "" :"sel"+sel }`}>
        <div className="cab">
          <img src={COMPRO}/>
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
                onClick={()=>{ setSel(5); abrirMenu();}} 
                className={sel==5?"selecionado":""} 
                to='/Ajuda'>Ajuda
              </Link>
              

            </nav>
            
          </div>
          <Pesquisa hint="Buscar..."/>
          
        </div>
        <div className="texto-pagina">{namePage[sel-1]}<div className="descricao-pagina">{descPage[sel-1]}</div></div>
      </div>
        </header>
        <div id="carrinho" onClick={abrirCarrinho}></div>
        <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/Produtos' element={<Produtos/>}></Route>
          <Route path='/Supermercado' element={ <Supermercados/>}></Route>
          <Route path='/Ajuda' element={<Ajuda/>}></Route>
          <Route path='/Supermercado/informacoes/:id' element={<Supers/>}></Route>
          <Route path='/Produtos/informacoes/:id' element={<InfoProd/>}></Route>
          <Route path="/*" element={<NaoEncontrado/>}></Route> 
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
