import '../css/pesquisa.css';
import Img from '../img/lupa.png';

export default function pesquisa() {

    return (
        <>
        <div className="pesquisa">
            <input type="text"/>
            <img src={Img}/>
        </div>
        </>
    )
}