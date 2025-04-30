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
          <p>My name is Colene and I am a first year CS major at the University of California Los Angeles. 
          I hope to pursue a software/tech-related career. I'm still exploring, but I love Frontend Development and would love to work on accessibility technologies. Outside of tech, I love fashion and reading.</p>
        </div>
      </>
    ),
    // Spread 1: Leadership
    (
      <>
        <div className="page left">
          <h2>Leadership Experience</h2>
          <p><strong>National Society of Black Engineers at UCLA</strong></p>
          <p><strong>Intern (2024-2025):</strong><br />Planned First Year Admit Weekend & shadowed exec.</p>
          <p><strong>Secretary (2025-2026):</strong><br />Incoming position for the 2025–2026 school year.</p>
        </div>
        <div className="page right">
          <h2>---</h2>
          <p><strong>Women in Engineering at UCLA Leadership Academy (2024-2025):</strong><br />
          Participated in workshops, speaker panels, and created a final presentation.</p>
        </div>
      </>
    ),
    // Spread 2: Technical
    (
      <>
        <div className="page left">
          <h2>Technical Experience</h2>
          <p>See Projects and Resume.</p>
        </div>
        <div className="page right">
          <h2>Technical Skills</h2>
          <p><strong>Languages:</strong> C++, Python, JavaScript, HTML/CSS, React.js</p>
          <p><strong>Tools:</strong> Git, Figma</p>
        </div>
      </>
    ),
    // Spread 3: Education
    (
      <>
        <div className="page left">
          <h2>Education</h2>
          <p><strong>University of California Los Angeles<br />BS Computer Science</strong></p>
          <p><strong>Relevant Coursework:</strong><br />
            Principles and Practices of Computing (Python), Introduction to C++, 
            Data Structures & Algorithms, Calculus I–III, Physics Mechanics.</p>
        </div>
        <div className="page right">
          <h2>---</h2>
          <p><strong>Awards and Honors:</strong></p>
          <p>UCLA CEED Scholar<br />
            NSBE Alumni Scholarship<br />
            Qualcomm Scholar</p>
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
