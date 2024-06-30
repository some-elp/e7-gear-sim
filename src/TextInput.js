

function TextInput ({textInputs, handleTextInputChange, handleSubmit}){


    return (
        <>
            <input type="text" name="text1" value={textInputs.text1} onChange={handleTextInputChange}/>
            <input type="text" name="text2" value={textInputs.text2} onChange={handleTextInputChange}/>
            <input type="text" name="text3" value={textInputs.text3} onChange={handleTextInputChange}/>
            <input type="text" name="text4" value={textInputs.text4} onChange={handleTextInputChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default TextInput;