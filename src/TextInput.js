

function TextInput ({textInputs, handleTextInputChange, handleSubmit, errors}){


    return (
        <>
            <input type="number" name="substat1" value={textInputs.stat1} onChange={handleTextInputChange}/>
            {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
            <input type="number" name="substat2" value={textInputs.stat2} onChange={handleTextInputChange}/>
            {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
            <input type="number" name="substat3" value={textInputs.stat3} onChange={handleTextInputChange}/>
            {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
            <input type="number" name="substat4" value={textInputs.stat4} onChange={handleTextInputChange}/>
            {errors["substat4"] && <p style={{ color: 'red' }}>{errors["substat4"]}</p>}
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default TextInput;