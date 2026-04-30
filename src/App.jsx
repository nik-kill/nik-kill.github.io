import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ProjectList from './components/ProjectList';
import Navigation from './components/Navigation';
import ForceSliders from './components/ForceSliders';
import './App.css';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiChessdotcom, SiLichess } from 'react-icons/si';

function App() {
  const [forces, setForces] = useState({
    red_red: -0.10,
    yellow_yellow: 0.15,
    blue_blue: -0.32,
    red_yellow: 0.00,
    red_blue: -0.34,
    yellow_blue: -0.20,
    yellow_red: 0.00,
    blue_red: -0.17,
    blue_yellow: 0.34
  });



  return (
    <>
      <ParticleBackground forces={forces} />
      
      <Navigation />

      <main className="main-content">
        <section id="home" className="section-container glass-panel">
          <div className="intro-section">
            <div className="profile-container">
              <img src="/assets/me.jpg" alt="Nikhil" className="profile-img" />
              <div className="floating-tags">
                <span className="tag">Tech Enthusiast</span>
                <span className="tag">Traveler</span>
                <span className="tag">Developer</span>
                <span className="tag">Gamer</span>
              </div>
            </div>
            <div className="intro-text" style={{ marginTop: '30px' }}>
              <h2>Hi, I'm Nikhil!</h2>
            </div>
          </div>
          <div className="force-section hidden-mobile">
            <h3>Inter-Particle Forces</h3>
            <hr />
            <ForceSliders forces={forces} setForces={setForces} />
          </div>
        </section>

        <section id="projects" className="section-container">
          <h2 className="section-title glass-panel">Projects</h2>
          <ProjectList />
        </section>

        <section id="connect" className="section-container glass-panel" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Network & Play</h2>
          <div className="split-section">
            <div className="split-col">
              <div className="glass-pills">
                <a href="https://github.com/nik-kill" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <FaGithub size={24} color="#ffffff" /> <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nik-kill" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <FaLinkedin size={24} color="#0077b5" /> <span>LinkedIn</span>
                </a>
                <a href="https://www.hackerrank.com/nik_kill" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <FaHackerrank size={24} color="#00ea64" /> <span>HackerRank</span>
                </a>
                <a href="https://leetcode.com/nik_kill/" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <SiLeetcode size={24} color="#ffa116" /> <span>LeetCode</span>
                </a>
                <a href="https://www.codechef.com/users/mr_j0ker" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <SiCodechef size={24} color="#8B6C55" /> <span>CodeChef</span>
                </a>
              </div>
            </div>
            
            <div className="split-divider"></div>
            
            <div className="split-col">
              <div className="glass-pills">
                <a href="https://www.chess.com/member/nikkkss" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <SiChessdotcom size={24} color="#7fa650" /> <span>Chess.com</span>
                </a>
                <a href="https://lichess.org/@/n1kill" target="_blank" rel="noopener noreferrer" className="glass-pill">
                  <SiLichess size={24} color="#ffffff" /> <span>Lichess</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
