

function TextInput({ textInputs, handleTextInputChange, handleSubmit, errors, tier }) {

    if (tier === "heroic") {
        return (
            <>
                <input type="number" name="substat1" value={textInputs.substat1} onChange={handleTextInputChange} />
                {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
                <input type="number" name="substat2" value={textInputs.substat2} onChange={handleTextInputChange} />
                {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
                <input type="number" name="substat3" value={textInputs.substat3} onChange={handleTextInputChange} />
                {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
                <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }
    else {
        return (
            <>
                <input type="number" name="substat1" value={textInputs.substat1} onChange={handleTextInputChange} />
                {errors["substat1"] && <p style={{ color: 'red' }}>{errors["substat1"]}</p>}
                <input type="number" name="substat2" value={textInputs.substat2} onChange={handleTextInputChange} />
                {errors["substat2"] && <p style={{ color: 'red' }}>{errors["substat2"]}</p>}
                <input type="number" name="substat3" value={textInputs.substat3} onChange={handleTextInputChange} />
                {errors["substat3"] && <p style={{ color: 'red' }}>{errors["substat3"]}</p>}
                <input type="number" name="substat4" value={textInputs.substat4} onChange={handleTextInputChange} />
                {errors["substat4"] && <p style={{ color: 'red' }}>{errors["substat4"]}</p>}
                <button onClick={handleSubmit}>Submit</button>
            </>
        );
    }
}

export default TextInput;