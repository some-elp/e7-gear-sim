

function TextInput ({textInputs, handleTextInputChange, handleSubmit}){


    return (
        <>
            <input type="number" name="stat1" value={textInputs.stat1} onChange={handleTextInputChange}/>
            <input type="number" name="stat2" value={textInputs.stat2} onChange={handleTextInputChange}/>
            <input type="number" name="stat3" value={textInputs.stat3} onChange={handleTextInputChange}/>
            <input type="number" name="stat4" value={textInputs.stat4} onChange={handleTextInputChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default TextInput;