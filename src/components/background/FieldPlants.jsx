// src/components/background/FieldPlants.jsx
import React from 'react';

const FieldPlants = ({ width, height }) => {
  const TomatoPlant = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} fill="var(--scene-plant)" stroke="var(--scene-plant)">
      <line x1="0" y1="0" x2="0" y2="-60" strokeWidth="3" />
      <ellipse cx="-8" cy="-15" rx="6" ry="12" />
      <ellipse cx="8" cy="-27" rx="6" ry="12" />
      <ellipse cx="-8" cy="-39" rx="6" ry="12" />
      <ellipse cx="8" cy="-51" rx="6" ry="12" />
      <circle cx="-10" cy="-25" r="8" fill="#e74c3c" />
      <circle cx="-8" cy="-40" r="7" fill="#e74c3c" />
      <circle cx="-12" cy="-27" r="3" fill="#ff6b5a" />
      <circle cx="-10" cy="-42" r="2.5" fill="#ff6b5a" />
    </g>
  );

  const PepperPlant = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} fill="var(--scene-plant)" stroke="var(--scene-plant)">
      <line x1="0" y1="0" x2="0" y2="-50" strokeWidth="2.5" />
      <ellipse cx="-6" cy="-12" rx="5" ry="10" />
      <ellipse cx="6" cy="-22" rx="5" ry="10" />
      <ellipse cx="-6" cy="-32" rx="5" ry="10" />
      <ellipse cx="8" cy="-20" rx="4" ry="12" fill="#ff4500" transform="rotate(15)" />
      <ellipse cx="6" cy="-35" rx="3.5" ry="10" fill="#ff4500" transform="rotate(-10)" />
    </g>
  );

  const OnionPlant = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} stroke="var(--scene-plant)">
      <line x1="-3" y1="0" x2="-3" y2="-45" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-50" strokeWidth="2" />
      <line x1="3" y1="0" x2="3" y2="-40" strokeWidth="2" />
      <ellipse cx="0" cy="5" rx="8" ry="12" fill="#f5f5dc" />
      <ellipse cx="1" cy="2" rx="3" ry="5" fill="#ffffff" opacity="0.7" />
    </g>
  );

  return (
    <g>
      <TomatoPlant x={width * 0.18} y={height * 0.95} scale={0.8} />
      <PepperPlant x={width * 0.44} y={height * 0.92} scale={0.9} />
      <OnionPlant x={width * 0.8} y={height * 0.97} scale={0.7} />
      <TomatoPlant x={width * 0.25} y={height * 0.88} scale={0.5} />
      <OnionPlant x={width * 0.65} y={height * 0.85} scale={0.4} />
    </g>
  );
};

export default FieldPlants;
