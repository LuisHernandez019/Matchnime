import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import wave from '../assets/background/wave.svg';
import user_icon from '../assets/icons/user.svg';
import genders from '../assets/icons/genders.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import '../styles/Register.scss';

const Register = () => {
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");
   const [preferredGender, setPreferredGender] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState();

   const handleRegister = async e => {
      e.preventDefault();
      const account = { email, name, lastName, password, preferredGender, gender, age }

      try {
         await axios.post(
            "https://flink-web-test.herokuapp.com/api/v1/register",
            account
         );
         alert("Usuario registrado con éxito.");
         window.location="/login";
      } catch {
         alert("No se ha podido registrar el usuario.");
      }
   }

   useEffect(() => {
      const loggedInUser = localStorage.getItem("user");

      if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
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
               <h2>Sign up</h2>
               <form onSubmit={handleRegister}>
                  <div className="input-box">
                     <span><img src={user_icon} className="user" alt="" /></span>
                     <input type="text" name=""
                            placeholder="Name" required
                            onChange={({ target }) => setName(target.value)} />
                  </div>
                  <div className="input-box">
                     <span><img src={user_icon} className="user" alt="" /></span>
                     <input type="text" name=""
                            placeholder="Last name" required
                            onChange={({ target }) => setLastName(target.value)} />
                  </div>
                  <div className="input-box-1">
                     <span><img src={user_icon} className="user" alt="" /></span>
                     <input type="text" name=""
                            placeholder="Age" min="5" max="100" step="1" required
                            onChange={({ target }) => setAge(target.value)} />
                  </div>
                  <div className="input-box-2">
                     <span><img src={genders} className="genders" alt="" /></span>
                     <select name="gender" required onChange={({ target }) => setGender(target.value)}>
                        <option disable="true" hidden value="">Gender</option>
                        <option value="H">H</option>
                        <option value="M">M</option>
                        <option value="NB">NB</option>
                     </select>
                  </div>
                  <div className="input-box">
                     <span><img src={genders} className="genders" alt="" /></span>
                     <select name="gender" required onChange={({ target }) => setPreferredGender(target.value)}>
                        <option disable="true" hidden value="">Preferred gender</option>
                        <option value="H">H</option>
                        <option value="M">M</option>
                        <option value="H/M">H/M</option>
                     </select>
                  </div>
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
                  <input type="submit" name="" value="Create account" />
                  <span className="link-reg">Joined us before?<a href="/login">Login!</a> </span>
               </form>
            </div>
         </div>
      );
   }
}

export default Register;