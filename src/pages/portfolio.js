import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

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

      <h1 className="heading">⋆.𐙚 ̊what I’ve been working on ⋆.𐙚 ̊</h1>

      <hr className="divider" />

      <section className="projects">
        <div className="project">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.pinimg.com/736x/42/36/8e/42368e3a496c16bde7dd7742bc55f93f.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="https://res.cloudinary.com/db4ayioxs/image/upload/v1745990992/uploads/1745990990893-Screenshot%202025-04-29%20at%2010.26.37%C3%A2%C2%80%C2%AFPM.png.png"
                  alt="Back"
                />
              </div>
            </div>
          </div>

          <h2><em>NSBE PARTICLE ACCELERATOR</em></h2>
          <p><strong>Languages Used:</strong><br />
            &bull; Arduino C++<br />
            &bull; Python
          </p>
          <p>
            Developed a C++ Arduino program to measure voltage flowing through two points on a breadboard. Developed a Python program to measure and compare electromagnetic fields during the particle accelerator’s cycle.
          </p>
        </div>

        <div className="project">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.pinimg.com/736x/48/0c/67/480c67fd231d8a60e3458faf605525c8.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="https://res.cloudinary.com/db4ayioxs/image/upload/v1745992404/uploads/1745992403211-Screenshot%202025-04-29%20at%2010.38.46%C3%A2%C2%80%C2%AFPM.png.png"
                  alt="Back"
                />
              </div>
            </div>
          </div>

          <h2><em>INTERNET OF THINGS WORD WRITING TOOL</em></h2>
          <p><strong>Languages and Tools Used:</strong><br />
            &bull; C++<br />
            &bull; STM3 CUBE IDE<br />
            &bull; IOT Platform Circuit Board
          </p>
          <p>
            Developed a motion-based word writing tool using sensors to detect pen movement and transmit signals wirelessly for rendering on-screen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
