import React from 'react';

const home = () => {
    return (
        <div className="home" id="home">
            {
            <ul>
                <li>
                <a href="./home.js" className="nav-links">Home</a>
                <a href="./about.js" className="nav-links">About</a>
                <a href="./skills.js" className="nav-links">Skills</a>
                <a href="./portfolio.js" className="nav-links">My Work</a>
                <a href="./contact.js" className="nav-links">Contact Me</a>
                </li>
            </ul>
            }

            
     <div className='Image'></div>
        <h1 className=" section">
            Hi, I am <strong>Langa Madubela</strong>
        </h1>
        <p className="">front-end dev</p>


        </div>

        

    );
};

export default home;