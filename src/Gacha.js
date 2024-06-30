import { useState } from "react";
import SubstatDropdown from "./SubstatDropdown"
import TextInput from "./TextInput";

export default function Gacha() {
    const [iLevel, setILevel] = useState('');

    //substat dropdown menu state
    const [substats, setSubstats] = useState({
        substat1: "",
        substat2: "",
        substat3: "",
        substat4: ""
    });

    //substat text input state
    const [textInputs, setTextInputs] = useState({
        stat1: "",
        stat2: "",
        stat3: "",
        stat4: ""
    });

    //substat value submit button state
    const [submittedText, setSubmittedText] = useState(null);

    //handler for substat dropdown
    const handleSelect = (event) => {
        const { name, value } = event.target;
        setSubstats((prevSubstats) => ({
            ...prevSubstats,
            [name]: value
        }));
    };

    // Handler for substat text input
    const handleTextInputChange = (event) => {
        const { name, value } = event.target;
        setTextInputs((prevTextInputs) => ({
            ...prevTextInputs,
            [name]: value,
        }));
    };

    //handler for submit button
    function handleSubmit() {
        setSubmittedText(textInputs);
    }

    //boolean for all dropdowns having a value
    const allSelected = Object.values(substats).every(substat => substat !== "");

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
            {/*for substat dropdown menu*/}
            {!allSelected && (<SubstatDropdown substats={substats} handleSelect={handleSelect} />)}

            {/*for substat text input*/}
            {allSelected && !submittedText && (
                <div>
                    <p>Substat 1: {substats.substat1}</p>
                    <p>Substat 2: {substats.substat2}</p>
                    <p>Substat 3: {substats.substat3}</p>
                    <p>Substat 4: {substats.substat4}</p>
                    <TextInput
                        textInputs={textInputs}
                        handleTextInputChange={handleTextInputChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            )}
            {/*show substats and their values*/}
            {submittedText && (
                <div>
                    <p>Substat 1: {substats.substat1} {textInputs.stat1}</p>
                    <p>Substat 2: {substats.substat2} {textInputs.stat2}</p>
                    <p>Substat 3: {substats.substat3} {textInputs.stat3}</p>
                    <p>Substat 4: {substats.substat4} {textInputs.stat4}</p>
                </div>
            )}
        </div>
    )
}