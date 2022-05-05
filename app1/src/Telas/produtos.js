import react from 'react';
import '../css/variaveis.css';
import Pesquisa from '../componentes/pesquisa.js';
import '../css/produtos.css';
import ConjuntoProd from '../componentes/blocoProd.js';

export default function Produtos() {
    document.title = "Produtos";
    var contador = 0;
    function slideToRight(e) {
        if (contador-5<document.getElementsByClassName("Slide-produto")[0].children.length*-1) return
        contador--;
        console.log(document.getElementsByClassName("Slide-produto")[0].children.length);
        e.style.marginLeft = `calc(var(--j) * ${contador})`
        console.log(`var(--i * ${contador}px)`)
        
    }

    function slideToLeft(e) {
        if (contador+1>0) return
        contador++;
        console.log(contador);
        e.style.marginLeft = `calc(var(--j) * ${contador})`
        console.log(`var(--i * ${contador}px)`)
        
    }

    return(
        <>
            <div className="titulo">
                <h1>Veja os Produtos</h1>
            </div>
            <Pesquisa hint=" Procure por produtos"/>
            

                <center><button className="filtro"
                onClick={()=> {
                    var tiposGrid = document.getElementsByClassName('tipos-produtos')[0];
                    console.log('oi');
                    tiposGrid.classList.toggle("aberto");
                    
                }}><p>Filtro</p></button></center>
            <div className="tipos-produtos aberto">
                

                <div className="tipos"><p>brinquedos</p></div>
                <div className="tipos"><p>frutas/verduras</p></div>
                <div className="tipos"><p>eletrodomesticos</p></div>
                <div className="tipos"><p>notebooks/celulares</p></div>
                <div className="tipos"><p>processados</p></div>
            </div>

            <div className="titulo-slide" style={{marginTop: '100px'}}>Produtos mais procurados</div>

            <div className='base-slide-produto'>

                <div onClick={()=>slideToLeft(document.getElementsByClassName("Slide-produto")[0].firstChild)} className='botao-slide-produto left'></div>
                <div className='Slide-produto'>  
                        <ConjuntoProd/>
                        <ConjuntoProd/>  
                        <ConjuntoProd/>
                        <ConjuntoProd/>
                        <ConjuntoProd/>
                        <ConjuntoProd/>
                        <ConjuntoProd/>
                        <ConjuntoProd/>
                </div>
                <div onClick={()=>slideToRight(document.getElementsByClassName("Slide-produto")[0].firstChild)} className='botao-slide-produto right'></div>
                
            </div>
            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>


        </>
    )
}