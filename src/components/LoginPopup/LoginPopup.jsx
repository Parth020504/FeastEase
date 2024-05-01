import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type="text" placeholder="Your name" required id="" />}
                
                <input type="email" placeholder="Your email" required id="" />
                <input type="password" placeholder="Your password" required id="" />
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the therms of use & privacy policy</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup