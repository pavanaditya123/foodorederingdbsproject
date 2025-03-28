import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]=useState("Sign Up")
  return (
    <div  className='login-popup'>
        <form  className="login-popup-conatiner">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required></input>}
            <input type="email" placeholder='Your email' required></input>
            <input type="password" placeholder='Password' required></input>
        </div>

        <button>{currState==="Sign Up"?"Create account":"Login"}</button>

        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By Continuing ,I agree to the terms of use & privacy policy.</p>
        </div>

        <p>Create a new account? <span>Click here</span></p>
        
        <p>Already have a account? <span>Login here</span></p>
        </form>
    </div>
  );
}

export default LoginPopup;
