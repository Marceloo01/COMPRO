import '../css/pesquisa.css';
import Img from '../img/lupa.png';

export default function pesquisa(props) {

    return (
        <>
        <div className="pesquisa"> 
            <input type="text" placeholder={props.hint}/>
            <img src={Img}/>
        </div>
        </>
    )
}