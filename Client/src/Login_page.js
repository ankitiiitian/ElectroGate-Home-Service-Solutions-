import React from 'react'
import "./Login_page.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login_main'>
        
        <div className='login_component'>
        <div className='login_head'><h3>Hello Guest</h3></div>
            {/* <img className="login_image" src='https://i.pinimg.com/564x/a6/bb/eb/a6bbebc9c55e89df3e062d427c234565.jpg' alt=""/>         */}
            <div className='login_content'>
                
                <div className='login_profession'>
                    
                    <div className='type_info'>
                        <h2 className='type_head'>Login as Customers</h2>
                     </div>
                     
                    <img src='https://st2.depositphotos.com/4520249/8365/v/600/depositphotos_83650028-stock-illustration-clients-customers-icon.jpg' atl=""/>
                    <Link to='/Login'><button>Sign up/Sign in</button></Link> 
                </div>
                
                <div className='login_profession'>
                    <div className='type_info'>
                        <h2 className='type_head'>Register as Professionals</h2>
                     </div>
                    <img src='https://icon-library.com/images/support-icon-vector/support-icon-vector-27.jpg' atl=""/>
                    <button>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
