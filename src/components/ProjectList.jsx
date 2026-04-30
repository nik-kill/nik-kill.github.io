import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'xMeme',
    image: '/projects/images/x4meme.ico',
    description: 'A full-stack web application to share, view, and interact with memes.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubUrl: 'https://github.com/nik-kill/xMeme',
    liveUrl: '#'
  },
  {
    title: 'Expense Sheet',
    image: '/projects/images/expense.png',
    description: 'An Android application designed to keep track of daily transactions efficiently.',
    tags: ['Java', 'Android SDK', 'XML'],
    githubUrl: 'https://github.com/nik-kill/AndroidProjects',
    liveUrl: '#'
  },
  {
    title: 'Vax-Man',
    image: '/projects/images/vaxman.png',
    description: 'A COVID-19 variant of the classic PacMan game.',
    tags: ['Game Dev', 'C++'],
    githubUrl: 'https://github.com/nik-kill/Vax-man',
    liveUrl: '#'
  },
  {
    title: 'Side Runner',
    image: '/projects/images/runner.png',
    description: 'An endless side-scrolling runner game with dynamic obstacles.',
    tags: ['Unreal Engine', 'C++'],
    githubUrl: 'https://github.com/nik-kill/SideRunner',
    liveUrl: '#'
  },
  {
    title: 'Inventory App',
    image: '/projects/images/inventory.png',
    description: 'A robust inventory management application to record and track product details.',
    tags: ['Java', 'SQLite'],
    githubUrl: 'https://github.com/nik-kill/AndroidProjects',
    liveUrl: '#'
  },
  {
    title: 'chatApp',
    image: '/projects/images/chatApp.png',
    description: 'A terminal-based chat application supporting multiple clients using socket programming and multi-threading.',
    tags: ['C++', 'Sockets', 'Multi-threading'],
    githubUrl: 'https://github.com/nik-kill/chatApp',
    liveUrl: '#'
  },
  {
    title: 'Hand Tracking',
    image: '/projects/images/handTrack.png',
    description: 'A computer vision module that detects and tracks hand gestures using landmarks via webcam.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/nik-kill/HandTracking',
    liveUrl: '#'
  }
];

const ProjectList = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image-container">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, tIndex) => (
                <span key={tIndex} className="tech-tag">{tag}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                <FaGithub /> Code
              </a>
              {project.liveUrl && project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
