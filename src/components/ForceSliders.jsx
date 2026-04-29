import React from 'react';

const ForceSliders = ({ forces, setForces }) => {
  const handleSliderChange = (e) => {
    const { id, value } = e.target;
    setForces(prev => ({
      ...prev,
      [id]: parseFloat(value)
    }));
  };

  const forceItems = [
    { id: 'red_red', label: 'Red-Red' },
    { id: 'yellow_yellow', label: 'Yellow-Yellow' },
    { id: 'blue_blue', label: 'Blue-Blue' },
    { id: 'red_yellow', label: 'Red-Yellow' },
    { id: 'red_blue', label: 'Red-Blue' },
    { id: 'yellow_blue', label: 'Yellow-Blue' },
    { id: 'yellow_red', label: 'Yellow-Red' },
    { id: 'blue_red', label: 'Blue-Red' },
    { id: 'blue_yellow', label: 'Blue-Yellow' },
  ];

  return (
    <div className="force-sliders">
      {forceItems.map(item => (
        <div className="force-const" key={item.id}>
          <p>{item.label}</p>
          <input
            type="range"
            min="-1"
            max="1"
            value={forces[item.id]}
            step="0.01"
            className="myslider"
            id={item.id}
            onChange={handleSliderChange}
          />
          <span className="slider-val">{forces[item.id].toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default ForceSliders;
