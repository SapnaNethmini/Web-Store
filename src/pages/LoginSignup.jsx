import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>

      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-form'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Your Password'/>
          <button>Continue</button>
        </div>

        
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className='loginsignup-social'>
          <input type='checkbox' name='' id=''></input>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>

      </div>
      </div>

    </div>
  )
}


export default LoginSignup