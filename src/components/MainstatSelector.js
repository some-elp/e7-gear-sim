export default function MainstatSelector({piece}) {
    console.log('MainStatSelector rendered with piece:', piece);

    if (piece === "sword") {
        return (
            <div>
                <select>
                    <option value="">-Pick Something-</option>
                    <option value="attack">Attack</option>
                </select>
            </div>
        );
    }
    if (piece === "helmet") {
        return (
            <div>
                <select>
                    <option value="">-Pick Something-</option>
                    <option value="health">Health</option>
                </select>
            </div>
        );
    }
    return (<p>Why is this thing not working</p>);
    {/*if (piece === "sword") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="attack">Attack</option>
                </select>
            </div>
        );
    }
    if (piece === "helmet") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="health">Health</option>
                </select>
            </div>
        );
    }
    if (piece === "chestpiece") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="defense">Defense</option>
                </select>
            </div>
        );
    }
    if (piece === "necklace") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="health%">Health%</option>
                    <option value="critchance">Crit Chance</option>
                    <option value="critdamage">Crit Damage</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="health">Health</option>
                </select>
            </div>
        );
    }
    if (piece === "ring") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="health%">Health%</option>
                    <option value="effectiveness">Effectiveness</option>
                    <option value="effectresistance">Effect Resistance</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="health">Health</option>
                </select>
            </div>
        );
    }
    if (piece === "boots") {
        return (
            <div>
                <select
                    value={mainstat}
                    onChange={selectMainstat}
                >
                    <option value="">-Pick Something-</option>
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="health%">Health%</option>
                    <option value="speed">Speed</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="health">Health</option>
                </select>
            </div>
        );
    }*/}
}