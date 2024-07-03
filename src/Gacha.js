import { useState } from "react";
import SubstatDropdown from "./SubstatDropdown"
import TextInput from "./TextInput";
import GearRoller from "./GearRoller";
import Enhancement from "./enhancement";

export default function Gacha() {
    //states for the gear tier and json file.
    const [enhancement, setEnhancement] = useState(Enhancement);
    const [tier, setTier] = useState("heroic");
    const [iLevel, setILevel] = useState("85");

    //substat dropdown menu state
    const [substats, setSubstats] = useState({
        substat1: "",
        substat2: "",
        substat3: "",
        substat4: ""
    });

    //substat text input state
    const [textInputs, setTextInputs] = useState({
        substat1: "",
        substat2: "",
        substat3: "",
        substat4: ""
    });

    //state for submit button
    const [submitted, setSubmitted] = useState(false);

    //state for error list
    const [errors, setErrors] = useState({});

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

    //Handler for substat enhancement?
    const handleEnhancement = (updated) => {
        setTextInputs(updated);
    };


    //handler for submit button
    function handleSubmit() {
        const newErrors = {};

        //No iLevel 88 Heroic Gear!
        if (iLevel === "88" && tier === "heroic"){
            alert("As of now, heroic gear cannot be iLevel 88")
            return;
        }

        //dropdown validation
        const hasDuplicates = Object.values(substats).some((item, index) => Object.values(substats).indexOf(item) !== index);
        Object.entries(substats).forEach(([key, value]) => {
            if (value === "") {
                newErrors[key] = "This field is required";
            }
            let validRanges = enhancement[value][iLevel][tier];
            let minValue = Math.min(...validRanges);
            let maxValue = Math.max(...validRanges);
            let input = parseInt(textInputs[key]);

            if (input < minValue || input > maxValue) {
                alert(`Initial value for ${value} must be between ${minValue} and ${maxValue}.`);
                return;
              }

        });
        if(hasDuplicates){
            newErrors["dupes"] = "No duplicate substats";
        }


        // Validate text inputs
        Object.entries(textInputs).forEach(([key, value]) => {
            if (value === '' || isNaN(value) || Number(value) < 0) {
                newErrors[key] = "Value must be a number greater than 0";
            }
        });

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        }
        else{
            setErrors({});
            setSubmitted(true);
        }


    }

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

            <label>Equipment Tier</label>
            <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}    
            >
                <option value="epic">Epic/Red</option>
                <option value="heroic">Heroic/Purple</option>
            </select>
            <p>{tier}</p>

            <label>Substats:</label>

            {/*if not submitted then show */}
            {!submitted && (
                <div>
                    <SubstatDropdown substats={substats} handleSelect={handleSelect} />
                    <TextInput
                        textInputs={textInputs}
                        handleTextInputChange={handleTextInputChange}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                </div>
            )}
            {/*show substats and their values*/}
            {submitted && (
                <div>
                    <GearRoller 
                        enhancement={enhancement}
                        substats={substats}
                        textInputs={textInputs}
                        gearLevel={iLevel}
                        gearTier={tier}
                        handleEnhancement={(updated) =>{
                            console.log("handleEnhancement called with:", updated); handleEnhancement(updated);}}
                    />
                </div>
            )}
        </div>
    )
}