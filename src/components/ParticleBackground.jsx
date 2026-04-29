import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ forces }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const m = canvas.getContext('2d');
    
    // Set canvas dimensions
    let w = window.innerWidth;
    let l = window.innerHeight;
    canvas.width = w;
    canvas.height = l;

    const handleResize = () => {
      w = window.innerWidth;
      l = window.innerHeight;
      canvas.width = w;
      canvas.height = l;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    
    const particle = (x, y, c) => ({ x, y, vx: 0, vy: 0, color: c });
    
    const random = () => Math.random() * w + 50;

    const create = (number, color) => {
      const group = [];
      for (let i = 0; i < number; i++) {
        const p = particle(random(), Math.random() * l + 50, color);
        group.push(p);
        particles.push(p);
      }
      return group;
    };

    const rule = (particles1, particles2, g) => {
      for (let i = 0; i < particles1.length; i++) {
        let fx = 0;
        let fy = 0;
        const a = particles1[i];
        for (let j = 0; j < particles2.length; j++) {
          const b = particles2[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 0 && d < 80) {
            const F = g * (1 / d);
            fx += F * dx;
            fy += F * dy;
          }
        }
        a.vx = (a.vx + fx) * 0.5;
        a.vy = (a.vy + fy) * 0.5;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= 0 || a.x >= w) { a.vx *= -1; }
        if (a.y <= 0 || a.y >= l) { a.vy *= -1; }
      }
    };

    const yellow = create(300, "yellow");
    const red = create(300, "red");
    const blue = create(300, "blue");

    let animationFrameId;

    const update = () => {
      // Use the forces from props. Since this is a closure, it captures the initial forces
      // We need a way to read latest forces. React refs are good for this if we want to avoid re-initializing particles.
      // Wait, let's use forcesRef to read the latest without restarting particles.
      
      const {
        red_red, yellow_yellow, blue_blue,
        red_yellow, red_blue, yellow_blue,
        yellow_red, blue_red, blue_yellow
      } = forcesRef.current;

      rule(red, red, red_red);
      rule(yellow, yellow, yellow_yellow);
      rule(blue, blue, blue_blue);
      rule(red, yellow, red_yellow);
      rule(red, blue, red_blue);
      rule(yellow, blue, yellow_blue);
      rule(yellow, red, yellow_red);
      rule(blue, red, blue_red);
      rule(blue, yellow, blue_yellow);

      m.clearRect(0, 0, w, l);
      for (let i = 0; i < particles.length; i++) {
        m.fillStyle = particles[i].color;
        m.fillRect(particles[i].x, particles[i].y, 2, 2); // Slightly larger particles (2x2 instead of 1x1) for better visibility
      }
      animationFrameId = requestAnimationFrame(update);
    };

    // Start animation
    update();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount

  // Use a ref to keep track of the latest forces without restarting the simulation
  const forcesRef = useRef(forces);
  useEffect(() => {
    forcesRef.current = forces;
  }, [forces]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        background: 'linear-gradient(0deg, #191d1e 50%, #283139 100%)'
      }} 
    />
  );
};

export default ParticleBackground;
