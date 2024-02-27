import React from 'react';
import './Skills.css';
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPython, faJava, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="skills-container" id='Skills'>
        <Fade bottom>
          <h2 style={headingStyles}>Skills</h2>
        </Fade>
      <div className="skills-border">
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" title="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" title="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} className="skill-icon" title="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faPython} className="skill-icon" title="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJava} className="skill-icon" title="Java" />
          <p>Java</p>
        </div>

        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" title="React" />
          <p>React</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;

const headingStyles = {
  textAlign: "center",

  fontSize: "3rem",
  color: "white",
  paddingTop: "60px",
};
