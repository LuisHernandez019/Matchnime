import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../assets/logos/logo_matchnime.png';
import homeGirl from '../assets/background/home_girl.svg';
import playStore from '../assets/background/google-play.svg';
import appStore from '../assets/background/app_store.svg';
import '../styles/Home.scss';

const Home = () => {
	const [user, setUser] = useState();

	useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      console.log("loggedInUser" ,loggedInUser);

      if (loggedInUser) {
         const foundUser = JSON.parse(loggedInUser);
         console.log("foundUser", foundUser)
         setUser(foundUser);
      }
   }, []);

	const handleToggle = () => {
		var menuToggle = document.querySelector('.toggle');
      var navigation = document.querySelector('.navigation');

      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
	}

	if (user) {
      return <Navigate to={"/principal"} />;
   } else {
		return (
			<section>
				<div className="circle"></div>
				<header>
					<a href="/"><img src={logo} className="logo" alt="logo" /></a>
					<div className="toggle" onClick={handleToggle}></div>
					<ul className="navigation">
						<li><a href="#">About</a></li>
						<li><a href="#">Features</a></li>
						<li><a href="#">Download</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</header>
				<div className="content">
					<div className="textBox">
						<h2>We found you a <span>Perfect Match!</span></h2>
						<div className="buttons">
							<a href="/register" className="sign-up">Create account</a>
							<a href="/login" className="sign-in">Log in</a>
						</div>
					</div>
					<img src={homeGirl} alt="homeGirl" className="homeGirl" />
				</div>
				<ul className="thumb">
					<li><img src={playStore} alt="google play" /></li>
					<li><img src={appStore} alt="app store" /></li>
				</ul>
			</section>
		);
	}
}

export default Home;