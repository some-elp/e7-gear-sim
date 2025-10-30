/*
    New Logic: Enhance the gear to +15, then reforge it, then for each archetype in the list, check the following:
    - Left side gear has 3 good substats for that archetype, right side gear has 2
    - The gear has enhanced 4 times into the good substats only.
    - if we roll twice into flat on any archetype then it's over
    - do we set a minimum gs, like 65ish for both left and right? or 60 for right.
    Exceptions:
    - flat attack is ok on Burn DPS, Attack-Scaling NonCrit, and Amiki
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
import Reforge from "../Reforge";


const ENHANCE_COUNT = 5;
const SIM_COUNT = 5000;
const CORNER_CASE = [
    "Attack-Scaling NonCrit",
    "Amiki",
    "Defense-Scaling NonCrit",
    "HP-Scaling NonCrit"
];


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
                "substat1": 0,
                "substat2": 0,
                "substat3": 0,
                "substat4": 0
            };
            console.log("Initial Substats: ", {...enhancedSubstatNames});
            console.log("Initial Values: ", {...enhancedSubstatValues});

            
            //variable for whether the reforged gear meets the gear score requirement
            let goodReforge = true;

            //keep track of the piece's gearscore
            let gearScore = 0;

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
                    console.log(
                        "j =", j,
                        "| randomSubstat:", randomSubstat,
                        "| before:", enhancedSubstatValues[randomSubstat],
                        "| increment:", increment
                    );

                    enhancedSubstatValues[randomSubstat] = (parseInt(enhancedSubstatValues[randomSubstat])) + increment;
                    enhancedCount[randomSubstat]++;
                }
            }  

            console.log("Final Substats: ", {...enhancedSubstatNames});
            console.log("Final Values: ", {...enhancedSubstatValues});

            //reforge if 85 gear to check gear score after loop
            //example (key,value): ("substat1", "hp%")
            Object.entries(enhancedSubstatNames).forEach(([key, value]) => {
                if(gearLevel === "85"){
                    enhancedSubstatValues[key] = enhancedSubstatValues[key] + Reforge[value][enhancedCount[key]]
                }

                if(value === "critchance"){
                    gearScore += enhancedSubstatValues[key]*1.6;
                }
                else if(value === "critdamage"){
                    gearScore += enhancedSubstatValues[key]*1.14;
                }
                else if(value === "speed"){
                    gearScore += enhancedSubstatValues[key]*2;
                }
                else if(value === "attack"){
                    gearScore += enhancedSubstatValues[key]*0.0972; 
                }
                else if(value === "hp"){
                    gearScore += enhancedSubstatValues[key]*0.02;
                }
                else if (value === "defense"){
                    gearScore += enhancedSubstatValues[key]*0.135;
                }
                else{
                    gearScore += enhancedSubstatValues[key];
                }
            })


            if((piece === "sword" || piece === "helmet" || piece === "chestpiece") && gearScore < 65){
                goodReforge = false;
            }
            if((piece === "necklace" || piece === "ring" || piece === "boots") && gearScore < 60){
                goodReforge = false;
            }
            console.log("Reforged Substats: ", {...enhancedSubstatNames});
            console.log("Reforged Values: ", {...enhancedSubstatValues});
            console.log("Reforged gearscore: ", {gearScore});            
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

                //variable to check protection set
                let protHP = true;

                //variable to count number of substats that match the archetype
                let matchCount = 0;

                //variable to count number of rolls made into good substats
                let goodEnhancements = 0;
                
                //array to keep track of how many substats match each archetype.
                let prefSubstats = Archetypes[arch].substats;
                let prefMainstats = Archetypes[arch].mainstats;
                Object.entries(enhancedSubstatNames).forEach(([key, value]) => {
                    //example object: ("substat1", "hp%")
                    console.log(`Checking: key=${key}, value=${value}`);

                    //keep track of how many of the preferred substats for this archetype are on the piece
                    if (prefSubstats.includes(value)){
                        matchCount++;

                        goodEnhancements += enhancedCount[key];
                    }

                    

                    //if we have flat stats, do not roll more than twice into them, also keep track of how many flat stats
                    /*if (value === "attack" && !(arch === "Burn DPS" || arch === "Attack-Scaling NonCrit" || arch === "Amiki")) {
                        if (enhancedCount[key] > 1) {
                            isGood = false;
                        }
                        flatStatCount++;
                    }*/

                    //if it's a left-side protection set piece, it must roll at least 2x into hp%
                    if(value === "hp%" && set === "protection" && (piece === "sword" || piece === "helmet" || piece === "chestpiece")){
                        if(enhancedCount[key] < 2){
                            protHP = false;
                        }
                    }
                })
                

                //piece is bad if left side and less than 3 useful substats
                if ((piece === "sword" || piece === "helmet" || piece === "chestpiece") && matchCount < 3 && !(CORNER_CASE.includes(arch))){
                    isGood = false;
                }
                //bad if less than 2 in corner cases
                if ((piece === "sword" || piece === "helmet" || piece === "chestpiece") && matchCount < 2 && CORNER_CASE.includes(arch)){
                    isGood = false;
                }                
                //piece is bad if right side and less than 2 useful substats
                if((piece === "necklace" || piece === "ring" || piece === "boots") && matchCount < 2){
                    isGood = false;
                }
                //but the piece is still good if 2 substat sword and tank archetype
                if((piece === "sword" && (arch === "Knight" || arch === "Soulweaver") && matchCount >=2)){
                    isGood = true;
                }
                //but the piece is still good if 2 substat chestpiece and full dps
                if((piece === "chestpiece" && arch === "DPS" && matchCount >= 2)){
                    isGood = true;
                }
                //but the piece is still good if it's effres only on a chestpiece for amiki
                if(piece === "chestpiece" && arch === "Amiki" && matchCount >= 1){
                    isGood = true;
                }
                //piece is bad if left side prot set hp and doesn't have 2 rolls into hp%
                if(!protHP){
                    isGood = false;
                }
                //piece is bad if we roll more than once into the substats that don't matter. (4x into useful stats)
                if (goodEnhancements < 4) {
                    isGood = false;
                }
                if (goodEnhancements < 3 && arch === "Amiki"){
                    isGood = true;
                }
                //piece is bad if the set doesn't match the archetype
                if (!GearSetList[set].includes(arch)){
                    isGood = false;
                }
                //piece is bad if the mainstat doesn't match the archetype
                if ((piece === "necklace" || piece === "ring" || piece === "boots") && !(prefMainstats.includes(mainstat))){
                    isGood = false;
                }
                //piece is bad if gearScore is too low (65 left side and 60 right side)
                if (!goodReforge){
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
            <p>{archetypes.arch1}: {simResults[0]} / 5000</p>
            <p>{archetypes.arch2}: {simResults[1]} / 5000</p>
            <p>{archetypes.arch3}: {simResults[2]} / 5000</p>
        </>
    );

}