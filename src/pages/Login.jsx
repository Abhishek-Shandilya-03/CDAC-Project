import React from 'react'
import "../styles/login.css"
import{Link} from 'react-router-dom';
import userIcon from "../assets/images/user.png"
import loginImg from "../assets/images/loginImg.jpg"
const Login = () => {
  return (
    <section >
      <div class="main-container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>
            <div class="social-container">
              {/* <a href="#" class="social"><i class="fa-brands fa-google-plus-g"></i></a> */}
              {/* <a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a> */}
            </div>
            
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <Link to='/register'>Create account</Link>
            <button className='login-button'>Log In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src={loginImg}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
