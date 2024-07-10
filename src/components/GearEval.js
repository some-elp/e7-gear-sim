import GearSetList from "../GearSetList";
import Archetypes from "../Archetypes";
import { useState } from "react";

export default function GearEval({gearSet, piece, mainstat, substats}){
    /*
    Depending on what set and piece has been selected, get a list of
    potential archetypes that use that set. Use a loop that go through the
    archetype list, and check the following things:
    - If left side gear, if purple, then check if 3 substats match the 
    current archetype. If yes, add that archetype to another list.
    - If right side gear, check if the mainstat and 
    2 substats match the current archetype. If yes, add that archetype
    to the list.
    EXTRA:
    - If left side gear, if red, check if 2 substats match the current 
    archetype. If yes, add that archetype to another list.
    - 
    */

    const gearSetList = GearSetList;
    const archetypes = Archetypes;
    const [matchingArch, setMatchingArch] = useState([]);
    console.log("GearEval called with: set: ", {gearSet}, "piece: ", {piece}, "mainstat: ", {mainstat}, "substats: ", {substats});


    if(piece === "sword" || piece === "helmet" || piece === "chestpiece"){
        let gearsetArchetypesList = gearSetList[gearSet];

        let goodSubstatCount = 0;
        console.log("Line 30: ", gearsetArchetypesList);
        console.log({gearSet}, {piece}, {mainstat}, {substats});

        for(let i = 0; i < gearsetArchetypesList.length; i++){
            let archetype = gearsetArchetypesList[i];
            goodSubstatCount = 0;
            if (!archetypes[archetype] || !archetypes[archetype]["substats"]) {
                console.error(`No substats found for archetype: ${archetype}`);
                continue;
            }
            for(let goodSubstat in archetypes[archetype]["substats"]){
                if(Object.values(substats).includes(goodSubstat)){
                    goodSubstatCount++;
                    console.log(`This piece has ${goodSubstatCount} good substats for ${archetype}`);
                }
            }
            
            if(goodSubstatCount >= 3){
                console.log(`Try to add ${archetype} to the list.`);
                setMatchingArch((prev) => [...prev, archetype]);
            }

        }
    }
    if(piece === "necklace" || piece === "ring" || piece === "boots"){

    }
    return(<p>This piece could be good on: {matchingArch.join(', ')}</p>)
}