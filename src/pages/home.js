import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <ul>
          <li><Link to="/home" className="active">HOME</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <hr className="divider" />

      <h1 className="heading">⋆.𐙚 ̊ coco's corner ⋆.𐙚 ̊</h1>

      <hr className="divider" />

      <div className="intro-section">
        <img
          src="https://i.pinimg.com/736x/b6/95/be/b695be2e7811240b67c1d793ab12f69e.jpg"
          alt="bear with glasses"
          className="bear-img"
        />

        <div className="intro-card">
          <h1>Hi, I'm Colene!</h1>
          <p>☆ I'm a student developer and aspiring software engineer ☆</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
