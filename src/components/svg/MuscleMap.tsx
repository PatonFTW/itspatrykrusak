'use client';

import React from 'react';

interface MuscleMapProps {
  onMuscleClick: (muscleId: string) => void;
  activeMuscle?: string;
  className?: string;
}

interface MuscleDef {
  id: string;
  label: string;
  d: string;
}

const FRONT_MUSCLES: MuscleDef[] = [
  {
    id: 'chest',
    label: 'Chest (Pectorals)',
    d: 'M 75 95 C 90 92, 100 110, 100 125 C 85 125, 75 110, 75 95 Z M 125 95 C 110 92, 100 110, 100 125 C 115 125, 125 110, 125 95 Z',
  },
  {
    id: 'front_delt',
    label: 'Front Deltoids',
    d: 'M 60 85 C 72 82, 75 95, 68 105 C 55 100, 55 90, 60 85 Z M 140 85 C 128 82, 125 95, 132 105 C 145 100, 145 90, 140 85 Z',
  },
  {
    id: 'biceps',
    label: 'Biceps',
    d: 'M 52 110 C 64 112, 62 145, 52 140 C 45 130, 46 118, 52 110 Z M 148 110 C 136 112, 138 145, 148 140 C 155 130, 154 118, 148 110 Z',
  },
  {
    id: 'abs',
    label: 'Abs (Rectus Abdominis)',
    d: 'M 84 132 L 116 132 L 114 185 L 86 185 Z',
  },
  {
    id: 'obliques',
    label: 'Obliques',
    d: 'M 72 135 C 82 135, 84 175, 74 185 C 68 170, 68 150, 72 135 Z M 128 135 C 118 135, 116 175, 126 185 C 132 170, 132 150, 128 135 Z',
  },
  {
    id: 'quads',
    label: 'Quadriceps',
    d: 'M 75 195 C 92 195, 96 250, 80 270 C 68 250, 66 220, 75 195 Z M 125 195 C 108 195, 104 250, 120 270 C 132 250, 134 220, 125 195 Z',
  },
];

const BACK_MUSCLES: MuscleDef[] = [
  {
    id: 'traps',
    label: 'Upper Traps',
    d: 'M 80 75 Q 100 88 120 75 L 122 95 Q 100 110 78 95 Z',
  },
  {
    id: 'lats',
    label: 'Lats (Latissimus Dorsi)',
    d: 'M 68 100 C 85 105, 96 135, 86 158 C 70 135, 64 115, 68 100 Z M 132 100 C 115 105, 104 135, 114 158 C 130 135, 136 115, 132 100 Z',
  },
  {
    id: 'rear_delt',
    label: 'Rear Deltoids',
    d: 'M 62 85 C 72 88, 68 100, 58 95 C 55 90, 58 85, 62 85 Z M 138 85 C 128 88, 132 100, 142 95 C 145 90, 142 85, 138 85 Z',
  },
  {
    id: 'triceps',
    label: 'Triceps',
    d: 'M 48 108 C 60 108, 64 138, 54 142 C 45 132, 44 118, 48 108 Z M 152 108 C 140 108, 136 138, 146 142 C 155 132, 156 118, 152 108 Z',
  },
  {
    id: 'rhomboids',
    label: 'Rhomboids / Mid Back',
    d: 'M 86 98 L 114 98 L 110 142 L 90 142 Z',
  },
  {
    id: 'lower_back',
    label: 'Lower Back (Erectors)',
    d: 'M 84 148 C 100 144, 116 148, 112 172 C 100 178, 88 172, 84 148 Z',
  },
  {
    id: 'glutes',
    label: 'Glutes',
    d: 'M 74 180 C 96 180, 96 215, 78 215 C 68 215, 68 195, 74 180 Z M 126 180 C 104 180, 104 215, 122 215 C 132 215, 132 195, 126 180 Z',
  },
  {
    id: 'hamstrings',
    label: 'Hamstrings',
    d: 'M 74 220 C 90 220, 90 265, 80 275 C 70 255, 70 235, 74 220 Z M 126 220 C 110 220, 110 265, 120 275 C 130 255, 130 235, 126 220 Z',
  },
  {
    id: 'calves',
    label: 'Calves',
    d: 'M 78 282 C 90 282, 86 312, 80 322 C 74 312, 72 292, 78 282 Z M 122 282 C 110 282, 114 312, 120 322 C 126 312, 128 292, 122 282 Z',
  },
];

const BodyOutline = () => (
  <path
    d="M 100 35 C 112 35, 116 48, 112 60 C 122 65, 145 72, 150 85 C 158 100, 162 135, 152 150 C 146 155, 136 160, 132 155 C 130 175, 124 190, 132 215 C 140 240, 135 270, 126 330 C 116 330, 112 320, 110 270 C 105 270, 95 270, 90 270 C 88 320, 84 330, 74 330 C 65 270, 60 240, 68 215 C 76 190, 70 175, 68 155 C 64 160, 54 155, 48 150 C 38 135, 42 100, 50 85 C 55 72, 78 65, 88 60 C 84 48, 88 35, 100 35 Z"
    fill="#0f172a"
    stroke="#334155"
    strokeWidth="2"
  />
);

export function MuscleMap({ onMuscleClick, activeMuscle, className = '' }: MuscleMapProps) {
  const renderMuscle = (muscle: MuscleDef) => {
    // Check match by ID or substring
    const isActive =
      activeMuscle &&
      (activeMuscle.toLowerCase() === muscle.id ||
        muscle.label.toLowerCase().includes(activeMuscle.toLowerCase()) ||
        activeMuscle.toLowerCase().includes(muscle.id.replace('_', ' ')));

    return (
      <g
        key={muscle.id}
        onClick={() => onMuscleClick(muscle.id)}
        className="cursor-pointer transition-all duration-300 group"
      >
        <path
          d={muscle.d}
          fill={isActive ? '#06b6d4' : '#1e293b'}
          stroke={isActive ? '#22d3ee' : '#475569'}
          strokeWidth="1.5"
          className="group-hover:fill-cyan-500/80 group-hover:stroke-cyan-300 transition-colors"
          style={{
            filter: isActive ? 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' : 'none',
          }}
        />
        <title>{muscle.label}</title>
      </g>
    );
  };

  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center justify-center ${className}`}>
      <div className="relative group text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Anterior (Front)
        </h4>
        <svg viewBox="20 20 160 320" className="w-44 h-88 drop-shadow-lg">
          <BodyOutline />
          {FRONT_MUSCLES.map(renderMuscle)}
        </svg>
      </div>

      <div className="relative group text-center">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Posterior (Back)
        </h4>
        <svg viewBox="20 20 160 320" className="w-44 h-88 drop-shadow-lg">
          <BodyOutline />
          {BACK_MUSCLES.map(renderMuscle)}
        </svg>
      </div>
    </div>
  );
}
