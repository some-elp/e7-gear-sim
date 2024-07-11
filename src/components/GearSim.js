

const ENHANCE_COUNT = 5;
const SIM_COUNT = 20;
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

export default function GearSim({ enhancement, substats, textInputs, gearLevel, gearTier, matchingArch, piece }) {

    function simulate() {
        /*let results = matchingArch.reduce((acc, archetype) => {
            acc[archetype] = 0;
        }, {});*/
        let results = 0;

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
            for (let j = 0; j < ENHANCE_COUNT; j++) {
                let substatKeys = Object.keys(enhancedSubstatNames);
                let randomSubstat = substatKeys[Math.floor(Math.random() * substatKeys.length)];
                let substatName = enhancedSubstatNames[randomSubstat];

                //If we are starting from +9 purple gear
                if (j === 3 && gearTier === "heroic") {

                    //Get list of substats that are not already on the list
                    let arr1 = Object.keys(enhancement);
                    let arr2 = Object.values(enhancedSubstatNames);

                    let leftovers = arr1.filter((element) => !arr2.includes(element));
                    if(piece === "sword"){
                        leftovers = leftovers.filter((element) => !(element === "defense%") && !(element === "defense")); 
                    }
                    if(piece === "chestpiece"){
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

            //Check to see if our simulated gear has average or better rolls
            let isGood = true;
            let flatStatCount = 0;
            console.log("Final Substats: ", { enhancedSubstatNames });
            console.log("Final Values: ", { enhancedSubstatValues });
            Object.entries(enhancedSubstatNames).forEach(([key, value]) => {
                console.log(`Checking: key=${key}, value=${value}`);

                //if we have flat stats, do not roll more than twice into them
                if (value === "attack" || value === "defense" || value === "hp") {
                    if (enhancedCount[key] > 1) {
                        isGood = false;
                    }
                    flatStatCount++;
                }
                else {
                    /*
                    console.log(`Averages[value]: ${JSON.stringify(AVERAGES[value])}`);
                    console.log(`gearTier: ${gearTier}`);
                    console.log(`enhancedCount[key]: ${enhancedCount[key]}`);
                    */
                    console.log(`averageValue: ${JSON.stringify(AVERAGES[value][gearLevel])}`);
                    if (parseInt(enhancedSubstatValues[key]) < (AVERAGES[value][gearLevel] * enhancedCount[key])) {
                        isGood = false;
                    }
                }
            });
            if (flatStatCount > 1) {
                isGood = false;
            }
            if (isGood) {
                results++;
            }
        }
        return results;
    }
    const simResults = simulate();
    const percentage = (simResults / SIM_COUNT) * 100;

    return (
        <div>
            <p>This piece has a {percentage}% chance to maybe be good on one of the following: {matchingArch.join(', ')}</p>
        </div>
    );
}