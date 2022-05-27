import React, { useEffect , useState} from "react";
import Bloco from "./blocoSupermercado.js";
import '../css/EstiloSlide.css';
import api from '../service/api_compro';

export default function Slid(props){
    const [supermercados,setSuper] = useState([]);
    const [htmlS,setHtmlS] = useState(null);
    
    useEffect(() => {
        api
            .get("/supermercado")
            .then((response) => {
            setSuper(response.data)
        })

            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    useEffect(()=>{
        rederizarSuper();
    },[supermercados])

    function rederizarSuper(){
        if(supermercados){
            let Testehtml = (supermercados.map((value) =>{
                if(value.nome==="base") return <></>
                return (<Bloco 
                    key={value._id} 
                    _id={value._id} 
                    urlImg={value.urlImg}
                    nome={value.nome} 
                    cidade={value.cidade} 
                    rua={value.rua} 
                    bairro={value.bairro} 
                    estado={value.estado}
                    abertura={value.abertura}
                    fechamento={value.fechamento}
                />);
            }));
            setHtmlS([Testehtml]);
            return;
        }
    }
    

    return (
        <div id="conjuntoSlide">
            <div className="titulo-slide">
                {props.titulo}
            </div>
            <div className="corpoSlide">
                { htmlS || <><Bloco _id="625728a34767438f62f04b08"/> <Bloco _id="625728a34767438f62f04b08"/> <Bloco _id="625728a34767438f62f04b08"/> <Bloco _id="625728a34767438f62f04b08"/> <Bloco _id="625728a34767438f62f04b08"/> <Bloco _id="625728a34767438f62f04b08"/></>}
            </div>
        </div>
    )
}