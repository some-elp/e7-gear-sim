import { useState } from "react";

function TextInput (){
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                placeholder = "some text"
            />
            <p>text: {inputValue}</p>
        </>
    );
}

export default TextInput;