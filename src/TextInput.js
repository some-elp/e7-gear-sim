import { useState } from "react";

function TextInput (){
    const [inputValue, setInputValue] = useState("");

    function handleChange(){
        setInputValue(input.value);
    }

    return (
        <div>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleChange}
                placeholder = "some text"
            />
        </div>
    );
}

export default TextInput;