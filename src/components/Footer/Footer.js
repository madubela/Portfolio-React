import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Langa Madubela, All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

