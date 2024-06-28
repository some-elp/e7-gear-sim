import { useState } from "react";

function TextInput (){
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input 
                type = "text"
                value = {inputValue}
                placeholder = "some text"
            />
            <button onClick={() => setInputValue(value)}>
                test
            </button>
            <p>text: {inputValue}</p>
        </>
    );
}

export default TextInput;