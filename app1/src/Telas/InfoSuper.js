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
                <h2>Estado: São Paulo</h2>
                <h2>Cidade: Campinas</h2>
                <h2>e-mail: precioso@gmail.com</h2>
                <h2>nota: 7.1</h2>
                <h2>ano: 1900</h2>

                <h1>Horarios de funcionamento</h1>
                <h2>segunda a sexta <br/> abertura: 07:30-AM - 20:00-PM</h2>
                <h2>Final de Semana - sabado e domingo<br/>abertura: 08:30-AM - 19:00-PM</h2>
            </div>
        </div>
        </>
    )
} 