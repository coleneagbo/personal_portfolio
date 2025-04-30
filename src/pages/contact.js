import React from 'react';
import './contact.css'; // a
import { Link } from 'react-router-dom';


export default function Contact() {
  return (
    <div>
      <nav>
        <ul>
           <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/portfolio">PORTFOLIO</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact" className="active">CONTACT</Link></li>
        </ul>
      </nav>
      <hr className="divider" />

<h1 className="heading">⋆.𐙚 ̊ contact me ⋆.𐙚 ̊</h1>

<hr className="divider" />

      <section className="socials">
        <a
          href="https://www.linkedin.com/in/colene-agbo-210791218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="icon"
          />
          <p>LinkedIn</p>
        </a>

        <a href="mailto:your.email@gmail.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="Gmail"
            className="icon"
          />
          <p>Gmail</p>
        </a>

        <a
          href="https://github.com/coleneagbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="icon"
          />
          <p>GitHub</p>
        </a>
      </section>
    </div>
  );
}
