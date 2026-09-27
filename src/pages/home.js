import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="site-nav home-nav">
        <ul>
          <li><Link to="/home" className="active">HOME</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>

      <main className="profile-page">
        <header className="site-banner profile-banner">
          <h1>coco's corner</h1>
        </header>

        <div className="profile-layout">
          <aside className="profile-sidebar">
            <section className="profile-box identity-box">
              <h2 className="box-title">♡ my profile</h2>
              <img
                src="/colene_picture.png"
                alt="Colene"
                className="profile-img"
              />
              <h3>Colene <span>✧</span></h3>
              <p className="profile-status">CS student · aspiring software engineer</p>
              <div className="status-strip"><span className="status-dot" /> online & dreaming</div>
            </section>

            <section className="profile-box">
              <h2 className="box-title">♡ currently</h2>
              <p><strong>mood:</strong> curious</p>
              <p><strong>into:</strong> fashion, books & building things</p>
            </section>
          </aside>

          <section className="profile-main">
            <article className="profile-box welcome-box">
              <p className="section-label">✦ bulletin ✦</p>
              <h2>Hi, I'm Colene!</h2>
              <p>I'm a computer science student and aspiring software engineer. I love creating thoughtful, welcoming digital experiences and exploring how technology can help people.</p>
              <p className="signature"> ♡</p>
            </article>

            <article className="profile-box">
              <h2 className="box-title">♡ interests</h2>
              <div className="interest-tags">
                <span>systems</span>
                <span>infrastructure engineering</span>
                <span>artificial intelligence</span>
                <span>NYT Connections</span>
              </div>
            </article>

            <article className="profile-box link-box">
              <h2 className="box-title">♡ explore my page</h2>
              <div className="profile-links">
                <Link to="/about">about me <span>↗</span></Link>
                <Link to="/portfolio">my projects <span>↗</span></Link>
                <Link to="/contact">say hello <span>↗</span></Link>
              </div>
            </article>
          </section>
        </div>
        <footer className="profile-footer"> by colene · 2026</footer>
      </main>
    </div>
  );
};

export default Home;
