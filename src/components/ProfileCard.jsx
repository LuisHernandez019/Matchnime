import React from 'react';
import location from '../assets/icons/location.svg';
import '../styles/PrincipalView.scss';

const ProfileCard = ({ people }) => {
   return (
      <div className="profile" style={{backgroundImage: `url(${people.image})`}}>
         <div className="profile-info">
            <h3>{people.name}, {people.age}</h3>
            <div className="location-info">
               <img src={location} alt="" className="location" />
               <h5>Jalisco, México</h5>
            </div>
         </div>
      </div>
   )
}

export default ProfileCard