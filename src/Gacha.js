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
        text1: "",
        text2: "",
        text3: "",
        text4: ""
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
                    <ul>
                        {Object.entries(substats).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                    <TextInput
                        textInputs={textInputs}
                        handleTextInputChange={handleTextInputChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            )}
            {/* Display the content of the text inputs after submit */}
            {submittedText && (
                <div>
                    <p>Submitted substats:</p>
                    <ul>
                        {Object.entries(submittedText).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}