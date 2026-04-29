import React from 'react';

const projects = [
  {
    title: 'xMeme',
    image: '/projects/images/x4meme.ico',
    description: 'Web Application to share memes. Using MERN stack i.e MongoDB, ExpressJs, ReactJs, NodeJs.'
  },
  {
    title: 'Expense Sheet',
    image: '/projects/images/expense.png',
    description: 'Android App to keep track of daily transactions. Using Tech Stack: Java, XML.'
  },
  {
    title: 'Vax-Man',
    image: '/projects/images/vaxman.png',
    description: 'VaxMan, covid variant of PacMan.'
  },
  {
    title: 'Side Runner',
    image: '/projects/images/runner.png',
    description: 'An endless runner game, using Unreal Engine.'
  },
  {
    title: 'Inventory App',
    image: '/projects/images/inventory.png',
    description: 'An Inventory app to record product details.'
  },
  {
    title: 'chatApp',
    image: '/projects/images/chatApp.png',
    description: 'A Terminal chat application built in C++ using the concepts of socket programming and multi-threading. It supports chatting among multiple clients.'
  },
  {
    title: 'Hand Tracking',
    image: '/projects/images/handTrack.png',
    description: 'Using Camera to take inputs in form of Hand Gestures. Created a Python Module which detects and tracks hands by identifying and detecting a set of landmarks.'
  }
];

const ProjectList = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="glass-card project-card">
          <h3>{project.title}</h3>
          <div className="project-image-container">
            <img src={project.image} alt={project.title} />
          </div>
          <p>
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
