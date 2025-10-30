export default function ArchetypeSelector({archetypes, handleSelectArchetypes, handleSubmit}){
    return (
        <div>
            <form className="archetype-selector">
                <div className="next-to">
                    <select 
                        name="arch1"
                        value={archetypes.arch1}
                        onChange={handleSelectArchetypes} 
                    >
                        <option value="">-Pick Something-</option>
                        <option value="DPS">DPS</option>
                        <option value="Soulweaver">Soulweaver</option>
                        <option value="Knight">Knight</option>
                        <option value="Debuffer">Debuffer</option>
                        <option value="Attack-Scaling Bruiser">Attack-Scaling Bruiser</option>
                        <option value="HP-Scaling Bruiser">HP-Scaling Bruiser</option>
                        <option value="Defense-Scaling Bruiser">Defense-Scaling Bruiser</option>
                        <option value="Attack-Scaling NonCrit">Attack-Scaling NonCrit</option>
                        <option value="Defense-Scaling NonCrit">Defense-Scaling NonCrit</option>
                        <option value="HP-Scaling NonCrit">HP-Scaling NonCrit</option>
                        <option value="Attack-Scaling AutoCrit">Attack-Scaling AutoCrit</option>
                        <option value="Burn DPS">Burn DPS</option>
                        <option value="PvE DPS">PvE DPS</option>
                        <option value="Tamarinne">Tamarinne</option>
                        <option value="ML Aria">ML Aria</option>
                        <option value="ML Ken">ML Ken</option>
                        <option value="Amiki">Amiki</option>
                    </select>
                    <select 
                        name="arch2"
                        value={archetypes.arch2}
                        onChange={handleSelectArchetypes} 
                    >
                        <option value="">-Pick Something-</option>
                        <option value="DPS">DPS</option>
                        <option value="Soulweaver">Soulweaver</option>
                        <option value="Knight">Knight</option>
                        <option value="Debuffer">Debuffer</option>
                        <option value="Attack-Scaling Bruiser">Attack-Scaling Bruiser</option>
                        <option value="HP-Scaling Bruiser">HP-Scaling Bruiser</option>
                        <option value="Defense-Scaling Bruiser">Defense-Scaling Bruiser</option>
                        <option value="Attack-Scaling NonCrit">Attack-Scaling NonCrit</option>
                        <option value="Defense-Scaling NonCrit">Defense-Scaling NonCrit</option>
                        <option value="HP-Scaling NonCrit">HP-Scaling NonCrit</option>
                        <option value="Attack-Scaling AutoCrit">Attack-Scaling AutoCrit</option>
                        <option value="Burn DPS">Burn DPS</option>
                        <option value="PvE DPS">PvE DPS</option>
                        <option value="Tamarinne">Tamarinne</option>
                        <option value="ML Aria">ML Aria</option>
                        <option value="ML Ken">ML Ken</option>
                        <option value="Amiki">Amiki</option>
                    </select>
                    <select 
                        name="arch3"
                        value={archetypes.arch3}
                        onChange={handleSelectArchetypes} 
                    >
                        <option value="">-Pick Something-</option>
                        <option value="DPS">DPS</option>
                        <option value="Soulweaver">Soulweaver</option>
                        <option value="Knight">Knight</option>
                        <option value="Debuffer">Debuffer</option>
                        <option value="Attack-Scaling Bruiser">Attack-Scaling Bruiser</option>
                        <option value="HP-Scaling Bruiser">HP-Scaling Bruiser</option>
                        <option value="Defense-Scaling Bruiser">Defense-Scaling Bruiser</option>
                        <option value="Attack-Scaling NonCrit">Attack-Scaling NonCrit</option>
                        <option value="Defense-Scaling NonCrit">Defense-Scaling NonCrit</option>
                        <option value="HP-Scaling NonCrit">HP-Scaling NonCrit</option>
                        <option value="Attack-Scaling AutoCrit">Attack-Scaling AutoCrit</option>
                        <option value="Burn DPS">Burn DPS</option>
                        <option value="PvE DPS">PvE DPS</option>
                        <option value="Tamarinne">Tamarinne</option>
                        <option value="ML Aria">ML Aria</option>
                        <option value="ML Ken">ML Ken</option>
                        <option value="Amiki">Amiki</option>
                    </select>
                </div>
            </form>
            <button className="proceed-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}