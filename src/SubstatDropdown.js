import { useState } from "react";

export default function SubstatDropdown() {
    const [substats, setSubstats] = useState({
        substat1: "",
        substat2: "",
        substat3: "",
        substat4: ""
    });

    const handleSelect = (event) => {
        const { name, value } = event.target;
        setSubstats((prevSubstats) => ({
            ...prevSubstats,
            [name]: value
        }));
    };

    console.log(substats);

    const allSelected = Object.values(substats).every(substat => substat !== "");
    console.log(allSelected);

    return (
        <div>
            {!allSelected && (
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
            )}
            {allSelected && (
                  <>
                    <p>Substat 1: {substats.substat1}</p>
                    <p>Substat 2: {substats.substat2}</p>
                    <p>Substat 3: {substats.substat3}</p>
                    <p>Substat 4: {substats.substat4}</p>
                  </>
            )}
        </div>
    );
}

