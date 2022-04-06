import React, { useState } from 'react'
import './Login.css';
import logo from './Electro.png';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();

      auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
                navigate('/')
        })
        .catch(error =>  alert(error.message))
  }

  const register = e => {
      e.preventDefault();

      auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => {
            //   console.log(auth);
            if (auth) {
                navigate('/')
            }
          })
          .catch(error =>  alert(error.message))
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src={logo} />
      </Link>

      <div className='login_container'>
          <h1>Sign-in</h1>

          <form>
              <h5>E-mail</h5>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

              <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
          </form>

          <p>
              By signing-in you agree to Electro Gate's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
          </p>
          <h5 style={{ fontSize: "1vmax"}}>Don't have a account?</h5>
          <button onClick={register} className='login_registerButton'> Create Your Account</button>

      </div>
    </div>
  )
}

export default Login
