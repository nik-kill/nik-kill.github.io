import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'xMeme',
    image: '/projects/images/x4meme.ico',
    description: 'A fully responsive MERN stack web application enabling users to seamlessly share, explore, and interact with a global feed of memes.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubUrl: 'https://github.com/nik-kill/xMeme',
    liveUrl: '#'
  },
  {
    title: 'Expense Sheet',
    image: '/projects/images/expense.png',
    description: 'A native Android application featuring an intuitive UI to efficiently track, manage, and analyze daily financial transactions.',
    tags: ['Java', 'Android SDK', 'XML'],
    githubUrl: 'https://github.com/nik-kill/AndroidProjects',
    liveUrl: '#'
  },
  {
    title: 'Vax-Man',
    image: '/projects/images/vaxman.png',
    description: 'A C++ reimagining of the classic PacMan arcade game, featuring custom collision mechanics and a COVID-19 thematic twist.',
    tags: ['Game Dev', 'C++'],
    githubUrl: 'https://github.com/nik-kill/Vax-man',
    liveUrl: '#'
  },
  {
    title: 'Side Runner',
    image: '/projects/images/runner.png',
    description: 'A fast-paced, endless side-scrolling game built in Unreal Engine, featuring procedural obstacle generation and dynamic physics.',
    tags: ['Unreal Engine', 'C++'],
    githubUrl: 'https://github.com/nik-kill/SideRunner',
    liveUrl: '#'
  },
  {
    title: 'Inventory App',
    image: '/projects/images/inventory.png',
    description: 'A robust Android inventory management system utilizing a local SQLite database for real-time tracking of product details and stock levels.',
    tags: ['Java', 'SQLite'],
    githubUrl: 'https://github.com/nik-kill/AndroidProjects',
    liveUrl: '#'
  },
  {
    title: 'chatApp',
    image: '/projects/images/chatApp.png',
    description: 'A high-performance terminal chat application architected with C++ socket programming and multi-threading to support concurrent client connections.',
    tags: ['C++', 'Sockets', 'Multi-threading'],
    githubUrl: 'https://github.com/nik-kill/chatApp',
    liveUrl: '#'
  },
  {
    title: 'Hand Tracking',
    image: '/projects/images/handTrack.png',
    description: 'A real-time computer vision module leveraging OpenCV and MediaPipe to detect, track, and map complex hand gestures via webcam.',
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
