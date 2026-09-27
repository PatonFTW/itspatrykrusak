'use client';

import React, { useMemo } from 'react';

interface BodyCharacterProps {
  sex: 'male' | 'female';
  bodyFat: number; // 5-50%
  muscle: number; // 1-10 scale
  className?: string;
  showAbsDetail?: boolean;
  glowColor?: string;
}

/**
 * Anatomically Accurate Morphable Humanoid Vector Model
 * Features precise muscle bellies, tendinous intersections, clavicular lines,
 * deltoid caps, pectoral heads, quad teardrops, and lat wings.
 */
export function BodyCharacter({
  sex,
  bodyFat,
  muscle,
  className = '',
  showAbsDetail = false,
  glowColor = '#06b6d4',
}: BodyCharacterProps) {
  // Normalize params
  const fatNorm = Math.max(5, Math.min(50, bodyFat)) / 50; // 0.1 to 1.0
  const muscleNorm = Math.max(1, Math.min(10, muscle)) / 10; // 0.1 to 1.0

  const isMale = sex === 'male';

  // Anatomical Proportions scaling
  const shoulderSpan = isMale
    ? 120 + muscleNorm * 40 - fatNorm * 5
    : 95 + muscleNorm * 25;
  const pecWidth = isMale
    ? 95 + muscleNorm * 35 + fatNorm * 15
    : 85 + muscleNorm * 20 + fatNorm * 20;
  const waistWidth = isMale
    ? 70 + fatNorm * 50 - muscleNorm * 12
    : 60 + fatNorm * 45;
  const hipWidth = isMale
    ? 80 + fatNorm * 25
    : 102 + fatNorm * 40 + muscleNorm * 15;
  const armThickness = 16 + muscleNorm * 16 + fatNorm * 8;
  const thighWidth = isMale
    ? 26 + muscleNorm * 22 + fatNorm * 18
    : 30 + muscleNorm * 24 + fatNorm * 24;

  const showAbs = showAbsDetail || (isMale ? bodyFat <= 16 : bodyFat <= 23);

  return (
    <svg
      viewBox="0 0 320 520"
      className={`${className}`}
      style={{
        filter: glowColor ? `drop-shadow(0 0 16px ${glowColor}35)` : 'none',
      }}
    >
      <defs>
        {/* High-end Dark Anatomical Shading Gradient */}
        <linearGradient id="anatomicalBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="40%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="muscleHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <g transform="translate(60, 20)">
        {/* 1. HEAD, NECK & STERNOCLEIDOMASTOID */}
        <ellipse
          cx="100"
          cy="42"
          rx={isMale ? 22 : 20}
          ry={isMale ? 28 : 26}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <path
          d={`M ${100 - (12 + muscleNorm * 5)} 68 L ${100 + (12 + muscleNorm * 5)} 68 L ${100 + (18 + muscleNorm * 8)} 90 L ${100 - (18 + muscleNorm * 8)} 90 Z`}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.2"
        />
        <path
          d={`M ${100 - 6} 68 L ${100 - 12} 88 M ${100 + 6} 68 L ${100 + 12} 88`}
          stroke="#06b6d4"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* 2. CLAVICLES & SHOULDER GIRDLE */}
        <path
          d={`M ${100 - shoulderSpan / 2} 92 C 100 86, 100 86, ${100 + shoulderSpan / 2} 92`}
          stroke="#38bdf8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* 3. TORSO ANATOMICAL OUTLINE */}
        <path
          d={`
            M ${100 - shoulderSpan / 2} 92
            C ${100 - pecWidth / 2} 118, ${100 - pecWidth / 2} 145, ${100 - waistWidth / 2} 210
            C ${100 - waistWidth / 2} 245, ${100 - hipWidth / 2} 265, ${100 - hipWidth / 2} 285
            L ${100 + hipWidth / 2} 285
            C ${100 + hipWidth / 2} 265, ${100 + waistWidth / 2} 245, ${100 + waistWidth / 2} 210
            C ${100 + pecWidth / 2} 145, ${100 + pecWidth / 2} 118, ${100 + shoulderSpan / 2} 92
            Z
          `}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="2"
          className="transition-all duration-500 ease-out"
        />

        {/* 4. PECTORALIS MAJOR (CLAVICULAR & STERNAL HEADS) */}
        {isMale ? (
          <g stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity={0.6 + muscleNorm * 0.4}>
            <path d={`M ${100 - pecWidth * 0.42} 108 C ${100 - pecWidth * 0.2} 118, ${100 - 5} 122, 100 125`} />
            <path d={`M ${100 + pecWidth * 0.42} 108 C ${100 + pecWidth * 0.2} 118, ${100 + 5} 122, 100 125`} />
            <path d={`M ${100 - pecWidth * 0.42} 136 C ${100 - pecWidth * 0.2} 150, 100 148, 100 125`} />
            <path d={`M ${100 + pecWidth * 0.42} 136 C ${100 + pecWidth * 0.2} 150, 100 148, 100 125`} />
            <line x1="100" y1="92" x2="100" y2="150" stroke="#38bdf8" strokeWidth="1.5" />
          </g>
        ) : (
          <g stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.7">
            <path d={`M ${100 - pecWidth * 0.4} 138 C ${100 - pecWidth * 0.2} 165, ${100 + pecWidth * 0.2} 165, ${100 + pecWidth * 0.4} 138`} />
          </g>
        )}

        {/* 5. RECTUS ABDOMINIS & SERRATUS ANTERIOR */}
        {showAbs && (
          <g
            stroke="#06b6d4"
            strokeWidth="1.5"
            fill="none"
            opacity={Math.max(0.25, 1 - fatNorm * 1.7)}
            className="transition-opacity duration-500"
          >
            <line x1="100" y1="150" x2="100" y2="235" stroke="#38bdf8" strokeWidth="1.5" />
            <path d={`M ${100 - waistWidth * 0.26} 168 Q 100 172 ${100 + waistWidth * 0.26} 168`} />
            <path d={`M ${100 - waistWidth * 0.26} 190 Q 100 194 ${100 + waistWidth * 0.26} 190`} />
            <path d={`M ${100 - waistWidth * 0.26} 212 Q 100 216 ${100 + waistWidth * 0.26} 212`} />
            <path d={`M ${100 - waistWidth * 0.45} 175 Q ${100 - waistWidth * 0.3} 210 ${100 - 10} 240`} />
            <path d={`M ${100 + waistWidth * 0.45} 175 Q ${100 + waistWidth * 0.3} 210 ${100 + 10} 240`} />
            <path d={`M ${100 - pecWidth * 0.45} 145 L ${100 - pecWidth * 0.32} 155 M ${100 - pecWidth * 0.45} 158 L ${100 - pecWidth * 0.32} 168`} strokeWidth="1" />
            <path d={`M ${100 + pecWidth * 0.45} 145 L ${100 + pecWidth * 0.32} 155 M ${100 + pecWidth * 0.45} 158 L ${100 + pecWidth * 0.32} 168`} strokeWidth="1" />
          </g>
        )}

        {/* 6. DELTOIDS (ANTERIOR & LATERAL HEADS) */}
        <g className="transition-all duration-500 ease-out">
          <path
            d={`
              M ${100 - shoulderSpan / 2 + 2} 92
              C ${100 - shoulderSpan / 2 - 16 - muscleNorm * 8} 105, ${100 - shoulderSpan / 2 - 14 - muscleNorm * 8} 125, ${100 - shoulderSpan / 2 + 2} 130
              Z
            `}
            fill="url(#anatomicalBodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <path d={`M ${100 - shoulderSpan / 2 - 5} 95 L ${100 - shoulderSpan / 2 - 2} 125`} stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
        </g>

        <g className="transition-all duration-500 ease-out">
          <path
            d={`
              M ${100 + shoulderSpan / 2 - 2} 92
              C ${100 + shoulderSpan / 2 + 16 + muscleNorm * 8} 105, ${100 + shoulderSpan / 2 + 14 + muscleNorm * 8} 125, ${100 + shoulderSpan / 2 - 2} 130
              Z
            `}
            fill="url(#anatomicalBodyGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <path d={`M ${100 + shoulderSpan / 2 + 5} 95 L ${100 + shoulderSpan / 2 + 2} 125`} stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
        </g>

        {/* 7. ARMS (BICEPS BRACHII & BRACHIALIS) */}
        <path
          d={`
            M ${100 - shoulderSpan / 2 - 4} 125
            C ${100 - shoulderSpan / 2 - armThickness} 160, ${100 - shoulderSpan / 2 - armThickness} 195, ${100 - shoulderSpan / 2 - 14} 245
            L ${100 - shoulderSpan / 2 + 4} 245
            C ${100 - shoulderSpan / 2 + 4} 195, ${100 - shoulderSpan / 2 + 6} 160, ${100 - shoulderSpan / 2 + 4} 125
            Z
          `}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />
        <path d={`M ${100 - shoulderSpan / 2 - 6} 138 Q ${100 - shoulderSpan / 2 - armThickness * 0.7} 155 ${100 - shoulderSpan / 2 - 4} 175`} stroke="#06b6d4" strokeWidth="1.2" fill="none" opacity={0.4 + muscleNorm * 0.5} />

        <path
          d={`
            M ${100 + shoulderSpan / 2 + 4} 125
            C ${100 + shoulderSpan / 2 + armThickness} 160, ${100 + shoulderSpan / 2 + armThickness} 195, ${100 + shoulderSpan / 2 + 14} 245
            L ${100 + shoulderSpan / 2 - 4} 245
            C ${100 + shoulderSpan / 2 - 4} 195, ${100 + shoulderSpan / 2 - 6} 160, ${100 + shoulderSpan / 2 - 4} 125
            Z
          `}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />
        <path d={`M ${100 + shoulderSpan / 2 + 6} 138 Q ${100 + shoulderSpan / 2 + armThickness * 0.7} 155 ${100 + shoulderSpan / 2 + 4} 175`} stroke="#06b6d4" strokeWidth="1.2" fill="none" opacity={0.4 + muscleNorm * 0.5} />

        {/* 8. LEGS (QUADRICEPS FEMORIS: RECTUS FEMORIS & VASTUS TEARDROP) */}
        <path
          d={`
            M ${100 - hipWidth / 2 + 4} 285
            C ${100 - hipWidth / 2 - thighWidth * 0.45} 345, ${100 - 36} 420, ${100 - 30} 465
            L ${100 - 12} 465
            C ${100 - 16} 420, ${100 - 8} 345, ${100 - 4} 285
            Z
          `}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />
        <path d={`M ${100 - 18} 405 C ${100 - 28} 420, ${100 - 24} 438, ${100 - 15} 442`} stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity={0.5 + muscleNorm * 0.5} />

        <path
          d={`
            M ${100 + hipWidth / 2 - 4} 285
            C ${100 + hipWidth / 2 + thighWidth * 0.45} 345, ${100 + 36} 420, ${100 + 30} 465
            L ${100 + 12} 465
            C ${100 + 16} 420, ${100 + 8} 345, ${100 + 4} 285
            Z
          `}
          fill="url(#anatomicalBodyGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="transition-all duration-500 ease-out"
        />
        <path d={`M ${100 + 18} 405 C ${100 + 28} 420, ${100 + 24} 438, ${100 + 15} 442`} stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity={0.5 + muscleNorm * 0.5} />
      </g>
    </svg>
  );
}
