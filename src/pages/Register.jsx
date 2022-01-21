import React from 'react';
import wave from '../assets/background/wave.svg';
import user from '../assets/icons/user.svg';
import genders from '../assets/icons/genders.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import '../styles/Register.scss';

const Register = () => {
   const showPassword = () => {
		var eyeCrossed = document.querySelector('.show-hide');
      var inputPass = document.querySelector('.pass')
      eyeCrossed.classList.toggle('active')
         
      if (inputPass.type === "password")
         inputPass.type = "text"
      else
         inputPass.type = "password"
	}

   return (
      <div>
         <img src={wave} className="wave-top" alt="" />
         <img src={wave} className="wave-bottom" alt="" />
         <div className="login-box">
            <h2>Sign up</h2>
            <form>
               <div className="input-box">
                  <span><img src={user} className="user" alt="" /></span>
                  <input type="text" name="" placeholder="Name" required />
               </div>
               <div className="input-box">
                  <span><img src={user} className="user" alt="" /></span>
                  <input type="text" name="" placeholder="Last name" required />
               </div>
               <div className="input-box-1">
                  <span><img src={user} className="user" alt="" /></span>
                  <input type="number" name="" placeholder="Age" min="5" max="100" step="1" required />
               </div>
               <div className="input-box-2">
                  <span><img src={genders} className="genders" alt="" /></span>
                  <select name="gender" id="" required>
                     <option disable hidden value="">Gender</option>
                     <option value="H">H</option>
                     <option value="M">M</option>
                     <option value="NB">NB</option>
                  </select>
               </div>
               <div className="input-box">
                  <span><img src={genders} className="genders" alt="" /></span>
                  <select name="gender" id="" required>
                     <option disable hidden value="">Preferred gender</option>
                     <option value="H">H</option>
                     <option value="M">M</option>
                     <option value="H/M">H/M</option>
                  </select>
               </div>
               <div className="input-box">
                  <span><img src={mail} className="mail" alt="" /></span>
                  <input type="email" name="" placeholder="Email" required />
               </div>
               <div className="input-box">
                  <span><img src={lock} className="lock" alt="" /></span>
                  <div className="show-hide" onClick={showPassword}></div>
                  <input type="password" name="" className="pass" placeholder="Password" required />
               </div>
               <input type="submit" name="" value="Create account" />
               <span className="link-reg">Joined us before?<a href="/login">Login!</a> </span>
            </form>
         </div>
      </div>
   );
}

export default Register;