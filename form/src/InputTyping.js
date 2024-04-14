import React, { useState } from "react";

export default function InputTyping() {
    const [inputt, setInputt] = useState();
    function InputText(e){
        setInputt(e.target.value);
    }
    return(
        <div className="inputTyping">
        <h1>Your Input text is: {inputt}</h1>
                <input type="text" placeholder="Enter text to display" onChange={InputText}></input>

        </div>

    )
}