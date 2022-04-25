import '../css/contato.css';

export default function Integrantes(props) {

    return (
        
            <div className="integrante">
                <div className="foto-integrante">
                    <img src={props.img}></img>
                </div>
                <div className="nome-integrante">
                    <p>{props.nome}</p>
                    <p>{props.email}@gmail.com</p>
                    <p>{props.cargo}</p>
                </div>
            </div>
        
    )
}