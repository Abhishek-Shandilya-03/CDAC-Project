import React from 'react'
import {Link} from 'react-router-dom'
import registerImg from "../assets/images/Signup.jpg"
import "../styles/register.css"
const Register = () => {
  return (
    <section>
      <div class="main-container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Sign up</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Phno" />
            <button className='login-button'>Sign up</button>
            <text>Already have an account?<Link to="/login">Login here</Link></text>
            
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={registerImg}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;
