import React, { useState }  from "react";

export default function onHover(){
    let [btnText, setbtnText] = useState("Click Here")
    let [sbtn2, setSbtn2] = useState("btn2");

    function change(){
        setSbtn2("sbtn1");
        setbtnText("Entered");
    }
    function changeRevert(){
        setSbtn2("btn2");
        setbtnText("Leave");
    }
    return(
        <div>
              <h2>onHover:</h2>
        <button className={sbtn2} onMouseEnter={change} onMouseLeave={changeRevert}>{btnText}</button>
        </div>
    )
};