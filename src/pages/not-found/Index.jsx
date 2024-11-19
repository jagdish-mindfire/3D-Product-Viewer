import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Mindfire FOSS</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/#projects">Projects</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-button">Go Back Home</a>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mindfire FOSS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFound;
