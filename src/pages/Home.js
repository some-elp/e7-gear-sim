import useBodyClass from "../components/useBodyClass";
import { Link } from "react-router-dom";
import "../css/home.css"

export default function Home() {

    //Using this or else all pages default to one body
    useBodyClass('home-body');

    return (  
        <div className="home-container">
            <div className="buttons-container">
                <Link to="/gacha"><button>
                    Gear Roll Gacha
                </button></Link>
                <Link to="/eval"><button>
                    Evaluate Gear
                </button></Link>
            </div>
        </div>
    );
}