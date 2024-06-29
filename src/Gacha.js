import { useState } from "react";
import SubstatDropdown from "./SubstatDropdown"

export default function Gacha(){
    const [iLevel, setILevel] = useState('');

    return (
        <div>
            <label>Equipment Level</label>
            <select
                value={iLevel}
                onChange={(e) => setILevel(e.target.value)}
            >
                <option value="85">85</option>
                <option value="88">88</option>
            </select>
            <p>{iLevel}</p>
            <label>Substats:</label>
            <SubstatDropdown/>
        </div>
    )
}