import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { Sdata } from './Sdata';
import './index.css';

function ncard(val) {
  return (
    <Card
imgsrc={val.imgsrc}
title={val.title}
sname={val.sname}
link={val.link}
 />
  )
}

ReactDOM.render(
<div>
<h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>


 {Sdata.map(ncard)}

</div>,
  document.getElementById('root')
);
