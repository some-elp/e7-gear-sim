import { useState } from "react";

function GearRoller({ enhancement, substats, textInputs, gearLevel, gearTier, handleEnhancement }) {
    //TODO: iLevel difference seems to work. Purple gear next.

    console.log('GearRoller props:', { substats, gearLevel, gearTier, textInputs, handleEnhancement });
    const [enhanceCount, setEnhanceCount] = useState(0);


    /*
    grab the substats and match them to the text inputs
    for each type of substat, decide what the roll range is
    using the roll ranges, add random value (determined by sg)
    to the list of substat values. Stop when gear is +15.
    
    */
    function enhanceGear() {
        let substatKeys = Object.keys(substats);
        let randomSubstat = substatKeys[Math.floor(Math.random() * substatKeys.length)];
        let substatName = substats[randomSubstat];
        let inputHistory = { ...textInputs };

        if (substatName && enhancement[substatName] && enhancement[substatName][gearLevel]) {
            const { values, weights } = enhancement[substatName][gearLevel][gearTier];
            let increment = randomIncrease(values, weights);

            inputHistory[randomSubstat] = (parseInt(inputHistory[randomSubstat])) + increment;
            handleEnhancement(inputHistory);
            setEnhanceCount(enhanceCount + 1);
        }
        console.log(substats);
        console.log(textInputs);

    }

    return (
        <>
            <p>{substats.substat1}: {textInputs.substat1}</p>
            <p>{substats.substat2}: {textInputs.substat2}</p>
            <p>{substats.substat3}: {textInputs.substat3}</p>
            <p>{substats.substat4}: {textInputs.substat4}</p>
            <button onClick={enhanceGear} disabled={enhanceCount >= 5}>Enhance</button>
            {enhanceCount >= 5 && <p>Satisfied?</p>}
        </>
    );

}

function randomIncrease(values, weights) {
    //gets sum of all weights
    let totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    //generate random number from 0 -> weights
    let randomNum = Math.random() * totalWeight;

    for (let i = 0; i < values.length; i++) {
        if (randomNum < weights[i]) {
            return values[i];
        }
        randomNum -= weights[i];
    }
}

export default GearRoller;