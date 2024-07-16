import useBodyClass from "../components/useBodyClass";

export default function Home() {

    //Using this or else all pages default to one body
    useBodyClass('index-body');

    return (  
        <div>
            <div className="Home">
                <a href="https://some-elp.github.io/e7-gear-sim/gacha">Gear Roll Gacha</a>
            </div>
            <div className="Eval">
                <a href="https://some-elp.github.io/e7-gear-sim/eval">Evaluate Gear</a>
            </div>
        </div>
    );
}