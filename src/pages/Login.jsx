import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logos/logo_matchnime.png';
import wave from '../assets/background/wave.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import '../styles/Login.scss';

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState()

   const handleLogin = async e => {
      e.preventDefault();
      const user = { email, password }

      const response = await axios.post(
         "https://flink-web-test.herokuapp.com/api/v1/login",
         user
      );

      if (response.data) {
         setUser(response.data)
         localStorage.setItem('user', JSON.stringify(user))
      }
   };

   useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      console.log("loggedInUser" ,loggedInUser);

      if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
         console.log("foundUser", foundUser)
         setUser(foundUser);
      }
   }, []);

   const showPassword = () => {
		var eyeCrossed = document.querySelector('.show-hide');
      var inputPass = document.querySelector('.pass')
      eyeCrossed.classList.toggle('active')
         
      if (inputPass.type === "password")
         inputPass.type = "text"
      else
         inputPass.type = "password"
	}

   if (user) {
      return <Navigate to={"/principal"} />;
   } else {
      return (
         <div>
            <img src={wave} className="wave-top" alt="" />
            <img src={wave} className="wave-bottom" alt="" />
            <div className="login-box">
               <a href="/"><img src={logo} className="logo" alt="" /></a>
               <h2>Login</h2>
               <form onSubmit={handleLogin}>
                  <div className="input-box">
                     <span><img src={mail} className="mail" alt="" /></span>
                     <input type="email" name=""
                           placeholder="Email" required
                           onChange={({ target }) => setEmail(target.value)} />
                  </div>
                  <div className="input-box">
                     <span><img src={lock} className="lock" alt="" /></span>
                     <div className="show-hide" onClick={showPassword}></div>
                     <input type="password" name="" className="pass"
                           placeholder="Password" required
                           onChange={({ target }) => setPassword(target.value)} />
                  </div>
                  <a href="#" className="link-pass">Forgot password?</a>
                  <input type="submit" name=""
                        value="Login" />
                  <span className="link-reg">Not a member?<a href="/register">Register now!</a> </span>
               </form>
            </div>
         </div>
      );
   }
}

export default Login;