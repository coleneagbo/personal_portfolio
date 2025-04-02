import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Correct imports
import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/home">Home</Link> | <Link to ="/portfolio">Portfolio</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <header className="App-header">
          <a href="https://reactjs.org">React Website</a>
        </header>
      </div>
    </BrowserRouter> // Removed the comment here
  );
}

export default App;


