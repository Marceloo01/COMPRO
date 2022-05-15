import React from 'react';
import '../css/contato.css';

export default function Integrantes(props) {

    return (
       
        <div className="card">
            <div className="img">
                <img src={props.img}/>
            </div>
            <div className='content'>
                <div className='details'>
                    <h2>{props.nome}</h2><br/>
                    <div className='data'>
                        <div>{props.cargo}</div>
                        <span>{props.email}@gmail<br/>{props.numero}</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}