import { useState, useEffect } from "react";
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
        stat1: "",
        stat2: "",
        stat3: "",
        stat4: ""
    });

    //state for submit button
    const [submitted, setSubmitted] = useState(false);

    //state for error list
    const [errors, setErrors] = useState({});

    //load gear enhancement json
    const [data, setData] = useState(enhancement);

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

        //dropdown validation
        Object.entries(substats).forEach(([key, value]) => {
            if (value === "") {
                newErrors[key] = "This field is required";
            }
        });

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
                        handleEnhancement={handleEnhancement}
                    />
                    {/*
                    <p>{substats.substat1}: {textInputs.stat1}</p>
                    <p>{substats.substat2}: {textInputs.stat2}</p>
                    <p>{substats.substat3}: {textInputs.stat3}</p>
                    <p>{substats.substat4}: {textInputs.stat4}</p>
                    */}      
                </div>
            )}
        </div>
    )
}