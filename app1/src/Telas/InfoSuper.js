import React, { useEffect , useState} from "react";
import { useParams } from 'react-router-dom';
import Supermercado from "../img/SupermercadoSlide.jpg";
import "../css/infoSuper.css";
import api from '../service/api_compro';


export default function InfoSupermercados (props) {
    

    document.title = "Informações";
    const [supermercado,setSupermercado] = useState({});
    const { id } = useParams();
    useEffect (() => {
        
        console.log(id);
        api
            .get(`/supermercado/exibir/${id}`)
            .then((response) => {
                setSupermercado(response.data)
            ;})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        },[])
    return (
        <>
        <div className="conjunto-info">
            <div className="Supermercado-img-info">
                <img src={supermercado.urlImg || Supermercado} alt={supermercado}/>
            </div>
            
            <div className="supermercado-info">
                <h1> {supermercado.nome}</h1> <br />
                
                    <span className="dado">Localização</span>
                    <p> 
                        {supermercado.rua} - {supermercado.bairro}, {supermercado.cidade} - {supermercado.estado}
                    </p>
                
                    <span className="dado">Estado</span>
                    <p>  {supermercado.estado}</p>
                
                    <span className="dado">Cidade</span>
                    <p>  {supermercado.cidade}</p>
                 
                    <span className="dado">e-mail</span>
                    <p>  {supermercado.email}</p>
                
                    <span className="dado">avaliação</span>
                    <p> {supermercado.avaliacao}</p>
                     
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