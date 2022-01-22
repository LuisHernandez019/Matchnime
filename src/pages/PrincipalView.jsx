import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import useGetPeople from '../hooks/useGetPeople';
import logo from '../assets/logos/logo_matchnime.png';
import wave from '../assets/background/wave.svg';
import heartArrow from '../assets/icons/heart-arrow.svg';
import signIn from '../assets/icons/sign-in.svg';
import noup from '../assets/icons/noup.svg';
import match from '../assets/icons/match.svg';
import '../styles/PrincipalView.scss';

const PrincipalView = () => {
   const people = useGetPeople();
   const [user, setUser] = useState();

   useEffect(() => {
      const loggedInUser = localStorage.getItem("user");

      if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
         setUser(foundUser);
      }
   }, []);

   const doNoup = () => {
      let cards = document.querySelector('.cards');
      cards.removeChild(cards.lastChild);
   }

   const doMatch = () => {
      let cards = document.querySelector('.cards');
      cards.removeChild(cards.lastChild);
   }

   const handleLogout = () => {
      setUser({});
      localStorage.clear();
      window.location="/";
   }

   return (
      <div>
         <div className="background"></div>
         <nav className="nav-menu">
            <h2>Discover</h2>
            <a href="#"><img src={logo} alt="" className="logo" /></a>
            <div>
               <a href="#"><img src={heartArrow} alt="" className="heart-arrow" /></a>
               <a href="#"><img src={signIn} alt="" className="sign-in" onClick={handleLogout} /></a>
            </div>
         </nav>
         <img src={wave} className="wave-bottom" alt="" />
         <div className="section">
            <div className="cards">
               {people.map((people, index) => (
                  <ProfileCard people={people} key={index} />
               ))}
            </div>
            <div className="options">
               <img src={noup} alt="" className="noup" onClick={doNoup} />
               <img src={match} alt="" className="match" onClick={doMatch} />
            </div>
         </div>
      </div>
   );
}

export default PrincipalView;