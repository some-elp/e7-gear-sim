import Enhancement from "../enhancement";
import SubstatDropdown from "../components/SubstatDropdown";
import { useState } from "react";
import MainstatSelector from "../components/MainstatSelector";
import GearEval from "../components/GearEval";
import GearSim from "../components/GearSim";
import useBodyClass from "../components/useBodyClass";
import "../css/eval.css";
import SetSelector from "../components/SetSelector";
import PieceSelector from "../components/PieceSelector";

export default function Eval() {

    //Using this or else all pages default to one body
    useBodyClass('eval-body');

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

    //state for matching archetypes
    const [matchingArch, setMatchingArch] = useState([])

    //state for submit button
    const [submitted, setSubmitted] = useState(false);

    //state for error list
    const [errors, setErrors] = useState({});

    //state for enhancement level
    const [enhanceCount, setEnhanceCount] = useState(0);

    //state for gear piece
    const [piece, setPiece] = useState("");

    //state for gear set
    const [gearSet, setGearSet] = useState("");

    //state for main stat
    const [mainstat, setMainstat] = useState("");

    //handler for simulation button
    const [startSim, setStartSim] = useState(false);

    //function to pass to mainstatselector
    const selectMainstat = (event) => {
        setMainstat(event.target.value);
    }

    //handler for piece selection
    function selectPiece(updated){
        setPiece(updated);
        setMainstat('');
    }

    //handler for gear set selection
    function selectSet(set){
        setGearSet(set);
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
        if ((tier === "epic" && Object.keys(substats).length < 4) || (tier === "epic" && Object.keys(textInputs).length < 4)) {
            alert("Epic gear must have 4 substats");
            return;
        }

        //dropdown validation
        console.log(mainstat);
        const hasDuplicates = Object.values(substats).some((item, index) => Object.values(substats).indexOf(item) !== index);
        Object.entries(substats).forEach(([key, value]) => {
            if (value === "") {
                alert("Must select all substats");
                newErrors[key] = "This field is required";
            }
            if (value === mainstat) {
                alert("Mainstat and substats cannot be the same");
                newErrors[key] = "Mainstat and substats cannot be the same";
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
        setGearSet("");
        setPiece("");
        setMainstat("");
        setSubmitted(false);
        setStartSim(false);
        setMatchingArch([]);
    }

    //handler function for matching archetypes
    function onMatchingArch(updated) {
        setMatchingArch(updated);
    }


    return (
        <div className="eval-container">
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
            {submitted && <p>{iLevel}</p>}

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
            {submitted && <p>{tier}</p>}

            <label className="set-label">Set: </label>
            {!submitted && (
                <SetSelector gearSet={gearSet} selectSet={selectSet}/>
            )}
            {submitted && <p>{gearSet}</p>}

            {gearSet !== "" && <label>Piece: </label>}
            {!submitted && (gearSet !== "") && (
                <PieceSelector piece={piece} selectPiece={selectPiece}/>
            )}
            {submitted && <p>{piece}</p>}

            {piece !== "" && <label>Mainstat: </label>}
            {!submitted && (piece !== "") && (
                <div>
                    <MainstatSelector piece={piece} mainstat={mainstat} selectMainstat={selectMainstat} />
                </div>
            )}
            {submitted && <p>{mainstat}</p>}

            {piece !== "" && <label>Substats:</label>}

            {/*if not submitted then show */}
            {!submitted && (piece !== "") && (
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
                    <GearEval gearSet={gearSet} piece={piece} mainstat={mainstat} substats={substats} onMatchingArch={onMatchingArch} />
                </div>
            )}
            {submitted && !startSim && (
                <button classname="proceed-button" onClick={setStartSim(true)}>Simulate Enhancements</button>
            )}
            {startSim && (
                <div>
                    <GearSim
                        enhancement={enhancement}
                        substats={substats}
                        textInputs={textInputs}
                        gearLevel={iLevel}
                        gearTier={tier}
                        matchingArch={matchingArch}
                        piece={piece}
                    />
                    <button className="proceed-button" onClick={resetAll}>Reset All</button>
                </div>
            )}
        </div>
    )
}