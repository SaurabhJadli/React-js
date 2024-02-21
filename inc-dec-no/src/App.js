import React, { useState } from 'react';
import './index.css'

export default function App(){
    const [num, setNum] = useState(0)
    function Inc(){
        setNum(num + 1)
    };

    function Dec(){
        setNum(num - 1)
    };

    let nCol;
    if(num > 0){
        nCol="num blue"
    }
    else if(num<0){
        nCol="num red"
    }
    else{
        nCol="num"
    }

    return(
        <div className='app'>
         <button className='btn' onClick={Dec}>Dec</button>
        <h2 className={nCol}>{num}</h2>
        <button className='btn' onClick={Inc}>Inc</button>
        </div>
       
    );
}