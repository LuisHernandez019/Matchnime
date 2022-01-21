import React from 'react';
import logo from '../assets/logos/logo_matchnime.png';
import wave from '../assets/background/wave.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import '../styles/Login.scss'

const Login = () => {
   const showPassword = () => {
		var eyeCrossed = document.querySelector('.show-hide');
      var inputPass = document.querySelector('.pass')
      eyeCrossed.classList.toggle('active')
         
      if (inputPass.type == "password")
         inputPass.type = "text"
      else
         inputPass.type = "password"
	}

   return (
      <div>
         <img src={wave} className="wave-top" />
         <img src={wave} className="wave-bottom" />
         <div className="login-box">
            <a href="/"><img src={logo} className="logo" /></a>
            <h2>Login</h2>
            <form>
               <div className="input-box">
                  <span><img src={mail} className="mail" /></span>
                  <input type="email" name="" placeholder="Email" />
               </div>
               <div className="input-box">
                  <span><img src={lock} className="lock" /></span>
                  <div className="show-hide" onClick={showPassword}></div>
                  <input type="password" name="" className="pass" placeholder="Password" />
               </div>
               <a href="#" className="link-pass">Forgot password?</a>
               <input type="submit" name="" value="Login" />
               <span className="link-reg">Not a member?<a href="#">Register now!</a> </span>
            </form>
         </div>
      </div>
   );
}

export default Login;