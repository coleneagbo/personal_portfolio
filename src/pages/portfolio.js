import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

const projects = [
  {
    title: 'Survey: NLP for Ghanaian Languages',
    tools: 'Natural Language Processing · Systematic Literature Review',
    description: 'Co-authored a systematic review of Ghanaian-language NLP, synthesizing 36 studies from more than 17,000 publications. The review maps gaps in datasets, models, and evaluation, and proposes a research roadmap for the country’s 73 living indigenous languages.',
    image: '/twi.gif',
    imageAlt: 'Twi vowel and consonant pronunciation chart',
    imageFit: 'contain',
    url: 'https://arxiv.org/html/2405.06818v2',
    linkLabel: 'Read the paper',
  },
  {
    title: 'Bruin Essentials',
    tools: 'React · Vite · Node.js · Express · JWT · PostgreSQL · Docker',
    description: 'A full-stack UCLA marketplace for finding and browsing essentials, built with a React frontend and a Node/Express backend with JWT authentication and PostgreSQL. Containerized with Docker.',
    image: '/Untitled%20presentation.png',
    imageAlt: 'Bruin Essentials marketplace showing school supplies for sale',
    imageFit: 'contain',
    url: 'https://github.com/nigella-l/CS-35L-Project',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Kode with Klossy Instructional Project',
    tools: 'HTML · CSS · JavaScript · Google Teachable Machine',
    description: 'Created a fashion-themed machine learning demo to help students build an image classifier that recognizes clothing as a top or bottom using a webcam.',
    image: '/kwk_white.jpg',
    imageAlt: 'Kode with Klossy logo',
    imageFit: 'contain',
    url: 'https://github.com/coleneagbo/instructional-project',
    linkLabel: 'View the project',
  },
  {
    title: 'NSBE Cyclotron',
    tools: '3D printing · CAD · Electromagnetics · Software',
    description: 'A 3D-printed cyclotron model that uses electromagnetic fields to accelerate small metal balls. NSBE engineering students collaborate on its design, circuitry, and software.',
    image: '/images/nsbe-cyclotron.jpg',
    imageAlt: 'UCLA engineering students collaborating on the cyclotron project',
    imageCredit: 'Photo: UCLA Samueli School of Engineering',
    url: 'https://samueli.ucla.edu/students-get-hands-on-engineering-experience-building-a-3d-printed-cyclotron/',
    linkLabel: 'Read the UCLA article',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <nav className="site-nav">
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/portfolio" className="active">PORTFOLIO</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <header className="site-banner">
        <h1>my projects</h1>
      </header>

      <main className="projects">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            <div className={`project-image${project.image ? ' project-image--photo' : ''}${project.imageFit ? ` project-image--${project.imageFit}` : ''}`}>
              {project.image ? (
                <>
                  <img src={project.image} alt={project.imageAlt} />
                  <small className="project-image-credit">{project.imageCredit}</small>
                </>
              ) : (
                <>
                  <span>✦</span>
                  <small>Project {index + 1}</small>
                </>
              )}
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-tools"><strong>Tools:</strong> {project.tools}</p>
              <p>{project.description}</p>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel}
                </a>
              ) : (
                <span className="project-link">Details coming soon</span>
              )}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Portfolio;
