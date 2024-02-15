import React from "react";
import Card from "../card"; // Assuming Card component is located in the same directory
import Fade from "react-reveal/Fade"; // Assuming you have installed and imported react-reveal

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      title: "My Portfolio Website",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectUrl: "https://langa-madubela-portfolio.netlify.app/"
    },
    
    {
      title: "Hlalanathi BnB Website",
      imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectUrl: "https://example.com/project2"
    },


    {
      title: "Bank App",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661301075857-63868ae88c00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectUrl: "https://example.com/project2"
    },

    {
      title: "Financial Calculator",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661418553375-5ea448f11f34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectUrl: "https://example.com/project2"
    },

    {
      title: "Metric Convetor",
      imageUrl: "https://plus.unsplash.com/premium_photo-1663133656712-09e5fc257e1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectUrl: "https://example.com/project2"
    },

    {
      title: "Connect-4 Game",
      imageUrl: "https://media.istockphoto.com/id/1267070625/photo/four-an-a-row-giant-game-set.jpg?s=1024x1024&w=is&k=20&c=7eg6-0o4kyxa7nEiiHT1zyYUKVEPOBM0NuSFtyDp10k=",
      projectUrl: "https://example.com/project2"
    },

  ];

  return (
    <section id="portfolio" style={portfolioStyles}>
      <div className="container" style={containerStyles}>
        <Fade bottom>
          <h2 style={headingStyles}>Portfolio</h2>
        </Fade>
        <div className="project-grid" style={projectGridStyles}>
          {projects.map((project, index) => (
            <Fade bottom key={index} delay={index * 100}>
              <Card
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                style={cardStyles}
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const portfolioStyles = {
  padding: "40px 0",
};

const containerStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 15px",
};

const headingStyles = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "2rem",
};

const projectGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyles = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
};

export default Portfolio;
