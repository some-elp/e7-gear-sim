export default function MainstatSelector(piece, mainstat, selectMainstat) {
    if (piece === "sword") {
        return (
            <select
                value={mainstat}
                onChange={selectMainstat}
            >
                <option value="">-Pick Something-</option>
                <option value="attack">Attack</option>
            </select>
        );
    }
    if (piece === "helmet") {
        return (
            <select
                value={mainstat}
                onChange={selectMainstat}
            >
                <option value="">-Pick Something-</option>
                <option value="health">Health</option>
            </select>
        )
    }
    if (piece === "chestpiece") {
        return (
            <select
                value={mainstat}
                onChange={selectMainstat}
            >
                <option value="">-Pick Something-</option>
                <option value="defense">Defense</option>
            </select>
        )
    }
    if (piece === "necklace") {
        return (
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
        )
    }
    if (piece === "ring") {
        return (
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
        )
    }
    if (piece === "boots") {
        return (
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
        )
    }
}