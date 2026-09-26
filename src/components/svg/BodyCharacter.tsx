'use client';

import React, { useMemo } from 'react';

interface BodyCharacterProps {
  sex: 'male' | 'female';
  bodyFat: number; // 5-50 percentage
  muscle: number; // 1-10 scale
  height?: number; // used for relative sizing
  className?: string;
  showAbsDetail?: boolean; // show ab lines when BF is low
  glowColor?: string; // optional glow effect color
}

export function BodyCharacter({
  sex,
  bodyFat,
  muscle,
  height = 180,
  className = '',
  showAbsDetail = false,
  glowColor,
}: BodyCharacterProps) {
  // Normalize parameters
  const normFat = Math.max(5, Math.min(50, bodyFat)) / 50; // 0.1 to 1.0
  const normMuscle = Math.max(1, Math.min(10, muscle)) / 10; // 0.1 to 1.0

  const shouldShowAbs =
    showAbsDetail || (sex === 'male' ? bodyFat < 12 : bodyFat < 18);

  // Calculate dynamic paths based on props
  const paths = useMemo(() => {
    // Base dimensions
    const chestWidth = sex === 'male' ? 80 + normMuscle * 40 + normFat * 20 : 70 + normMuscle * 20 + normFat * 20;
    const waistWidth = sex === 'male' ? 60 + normFat * 50 + normMuscle * 10 : 50 + normFat * 45 + normMuscle * 5;
    const hipWidth = sex === 'male' ? 70 + normFat * 30 : 85 + normFat * 40;
    const shoulderWidth = sex === 'male' ? 100 + normMuscle * 50 + normFat * 10 : 80 + normMuscle * 30 + normFat * 10;
    const armThickness = 15 + normMuscle * 15 + normFat * 10;
    const legThickness = 20 + normMuscle * 20 + normFat * 15;

    // Head and neck
    const head = (
      <circle cx="100" cy="40" r={20 + normFat * 5} fill="url(#skinGrad)" />
    );
    const neck = (
      <path
        d={`M${100 - (10 + normMuscle * 5)} 55 L${100 + (10 + normMuscle * 5)} 55 L${100 + (12 + normMuscle * 5 + normFat * 5)} 75 L${100 - (12 + normMuscle * 5 + normFat * 5)} 75 Z`}
        fill="url(#skinGrad)"
      />
    );

    // Torso
    const torso = (
      <path
        d={`
          M${100 - shoulderWidth / 2} 75 
          C${100 - shoulderWidth / 2} 90, ${100 - chestWidth / 2} 110, ${100 - chestWidth / 2} 130
          C${100 - waistWidth / 2} 160, ${100 - waistWidth / 2} 180, ${100 - hipWidth / 2} 210
          L${100 + hipWidth / 2} 210
          C${100 + waistWidth / 2} 180, ${100 + waistWidth / 2} 160, ${100 + chestWidth / 2} 130
          C${100 + chestWidth / 2} 110, ${100 + shoulderWidth / 2} 90, ${100 + shoulderWidth / 2} 75
          Z
        `}
        fill="url(#skinGrad)"
        style={{ transition: 'all 0.5s ease-in-out' }}
      />
    );

    // Abs detail
    const abs = shouldShowAbs ? (
      <g stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" style={{ transition: 'opacity 0.5s', opacity: 1 - normFat * 2 }}>
        <path d="M100 120 L100 190" />
        <path d={`M${100 - chestWidth * 0.15} 140 C100 145, 100 145, ${100 + chestWidth * 0.15} 140`} />
        <path d={`M${100 - waistWidth * 0.15} 160 C100 165, 100 165, ${100 + waistWidth * 0.15} 160`} />
        <path d={`M${100 - waistWidth * 0.15} 180 C100 185, 100 185, ${100 + waistWidth * 0.15} 180`} />
      </g>
    ) : null;

    // Arms
    const leftArm = (
      <path
        d={`
          M${100 - shoulderWidth / 2} 75 
          C${80 - shoulderWidth / 2 - normMuscle * 10} 120, ${70 - shoulderWidth / 2} 160, ${60 - shoulderWidth / 2} 200
          C${60 - shoulderWidth / 2 + armThickness} 200, ${70 - shoulderWidth / 2 + armThickness} 160, ${80 - shoulderWidth / 2 + armThickness} 120
          Z
        `}
        fill="url(#skinGrad)"
        style={{ transition: 'all 0.5s ease-in-out' }}
      />
    );
    const rightArm = (
      <path
        d={`
          M${100 + shoulderWidth / 2} 75 
          C${120 + shoulderWidth / 2 + normMuscle * 10} 120, ${130 + shoulderWidth / 2} 160, ${140 + shoulderWidth / 2} 200
          C${140 + shoulderWidth / 2 - armThickness} 200, ${130 + shoulderWidth / 2 - armThickness} 160, ${120 + shoulderWidth / 2 - armThickness} 120
          Z
        `}
        fill="url(#skinGrad)"
        style={{ transition: 'all 0.5s ease-in-out' }}
      />
    );

    // Legs
    const leftLeg = (
      <path
        d={`
          M${100 - hipWidth / 2} 210
          C${100 - hipWidth / 2} 260, ${90 - hipWidth / 2} 310, ${90 - hipWidth / 2} 370
          C${90 - hipWidth / 2 + legThickness} 370, ${100 - hipWidth / 2 + legThickness} 310, ${100 - 5} 210
          Z
        `}
        fill="url(#skinGrad)"
        style={{ transition: 'all 0.5s ease-in-out' }}
      />
    );
    const rightLeg = (
      <path
        d={`
          M${100 + hipWidth / 2} 210
          C${100 + hipWidth / 2} 260, ${110 + hipWidth / 2} 310, ${110 + hipWidth / 2} 370
          C${110 + hipWidth / 2 - legThickness} 370, ${100 + hipWidth / 2 - legThickness} 310, ${100 + 5} 210
          Z
        `}
        fill="url(#skinGrad)"
        style={{ transition: 'all 0.5s ease-in-out' }}
      />
    );

    return { head, neck, torso, abs, leftArm, rightArm, leftLeg, rightLeg };
  }, [sex, normFat, normMuscle, shouldShowAbs]);

  return (
    <svg
      viewBox="0 0 200 400"
      className={className}
      style={{
        filter: glowColor ? `drop-shadow(0 0 10px ${glowColor})` : 'none',
        height: '100%',
        width: '100%',
      }}
    >
      <defs>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4a373" />
          <stop offset="50%" stopColor="#e9c46a" />
          <stop offset="100%" stopColor="#d4a373" />
        </linearGradient>
      </defs>
      
      {paths.leftArm}
      {paths.rightArm}
      {paths.leftLeg}
      {paths.rightLeg}
      {paths.neck}
      {paths.torso}
      {paths.abs}
      {paths.head}
    </svg>
  );
}
