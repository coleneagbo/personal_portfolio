import React, { useState } from "react";
import "./about.css"; // 
import { Link } from 'react-router-dom';


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSpread = (index) => {
    if (index >= 0 && index < spreads.length) {
      setActiveIndex(index);
    }
  };

  const prevSpread = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const nextSpread = () => {
    if (activeIndex < spreads.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const spreads = [
    // Spread 0: Table of Contents + Intro
    (
      <>
        <div className="page left">
          <h2>⋆ Table of Contents ⋆</h2>
          <ul className="toc">
            <li><button onClick={() => goToSpread(1)}>Leadership</button></li>
            <li><button onClick={() => goToSpread(2)}>Technical</button></li>
            <li><button onClick={() => goToSpread(3)}>Education</button></li>
          </ul>
        </div>
        <div className="page right">
          <h2>Welcome!</h2>
          <p>My name is Colene and I am a thrid year Computer Science major at the University of California Los Angeles. 
           Outside of tech, I love fashion and reading.</p>
        </div>
      </>
    ),
    // Spread 1: Leadership
    (
      <>
        <div className="page left">
          <h2>Leadership Experience</h2>
          <p><strong>National Society of Black Engineers at UCLA</strong></p>
          <div className="leadership-details">
            <p><strong>* Internal Vice President (2026-2027)</strong></p>
            <p><strong>* Secretary (2025-2026)</strong></p>
          </div>
          <p><strong>Association for Computing Machiner-Women</strong></p>
          <div className="leadership-details">
            <p><strong>* Marketing Chair (2026-2027)</strong></p>
          </div>
        </div>
        <div className="page right">
          <h2>Further Work Experience</h2>
          <p><strong>Kode With Klossy</strong><br />
              <strong>Code-A-Bration Instructor Assistant</strong><br />
          Taught web development and AI fundamentals to female students (ages 13–18), guiding groups to build image classification models using Google Teachable Machine.</p>

             <p><strong>UCLA Samueli Materiel Services</strong><br />
              <strong>Deans Office Operations and Administrative Assistant</strong><br />
          Managed facility logistics, event setups, and front-desk operations while overseeing organizational procurement, invoicing, and expense tracking.</p>
          
          
        </div>
      </>
    ),
    // Spread 2: Technical
    (
      <>
        <div className="page left">
          <h2>Technical Experience</h2>
          <p className="experience-heading">
            <strong>Microsoft</strong><br />
            <strong>Software Engineering + Product Management (Explore) Intern</strong><br />
            June 2026 - September 2026 · Redmond, Washington
          </p>
          <ul className="experience-details">
            <li>Authored a build deployment automation spec by interviewing 7 engineers, then designed a one-command, 3-stage Windows test pipeline across 2 synchronized environments.</li>
            <li>Built a self-recovering orchestration service with artifact and health validation, then added 23 regression tests and 6 AI-assisted scenarios to prevent false-success results.</li>
          </ul>
        </div>
        <div className="page right">
          <h2>Technical Skills</h2>
          <p><strong>Programming Languages:</strong> Python, C++, HTML, CSS, Javascript, MATLAB</p>
          <p><strong>Tools and Frameworks:</strong> React.js, Node.js, Express.js, Git, Linux, Onshape CAD, Windows OS Scripting</p>
        </div>
      </>
    ),
    // Spread 3: Education
    (
      <>
        <div className="page left">
          <h2>Education</h2>
          <p><strong>University of California Los Angeles<br />BS Computer Science Expected 2028</strong></p>
          <p><strong>Tech Breadth: Tech Management</strong></p>
         <p><strong>Sci-Tech Focus Area: Computer Science</strong></p>
          
        </div>
        <div className="page right">
          <h2>---</h2>
         <p><strong>Relevant Coursework:</strong><br />
            Principles and Practices of Computing (Python), Introduction to C++, Computer Organization, Operating Systems, Software Construction,
            Data Structures & Algorithms, Logic Design of Digital Systems, Programming Languages, Human-Computer Interaction<br />
            Calculus I–III, Physics Mechanics, Differntial Equations, Linear Algebra, Discrete Mathematics, Introduction to Probability</p>
        </div>
      </>
    ),
  ];

  return (
    <div>
      {/* Nav */}
      <nav>
        <ul>
        <li><Link to="/home">HOME</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/about" className="active">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <hr className="divider" />

<h1 className="heading">⋆.𐙚 ̊ more about me ⋆.𐙚 ̊</h1>

<hr className="divider" />

      {/* Flipbook */}
      <div className="book-container">
        <div className="book">
          <div className="spread active">
            {spreads[activeIndex]}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="controls">
          <button className="prev-btn" onClick={prevSpread} disabled={activeIndex === 0}>
            ⬅ Prev
          </button>
          <button className="next-btn" onClick={nextSpread} disabled={activeIndex === spreads.length - 1}>
            Next ➡
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <img
          src="https://res.cloudinary.com/db4ayioxs/image/upload/v1745992101/uploads/1745992100601-Screenshot%202025-04-29%20at%2010.42.38%C3%A2%C2%80%C2%AFPM.png.png"
          alt="Résumé visual"
        />
        <a
          href="https://docs.google.com/document/d/1FgU_FnMrKMmp0D-_OH_hEGx1RuvQjgze/edit?usp=drive_link&ouid=100367393158373898248&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume">View my Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;
