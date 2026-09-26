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
  // Determine movement type from name or muscle
  const nameLower = exerciseName.toLowerCase();
  const muscleLower = primaryMuscle.toLowerCase();

  let movementType: 'press' | 'pull' | 'squat' | 'curl' | 'hinge' | 'generic' = 'generic';

  if (
    nameLower.includes('press') ||
    nameLower.includes('push') ||
    nameLower.includes('dip') ||
    muscleLower.includes('chest') ||
    muscleLower.includes('delt')
  ) {
    movementType = 'press';
  } else if (
    nameLower.includes('pull') ||
    nameLower.includes('row') ||
    nameLower.includes('lat') ||
    muscleLower.includes('lat') ||
    muscleLower.includes('rhomboid')
  ) {
    movementType = 'pull';
  } else if (
    nameLower.includes('squat') ||
    nameLower.includes('extension') ||
    nameLower.includes('lunge') ||
    muscleLower.includes('quad')
  ) {
    movementType = 'squat';
  } else if (
    nameLower.includes('curl') ||
    muscleLower.includes('bicep') ||
    muscleLower.includes('hamstring')
  ) {
    movementType = 'curl';
  } else if (
    nameLower.includes('deadlift') ||
    nameLower.includes('rdl') ||
    nameLower.includes('hinge') ||
    muscleLower.includes('lower back') ||
    muscleLower.includes('glute')
  ) {
    movementType = 'hinge';
  }

  // Define step-by-step limb angles and equipment positioning based on movement type
  const renderMovementFigure = () => {
    switch (movementType) {
      case 'press': {
        // Step 1: Unrack/Setup. Step 2: Bottom Stretch. Step 3: Squeeze Lockout.
        const barY = step === 1 ? 90 : step === 2 ? 140 : 70;
        const elbowX = step === 2 ? 45 : 65;

        return (
          <g>
            {/* Bench / Platform Line */}
            <line x1="30" y1="160" x2="170" y2="160" stroke="#334155" strokeWidth="4" />
            {/* Head */}
            <circle cx="60" cy="148" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Torso lying down */}
            <line x1="70" y1="150" x2="130" y2="150" stroke="#06b6d4" strokeWidth="16" strokeLinecap="round" />
            {/* Primary Muscle Glow (Pecs) */}
            <circle
              cx="95"
              cy="148"
              r="12"
              fill="#ef4444"
              opacity={step === 3 ? 0.9 : 0.6}
              style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
            />
            {/* Arms & Barbell */}
            <path
              d={`M 95 150 L ${elbowX} 130 L 95 ${barY}`}
              stroke="#38bdf8"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Barbell & Weights */}
            <line x1="95" y1={barY - 15} x2="95" y2={barY + 15} stroke="#f59e0b" strokeWidth="6" />
            <rect x="91" y={barY - 20} width="8" height="40" fill="#f59e0b" rx="2" />
          </g>
        );
      }

      case 'pull': {
        // Step 1: Arms high overhead. Step 2: Pulling down. Step 3: Contracted at chest.
        const handY = step === 1 ? 40 : step === 2 ? 80 : 115;
        const elbowY = step === 1 ? 65 : step === 2 ? 105 : 125;
        const elbowX = step === 1 ? 40 : 35;

        return (
          <g>
            {/* Seat Pad */}
            <rect x="70" y="170" width="60" height="10" fill="#334155" rx="3" />
            {/* Head */}
            <circle cx="100" cy="90" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Torso Seated */}
            <line x1="100" y1="102" x2="100" y2="168" stroke="#0f172a" strokeWidth="20" strokeLinecap="round" />
            {/* Lats glowing red/orange */}
            <path
              d="M 88 110 Q 100 120 88 150 M 112 110 Q 100 120 112 150"
              stroke="#ef4444"
              strokeWidth="6"
              fill="none"
              opacity={step === 3 ? 1 : 0.6}
              style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
            />
            {/* Arms Pulling Bar */}
            <path
              d={`M 90 110 L ${100 - elbowX} ${elbowY} L 60 ${handY} M 110 110 L ${100 + elbowX} ${elbowY} L 140 ${handY}`}
              stroke="#38bdf8"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Lat Barbell / Cable Handle */}
            <line x1="40" y1={handY} x2="160" y2={handY} stroke="#06b6d4" strokeWidth="4" />
          </g>
        );
      }

      case 'squat': {
        // Step 1: Standing tall. Step 2: Deep squat. Step 3: Drive up.
        const hipY = step === 1 ? 130 : step === 2 ? 175 : 140;
        const kneeX = step === 2 ? 65 : 85;
        const kneeY = step === 2 ? 180 : 185;

        return (
          <g>
            {/* Ground Line */}
            <line x1="40" y1="230" x2="160" y2="230" stroke="#334155" strokeWidth="3" />
            {/* Barbell across traps */}
            <line x1="50" y1={hipY - 55} x2="150" y2={hipY - 55} stroke="#f59e0b" strokeWidth="5" />
            <rect x="45" y={hipY - 65} width="10" height="20" fill="#f59e0b" rx="2" />
            <rect x="145" y={hipY - 65} width="10" height="20" fill="#f59e0b" rx="2" />

            {/* Head & Torso */}
            <circle cx="100" cy={hipY - 70} r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="100" y1={hipY - 58} x2="100" y2={hipY} stroke="#0f172a" strokeWidth="18" strokeLinecap="round" />

            {/* Quads Muscle Highlight */}
            <line
              x1="90"
              y1={hipY + 10}
              x2={kneeX + 5}
              y2={kneeY - 5}
              stroke="#ef4444"
              strokeWidth="10"
              strokeLinecap="round"
              opacity={step === 2 || step === 3 ? 1 : 0.6}
              style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
            />

            {/* Legs bending */}
            <path
              d={`M 90 ${hipY} L ${kneeX} ${kneeY} L 75 230 M 110 ${hipY} L ${200 - kneeX} ${kneeY} L 125 230`}
              stroke="#38bdf8"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            />
          </g>
        );
      }

      case 'curl': {
        // Step 1: Arms hanging at bottom. Step 2: Mid-way contraction. Step 3: Squeeze at top.
        const handY = step === 1 ? 165 : step === 2 ? 120 : 85;
        const handX = step === 1 ? 115 : step === 2 ? 135 : 115;

        return (
          <g>
            {/* Head & Torso Standing */}
            <circle cx="100" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="100" y1="62" x2="100" y2="150" stroke="#0f172a" strokeWidth="20" strokeLinecap="round" />

            {/* Bicep Muscle Highlight */}
            <circle
              cx="110"
              cy="105"
              r={step === 3 ? 12 : 9}
              fill="#ef4444"
              opacity={step === 3 ? 1 : 0.6}
              style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
            />

            {/* Arm Curling Path */}
            <path
              d={`M 100 80 L 110 115 L ${handX} ${handY}`}
              stroke="#38bdf8"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dumbbell in Hand */}
            <circle cx={handX} cy={handY} r="8" fill="#f59e0b" />
          </g>
        );
      }

      default: {
        // Generic Athletic Pose with highlighted target muscle
        const pulseOpacity = step === 3 ? 1 : 0.6;
        return (
          <g>
            <circle cx="100" cy="50" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <path
              d="M 100 64 L 100 160 M 100 160 L 75 240 M 100 160 L 125 240 M 100 85 L 60 130 M 100 85 L 140 130"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="22"
              fill="#ef4444"
              opacity={pulseOpacity}
              style={{ filter: 'drop-shadow(0 0 12px #ef4444)' }}
            />
          </g>
        );
      }
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center p-3 bg-slate-950/80 border border-slate-800 rounded-2xl ${className}`}>
      <svg viewBox="0 0 200 250" className="w-full max-w-[180px] h-auto drop-shadow-md">
        {renderMovementFigure()}
      </svg>
      <div className="mt-2 text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
        Step {step}
      </div>
    </div>
  );
}
