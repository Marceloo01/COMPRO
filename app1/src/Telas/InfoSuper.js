import React, { useEffect , useState} from "react";
import Supermercado from "../img/SupermercadoSlide.jpg";
import "../css/infoSuper.css"
import api from '../service/api_compro'


export default function InfoSupermercados () {
    document.title = "Informações";
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
            </div>
            
            <div className="supermercado-info">
                <h1> Cxarrefour{supermercado.nome}</h1> <br />
                
                    <span className="dado">Localização</span>
                    <p> Av. Charles Schnneider, 1201 - Barranco, Taubaté - SP, 12040-000
                        {/* {supermercado.rua} - {supermercado.bairro}, {supermercado.cidade} - {supermercado.estado} */}
                    </p>
                
                    <span className="dado">Estado</span>
                    <p> SP {supermercado.estado}</p>
                
                    <span className="dado">Cidade</span>
                    <p> Taubaté {supermercado.cidade}</p>
                
                    <span className="dado">e-mail</span>
                    <p> carrefour@gmail.com {supermercado.email}</p>
                
                    <span className="dado">avaliação</span>
                    <p> 7.1</p>

                    
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