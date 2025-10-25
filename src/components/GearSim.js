/*
    New Logic: Enhance the gear to +15, then reforge it, then for each archetype in the list, check the following:
    - Left side gear has 3 good substats for that archetype, right side gear has 2
    - The gear has enhanced 4 times into the good substats only.
    - if we roll twice into flat on any archetype then it's over
    - do we set a minimum gs, like 65ish for both left and right? or 60 for right.
    Exceptions:
    - flat attack is ok on Burn DPS, Attack-Scaling NonCrit, DPS, and Amiki
    - flat defense is ok on Defense-Scaling NonCrit
    - flat hp is ok on Knights and HP-Scaling NonCrit
    - the above still cannot roll twice into flat stat
    - Protection set must roll 2x into HP on left side
    - Knights are ok with just defense% as a substat on right side (?)
    - Amiki is ok with just effect resist as a stat on right side (?)
    - Since these have single-substat requirements, we can lower the required rolls from 4 to 3? If there are no other good substats.
*/

import Archetypes from "../Archetypes";
import GearSetList from "../GearSetList";


const ENHANCE_COUNT = 5;
const SIM_COUNT = 5000;
const AVERAGES = {
    "attack%": {
        "85": 6,
        "88": 7
    },
    "defense%": {
        "85": 6,
        "88": 7
    },
    "hp%": {
        "85": 6,
        "88": 7
    },
    "speed": {
        "85": 3,
        "88": 3
    },
    "critchance": {
        "85": 4,
        "88": 4
    },
    "critdamage": {
        "85": 5,
        "88": 6
    },
    "effectiveness": {
        "85": 6,
        "88": 7
    },
    "effectresistance": {
        "85": 6,
        "88": 7
    },
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

export default function GearSim({ enhancement, substats, textInputs, gearLevel, gearTier, archetypes, piece, set, mainstat }) {

    function simulate() {
        //array for number of "useful" gears for each archetype.
        let results = [0, 0, 0];

        //loop for every simulation we are doing.
        for (let i = 0; i < SIM_COUNT; i++) {
            //local copies of substat names and values
            let enhancedSubstatNames = { ...substats };
            let enhancedSubstatValues = { ...textInputs };
            let enhancedCount = {
                "substat1": 1,
                "substat2": 1,
                "substat3": 1,
                "substat4": 1
            };
            console.log(enhancedSubstatValues);
            console.log(enhancedSubstatNames);

            //loop to keep track of how many enhancements, up to 5 for now.
            //end up with a +15 piece.
            for (let j = 0; j < ENHANCE_COUNT; j++) {
                let substatKeys = Object.keys(enhancedSubstatNames);

                //get a random substat from the gear
                let randomSubstat = substatKeys[Math.floor(Math.random() * substatKeys.length)];
                let substatName = enhancedSubstatNames[randomSubstat];

                //If we are starting from +9 purple gear, add a new substat when going to +12
                if (j === 3 && gearTier === "heroic") {

                    //Get list of substats that are not already present on the gear
                    let arr1 = Object.keys(enhancement);
                    let arr2 = Object.values(enhancedSubstatNames);

                    let leftovers = arr1.filter((element) => !arr2.includes(element));

                    //remove defense% and defense from the possible substats if the piece is a sword
                    if (piece === "sword") {
                        leftovers = leftovers.filter((element) => !(element === "defense%") && !(element === "defense"));
                    }
                    //remove attack% and attack from the possible substats if the piece is a chestpiece
                    if (piece === "chestpiece") {
                        leftovers = leftovers.filter((element) => !(element === "attack%") && !(element === "attack"));
                    }

                    console.log("Supposedly leftovers array: ", leftovers);
                    console.log("all substats: ", arr1);
                    console.log("already in list: ", arr2);

                    //set substatName to one of the substats not on the list
                    substatName = leftovers[Math.floor(Math.random() * leftovers.length)];

                    //same as regular enhancement
                    const { values, weights } = enhancement[substatName][gearLevel][gearTier];
                    let statValue = randomIncrease(values, weights);

                    //update both substat list and textinputs
                    enhancedSubstatNames["substat4"] = substatName;
                    enhancedSubstatValues["substat4"] = statValue;
                }
                else {
                    const { values, weights } = enhancement[substatName][gearLevel][gearTier];
                    let increment = randomIncrease(values, weights);

                    enhancedSubstatValues[randomSubstat] = (parseInt(enhancedSubstatValues[randomSubstat])) + increment;
                    enhancedCount[randomSubstat]++;
                }
            }

            console.log("Final Substats: ", { enhancedSubstatNames });
            console.log("Final Values: ", { enhancedSubstatValues });
            /*
                We want to try and do the following:
                - reforge the gear and check to see if the gear score is >65 for left, and >60 for right side.
                - then, for each archetype, check to see if 3 substats match for left side, or 2 substats for right side.
                - then, check to see if the enhanceCount for the good substats is >= 4 total.
                - then, if the current archetype isn't one that is ok with flat stats, check if there are 2 or more rolls into
                a flat stat or not.
                - if any of these conditions are not met, then set isGood to false. 
                - then work on the exceptions after.
            */
            //loop through each archetype on every piece
            Object.values(archetypes).forEach((arch, index) => {
                //Check to see if our simulated gear has average or better rolls
                let isGood = true;

                //in order to count number of flat stats in the gear
                let flatStatCount = 0;

                //variable to count number of substats that match the archetype
                let matchCount = 0;

                //variable to count number of rolls made into good substats
                let goodEnhancements = 0;
                
                //array to keep track of how many substats match each archetype.
                let prefSubstats = Archetypes[arch].substats;
                let prefMainstats = Archetypes[arch].mainstats;
                Object.entries(enhancedSubstatNames).forEach(([key, value]) => {
                    console.log(`Checking: key=${key}, value=${value}`);

                    //keep track of how many of the preferred substats for this archetype are on the piece
                    if (prefSubstats.includes(value)){
                        matchCount++;

                        goodEnhancements += enhancedCount[key];
                    }

                    

                    //if we have flat stats, do not roll more than twice into them
                    if (value === "attack" || value === "defense" || value === "hp") {
                        if (enhancedCount[key] > 2) {
                            isGood = false;
                        }
                        flatStatCount++;
                    }
                })

                //piece is bad if the mainstat doesn't match the archetype
                if ((piece === "necklace" || piece === "ring" || piece === "boots") && !(prefMainstats.includes(mainstat))){
                    isGood = false;
                }
                //piece is bad if the set doesn't match the archetype
                if (!GearSetList[set].includes(arch)){
                    isGood = false;
                }
                //piece is bad if left side and less than 3 useful substats
                if ((piece === "sword" || piece === "helmet" || piece === "chestpiece") && matchCount < 3){
                    isGood = false;
                }
                //piece is bad if right side and less than 2 useful substats
                if((piece === "necklace" || piece === "ring" || piece === "boots") && matchCount < 2){
                    isGood = false;
                }
                //piece is bad if we have more than 1 flat substat
                if (flatStatCount > 1) {
                    isGood = false;
                }
                //piece is bad if we roll more than once into the substats that don't matter. (4x into useful stats)
                if (goodEnhancements < 7 && (piece === "sword" || piece === "helmet" || piece === "chestpiece")) {
                    isGood = false;
                }
                if (goodEnhancements < 6 && (piece === "necklace" || piece === "ring" || piece === "boots")) {
                    isGood = false;
                }
                //if the piece is good, then for this archetype, we add 1 to the results. 
                if (isGood) {
                    results[index]++;
                }
            });
        }
        return results;
    }

    const simResults = simulate();
    return (
        <>
            <p>{archetypes.arch1}: {simResults[0]}</p>
            <p>{archetypes.arch2}: {simResults[1]}</p>
            <p>{archetypes.arch3}: {simResults[2]}</p>
        </>
    );

}