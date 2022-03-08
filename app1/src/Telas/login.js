import react from 'react'
import '../css/login.css'
import { BsGoogle} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import API from '../service/firebase'

export default function Login(props) {
    const handleClickButtonLogin = async ()=>{
        const result= await API.googleLogar();
        if(result){
            props.verificarLogin(result.user);
        }else{
            alert("erro")
            props.setLogou(null);
        }
    }
    return (
        <>
        <div className="Login">
            <div className="formulario">
                <div id="botoes">

                    <button onClick={()=>handleClickButtonLogin()}>
                        <BsGoogle/>&emsp;Login Google
                    </button>
                    <button onClick={()=>handleClickButtonLogin()}>
                        <ImFacebook/>&emsp;Login Facebook
                    </button>
                    
                </div>
                <div id="termo">Termos de uso Conta Google</div>
                <div className="separator">Ou</div>
                
            </div>
        </div>
        
        </>
    );
}