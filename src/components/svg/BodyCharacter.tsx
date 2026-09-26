'use client';

import React, { useMemo } from 'react';

interface BodyCharacterProps {
  sex: 'male' | 'female';
  bodyFat: number; // 5-50%
  muscle: number; // 1-10 scale
  height?: number;
  className?: string;
  showAbsDetail?: boolean;
  glowColor?: string;
}

export function BodyCharacter({
  sex,
  bodyFat,
  muscle,
  className = '',
  showAbsDetail = false,
  glowColor = '#06b6d4',
}: BodyCharacterProps) {
  // Normalize params
  const fatFactor = Math.max(5, Math.min(50, bodyFat)) / 50; // 0.1 to 1.0
  const muscleFactor = Math.max(1, Math.min(10, muscle)) / 10; // 0.1 to 1.0

  const isMale = sex === 'male';

  // Body shape dimensions
  const shoulderWidth = isMale
    ? 110 + muscleFactor * 45 - fatFactor * 10
    : 85 + muscleFactor * 30;
  const chestWidth = isMale
    ? 90 + muscleFactor * 35 + fatFactor * 15
    : 80 + muscleFactor * 20 + fatFactor * 25;
  const waistWidth = isMale
    ? 65 + fatFactor * 55 - muscleFactor * 10
    : 55 + fatFactor * 50;
  const hipWidth = isMale
    ? 75 + fatFactor * 30
    : 95 + fatFactor * 45 + muscleFactor * 15;
  const bicepSize = 14 + muscleFactor * 16 + fatFactor * 8;
  const thighSize = isMale
    ? 24 + muscleFactor * 22 + fatFactor * 18
    : 28 + muscleFactor * 25 + fatFactor * 25;

  const showAbs = showAbsDetail || (isMale ? bodyFat <= 15 : bodyFat <= 22);

  return (
    <svg
      viewBox="0 0 300 500"
      className={`${className}`}
      style={{
        filter: glowColor ? `drop-shadow(0 0 16px ${glowColor}40)` : 'none',
      }}
    >
      <defs>
        {/* Futuristic Glassmorphism Body Gradient */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>

        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g transform="translate(50, 20)">
        {/* Head & Neck */}
        <ellipse
          cx="100"
          cy="45"
          rx={isMale ? 22 : 20}
          ry={isMale ? 28 : 26}
          fill="url(#bodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        {/* Neck */}
        <path
          d={`M ${100 - (12 + muscleFactor * 6)} 70 L ${100 + (12 + muscleFactor * 6)} 70 L ${100 + (16 + muscleFactor * 8)} 90 L ${100 - (16 + muscleFactor * 8)} 90 Z`}
          fill="url(#bodyGrad)"
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* Shoulders & Clavicle line */}
        <path
          d={`M ${100 - shoulderWidth / 2} 95 C 100 88, 100 88, ${100 + shoulderWidth / 2} 95`}
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Torso Silhouette */}
        <path
          d={`
            M ${100 - shoulderWidth / 2} 95
            C ${100 - chestWidth / 2} 120, ${100 - chestWidth / 2} 150, ${100 - waistWidth / 2} 210
            C ${100 - waistWidth / 2} 240, ${100 - hipWidth / 2} 260, ${100 - hipWidth / 2} 280
            L ${100 + hipWidth / 2} 280
            C ${100 + hipWidth / 2} 260, ${100 + waistWidth / 2} 240, ${100 + waistWidth / 2} 210
            C ${100 + chestWidth / 2} 150, ${100 + chestWidth / 2} 120, ${100 + shoulderWidth / 2} 95
            Z
          `}
          fill="url(#bodyGrad)"
          stroke="#38bdf8"
          strokeWidth="2"
          className="transition-all duration-500 ease-out"
        />

        {/* Chest / Bust Definition */}
        {isMale ? (
          <path
            d={`M ${100 - chestWidth * 0.4} 135 C 100 155, 100 155, ${100 + chestWidth * 0.4} 135 M 100 100 L 100 150`}
            stroke="#06b6d4"
            strokeWidth="1.5"
            fill="none"
            opacity={0.6 + muscleFactor * 0.4}
          />
        ) : (
          <path
            d={`M ${100 - chestWidth * 0.4} 140 C ${100 - chestWidth * 0.2} 165, ${100 + chestWidth * 0.2} 165, ${100 + chestWidth * 0.4} 140`}
            stroke="#06b6d4"
            strokeWidth="1.5"
            fill="none"
            opacity={0.7}
          />
        )}

        {/* Abdominal Grid (visible when low bodyfat) */}
        {showAbs && (
          <g
            stroke="#06b6d4"
            strokeWidth="1.5"
            fill="none"
            opacity={Math.max(0.2, 1 - fatFactor * 1.8)}
            className="transition-opacity duration-500"
          >
            <path d="M 100 150 L 100 230" />
            <path d={`M ${100 - waistWidth * 0.25} 170 Q 100 175 ${100 + waistWidth * 0.25} 170`} />
            <path d={`M ${100 - waistWidth * 0.25} 190 Q 100 195 ${100 + waistWidth * 0.25} 190`} />
            <path d={`M ${100 - waistWidth * 0.25} 210 Q 100 215 ${100 + waistWidth * 0.25} 210`} />
          </g>
        )}

        {/* Left Arm (Delts, Bicep, Forearm) */}
        <g className="transition-all duration-500 ease-out">
          {/* Left Delt Cap */}
          <ellipse
            cx={100 - shoulderWidth / 2 - 4}
            cy="105"
            rx={14 + muscleFactor * 10}
            ry={18 + muscleFactor * 8}
            fill="url(#bodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          {/* Left Arm Body */}
          <path
            d={`
              M ${100 - shoulderWidth / 2 - 8} 115
              C ${100 - shoulderWidth / 2 - bicepSize} 150, ${100 - shoulderWidth / 2 - bicepSize} 190, ${100 - shoulderWidth / 2 - 12} 240
              L ${100 - shoulderWidth / 2 + 6} 240
              C ${100 - shoulderWidth / 2 + 4} 190, ${100 - shoulderWidth / 2 + 4} 150, ${100 - shoulderWidth / 2 + 6} 115
              Z
            `}
            fill="url(#bodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
        </g>

        {/* Right Arm (Delts, Bicep, Forearm) */}
        <g className="transition-all duration-500 ease-out">
          {/* Right Delt Cap */}
          <ellipse
            cx={100 + shoulderWidth / 2 + 4}
            cy="105"
            rx={14 + muscleFactor * 10}
            ry={18 + muscleFactor * 8}
            fill="url(#bodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          {/* Right Arm Body */}
          <path
            d={`
              M ${100 + shoulderWidth / 2 + 8} 115
              C ${100 + shoulderWidth / 2 + bicepSize} 150, ${100 + shoulderWidth / 2 + bicepSize} 190, ${100 + shoulderWidth / 2 + 12} 240
              L ${100 + shoulderWidth / 2 - 6} 240
              C ${100 + shoulderWidth / 2 - 4} 190, ${100 + shoulderWidth / 2 - 4} 150, ${100 + shoulderWidth / 2 - 6} 115
              Z
            `}
            fill="url(#bodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
        </g>

        {/* Left Leg */}
        <path
          d={`
            M ${100 - hipWidth / 2 + 4} 280
            C ${100 - hipWidth / 2 - thighSize * 0.4} 340, ${100 - 35} 410, ${100 - 30} 450
            L ${100 - 10} 450
            C ${100 - 15} 410, ${100 - 8} 340, ${100 - 4} 280
            Z
          `}
          fill="url(#bodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />

        {/* Right Leg */}
        <path
          d={`
            M ${100 + hipWidth / 2 - 4} 280
            C ${100 + hipWidth / 2 + thighSize * 0.4} 340, ${100 + 35} 410, ${100 + 30} 450
            L ${100 + 10} 450
            C ${100 + 15} 410, ${100 + 8} 340, ${100 + 4} 280
            Z
          `}
          fill="url(#bodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />

        {/* Quad teardrop accent lines */}
        <path
          d={`M ${100 - 28} 360 C ${100 - 32} 390, ${100 - 20} 410, ${100 - 20} 410 M ${100 + 28} 360 C ${100 + 32} 390, ${100 + 20} 410, ${100 + 20} 410`}
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          opacity={0.4 + muscleFactor * 0.5}
        />
      </g>
    </svg>
  );
}
