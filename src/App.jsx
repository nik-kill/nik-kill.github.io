import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ProjectList from './components/ProjectList';
import Navigation from './components/Navigation';
import ForceSliders from './components/ForceSliders';
import './App.css';

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

  const [welcomeText, setWelcomeText] = useState("");
  const fullText = "Heyy there!";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setWelcomeText(prev => prev + fullText.charAt(i));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <>
      <ParticleBackground forces={forces} />
      
      <Navigation setWelcomeText={setWelcomeText} />

      <div className="top-bar glass-panel">
        <h1 id="welcome_text">{welcomeText}</h1>
      </div>

      <main className="main-content">
        <section id="home" className="section-container glass-panel">
          <div className="intro-section">
            <div className="intro-text">
              <h2>Hi, I'm Nikhil.</h2>
            </div>
            <div className="profile-container">
              <img src="/assets/me.jpg" alt="Nikhil" className="profile-img" />
              <div className="floating-tags">
                <span className="tag">Tech Enthusiast</span>
                <span className="tag">Traveler</span>
                <span className="tag">Developer</span>
                <span className="tag">Gamer</span>
              </div>
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

        <section id="contact" className="section-container glass-panel">
          <h2 className="section-title">Connect @</h2>
          <div className="contact-links">
            <a href="https://github.com/nik-kill" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github.jpg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/nik-kill" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.hackerrank.com/nik_kill" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/hackerrank.jpg" alt="HackerRank" />
            </a>
            <a href="https://leetcode.com/nik_kill/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/leetcode.png" alt="LeetCode" />
            </a>
            <a href="https://www.codechef.com/users/mr_j0ker" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/codechef.png" alt="CodeChef" />
            </a>
          </div>
        </section>

        <section id="hobbies" className="section-container glass-panel">
          <h2 className="section-title">Gaming @</h2>
          <div className="hobbies-links">
            <a href="https://www.chess.com/member/nikkkss" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/chess.png" alt="Chess" />
            </a>
            <a href="https://lichess.org/@/n1kill" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/lichess.png" alt="Lichess" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
