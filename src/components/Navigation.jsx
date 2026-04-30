import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaBriefcase, FaNetworkWired } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`menu-btn glass-panel ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      <div className={`side-panel glass-panel ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={handleNavClick}>
          <FaHome size={24} /> <span>Home</span>
        </a>
        <a href="#projects" onClick={handleNavClick}>
          <FaBriefcase size={24} /> <span>Projects</span>
        </a>
        <a href="#connect" onClick={handleNavClick}>
          <FaNetworkWired size={24} /> <span>Connect</span>
        </a>
      </div>
    </>
  );
};

export default Navigation;
