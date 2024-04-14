import React, { useState } from "react";

export default function OnClick() {
    let [btnText, setbtnText] = useState("Click Here")
    let [sbtn1, setSbtn1] = useState("btn1");

    function change(){
        setSbtn1("sbtn1");
        setbtnText("Clicked");
    }

    function changeRevert() {
        setSbtn1("btn1");
        setbtnText("Click Here");
    }

    return(
        <div>
            <h2>onClick:</h2>
        <button className={sbtn1} onClick={change} onDoubleClick={changeRevert}>{btnText}</button>
        <hr className='line'></hr>
        </div>
    )
}