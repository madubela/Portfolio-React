import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/marneler.madubela"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.linkedin.com/in/langa-madubela-65a694241/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMlWUO5iNR3mZoxSqHq%2BTOw%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/madubela"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Langa Madubela, All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

