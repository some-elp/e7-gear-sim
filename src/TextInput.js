

function TextInput ({textInputs, handleTextInputChange, handleSubmit, errors}){


    return (
        <>
            <input type="number" name="stat1" value={textInputs.stat1} onChange={handleTextInputChange}/>
            {errors["stat1"] && <p style={{ color: 'red' }}>{errors["stat1"]}</p>}
            <input type="number" name="stat2" value={textInputs.stat2} onChange={handleTextInputChange}/>
            {errors["stat2"] && <p style={{ color: 'red' }}>{errors["stat2"]}</p>}
            <input type="number" name="stat3" value={textInputs.stat3} onChange={handleTextInputChange}/>
            {errors["stat3"] && <p style={{ color: 'red' }}>{errors["stat3"]}</p>}
            <input type="number" name="stat4" value={textInputs.stat4} onChange={handleTextInputChange}/>
            {errors["stat4"] && <p style={{ color: 'red' }}>{errors["stat4"]}</p>}
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default TextInput;