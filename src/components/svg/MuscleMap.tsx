'use client';

import React from 'react';

interface MuscleMapProps {
  onMuscleClick: (muscleId: string) => void;
  activeMuscle?: string;
  className?: string;
}

const MUSCLES = {
  front: [
    { id: 'chest', label: 'Chest', d: 'M 70 90 C 85 90, 100 110, 100 120 C 85 120, 70 110, 70 90 Z M 130 90 C 115 90, 100 110, 100 120 C 115 120, 130 110, 130 90 Z' },
    { id: 'front_delt', label: 'Front Deltoids', d: 'M 60 80 C 70 75, 75 85, 65 95 C 55 90, 55 85, 60 80 Z M 140 80 C 130 75, 125 85, 135 95 C 145 90, 145 85, 140 80 Z' },
    { id: 'biceps', label: 'Biceps', d: 'M 55 100 C 65 105, 60 130, 50 125 C 45 115, 45 105, 55 100 Z M 145 100 C 135 105, 140 130, 150 125 C 155 115, 155 105, 145 100 Z' },
    { id: 'abs', label: 'Abs', d: 'M 85 130 C 100 130, 115 130, 115 170 C 100 175, 85 170, 85 130 Z' },
    { id: 'obliques', label: 'Obliques', d: 'M 75 135 C 80 135, 85 160, 75 165 C 70 155, 70 145, 75 135 Z M 125 135 C 120 135, 115 160, 125 165 C 130 155, 130 145, 125 135 Z' },
    { id: 'quads', label: 'Quadriceps', d: 'M 75 190 C 90 190, 95 240, 80 260 C 70 240, 65 210, 75 190 Z M 125 190 C 110 190, 105 240, 120 260 C 130 240, 135 210, 125 190 Z' },
  ],
  back: [
    { id: 'upper_back', label: 'Upper Back / Traps', d: 'M 80 75 C 100 85, 120 75, 120 95 C 100 110, 80 95, 80 75 Z' },
    { id: 'lats', label: 'Lats', d: 'M 70 100 C 85 105, 95 130, 85 150 C 70 130, 65 110, 70 100 Z M 130 100 C 115 105, 105 130, 115 150 C 130 130, 135 110, 130 100 Z' },
    { id: 'rear_delt', label: 'Rear Deltoids', d: 'M 65 80 C 75 85, 70 95, 60 90 C 55 85, 60 75, 65 80 Z M 135 80 C 125 85, 130 95, 140 90 C 145 85, 140 75, 135 80 Z' },
    { id: 'triceps', label: 'Triceps', d: 'M 50 100 C 60 100, 65 125, 55 130 C 45 120, 45 110, 50 100 Z M 150 100 C 140 100, 135 125, 145 130 C 155 120, 155 110, 150 100 Z' },
    { id: 'lower_back', label: 'Lower Back', d: 'M 85 150 C 100 145, 115 150, 110 170 C 100 175, 90 170, 85 150 Z' },
    { id: 'glutes', label: 'Glutes', d: 'M 75 175 C 95 175, 95 200, 80 200 C 70 200, 70 185, 75 175 Z M 125 175 C 105 175, 105 200, 120 200 C 130 200, 130 185, 125 175 Z' },
    { id: 'hamstrings', label: 'Hamstrings', d: 'M 75 205 C 90 205, 90 250, 80 260 C 70 240, 70 220, 75 205 Z M 125 205 C 110 205, 110 250, 120 260 C 130 240, 130 220, 125 205 Z' },
    { id: 'calves', label: 'Calves', d: 'M 80 270 C 90 270, 85 300, 80 310 C 75 300, 70 280, 80 270 Z M 120 270 C 110 270, 115 300, 120 310 C 125 300, 130 280, 120 270 Z' },
  ],
};

const BodyOutline = () => (
  <path
    d="M 100 40 C 110 40, 115 50, 110 60 C 120 65, 140 70, 145 80 C 150 90, 160 120, 150 135 C 145 140, 135 145, 130 140 C 130 160, 120 180, 130 200 C 140 230, 135 260, 125 320 C 115 320, 110 310, 110 260 C 105 260, 95 260, 90 260 C 90 310, 85 320, 75 320 C 65 260, 60 230, 70 200 C 80 180, 70 160, 70 140 C 65 145, 55 140, 50 135 C 40 120, 50 90, 55 80 C 60 70, 80 65, 90 60 C 85 50, 90 40, 100 40 Z"
    fill="none"
    stroke="#334155"
    strokeWidth="2"
  />
);

export function MuscleMap({ onMuscleClick, activeMuscle, className = '' }: MuscleMapProps) {
  const renderMuscle = (muscle: typeof MUSCLES.front[0]) => {
    const isActive = activeMuscle === muscle.id;
    return (
      <g
        key={muscle.id}
        onClick={() => onMuscleClick(muscle.id)}
        className="cursor-pointer transition-all duration-300 group"
      >
        <path
          d={muscle.d}
          fill={isActive ? '#06b6d4' : '#1e293b'}
          stroke={isActive ? '#22d3ee' : '#334155'}
          strokeWidth="1"
          className="group-hover:fill-cyan-600/80 group-hover:stroke-cyan-400 transition-colors"
          style={{
            filter: isActive ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))' : 'none',
          }}
        />
        <title>{muscle.label}</title>
      </g>
    );
  };

  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center justify-center ${className}`}>
      <div className="relative group">
        <h3 className="text-center text-slate-400 font-medium mb-2">Front</h3>
        <svg viewBox="20 20 160 320" className="w-48 h-96">
          <BodyOutline />
          {MUSCLES.front.map(renderMuscle)}
        </svg>
      </div>
      
      <div className="relative group">
        <h3 className="text-center text-slate-400 font-medium mb-2">Back</h3>
        <svg viewBox="20 20 160 320" className="w-48 h-96">
          <BodyOutline />
          {MUSCLES.back.map(renderMuscle)}
        </svg>
      </div>
    </div>
  );
}
