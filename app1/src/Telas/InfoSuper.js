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
            </div>
            <h1>{supermercado.nome}</h1>
            <div className="supermercado-info">
                <table>
                    <tr>
                        <td><span className="dado">Localização</span></td>
                        <td><p> {supermercado.rua} - {supermercado.bairro}, {supermercado.cidade} - {supermercado.estado}</p></td>
                    </tr>

                    <tr>
                        <td><span className="dado">Estado</span></td>
                        <td><p> {supermercado.estado}</p></td>
                    </tr>

                    <tr>
                        <td><span className="dado">Cidade</span></td>
                        <td><p> {supermercado.cidade}</p></td>
                    </tr>

                    <tr>
                        <td><span className="dado">e-mail</span></td>
                        <td><p> {supermercado.email}</p></td>
                    </tr>
                    <tr>
                        <td><span className="dado">nota</span></td>
                        <td><p> 7.1</p></td>
                    </tr>
                    <tr>
                        <td><span className="dado">ano</span></td>
                        <td><p> 1959</p></td>
                    </tr>
                
                </table>
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