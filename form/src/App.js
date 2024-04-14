import React, { Component, useState } from 'react';
import InputTyping from './InputTyping';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MultiInputHandel from './MultiInputHandel';

export default function App() {

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");

  const [Pname, setPname] = useState("");
  const [Pemail, setPemail] = useState("");


  

  function fName(event) {
    setname(event.target.value)

  }

  function fEmail(event) {
    setEmail(event.target.value)

  }

  function fSub(event) {
    event.preventDefault();
    setPname(name)
    setPemail(email)
  }

  return(
    <div>
        <InputTyping />

      <form className='form' onSubmit={fSub}>
      <h1 className='heading'>The Form</h1>

      
      <label>Name:</label>
        <input type='text' placeholder='Enter your name' onChange={fName}></input>
      
       
<br></br><br></br>
    
    <label>Email:</label>
            <input type='email' placeholder='Enter your email' onChange={fEmail}></input>
    
    <br></br>

        <button className='btn btn-danger' type='submit'>Submit</button>
      </form>
      <h2>name: {Pname}</h2>
      <h2>email: {Pemail}</h2>

      <MultiInputHandel />
      </div>
  )
}