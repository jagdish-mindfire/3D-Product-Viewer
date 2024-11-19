import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const projects = [
  {
    id: 1,
    title: '3D Product Viewer',
    description: 'An interactive 3D product viewer built with Three.js.',
    imageUrl: '/images/product-viewer.png',
    link: '/3d-product-viewer',
  },
  {
    id: 2,
    title: 'Solar System',
    description: 'Explore solar systems in 3D space.',
    imageUrl: '/images/solar-system.png',
    link: '/solar-system',
  },
  // Add Projects here..
];

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
          {projects.map(project => (
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
