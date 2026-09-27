import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

const projects = [
  {
    title: 'Survey: NLP for Ghanaian Languages',
    tools: 'Natural Language Processing · Systematic Literature Review',
    description: 'Co-authored a systematic review of Ghanaian-language NLP, synthesizing 36 studies from more than 17,000 publications. The review maps gaps in datasets, models, and evaluation, and proposes a research roadmap for the country’s 73 living indigenous languages.',
    url: 'https://arxiv.org/html/2405.06818v2',
    linkLabel: 'Read the paper',
  },
  {
    title: 'CS 35L Project',
    tools: 'React · Vite · Node.js · Express · JWT · PostgreSQL · Docker',
    description: 'A full-stack project with a React and Vite frontend, a Node and Express backend, JWT authentication, and a PostgreSQL database, containerized with Docker.',
    url: 'https://github.com/nigella-l/CS-35L-Project',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Kode with Klossy Instructional Project',
    tools: 'Languages and tools coming soon',
    description: 'A short description of this project will go here.',
  },
  {
    title: 'NSBE Cyclotron',
    tools: 'Languages and tools coming soon',
    description: 'A short description of this project will go here.',
  },
];

const Portfolio = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/portfolio" className="active">PORTFOLIO</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <hr className="divider" />

      <h1 className="heading">⋆.𐙚 ̊my work ⋆.𐙚 ̊</h1>

      <hr className="divider" />

      <main className="projects">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            <div className="project-image" aria-label={`Placeholder for ${project.title}`}>
              <span>✦</span>
              <small>Project {index + 1}</small>
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
