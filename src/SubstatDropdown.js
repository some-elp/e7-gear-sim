import { useState } from "react";

export default function SubstatDropdown({ }) {
    const [substats, setSubstats] = useState({
        substat1: "",
        substat2: "",
        substat3: "",
        substat4: ""
    });

    function handleSelect(event) {
        const { name, value } = event.target;
        setSubstats({
            ...substats,
            [name]: value,
        });
    };

    //const allSelected = Array.values(substats).every(v => v !== "");

    return (
        <div>
            {/*{!allSelected && (*/}
            <form>
                <select
                    name="substat1"
                    value={substats.substat1}
                    onChange={handleSelect}
                >
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="hp%">Health%</option>
                    <option value="speed">Speed</option>
                    <option value="critchance">Crit Chance</option>
                    <option value="critdamage">Crit Damage</option>
                    <option value="effectiveness">Effectiveness</option>
                    <option value="effectresist">Effect Resistance</option>
                    <option value="attack">Flat Attack</option>
                    <option value="defense">Flat Defense</option>
                    <option value="hp">Flat Health</option>
                </select>
                <select
                    name="substat2"
                    value={substats.substat2}
                    onChange={handleSelect}
                >
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="hp%">Health%</option>
                    <option value="speed">Speed</option>
                    <option value="critchance">Crit Chance</option>
                    <option value="critdamage">Crit Damage</option>
                    <option value="effectiveness">Effectiveness</option>
                    <option value="effectresist">Effect Resistance</option>
                    <option value="attack">Flat Attack</option>
                    <option value="defense">Flat Defense</option>
                    <option value="hp">Flat Health</option>
                </select>
                <select
                    name="substat3"
                    value={substats.substat3}
                    onChange={handleSelect}
                >
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="hp%">Health%</option>
                    <option value="speed">Speed</option>
                    <option value="critchance">Crit Chance</option>
                    <option value="critdamage">Crit Damage</option>
                    <option value="effectiveness">Effectiveness</option>
                    <option value="effectresist">Effect Resistance</option>
                    <option value="attack">Flat Attack</option>
                    <option value="defense">Flat Defense</option>
                    <option value="hp">Flat Health</option>
                </select>
                <select
                    name="substat4"
                    value={substats.substat4}
                    onChange={handleSelect}
                >
                    <option value="attack%">Attack%</option>
                    <option value="defense%">Defense%</option>
                    <option value="hp%">Health%</option>
                    <option value="speed">Speed</option>
                    <option value="critchance">Crit Chance</option>
                    <option value="critdamage">Crit Damage</option>
                    <option value="effectiveness">Effectiveness</option>
                    <option value="effectresist">Effect Resistance</option>
                    <option value="attack">Flat Attack</option>
                    <option value="defense">Flat Defense</option>
                    <option value="hp">Flat Health</option>
                </select>
            </form>
            {/*)}
            {allSelected && (<p>it didn't work</p>)}*/}
        </div>
    );
}

