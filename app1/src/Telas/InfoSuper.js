import React, { useEffect , useState} from "react";
import Supermercado from "../img/SupermercadoSlide.jpg";
import "../css/infoSuper.css"
import api from '../service/api_compro'


export default function InfoSupermercados () {
    const [supermercado,setSupermercado] = useState({});
    
    useEffect (() => {
        var id= window.location.href.split('=')[1]
        console.log(id)
        api
            .get(`/supermercado/exibir/${id}`)
            .then((response) => {
                setSupermercado(response.data)
                console.log(supermercado);})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        },[])
    return (
        <>
        <div className="conjunto-info">
            <div className="Supermercado-img-info">
                <img src={Supermercado}/>
            </div><h1>{supermercado.nome}</h1>
            <div className="supermercado-info">
                
                <p><span className="dado">Localização:</span> {supermercado.rua} - {supermercado.bairro}, {supermercado.cidade} - {supermercado.estado}</p>
                <p><span className="dado">Estado:</span> São Paulo</p>
                <p><span className="dado">Cidade:</span> Campinas</p>
                <p><span className="dado">e-mail:</span> {supermercado.email}</p>
                <p><span className="dado">nota:</span> 7.1</p>
                <p><span className="dado">ano:</span> 1900</p>
            </div>
            <h1>Horarios de funcionamento</h1>
            <div className="supermercado-info">
                <p><span className="dado">segunda a sexta <br/> abertura:</span> 07:30-AM - 20:00-PM</p>
                <p><span className="dado">Final de Semana - sabado e domingo<br/>abertura:</span> 08:30-AM - 19:00-PM</p>
            </div>

            <input 
                    type="button"
                    value="VER PRODUTOS"
                    // onClick={ ()=>abriTelaProdutos()}
                />
        </div>
        </> 
    )
} 