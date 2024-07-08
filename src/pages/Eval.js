import Enhancement from "../enhancement";
import SubstatDropdown from "../components/SubstatDropdown"
import { useState } from "react";
import MainstatSelector from "../components/MainstatSelector"

export default function Eval() {
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

    //state for submit button
    const [submitted, setSubmitted] = useState(false);

    //state for error list
    const [errors, setErrors] = useState({});

    //state for enhancement level
    const [enhanceCount, setEnhanceCount] = useState(0);

    //state for gear piece
    const[piece, setPiece] = useState("");

    //state for gear set
    const[gearSet, setGearSet] = useState("");

    //state for main stat
    const[mainstat, setMainstat] = useState("");

    //function to pass to mainstatselector
    const selectMainstat= (event) => {
        setMainstat(event.target.value);
    }

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
        const newErrors = {};

        //No iLevel 88 Heroic Gear!
        if (iLevel === "88" && tier === "heroic") {
            alert("As of now, heroic gear cannot be iLevel 88");
            return;
        }
        if (tier === "epic" && Object.keys(substats).length < 4) {
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

            <label>Set: </label>
            {!submitted && (
                <select
                    value={gearSet}
                    onChange={(e) => setGearSet(e.target.value)}
                >
                    <option value="">-Pick Something-</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="health">Health</option>
                    <option value="speed">Speed</option>
                    <option value="critical">Critical</option>
                    <option value="hit">Hit</option>
                    <option value="destruction">Destruction</option>
                    <option value="resist">Resist</option>
                    <option value="lifesteal">Lifesteal</option>
                    <option value="counter">Counter</option>
                    <option value="unity">Unity</option>
                    <option value="immunity">Immunity</option>
                    <option value="rage">Rage</option>
                    <option value="penetration">Penetration</option>
                    <option value="revenge">Revenge</option>
                    <option value="injury">Injury</option>
                    <option value="protection">Protection</option>
                    <option value="torrent">Torrent</option>
                </select>
            )}
            <p>{gearSet}</p>

            <label>Piece: </label>
            {!submitted && (
                <select
                    value={piece}
                    onChange={(e) => setPiece(e.target.value) && setMainstat('')}
                >
                    <option value="">-Pick Something-</option>
                    <option value="sword">Sword</option>
                    <option value="helmet">Helmet</option>
                    <option value="chestpiece">Chestpiece</option>
                    <option value="necklace">Necklace</option>
                    <option value="ring">Ring</option>
                    <option value="boots">Boots</option>
                </select>
            )}
            <p>{piece}</p>

            <label>Mainstat: </label>
            {!submitted && (piece !== "") && (
                <div>
                    <MainstatSelector piece={piece}/>
                    <p>What is going on</p>
                </div>
            )}
            <p>{mainstat}</p>

            <label>Substats:</label>

            {/*if not submitted then show */}
            {!submitted && (
                    <SubstatDropdown substats={substats}
                        handleSelect={handleSelect}
                        tier={tier}
                        textInputs={textInputs}
                        piece={piece}
                        handleTextInputChange={handleTextInputChange}
                        handleSubmit={handleSubmit}
                        errors={errors} />
            )}
            {/*show substats and their values*/}
            {submitted && (
                <div>
                    {tier === "heroic" && (
                        <>
                            <p>{substats.substat1}: {textInputs.substat1}</p>
                            <p>{substats.substat2}: {textInputs.substat2}</p>
                            <p>{substats.substat3}: {textInputs.substat3}</p>
                        </>
                    )}
                    {tier === "epic" && (
                        <>
                            <p>{substats.substat1}: {textInputs.substat1}</p>
                            <p>{substats.substat2}: {textInputs.substat2}</p>
                            <p>{substats.substat3}: {textInputs.substat3}</p>
                            <p>{substats.substat4}: {textInputs.substat4}</p>
                        </>
                    )}
                    <p>functionality to be added</p>
                    <button onClick={resetAll}>Reset All</button>
                </div>
            )}
        </div>
    )
}