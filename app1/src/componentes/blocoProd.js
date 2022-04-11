import banana from '../img/banana.jpg';
import '../css/produtos.css';

export default function blocoProd() {
    return(
        <center>
            <div className="conjunto-prod">
                <div className="prod-img"><img src={banana}/></div>
                <div className="prod-info">
                    
                    <div className="texto-prod">
                        <p>Banana</p><p>R$50 unidade</p>
                    </div>
                </div>
            </div>
        </center>
    )
}