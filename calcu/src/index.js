import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub, multiply, divide} from './Calcu';
import './index.css';

let x = 5;
let b = 3;
ReactDOM.render(
  <center>
  <h1>Simple Calculator</h1>
  <h4>Sum of {x} and {b} is: {add(x, b)}</h4>
  <h4>Sub of {x} and {b} is: {sub(x, b)}</h4>
  <h4>Multiply of {x} and {b} is: {multiply(x, b)}</h4>
  <h4>Divide of {x} and {b} is: {divide(x, b)}</h4>
  </center>,
  document.getElementById('root')
);
