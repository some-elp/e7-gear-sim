function GearRoller({ enhancement, substats, textInputs, gearLevel, gearTier, setTextInputs }) {
    //TODO: iLevel difference, Purple/Red gear difference.

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

        if (substatName && enhancement[substatName] && enhancement[substatName][gearLevel]) {
            const { values, weights } = enhancement[substatName][gearLevel][gearTier];
            let increment = randomIncrease(values, weights);

            setTextInputs((prevTextInputs) => ({
                ...prevTextInputs,
                [randomSubstat]: (parseInt(prevTextInputs[randomSubstat]) || 0) + increment
            }));
        }
        enhanceLevel = enhanceLevel + 3;

    }

    if(enhanceLevel < 15){
        return <button onClick={enhanceGear}>Enhance</button>
    }
    else{
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