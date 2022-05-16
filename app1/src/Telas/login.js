import React from 'react';
import '../css/login.css'
import { BsGoogle, BsLayoutThreeColumns} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import API from '../service/firebase'

export default function Login(props) {
    document.title = "Login";
    

    function mover() {
        var formula = document.getElementsByClassName('formulario-login')[0];
        formula.classList.toggle('para-direita')
        
        const handleClickButtonLogin = async ()=>{
            const result= await API.googleLogar();
            if(result){
                props.verificarLogin(result.user);
            }else{
                alert("erro")
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