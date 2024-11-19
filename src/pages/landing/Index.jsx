import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import {projectsData} from '../../data/projectsData.js';


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Mindfire FOSS</div>
        <nav className="nav">
          <a href="#projects">Projects</a>
       
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Mindfire FOSS</h1>
        <p>Exploring the possibilities with Three.js</p>
        <a href="#projects" className="cta-button">View Projects</a>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Our Projects</h2>
        <div className="project-list">
          {projectsData.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="project-link">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mindfire FOSS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
