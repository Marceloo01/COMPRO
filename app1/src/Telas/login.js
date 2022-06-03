import React from 'react';
import '../css/login.css';
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import API from '../service/firebase';

export default function Login(props) {
    props.AlterarTela(window.location.pathname);
    document.title = "Login";
    

    function mover() {
        var formula = document.getElementsByClassName('formulario-login')[0];
        formula.classList.toggle('para-direita')
        
        const handleClickButtonLogin = async ()=>{
            const result= await API.googleLogar();
            if(result){
                props.verificarLogin(result.user);
            }else{
                console.error("erro");
                props.setLogou(null);
            }
        }
        handleClickButtonLogin();
    }

    return (
        <>
        <div className="Login">
            <div className='formulario-login'>
                    <div className='para-preencher'>Login google</div>
                    <button onClick={mover}><BsGoogle /></button>
                    <div className='para-preencher'>Login Facebook</div>
                    <button onClick={mover}><ImFacebook /></button>
                    
            </div>
            
        </div>
        
        </>
    );
}