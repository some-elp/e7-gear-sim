import useBodyClass from "../components/useBodyClass";
import { Link } from "react-router-dom";
import "../css/home.css"

export default function Home() {
    //Using this or else all pages default to one body
    useBodyClass('home-body');

    return (  
        <div className="home-container">
            <img src="./images/artena_idle.png" alt="" className="artena"/>
            <div className="buttons-container">
                <Link to="/gacha" style={{textDecoration: 'none'}}><button>
                    Gear Roll Gacha
                </button></Link>
                <Link to="/eval" style={{textDecoration: 'none'}}><button>
                    Evaluate Gear
                </button></Link>
            </div>
        </div>
    );
}