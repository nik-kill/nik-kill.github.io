import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaGamepad } from 'react-icons/fa';

const Navigation = ({ setWelcomeText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (text) => {
    setWelcomeText(text);
    setIsOpen(false);
  };

  return (
    <>
      <div className={`menu-btn glass-panel ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      <div className={`side-panel glass-panel ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => handleNavClick('Home')}>
          <FaHome size={24} /> <span>Home</span>
        </a>
        <a href="#projects" onClick={() => handleNavClick('What do I do?')}>
          <FaBriefcase size={24} /> <span>Projects</span>
        </a>
        <a href="#contact" onClick={() => handleNavClick('Connect @')}>
          <FaEnvelope size={24} /> <span>Contact</span>
        </a>
        <a href="#hobbies" onClick={() => handleNavClick('Gaming @')}>
          <FaGamepad size={24} /> <span>Hobbies</span>
        </a>
      </div>
    </>
  );
};

export default Navigation;
