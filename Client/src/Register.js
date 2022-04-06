import React, { useState } from 'react'
import "./Register.css";
import logo from './Electro.png';
import { Link } from "react-router-dom";
import { db } from "./firebase";
import background from "./Electro.png";


function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts")
          .add({
            name: name,
            email: email,
            message: message,
          })
          .then(() => {
              alert("Registration form submitted successfully !!");
          })
          .catch((error) => {
              alert(error.message);
          });
          setName("");
          setEmail("");
          setMessage("");
    };

  return (

    <div className='register'>
      <Link to='/'>
        <img className='register_logo' src={logo} />
      </Link>
        <div className='register_container'>
        <form className='register_form' onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            
            <label>Name</label>
            <input placeholder='Name'  value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label>Service Description</label>
            <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type='submit'>Submit</button>
        </form>
        <h4 className='register_lastline'>*Service description : Service Type , PinCode , Pan No. , Adhaar No. , Mobile No.</h4>
        </div>
    </div>
    
  )
}

export default Register
