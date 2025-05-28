// components/svg/RedPepperPlant.jsx
import React from "react";

export default function RedPepperPlant({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <defs>
        <radialGradient id="pepperSkin" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#ff6b5a" />
          <stop offset="100%" stopColor="#c62828" />
        </radialGradient>

        <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#33691e" />
          <stop offset="100%" stopColor="#558b2f" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        className="pepper-stem"
        d="M0 0 C0 -10, 0 -60, 0 -100"
        stroke="url(#stemGradient)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        className="pepper-leaf"
        d="M0 -40 C-20 -60, -40 -50, -20 -30"
        fill="var(--scene-plant)"
      />
      <path
        className="pepper-leaf"
        d="M0 -60 C20 -80, 40 -70, 20 -50"
        fill="var(--scene-plant)"
      />

      {/* Pepper Fruits */}
      <g className="pepper-fruit">
        <path
          d="M-10 -30 C-18 -45, 6 -85, 14 -50 C16 -30, -4 -10, -10 -30 Z"
          fill="url(#pepperSkin)"
          stroke="#b71c1c"
          strokeWidth="1"
        />
        <path
          d="M4 -50 C2 -55, 0 -60, -2 -58 C-4 -55, 0 -50, 4 -50 Z"
          fill="url(#stemGradient)"
        />
      </g>

      {/* Glow / Shadow (optional) */}
      <circle
        className="pepper-glow"
        cx="0"
        cy="0"
        r="90"
        fill="red"
        opacity="0.08"
        filter="blur(2px)"
      />
    </g>
  );
}
