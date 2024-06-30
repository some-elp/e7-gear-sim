
export default function SubstatDropdown({ substats, handleSelect }) {

    return (
        <div>
            <form>
                <select
                    name="substat1"
                    value={substats.substat1}
                    onChange={handleSelect}
                >
                    <option value="">-Pick Something-</option>
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
                    <option value="">-Pick Something-</option>
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
                    <option value="">-Pick Something-</option>
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
                    <option value="">-Pick Something-</option>
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
        </div>
    );
}

