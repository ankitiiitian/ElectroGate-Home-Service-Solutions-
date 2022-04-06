import React from 'react'
import emailjs from 'emailjs-com';
import "./Order.css";
import logo from './Electro.png';
import { Link } from "react-router-dom";

function Order() {

   function sendEmail(e){
       e.preventDefault();

       emailjs
       .sendForm('service_3fxj37g', 'template_9j6vhj8', e.target,'lMrQLFbFfDploZgsh')
       .then(res=> {
        alert("Order successful !! We will Contact you soon...");
       })
       .catch(err => console.log(err));
   }

  return (

    <div className='order_form'>
            <Link to='/'>
                <img className='order_form_logo' src={logo} />
            </Link>
            <div className='order_form_container'>
                <form className='order_form_form' onSubmit={sendEmail} >
                    <h1>Order Form</h1>
                    
                    <label>Customer Name</label>
                    <input type="text"  name='name'  className='order_form_control'/>

                    <label>Service Care's Email</label>
                    <input type="email"  name='user_email' className='order_form_control'/>

                    <label>Customer's Email</label>
                    <input type="text"  name='message1' className='order_form_control'/>

                    <label>Customer's Address</label>
                    <input type="text"  name='message2' className='order_form_control'/>

                    <label>Customer's Time-Slot</label>
                    <input type="text"  name='message3' className='order_form_control'/>

                    <label>Customer's Mobile</label>
                    <input type="text"  name='message4' className='order_form_control'/>

                    <input type='submit' value="Order Now" style={{marginTop: '10px',width: "10vmax",fontFamily:"sans-serif",background:"blue",fontSize: '1.2vmax', color: "white", fontWeight: "bold", marginBottom: "10px"}}/>
                </form>
            {/* <h4 className='order_form_lastline'>*Customer Detail: Email , Address , Time_Slot , Mobile No.</h4> */}
            </div>
    </div>
  )
}

export default Order
