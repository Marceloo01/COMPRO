import React,{useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import './css/menu.css';
import './css/variaveis.css';
import menuLateral from './img/menu-lateral.png';
import COMPRO from './img/COMPRO_Linha.png';
import Rodape from './componentes/rodape.js';
import Pesquisa from './componentes/pesquisa.js';
import Home from './Telas/Home.js';
import Login from './Telas/login.js';
import Supermercados from './Telas/supermercados.js';
import Ajuda from './Telas/ajuda.js';
import Contato from './Telas/contato.js';
import Produtos from './Telas/produtos.js';
import Supers from './Telas/InfoSuper.js';
import InfoProd from './Telas/infoProd';
import NaoEncontrado from './Telas/naoEncontrado';
import SupermercadoProduto from './Telas/ProdutosSupermercado.js';
import ProdutosClasse from './Telas/ProdutosClasse';
import ProdutoClasseSuper from './Telas/ProdutoClasseSuper.js';
import ProdCar from './componentes/produtoCarrinho';
//Nunito font
//id projeto: compro-94dcf
function App() {
  // subtitulos das telas
  const namePage = ["Home","Supermercado","Produto","Contato","Ajuda"];
  const descPage = ["Navegue por nosso menu para achar o que está procurando, ou veja um pouco dos nossos objetivos abaixo",
                    "Procure por seus supermercados favoritos e mais próximos de você, veja alguns dados deles aqui",
                    "Adicione produtos ao seu carrinho para comparar preços em varios supermercados da sua cidade",
                    "Entre em contato com nossa equipe",
                    "Procure tópicos que responderam suas duvidas sobre nosso site"];
  // login
  const [sel,setSel]=useState(1);
  const [logou,setLogou]=useState(1); 
  const [carrinhoUser,setCarrinho]=useState(localStorage.getItem("carrinho")); 
  const [filtro,setFiltro] = useState("");
  const [valor,setValor] = useState( 0 );

  const verificarLogin = async (u)=>{
    let newUser={
      id:     u.uid,
      name:   u.displayName,
      avatar: u.photoURL
    }

    // armazena login
    sessionStorage.setItem("loginId",u.uid);
    sessionStorage.setItem("loginNome",u.displayName);
    sessionStorage.setItem("loginFoto",u.photoURL);

    setLogou(newUser);
  }

  if(sessionStorage.getItem("loginId") && sessionStorage.getItem("loginNome") && sessionStorage.getItem("loginFoto") && (!logou)){
    
    verificarLogin(
      {
        uid: sessionStorage.getItem("loginId"),
        displayName: sessionStorage.getItem("loginNome"),
        photoURL: sessionStorage.getItem("loginFoto")
      }
    )}

    
  // mudar imagem da tela por url
  const AlterarTela = (v)=>{
    if(v==='/')
      setSel(1);
    else if(v.toUpperCase()==='/SUPERMERCADO')
      setSel(2);
    else if(v.toUpperCase()==='/PRODUTOS')
      setSel(3);
    else if(v.toUpperCase()==='/CONTATO')
      setSel(4);
    else if(v.toUpperCase()==='/AJUDA')
      setSel(5);
    else
      setSel(-1);
  }

  // abre o menu no responsivo
  const abrirMenu=()=>{
    if(window.innerWidth>950)  return;
    var menu = document.getElementById('nav');
    menu.classList.toggle('MenuAbre');
  }

  // abre a tela do carrinho
  const abrirCarrinho = ()=>{
    var carrinho = document.getElementById('menuCarrinho');
    var fundo=document.getElementsByClassName('fundoMenu')[0];

    if(carrinho.classList.toggle('carrinhoAbre'))
      setCarrinho(localStorage.getItem("carrinho"));
    fundo.classList.toggle('fundoCarrinho');
  }
  function renderCarrinho() {
    if(carrinhoUser && carrinhoUser !== "-"){ 
      return( 
      <>
        <div className='list-ProdCar'>
          {carrinhoUser.split("-").map((v)=>{
            if(!v) return (<></>)
            return (<ProdCar key={v} id={v} setCar={setCarrinho} valor={valor} setValor={setValor} />)
          })}
          
        </div>
        <div id="exibirValorCar">
          Valor do carrinho: R${ (Math.round(valor * 100) / 100).toFixed(2).toString().replace(".",",") }
        </div>
      </>
      ) 
    }
    else
      return (<div className="semProdutos"><Link to="/Produtos" onClick={abrirCarrinho}>Ir para a página de produtos</Link></div>)
  }

    // verifica se o logn não é nulo para carrregar o site
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
                
                { renderCarrinho() }
 
              </div>
        </div>
        <header>
        <div className={`imagem-background ${ sel=== -1 ? "" :"sel"+sel }`}>
          
        <div className="cab">
          <Link to='/'><img src={COMPRO} alt="logo Compro"/></Link>
        </div>
        
        {/* menu das telas do site */}
        <div className="menu">
          <div className="sub">

            <div id="icone">
              <img src={menuLateral} onClick={abrirMenu} alt="iconeMenu"/>
            </div>
            <nav id="nav">
              <Link  
                onClick={()=>{ setSel(1); abrirMenu() }} 
                className={sel===1?"selecionado":""} 
                to='/' >Home
              </Link>
                
              <Link  
                onClick={()=>{ setSel(2); abrirMenu() }}
                className={sel===2?"selecionado":""}
                to='/Supermercado'>Supermercado
              </Link>
              
              <Link  
                onClick={()=>{ setSel(3); abrirMenu() }}
                className={sel===3?"selecionado":""}
                to='/Produtos'>Produtos
              </Link>
              
              <Link  
                onClick={()=>{ setSel(4); abrirMenu() }}
                className={sel===4?"selecionado":""} 
                to='/Contato'>Contato
              </Link>

              <Link  
                onClick={()=>{ setSel(5); abrirMenu();}} 
                className={sel===5?"selecionado":""} 
                to='/Ajuda'>Ajuda
              </Link>
            </nav>
          </div>
          {/* componente barra de pesquisa */}
          
          {
            [2,3,-1].includes(sel)?
            <Pesquisa hint="Buscar..." setFiltro={setFiltro} />
            :<></>
          }
        </div>
      {/* carrega o texto e descrição da pagina por url */}
        <div className="texto-pagina">{namePage[sel-1]}<div className="descricao-pagina">{descPage[sel-1]}</div></div>
      </div>
        </header>
        <div id="carrinho" onClick={abrirCarrinho}></div>
        <main>
          {/* todas as rotas do site */}
        <Routes>
          <Route path='/'                                   element={<Home AlterarTela={AlterarTela}/>}>                               </Route>
          <Route path='/Contato'                            element={<Contato AlterarTela={AlterarTela}/>}>                            </Route>
          <Route path='/Produtos'                           element={<Produtos AlterarTela={AlterarTela} filtro={filtro}/>}>           </Route>
          <Route path='/Supermercado'                       element={<Supermercados AlterarTela={AlterarTela}/>}>                      </Route>
          <Route path='/Ajuda'                              element={<Ajuda AlterarTela={AlterarTela}/>}>                              </Route>
          <Route path='/Supermercado/informacoes/:id'       element={<Supers AlterarTela={AlterarTela}/>}>                             </Route>
          <Route path='/Produtos/informacoes/:id'           element={<InfoProd AlterarTela={AlterarTela}/>}>                           </Route>
          <Route path='/Supermercado/:id/Produtos'          element={<SupermercadoProduto AlterarTela={AlterarTela} filtro={filtro}/>}></Route>
          <Route path="/Produtos/:classe"                   element={<ProdutosClasse AlterarTela={AlterarTela} filtro={filtro}/>}>     </Route>
          <Route path="/Supermercado/:id/Produtos/:classe"  element={<ProdutoClasseSuper AlterarTela={AlterarTela} filtro={filtro}/>}> </Route>
          <Route path="/*"                                  element={<NaoEncontrado AlterarTela={AlterarTela}/>}>                      </Route> 
        </Routes>
        </main>
        
        {/* componente rodape */}
        <Rodape/>
      </div>
      )
    }else{
      return <Login AlterarTela={AlterarTela} verificarLogin={verificarLogin} logou={logou} setLogou={setLogou} />
    }
}

export default App;