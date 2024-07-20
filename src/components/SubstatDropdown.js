
export default function SubstatDropdown({ substats, handleSelect, tier, textInputs, piece, handleTextInputChange, handleSubmit, errors }) {

    if (piece === "sword") {
        return (
            <div>
                <form>
                    <div className="next-to">
                        <select
                            name="substat1"
                            value={substats.substat1}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat1" value={textInputs.substat1} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat2"
                            value={substats.substat2}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat2" value={textInputs.substat2} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat3"
                            value={substats.substat3}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat3" value={textInputs.substat3} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
                    {tier === "epic" && (
                        <div className="next-to">
                            <select
                                name="substat4"
                                value={substats.substat4}
                                onChange={handleSelect}
                            >
                                <option value="">-Pick Something-</option>
                                <option value="attack%">Attack%</option>
                                <option value="hp%">Health%</option>
                                <option value="speed">Speed</option>
                                <option value="critchance">Crit Chance</option>
                                <option value="critdamage">Crit Damage</option>
                                <option value="effectiveness">Effectiveness</option>
                                <option value="effectresistance">Effect Resistance</option>
                                <option value="hp">Flat Health</option>
                            </select>
                            <input type="number" name="substat4" value={textInputs.substat4} onChange={handleTextInputChange} />
                        </div>
                    )}
                    {tier === "epic" && errors["substat4"] && <p style={{ color: 'red' }}>{errors["substat4"]}</p>}
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );
    }
    if (piece === "chestpiece") {
        return (
            <div>
                <form>
                    <div className="next-to">
                        <select
                            name="substat1"
                            value={substats.substat1}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat1" value={textInputs.substat1} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat2"
                            value={substats.substat2}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat2" value={textInputs.substat2} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat3"
                            value={substats.substat3}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat3" value={textInputs.substat3} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
                    {tier === "epic" && (
                        <div className="next-to">
                            <select
                                name="substat4"
                                value={substats.substat4}
                                onChange={handleSelect}
                            >
                                <option value="">-Pick Something-</option>
                                <option value="defense%">Defense%</option>
                                <option value="hp%">Health%</option>
                                <option value="speed">Speed</option>
                                <option value="critchance">Crit Chance</option>
                                <option value="critdamage">Crit Damage</option>
                                <option value="effectiveness">Effectiveness</option>
                                <option value="effectresistance">Effect Resistance</option>
                                <option value="hp">Flat Health</option>
                            </select>
                            <input type="number" name="substat4" value={textInputs.substat4} onChange={handleTextInputChange} />
                        </div>
                    )}
                    {tier === "epic" && errors["substat4"] && <p style={{ color: 'red' }}>{errors["substat4"]}</p>}
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <form>
                    <div className="next-to">
                        <select
                            name="substat1"
                            value={substats.substat1}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="attack">Flat Attack</option>
                            <option value="defense">Flat Defense</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat1" value={textInputs.substat1} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat2"
                            value={substats.substat2}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="attack">Flat Attack</option>
                            <option value="defense">Flat Defense</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat2" value={textInputs.substat2} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
                    <div className="next-to">
                        <select
                            name="substat3"
                            value={substats.substat3}
                            onChange={handleSelect}
                        >
                            <option value="">-Pick Something-</option>
                            <option value="attack%">Attack%</option>
                            <option value="defense%">Defense%</option>
                            <option value="hp%">Health%</option>
                            <option value="speed">Speed</option>
                            <option value="critchance">Crit Chance</option>
                            <option value="critdamage">Crit Damage</option>
                            <option value="effectiveness">Effectiveness</option>
                            <option value="effectresistance">Effect Resistance</option>
                            <option value="attack">Flat Attack</option>
                            <option value="defense">Flat Defense</option>
                            <option value="hp">Flat Health</option>
                        </select>
                        <input type="number" name="substat3" value={textInputs.substat3} onChange={handleTextInputChange} />
                    </div>
                    {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
                    {tier === "epic" && (
                        <div className="next-to">
                            <select
                                name="substat4"
                                value={substats.substat4}
                                onChange={handleSelect}
                            >
                                <option value="">-Pick Something-</option>
                                <option value="attack%">Attack%</option>
                                <option value="defense%">Defense%</option>
                                <option value="hp%">Health%</option>
                                <option value="speed">Speed</option>
                                <option value="critchance">Crit Chance</option>
                                <option value="critdamage">Crit Damage</option>
                                <option value="effectiveness">Effectiveness</option>
                                <option value="effectresistance">Effect Resistance</option>
                                <option value="attack">Flat Attack</option>
                                <option value="defense">Flat Defense</option>
                                <option value="hp">Flat Health</option>
                            </select>
                            <input type="number" name="substat4" value={textInputs.substat4} onChange={handleTextInputChange} />
                        </div>
                    )}
                    {tier === "epic" && errors["substat4"] && <p style={{ color: 'red' }}>{errors["substat4"]}</p>}
                </form>
                <button className="proceed-button" onClick={handleSubmit}>Submit</button>
            </div>
        );
    }
}

