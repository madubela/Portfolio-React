import React from 'react'
import './About.css'
import Image from '../Images/langa2.jpeg'


const About = () => {
  return (
   
    <section id='About' className="about-me">
        <div className="container">
        <h1>Who I am</h1>
          <hr className="line" /> 
        <p>
        I am Madubela Langa Monelisi, and most people call me "Mane." I was born on April 30, 2000. I grew up in Mthatha, Eastern Cape. I began my schooling journey at Lutoli J.S.S. and later attended Bensile J.S.S. I eventually completed my high school education at Attwell Madala High School. After graduating, I was accepted into Walter Sisulu University, where I pursued a Diploma in Information Communication Technology with a focus on Business Analysis.
       </p>
        <p>
        In addition to my formal education, I completed an online course in Data Science. I gained valuable experience working at Paper Jam Solutions, where I acquired knowledge about fixing and operating printing machines. I also had the opportunity to work at Lutoli J.S.S. as an E-cadre.
        </p>
        <p>
        I'm currently undertaking an 18-month internship in Software Development at CapaCiTi, which provides me with valuable hands-on experience in the field.
        </p>
        <p>
        Beyond my professional pursuits, I have a passion for playing the keyboard, which I find to be a therapeutic and enjoyable pastime. I come from a supportive family of five, which includes my mother, Mamtshawe, and my three brothers. I am the youngest member of our family.
        </p>
        <img src= {Image} alt="Madubela langa" className="about-img" />
      
    </div>
   </section>
 
  )
}

export default About