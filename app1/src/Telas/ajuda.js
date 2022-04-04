import react from 'react';
import '../css/ajuda.css';
import AjudaIMG1 from '../img/AjudaIMG-1.png';


export default function Ajuda() {

    return(
        <>
        <div className="titulo">
            <h1>Precisa de Ajuda</h1>
        </div>
        <div className="subititulo">
            Carrinho
        </div>
        <div className="carrinho-Ajuda">
            para usar o nosso carrinho você deve clicar primeiramente na logo do carrinho no canto superior direito
            <br/>
            <img src={AjudaIMG1}/>
        </div>


        <div className="subititulo">
            Supermercados
        </div>

 
        <div className="subititulo">
            Produtos
        </div>
        </>
    )
}