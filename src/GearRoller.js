function GearRoller({enhancement, substats, textInputs, gearLevel, gearTier, handleEnhancement}) {
    //TODO: iLevel difference, Purple/Red gear difference.

    console.log('GearRoller props:', { substats, gearLevel, gearTier, textInputs, handleEnhancement });
    let enhanceLevel = 0;


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
        let inputHistory = {...textInputs};

        if (substatName && enhancement[substatName] && enhancement[substatName][gearLevel]) {
            const { values, weights } = enhancement[substatName][gearLevel][gearTier];
            let increment = randomIncrease(values, weights);

            inputHistory[randomSubstat] = (parseInt(inputHistory[randomSubstat])) + increment;
            handleEnhancement(inputHistory);
        }
        console.log(substats);
        console.log(textInputs);
        enhanceLevel = enhanceLevel + 3;
        console.log(enhanceLevel);

    }

    if (enhanceLevel < 15) {

        return (
            <>
                <p>{substats.substat1}: {textInputs.substat1}</p>
                <p>{substats.substat2}: {textInputs.substat2}</p>
                <p>{substats.substat3}: {textInputs.substat3}</p>
                <p>{substats.substat4}: {textInputs.substat4}</p>
                <button onClick={enhanceGear}>Enhance</button>
            </>
        );
    }
    else {
        return <p>Satisfied?</p>
    }
}

function randomIncrease(values, weights) {
    let totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    let randomNum = Math.random() * totalWeight;
    for (let i = 0; i < values.length; i++) {
        if (randomNum < weights[i]) {
            return values[i];
        }
        randomNum -= weights[i];
    }
}

export default GearRoller;