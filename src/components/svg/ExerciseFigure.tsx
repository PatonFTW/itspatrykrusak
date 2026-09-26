'use client';

import React from 'react';
import { MuscleMap } from './MuscleMap'; // We'll just use a simplified version inside if needed, or standalone paths

interface ExerciseFigureProps {
  exerciseName: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  step: 1 | 2 | 3; // which step to show
  className?: string;
}

export function ExerciseFigure({
  exerciseName,
  primaryMuscle,
  secondaryMuscles,
  step,
  className = '',
}: ExerciseFigureProps) {
  // We represent the 3 steps by applying slight transformations to the limbs
  const stepTransform = {
    1: 'translateY(0px)',
    2: 'translateY(15px) scale(0.95)',
    3: 'translateY(-5px) scale(1.02)'
  };

  const getMuscleColor = (muscleId: string) => {
    if (primaryMuscle === muscleId) return '#ef4444'; // Bright red
    if (secondaryMuscles.includes(muscleId)) return '#f97316'; // Orange
    return '#1e293b'; // Neutral dark slate
  };

  const getGlow = (muscleId: string) => {
    if (primaryMuscle === muscleId) return 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))';
    if (secondaryMuscles.includes(muscleId)) return 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))';
    return 'none';
  };

  const musclePaths = [
    { id: 'chest', d: 'M 70 90 C 85 90, 100 110, 100 120 C 85 120, 70 110, 70 90 Z M 130 90 C 115 90, 100 110, 100 120 C 115 120, 130 110, 130 90 Z' },
    { id: 'front_delt', d: 'M 60 80 C 70 75, 75 85, 65 95 C 55 90, 55 85, 60 80 Z M 140 80 C 130 75, 125 85, 135 95 C 145 90, 145 85, 140 80 Z' },
    { id: 'biceps', d: 'M 55 100 C 65 105, 60 130, 50 125 C 45 115, 45 105, 55 100 Z M 145 100 C 135 105, 140 130, 150 125 C 155 115, 155 105, 145 100 Z' },
    { id: 'abs', d: 'M 85 130 C 100 130, 115 130, 115 170 C 100 175, 85 170, 85 130 Z' },
    { id: 'quads', d: 'M 75 190 C 90 190, 95 240, 80 260 C 70 240, 65 210, 75 190 Z M 125 190 C 110 190, 105 240, 120 260 C 130 240, 135 210, 125 190 Z' },
    { id: 'lats', d: 'M 70 100 C 85 105, 95 130, 85 150 C 70 130, 65 110, 70 100 Z M 130 100 C 115 105, 105 130, 115 150 C 130 130, 135 110, 130 100 Z' },
    { id: 'hamstrings', d: 'M 75 205 C 90 205, 90 250, 80 260 C 70 240, 70 220, 75 205 Z M 125 205 C 110 205, 110 250, 120 260 C 130 240, 130 220, 125 205 Z' },
  ];

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <svg 
        viewBox="30 20 140 300" 
        className="w-full max-w-[200px] h-auto transition-transform duration-500 ease-in-out"
        style={{ transform: stepTransform[step] }}
      >
        <path
          d="M 100 40 C 110 40, 115 50, 110 60 C 120 65, 140 70, 145 80 C 150 90, 160 120, 150 135 C 145 140, 135 145, 130 140 C 130 160, 120 180, 130 200 C 140 230, 135 260, 125 320 C 115 320, 110 310, 110 260 C 105 260, 95 260, 90 260 C 90 310, 85 320, 75 320 C 65 260, 60 230, 70 200 C 80 180, 70 160, 70 140 C 65 145, 55 140, 50 135 C 40 120, 50 90, 55 80 C 60 70, 80 65, 90 60 C 85 50, 90 40, 100 40 Z"
          fill="#0f1219"
          stroke="#334155"
          strokeWidth="2"
        />
        {musclePaths.map((muscle) => (
          <path
            key={muscle.id}
            d={muscle.d}
            fill={getMuscleColor(muscle.id)}
            stroke="#1e293b"
            strokeWidth="1"
            style={{ filter: getGlow(muscle.id), transition: 'fill 0.3s, filter 0.3s' }}
          />
        ))}
      </svg>
      <div className="absolute top-2 right-2 bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded-full font-bold">
        Step {step}
      </div>
    </div>
  );
}
