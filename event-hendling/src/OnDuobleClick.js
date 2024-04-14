import React, { useState }  from "react";

export default function OnDuobleClick(){
    let [btnText, setbtnText] = useState("Click Here")
    let [sbtn2, setSbtn2] = useState("btn2");

    function change(){
        setSbtn2("sbtn1");
        setbtnText("Clicked");
    }

    function changeRevert(){
        setSbtn2("btn1");
        setbtnText("Click Here");
    }
    return(
        <div>
             <h2>onDuobleClick:</h2>
        <button className={sbtn2} onDoubleClick={change} onClick={changeRevert}>{btnText}</button>
        <hr className='line'></hr>
        </div>
    )
}