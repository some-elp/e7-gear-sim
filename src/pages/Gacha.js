import { useState } from "react";
import SubstatDropdown from "../components/SubstatDropdown"
import GearRoller from "../components/GearRoller";
import Enhancement from "../enhancement";
import "../css/gacha.css";
import useBodyClass from "../components/useBodyClass";

export default function Gacha() {

    //Using this or else all pages default to one body
    useBodyClass('gacha-body');

    //states for the gear tier and json file.
    const enhancement = Enhancement;
    const [tier, setTier] = useState("heroic");
    const [iLevel, setILevel] = useState("85");

    //substat dropdown menu state
    const [substats, setSubstats] = useState({
        substat1: "",
        substat2: "",
        substat3: ""
    });

    //substat text input state
    const [textInputs, setTextInputs] = useState({
        substat1: "",
        substat2: "",
        substat3: ""
    });

    //states for resetting to base enhancement level
    const [revertSubs, setRevertSubs] = useState({});
    const [revertTextInputs, setRevertTextInputs] = useState({});

    //state for submit button
    const [submitted, setSubmitted] = useState(false);

    //state for error list
    const [errors, setErrors] = useState({});

    //state for enhancement level
    const [enhanceCount, setEnhanceCount] = useState(0);

    //handler for substat dropdown
    const handleSelect = (event) => {
        const { name, value } = event.target;
        setSubstats((prevSubstats) => ({
            ...prevSubstats,
            [name]: value
        }));
        if (enhanceCount === 0) {
            setRevertSubs((prevSubstats) => ({
                ...prevSubstats,
                [name]: value
            }));
        }
    };

    // Handler for substat text input
    const handleTextInputChange = (event) => {
        const { name, value } = event.target;
        setTextInputs((prevTextInputs) => ({
            ...prevTextInputs,
            [name]: value,
        }));
        if (enhanceCount === 0) {
            setRevertTextInputs((prevTextInputs) => ({
                ...prevTextInputs,
                [name]: value,
            }));
        }
    };

    //Handler for substat enhancement?
    const handleEnhancement = (updated) => {
        setTextInputs(updated);
        setEnhanceCount(enhanceCount + 1);

    };

    //Handler for new substats
    function newSubstat(updated) {
        setSubstats(updated);
    }


    //handler for submit button
    function handleSubmit() {
        const newErrors = {};

        //No iLevel 88 Heroic Gear!
        if (iLevel === "88" && tier === "heroic") {
            alert("As of now, heroic gear cannot be iLevel 88");
            return;
        }
        if (tier === "epic" && Object.keys(substats).length < 4 && tier === "epic" && Object.keys(textInputs).length < 4) {
            alert("Epic gear must have 4 substats");
            return;
        }

        //dropdown validation
        const hasDuplicates = Object.values(substats).some((item, index) => Object.values(substats).indexOf(item) !== index);
        Object.entries(substats).forEach(([key, value]) => {
            if (value === "") {
                alert("Must select all substats");
                newErrors[key] = "This field is required";
            }
            let validRanges = enhancement[substats[key]][iLevel][tier]["values"];
            let minValue = Math.min(...validRanges);
            let maxValue = Math.max(...validRanges);
            let input = parseInt(textInputs[key]);

            if (input < minValue || input > maxValue) {
                newErrors[key] = `Initial value for ${value} must be between ${minValue} and ${maxValue}.`;

            }

        });
        if (hasDuplicates) {
            alert("No duplicate substats");
            newErrors["dupes"] = "No duplicate substats";
        }


        // Validate text inputs
        Object.entries(textInputs).forEach(([key, value]) => {
            if (value === '' || isNaN(value) || Number(value) < 0) {
                newErrors[key] = "Value must be a number greater than 0";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }
        else {
            setErrors({});
            setSubmitted(true);
        }


    }

    //set page to default (as if refreshed)
    function resetAll() {
        setEnhanceCount(0);
        setSubstats({
            "substat1": "",
            "substat2": "",
            "substat3": ""
        });
        setTextInputs({
            "substat1": "",
            "substat2": "",
            "substat3": ""
        });
        setTier("heroic");
        setSubmitted(false);
    }

    //go back to +0 gear
    function revert() {
        setEnhanceCount(0);
        setSubstats(revertSubs);
        setTextInputs(revertTextInputs);
    }

    return (
        <div className="gacha-container">
            <label>Equipment Level: </label>
            {!submitted && (
                <select
                    value={iLevel}
                    onChange={(e) => setILevel(e.target.value)}
                >
                    <option value="85">85</option>
                    <option value="88">88</option>
                </select>
            )}
            <p>{iLevel}</p>

            <label>Equipment Tier: </label>
            {!submitted && (
                <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                >
                    <option value="epic">Epic/Red</option>
                    <option value="heroic">Heroic/Purple</option>
                </select>
            )}
            <p>{tier}</p>

            <label>Substats:</label>

            {/*if not submitted then show */}
            {!submitted && (
                <div>
                    <SubstatDropdown substats={substats}
                        handleSelect={handleSelect}
                        tier={tier}
                        textInputs={textInputs}
                        handleTextInputChange={handleTextInputChange}
                        handleSubmit={handleSubmit}
                        errors={errors} />
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
                        handleEnhancement={(updated) => { handleEnhancement(updated); }}
                        newSubstat={(updated) => { newSubstat(updated); }}
                        enhanceCount={enhanceCount}
                    />
                    {enhanceCount >= 5 && <button onClick={resetAll}>Reset All</button>}
                    {enhanceCount >= 5 && <button onClick={revert}>Use Reroll Stone</button>}
                </div>
            )}
        </div>
    )
}