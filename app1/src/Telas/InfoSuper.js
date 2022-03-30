import Supermercado from "../img/SupermercadoSlide.jpg";
import "../css/infoSuper.css"


export default function InfoSupermercados () {
    return (
        <>
        <div className="conjunto-info">
            <div className="Supermercado-img-info">
                <img src={Supermercado}/>
            </div>
            <div className="nome-supermercado-info">
                <h1>Senhor dos pasteis</h1>
                <h2>Localização: Avenida Baden Powell - Jardim Nova Europa, Campinas - SP</h2>
            </div>
        </div>
        </>
    )
}