import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../service/api_compro";

export default function ProdutosClasse(props) {
    const { classe } = useParams()
    const [produtos,setProd] = useState(null);

    useEffect(() => {
        
        api
        .get(`produto/${classe}`)
        .then((response) => {
            console.log(response.data)
            setProd(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });        
    }, []);
    return(
        <>
            <div className="titulo">classe: {classe}</div>
        </>
    )
}