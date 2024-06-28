export default function SubstatDropdown(){
    const [substat, setSubstat] = useState('Select Substat');
    return(
        <form>
            <label>Substats:</label>
            <select 
                value={substat}
                onChange={(e) => setSubstat(e.target.value)}
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
            <p>{substat}</p>
        </form>
    );
}

