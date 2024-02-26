import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import './Navigation/Navbar.css';
import profilePicture from '../Images/langa1.jpeg';

const Home = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);
      

  return (
    <div id='Home' className="home-page">
      <div className="logo">LM</div>
      <div className='tittle'>
        <h1>Hi, I am </h1>
        <h1>Langa Madubela</h1>
        <h2>Software Developer</h2>
        <p className='Time'> {currentTime.toLocaleTimeString()}</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/langa-madubela-65a694241/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQG0O31riSsSpc3v7hC4ZqA%3D%3D" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/madubela" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
          </a>
        </div>
      </div>

      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
        <div className="button-container">
        <a className="download-cv-button" href="/src/components/Cv/monelisi madubela cv 30 (1).pdf" download>Download CV</a>
       
        </div>
      </div>
    </div>
  );
};

export default Home;
