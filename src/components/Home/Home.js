import React from 'react';
import './Home.css';
import './Navigation/Navbar.css'
import profilePicture from '../Images/langa1.jpeg';



const Home = () => {
  return (
    <div className="home-page">
        <div className="logo">LM</div>
      <div className='tittle'>
      <h1 >Hi, I am </h1>
      <h1>Langa Madubela</h1>
      <h2>Software Developer</h2>
      </div>

       <div className="profile-picture">
      <img src={profilePicture} alt="Profile" /> 
      <div className="button-container">
      <button className="download-cv-button">Download CV</button>
    </div>
       </div>
     </div>
  );
};


export default Home;