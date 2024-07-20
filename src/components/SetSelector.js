import GearSetList from "../GearSetList";

export default function SetSelector({gearSet, selectSet}){

    const sets = Object.keys(GearSetList);
    console.log(sets);
    sets.forEach(item =>
        console.log(item)
    );

    return(
        <div className="gear-element-container">
            {sets.map(item => 
                <button
                    className={gearSet === item ? 'gear-element-button selected' : 'gear-element-button'}
                    onClick={() => selectSet(item)}
                >
                    <img className="gear-element-icon" src={`./images/${item}.png`} alt={`${item}`}/>
                </button>
            )}
        </div>
    )
}