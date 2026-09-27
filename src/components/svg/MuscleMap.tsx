'use client';

import React, { useState } from 'react';

interface MuscleMapProps {
  onMuscleClick: (muscleId: string) => void;
  activeMuscle?: string;
  className?: string;
}

interface MuscleRegion {
  id: string;
  label: string;
  searchKey: string;
  path: string;
}

// Realistic detailed muscle regions for Anterior (Front)
const FRONT_REGIONS: MuscleRegion[] = [
  {
    id: 'chest',
    label: 'Chest (Pectorals)',
    searchKey: 'chest',
    path: 'M 100 105 L 125 105 C 140 108, 142 135, 125 142 C 108 142, 100 125, 100 105 Z M 100 105 L 75 105 C 60 108, 58 135, 75 142 C 92 142, 100 125, 100 105 Z',
  },
  {
    id: 'front_delt',
    label: 'Front Deltoids',
    searchKey: 'delt',
    path: 'M 58 98 C 70 95, 74 110, 65 122 C 52 118, 50 105, 58 98 Z M 142 98 C 130 95, 126 110, 135 122 C 148 118, 150 105, 142 98 Z',
  },
  {
    id: 'biceps',
    label: 'Biceps',
    searchKey: 'bicep',
    path: 'M 48 126 C 60 128, 58 162, 48 158 C 40 148, 42 134, 48 126 Z M 152 126 C 140 128, 142 162, 152 158 C 160 148, 158 134, 152 126 Z',
  },
  {
    id: 'abs',
    label: 'Abs (Rectus Abdominis)',
    searchKey: 'abs',
    path: 'M 86 148 L 114 148 L 112 210 L 88 210 Z',
  },
  {
    id: 'obliques',
    label: 'Obliques',
    searchKey: 'oblique',
    path: 'M 74 150 C 84 150, 86 198, 76 210 C 68 192, 68 170, 74 150 Z M 126 150 C 116 150, 114 198, 124 210 C 132 192, 132 170, 126 150 Z',
  },
  {
    id: 'quads',
    label: 'Quadriceps',
    searchKey: 'quad',
    path: 'M 76 220 C 95 220, 98 285, 80 310 C 66 285, 64 250, 76 220 Z M 124 220 C 105 220, 102 285, 120 310 C 134 285, 136 250, 124 220 Z',
  },
];

// Realistic detailed muscle regions for Posterior (Back)
const BACK_REGIONS: MuscleRegion[] = [
  {
    id: 'traps',
    label: 'Upper Trapezius',
    searchKey: 'trap',
    path: 'M 78 88 Q 100 102 122 88 L 126 112 Q 100 130 74 112 Z',
  },
  {
    id: 'lats',
    label: 'Lats (Latissimus Dorsi)',
    searchKey: 'lat',
    path: 'M 66 115 C 84 120, 96 155, 85 182 C 68 155, 62 132, 66 115 Z M 134 115 C 116 120, 104 155, 115 182 C 132 155, 138 132, 134 115 Z',
  },
  {
    id: 'rear_delt',
    label: 'Rear Deltoids',
    searchKey: 'delt',
    path: 'M 60 98 C 72 102, 68 116, 56 110 C 52 104, 55 98, 60 98 Z M 140 98 C 128 102, 132 116, 144 110 C 148 104, 145 98, 140 98 Z',
  },
  {
    id: 'triceps',
    label: 'Triceps',
    searchKey: 'tricep',
    path: 'M 46 124 C 58 124, 62 156, 52 160 C 42 148, 42 134, 46 124 Z M 154 124 C 142 124, 138 156, 148 160 C 158 148, 158 134, 154 124 Z',
  },
  {
    id: 'rhomboids',
    label: 'Rhomboids / Mid Back',
    searchKey: 'rhomboid',
    path: 'M 84 114 L 116 114 L 110 162 L 90 162 Z',
  },
  {
    id: 'lower_back',
    label: 'Lower Back (Erectors)',
    searchKey: 'lower back',
    path: 'M 82 168 C 100 162, 118 168, 114 198 C 100 205, 86 198, 82 168 Z',
  },
  {
    id: 'glutes',
    label: 'Gluteus Maximus',
    searchKey: 'glute',
    path: 'M 74 205 C 98 205, 98 248, 78 248 C 66 248, 66 222, 74 205 Z M 126 205 C 102 205, 102 248, 122 248 C 134 248, 134 222, 126 205 Z',
  },
  {
    id: 'hamstrings',
    label: 'Hamstrings',
    searchKey: 'hamstring',
    path: 'M 74 252 C 92 252, 92 305, 80 315 C 68 292, 68 268, 74 252 Z M 126 252 C 108 252, 108 305, 120 315 C 132 292, 132 268, 126 252 Z',
  },
  {
    id: 'calves',
    label: 'Calves (Gastrocnemius / Soleus)',
    searchKey: 'calf',
    path: 'M 78 322 C 92 322, 88 360, 80 372 C 72 360, 70 338, 78 322 Z M 122 322 C 108 322, 112 360, 120 372 C 128 360, 130 338, 122 322 Z',
  },
];

