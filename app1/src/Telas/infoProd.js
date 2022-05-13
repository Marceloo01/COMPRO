import '../css/infoProduto.css';
import Banana from '../img/banana.png';

export default function InformacaoProduto() {
    return(
        <>
            <div className="conjunto-info-produto">
                <div className="img-info-produto">
                    <img src={Banana}/>
                </div>
                <div className="info-produto">
                    <h3>Banana-nanica da china japonesa</h3>
                    <p>encontrado em 7 supermercados</p>
                    <p>diferença de preço <span> R$90 </span> <span>R$30</span> por 1kg</p>
                </div>

            </div>
        </>
    )
}