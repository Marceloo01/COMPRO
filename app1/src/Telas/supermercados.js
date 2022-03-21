import react from "react";
import "../css/TelaSupermercados.css";
import Supermercado from '../img/SupermercadoSlide.jpg';

export default function superMer() {

    return (
        <>
        <div className="bodySuper">
            <div className="super">
                <h1>Veja os Supermercados</h1>
            </div>
            <div className="super1">
                <div className="Stxt">
                    Primeiro Colocado
                </div>
                <div className="Simg">
                    <img src={Supermercado}/>
                </div>
            </div>
        </div>

        </>
    )
}