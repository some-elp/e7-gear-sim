import GearSetList from "../GearSetList";

export default function SetSelector({gearSet, selectSet}){

    const sets = Object.keys(GearSetList);
    console.log(sets);
    sets.forEach(item =>
        console.log(item)
    );

    return(
        <div className="gear-set-container">
            {sets.map(item => 
                <button
                    className={gearSet === item ? 'gear-set-button selected' : 'gear-set-button'}
                    onClick={() => selectSet(item)}
                >
                    <img src={`./images/${item}.png`} alt={`${item}`}/>
                </button>
            )}
        </div>
    )
}