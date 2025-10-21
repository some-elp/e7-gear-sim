import GearSetList from "../GearSetList";
import Archetypes from "../Archetypes";
import { useEffect } from "react";

export default function GearEval({ gearSet, piece, mainstat, substats, onMatchingArch }) {
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
   
    /*
    New plan: After set and piece have been selected, allow the user to select
    5 different archetypes that they would like to measure the gear by.
    For each of the 5 archetypes, check to see how many of the simulated rolls (x/10000)
    end up as decent gears for that archetype
    On the evaluation page, show a 5 point radar chart that has the 5 archetypes and the
    number of rolls (x/10000) that ended up being usable for each archetype. 
    How do we solve the problem of the user not knowing what archetypes to select?
    Do we pre-select 5 archetypes based on the set selected? seems like a bit of work.
    That is most likely a problem for another time.
    */


    const gearSetList = GearSetList;
    const archetypes = Archetypes;
    console.log("GearEval called with: set: ", { gearSet }, "piece: ", { piece }, "mainstat: ", { mainstat }, "substats: ", { substats });

    useEffect(() => {

        if (!gearSet || !piece || !mainstat || !substats) {
            return null;
        }

        function calculateMatchingArchetypes() {
            let newMatching = [];

            //list of archetypes for the set
            let gearsetArchetypesList = gearSetList[gearSet];

            //how many substats on the gear match the set and archetype
            let goodSubstatCount = 0;

            if (piece === "sword" || piece === "helmet" || piece === "chestpiece") {

                console.log("Line 30: ", gearsetArchetypesList);
                console.log({ gearSet }, { piece }, { mainstat }, { substats });

                gearsetArchetypesList.forEach(archetype => {
                    goodSubstatCount = 0;

                    //check if the substats match for each archetype
                    archetypes[archetype]["substats"].forEach(goodSubstat => {
                        console.log("Checking Good Substat: ", goodSubstat);
                        if (Object.values(substats).includes(goodSubstat)) {
                            goodSubstatCount++;
                            console.log(`This piece has ${goodSubstatCount} good substats for ${archetype}`);
                        }
                    });

                    //left side gear is good if 3 substats match an archetype
                    if (goodSubstatCount >= 3) {
                        console.log(`Try to add ${archetype} to the list.`);
                        newMatching.push(archetype);
                    }
                    //sword cannot roll defense so it's ok if there are only 2 substats
                    else if(goodSubstatCount >= 2 && piece === "sword" && archetype === "Soulweaver/Tank"){
                        console.log(`Try to add ${archetype} to the list.`);
                        newMatching.push(archetype);
                    }
                    //armors cannot roll attack so it's ok if there are only 2 substats
                    else if(goodSubstatCount >= 2 && piece === "chestpiece" && (archetype === "DPS"
                        || archetype === "Lifesteal DPS" || archetype === "PvE DPS")){
                        console.log(`Try to add ${archetype} to the list.`);
                        newMatching.push(archetype);

                    }

                });
            }
            if (piece === "necklace" || piece === "ring" || piece === "boots") {

                console.log("Line 30: ", gearsetArchetypesList);
                console.log({ gearSet }, { piece }, { mainstat }, { substats });

                gearsetArchetypesList.forEach(archetype => {
                    goodSubstatCount = 0;
                    console.log(Object.values(archetypes[archetype]["mainstats"]));

                    //check if mainstat is there for each archetype
                    if (Object.values(archetypes[archetype]["mainstats"]).includes(mainstat)) {

                        //check good substats for each archetype
                        archetypes[archetype]["substats"].forEach(goodSubstat => {
                            console.log("Checking Good Substat: ", goodSubstat);
                            if (Object.values(substats).includes(goodSubstat)) {
                                goodSubstatCount++;
                                console.log(`This piece has ${goodSubstatCount} good substats for ${archetype}`);
                            }
                        });
                    }

                    //restrictions for right side pieces are relaxed, 2 substats is fine.
                    if (goodSubstatCount >= 2) {
                        console.log(`Try to add ${archetype} to the list.`);
                        newMatching.push(archetype);
                    }

                });


            }
            onMatchingArch(newMatching);
        }
        calculateMatchingArchetypes();
    }, [gearSet, piece, mainstat, substats]);

    return (null);
}