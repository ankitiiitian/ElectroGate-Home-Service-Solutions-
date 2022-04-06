import React from 'react'
import emailjs from 'emailjs-com';
import "./Ins_form.css";
import logo from './Electro.png';
import { Link } from "react-router-dom";

function Ins_form() {

   function sendEmail(e){
       e.preventDefault();

       emailjs
       .sendForm('service_3fxj37g', 'template_tm0cofv', e.target,'lMrQLFbFfDploZgsh')
       .then(res=> {
        alert("Insurance form submitted successfully !!");
       })
       .catch(err => console.log(err));
   }

  return (

    <div className='ins_form'>
            <Link to='/'>
                <img className='ins_form_logo' src={logo} />
            </Link>
            <div className='ins_form_container'>
                <form className='ins_form_form' onSubmit={sendEmail} >
                    <h1>Insurance Form</h1>
                    
                    <label>Name</label>
                    <input type="text"  name='name'  className='ins_form_control'/>

                    <label>Email</label>
                    <input type="email"  name='user_email' className='ins_form_control'/>

                    <label>Appliance's Detail</label>
                    <textarea name='message' row="4" />

                    <input type='submit' value="Send" style={{marginTop: '10px',width: "10vmax",fontFamily:"sans-serif",background:"blue",fontSize: '1.2vmax', color: "white", fontWeight: "bold"}}/>
                </form>
            <h4 className='ins_form_lastline'>*Appliances Description : Type , Address , Adhaar No. , Mobile No.</h4>
            </div>
    </div>
  )
}

export default Ins_form
