'use client';

import React from 'react';

interface ExerciseFigureProps {
  exerciseName: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  step: 1 | 2 | 3;
  className?: string;
}

export function ExerciseFigure({
  exerciseName,
  primaryMuscle,
  secondaryMuscles,
  step,
  className = '',
}: ExerciseFigureProps) {
  const nameLower = exerciseName.toLowerCase();
  const muscleLower = primaryMuscle.toLowerCase();

  // Detect equipment type from name or prop
  let equipmentType: 'dumbbell' | 'barbell' | 'cable' | 'machine' | 'bodyweight' = 'dumbbell';
  if (nameLower.includes('barbell') || nameLower.includes('bench press') || nameLower.includes('deadlift') || nameLower.includes('squat') || nameLower.includes('shrug')) {
    equipmentType = 'barbell';
  } else if (nameLower.includes('cable') || nameLower.includes('pulldown') || nameLower.includes('crossover') || nameLower.includes('woodchopper') || nameLower.includes('face pull')) {
    equipmentType = 'cable';
  } else if (nameLower.includes('machine') || nameLower.includes('pec deck') || nameLower.includes('leg extension') || nameLower.includes('leg press') || nameLower.includes('hack')) {
    equipmentType = 'machine';
  } else if (nameLower.includes('push-up') || nameLower.includes('pull-up') || nameLower.includes('dip') || nameLower.includes('bodyweight') || nameLower.includes('plank')) {
    equipmentType = 'bodyweight';
  }

  // Detect posture / bench requirements
  const isSitting =
    nameLower.includes('seated') ||
    nameLower.includes('preacher') ||
    nameLower.includes('pulldown') ||
    nameLower.includes('leg extension') ||
    nameLower.includes('leg curl') ||
    nameLower.includes('machine row');

  const isLyingBench =
    nameLower.includes('bench press') ||
    nameLower.includes('incline') ||
    nameLower.includes('flat dumbbell') ||
    nameLower.includes('decline') ||
    nameLower.includes('skullcrusher') ||
    nameLower.includes('fly');

  // Render Realistic Muscular Human Torso & Limbs
  const renderMuscularHuman = (
    torsoX: number,
    torsoY: number,
    torsoAngle: number,
    armPath: string,
    legPath: string,
    muscleHighlightArea: React.ReactNode
  ) => {
    return (
      <g>
        {/* Human Muscular Silhouette */}
        <g transform={`rotate(${torsoAngle}, ${torsoX}, ${torsoY})`}>
          {/* Head */}
          <circle cx={torsoX} cy={torsoY - 45} r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          {/* Muscular Neck & Traps */}
          <path d={`M ${torsoX - 10} ${torsoY - 30} L ${torsoX + 10} ${torsoY - 30} L ${torsoX + 16} ${torsoY - 20} L ${torsoX - 16} ${torsoY - 20} Z`} fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Torso Chest & Waist */}
          <path
            d={`
              M ${torsoX - 25} ${torsoY - 20}
              C ${torsoX - 22} ${torsoY}, ${torsoX - 18} ${torsoY + 25}, ${torsoX - 14} ${torsoY + 45}
              L ${torsoX + 14} ${torsoY + 45}
              C ${torsoX + 18} ${torsoY + 25}, ${torsoX + 22} ${torsoY}, ${torsoX + 25} ${torsoY - 20}
              Z
            `}
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          {/* Muscular Chest Contour */}
          <path d={`M ${torsoX - 20} ${torsoY - 5} Q ${torsoX} ${torsoY + 8} ${torsoX + 20} ${torsoY - 5}`} fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          {/* Active Target Muscle Highlight */}
          {muscleHighlightArea}
        </g>

        {/* Muscular Legs */}
        <path d={legPath} stroke="#38bdf8" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Muscular Arms */}
        <path d={armPath} stroke="#38bdf8" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  };

  // Render Equipment overlay (Benches, Barbells, Dumbbells, Cables, Machines)
  const renderEquipmentOverlay = () => {
    // 1. Lying Bench (Incline / Flat Bench)
    if (isLyingBench) {
      const benchAngle = nameLower.includes('incline') ? -25 : 0;
      const barY = step === 1 ? 95 : step === 2 ? 125 : 80;

      return (
        <g>
          {/* Steel Workout Bench Frame & Cushioned Pad */}
          <g transform={`rotate(${benchAngle}, 100, 150)`}>
            <rect x="30" y="145" width="140" height="14" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" rx="4" />
            {/* Bench Support Legs */}
            <line x1="50" y1="159" x2="50" y2="200" stroke="#334155" strokeWidth="6" />
            <line x1="150" y1="159" x2="150" y2="200" stroke="#334155" strokeWidth="6" />
          </g>

          {/* Muscular Human Lying on Bench */}
          {renderMuscularHuman(
            100,
            140,
            benchAngle,
            `M 100 135 L 75 110 L 95 ${barY}`,
            'M 130 150 L 150 180 L 150 210',
            <circle cx="100" cy="135" r="14" fill="#ef4444" opacity={step === 3 ? 0.95 : 0.6} style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }} />
          )}

          {/* Equipment in hands */}
          {equipmentType === 'barbell' && (
            <g>
              <line x1="40" y1={barY} x2="160" y2={barY} stroke="#cbd5e1" strokeWidth="5" />
              <rect x="35" y={barY - 14} width="10" height="28" fill="#f59e0b" rx="2" />
              <rect x="155" y={barY - 14} width="10" height="28" fill="#f59e0b" rx="2" />
            </g>
          )}

          {equipmentType === 'dumbbell' && (
            <g>
              {/* Dumbbell Left & Right */}
              <g transform={`translate(80, ${barY})`}>
                <rect x="-8" y="-12" width="16" height="6" fill="#f59e0b" rx="1" />
                <rect x="-8" y="6" width="16" height="6" fill="#f59e0b" rx="1" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="4" />
              </g>
              <g transform={`translate(115, ${barY})`}>
                <rect x="-8" y="-12" width="16" height="6" fill="#f59e0b" rx="1" />
                <rect x="-8" y="6" width="16" height="6" fill="#f59e0b" rx="1" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="4" />
              </g>
            </g>
          )}
        </g>
      );
    }

    // 2. Seated Bench / Machine (Preacher, Seated Row, Shoulder Press)
    if (isSitting) {
      const handY = step === 1 ? 140 : step === 2 ? 110 : 85;

      return (
        <g>
          {/* Seated Workout Bench & Backrest */}
          <rect x="65" y="150" width="70" height="12" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" rx="3" />
          <rect x="65" y="90" width="12" height="65" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" rx="3" />
          <line x1="100" y1="162" x2="100" y2="210" stroke="#334155" strokeWidth="6" />

          {/* Muscular Human Seated */}
          {renderMuscularHuman(
            90,
            120,
            0,
            `M 90 115 L 115 130 L 125 ${handY}`,
            'M 100 150 L 130 150 L 130 210',
            <circle cx="90" cy="115" r="14" fill="#ef4444" opacity={step === 3 ? 0.95 : 0.6} style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }} />
          )}

          {/* Equipment */}
          {equipmentType === 'dumbbell' && (
            <g transform={`translate(125, ${handY})`}>
              <rect x="-10" y="-6" width="20" height="12" fill="#f59e0b" rx="2" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#cbd5e1" strokeWidth="4" />
            </g>
          )}

          {equipmentType === 'cable' && (
            <g>
              <line x1="170" y1="40" x2="125" y2={handY} stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,2" />
              <circle cx="170" cy="40" r="6" fill="#334155" />
              <line x1="120" y1={handY - 8} x2="130" y2={handY + 8} stroke="#f59e0b" strokeWidth="4" />
            </g>
          )}
        </g>
      );
    }

    // 3. Standing / Cable / Barbell / Dumbbell Exercises
    const handY = step === 1 ? 170 : step === 2 ? 130 : 95;

    return (
      <g>
        {/* Floor Line */}
        <line x1="30" y1="225" x2="170" y2="225" stroke="#334155" strokeWidth="3" />

        {/* Cable Column Machine if Cable Equipment */}
        {equipmentType === 'cable' && (
          <g>
            <rect x="160" y="30" width="25" height="195" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" rx="4" />
            {/* Weight Stack Plates */}
            <rect x="165" y="60" width="15" height="40" fill="#334155" />
            {/* Pulley & Cable Line */}
            <circle cx="165" cy="45" r="7" fill="#38bdf8" />
            <line x1="165" y1="45" x2="115" y2={handY} stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="6,2" />
            {/* Cable Handle Attachment */}
            <line x1="110" y1={handY - 10} x2="120" y2={handY + 10} stroke="#f59e0b" strokeWidth="5" />
          </g>
        )}

        {/* Muscular Standing Human */}
        {renderMuscularHuman(
          90,
          100,
          0,
          `M 90 95 L 105 130 L 115 ${handY}`,
          'M 90 145 L 85 185 L 85 225 M 98 145 L 105 185 L 105 225',
          <circle cx="90" cy="95" r="14" fill="#ef4444" opacity={step === 3 ? 0.95 : 0.6} style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }} />
        )}

        {/* Standing Barbells or Dumbbells */}
        {equipmentType === 'barbell' && (
          <g>
            <line x1="50" y1={handY} x2="150" y2={handY} stroke="#cbd5e1" strokeWidth="5" />
            <rect x="42" y={handY - 12} width="10" height="24" fill="#f59e0b" rx="2" />
            <rect x="148" y={handY - 12} width="10" height="24" fill="#f59e0b" rx="2" />
          </g>
        )}

        {equipmentType === 'dumbbell' && (
          <g transform={`translate(115, ${handY})`}>
            <rect x="-8" y="-12" width="16" height="24" fill="#f59e0b" rx="2" />
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="4" />
          </g>
        )}
      </g>
    );
  };

  return (
    <div className={`relative flex flex-col items-center justify-center p-3 bg-slate-950/80 border border-slate-800 rounded-2xl ${className}`}>
      {/* Equipment Badge */}
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
        {equipmentType}
      </div>

      <svg viewBox="0 0 200 250" className="w-full max-w-[200px] h-auto drop-shadow-2xl">
        {renderEquipmentOverlay()}
      </svg>

      <div className="mt-2 text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 rounded-full">
        Step {step} Position
      </div>
    </div>
  );
}