// Detailed Anatomical Body Silhouette Outline
const BodySilhouette = () => (
  <g stroke="#334155" strokeWidth="1.5" fill="#0f172a">
    {/* Head & Neck */}
    <ellipse cx="100" cy="45" rx="18" ry="24" />
    <path d="M 88 66 L 112 66 L 116 85 L 84 85 Z" />
    {/* Shoulders to Torso to Legs */}
    <path d="M 100 85 C 130 85, 150 95, 154 110 C 162 130, 164 165, 152 180 C 144 185, 134 190, 130 185 C 128 210, 124 225, 132 250 C 142 278, 136 310, 125 385 C 114 385, 110 370, 108 310 C 103 310, 97 310, 92 310 C 90 370, 86 385, 75 385 C 64 310, 58 278, 68 250 C 76 225, 72 210, 70 185 C 66 190, 56 185, 48 180 C 36 165, 38 130, 46 110 C 50 95, 70 85, 100 85 Z" />
    {/* Internal Muscle Contour Accent Lines */}
    <path
      d="M 100 85 L 100 210 M 85 148 L 115 148 M 85 170 L 115 170 M 85 190 L 115 190"
      stroke="#1e293b"
      strokeWidth="1"
      fill="none"
    />
  </g>
);

export function MuscleMap({ onMuscleClick, activeMuscle, className = '' }: MuscleMapProps) {
  const [hoveredMuscle, setHoveredMuscle] = useState<string | null>(null);

  const handleSelect = (region: MuscleRegion) => {
    onMuscleClick(region.searchKey);
  };

  const renderRegion = (region: MuscleRegion) => {
    const isSelected =
      activeMuscle &&
      (activeMuscle.toLowerCase() === region.searchKey.toLowerCase() ||
        region.label.toLowerCase().includes(activeMuscle.toLowerCase()) ||
        activeMuscle.toLowerCase().includes(region.id));

    const isHovered = hoveredMuscle === region.id;

    return (
      <g
        key={region.id}
        onClick={() => handleSelect(region)}
        onMouseEnter={() => setHoveredMuscle(region.id)}
        onMouseLeave={() => setHoveredMuscle(null)}
        className="cursor-pointer transition-all duration-300 group"
      >
        <path
          d={region.path}
          fill={isSelected ? '#06b6d4' : isHovered ? '#0891b2' : '#1e293b'}
          stroke={isSelected ? '#22d3ee' : isHovered ? '#67e8f9' : '#334155'}
          strokeWidth="1.5"
          className="transition-colors duration-200"
          style={{
            filter: isSelected
              ? 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.9))'
              : isHovered
              ? 'drop-shadow(0 0 8px rgba(8, 145, 178, 0.7))'
              : 'none',
          }}
        />
        <title>{region.label}</title>
      </g>
    );
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* Front & Back Anatomical Views */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        {/* Anterior / Front */}
        <div className="relative text-center bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 shadow-xl">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 mb-2">
            Anterior (Front)
          </h4>
          <svg viewBox="20 20 160 380" className="w-48 h-96 drop-shadow-2xl">
            <BodySilhouette />
            {FRONT_REGIONS.map(renderRegion)}
          </svg>
        </div>

        {/* Posterior / Back */}
        <div className="relative text-center bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 shadow-xl">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-cyan-400 mb-2">
            Posterior (Back)
          </h4>
          <svg viewBox="20 20 160 380" className="w-48 h-96 drop-shadow-2xl">
            <BodySilhouette />
            {BACK_REGIONS.map(renderRegion)}
          </svg>
        </div>
      </div>

      {/* Muscle Label Feedback Badge */}
      <div className="text-center">
        {activeMuscle ? (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Selected Muscle Target: {activeMuscle.toUpperCase()}
          </span>
        ) : (
          <span className="text-xs text-slate-400 font-medium">
            Click any muscle region on the anatomical model to filter exercises
          </span>
        )}
      </div>
    </div>
  );
}
