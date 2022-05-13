import '../css/produtos.css';
import ConjuntoProd from './blocoProd.js';

export default function SlideProduto(props) {
    document.title = "Produtos";
    var contador = 0;
    function slideToRight(e) {
        const value = getComputedStyle(e).getPropertyValue('--qt');
        if( contador-value-1 < document.getElementsByClassName("Slide-produto")[0].children.length*-1 ) return
        contador--;
        e.style = `--espaco:${contador}`
        
    }

    function slideToLeft(e) {
        if( contador+1 > 0 ) return
        contador++;
        e.style = `--espaco:${contador}`
        
    }
    return(
        <>
        <div className="titulo-slide" style={{marginTop: '100px'}}>{props.titulo}</div>
            <div className='base-slide-produto'>
                <div onClick={()=>slideToLeft(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto left'></div>
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
                <div onClick={()=>slideToRight(document.getElementsByClassName("Slide-produto")[props.indice].firstChild)} className='botao-slide-produto right'></div> 
            </div>
        </>
    )
}