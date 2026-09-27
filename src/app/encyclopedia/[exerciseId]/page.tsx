'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { exerciseDatabase, type Exercise } from '@/lib/workout-data';
import { ExerciseFigure } from '@/components/svg/ExerciseFigure';
import {
  ArrowLeft,
  Home,
  Dumbbell,
  Target,
  AlertTriangle,
  CheckCircle2,
  Flame,
  TrendingUp,
  Shield,
  Sliders,
  Play,
  RotateCcw,
} from 'lucide-react';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const exerciseId = params.exerciseId as string;

  // Step state: 1 (Setup), 2 (Bottom Stretch), 3 (Top Squeeze)
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const exercise = exerciseDatabase.find((e: Exercise) => e.id === exerciseId);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-center p-8">
        <Dumbbell className="w-16 h-16 text-slate-600 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Exercise Not Found</h1>
        <p className="text-slate-400 mb-6">
          The exercise you&apos;re looking for doesn&apos;t exist in our database.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:text-white transition-all flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all flex items-center gap-2 text-sm"
          >
            <Home className="w-4 h-4" /> Main Menu
          </Link>
        </div>
      </div>
    );
  }

  const equipmentColors: Record<string, string> = {
    machine: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    dumbbell: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cable: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    barbell: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    bodyweight: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  };

  const stepLabels = [
    { num: 1 as const, label: 'Setup Position', desc: exercise.movementSteps.setup },
    { num: 2 as const, label: 'Bottom Stretch', desc: exercise.movementSteps.bottom },
    { num: 3 as const, label: 'Top Squeeze Lockout', desc: exercise.movementSteps.top },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pb-20">
      {/* Top Header Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" /> Back
            </button>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${
              equipmentColors[exercise.equipment] || 'bg-slate-800 text-slate-300'
            }`}
          >
            {exercise.equipment}
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Title Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Scientific EMG Rank #{exercise.effectivenessRank} for {exercise.primaryMuscle}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {exercise.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <div className="flex items-center gap-1.5 text-sm bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-xl">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-semibold">{exercise.primaryMuscle}</span>
            </div>
            {exercise.secondaryMuscles.map((m: string) => (
              <div key={m} className="flex items-center gap-1.5 text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-slate-300">{m}</span>
              </div>
            ))}
          </div>
          {exercise.spotterRequired && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2">
              <AlertTriangle className="w-4 h-4 shrink-0" /> Spotter recommended for heavy working sets
            </div>
          )}
        </div>

        {/* Dynamic Movement Visualizer & Step-by-Step Range Slider */}
        <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-cyan-400" /> Movement Breakdown & Form
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Drag the interactive slider below to see posture, bench setup, and muscle contraction changes across steps.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep(1)}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400"
              >
                Reset Step
              </button>
            </div>
          </div>

          {/* Interactive Movement Slider Control */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-cyan-400" /> Step Control Slider:
              </span>
              <span className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Step {activeStep}: {stepLabels[activeStep - 1].label}
              </span>
            </div>

            {/* Range Slider */}
            <div className="relative px-2">
              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={activeStep}
                onChange={(e) => setActiveStep(Number(e.target.value) as 1 | 2 | 3)}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-2">
                <button onClick={() => setActiveStep(1)} className={activeStep === 1 ? 'text-cyan-400 font-extrabold' : ''}>1. Setup Position</button>
                <button onClick={() => setActiveStep(2)} className={activeStep === 2 ? 'text-cyan-400 font-extrabold' : ''}>2. Bottom Stretch</button>
                <button onClick={() => setActiveStep(3)} className={activeStep === 3 ? 'text-cyan-400 font-extrabold' : ''}>3. Top Squeeze</button>
              </div>
            </div>
          </div>

          {/* Realistic Muscular Human & Equipment Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-950/60 border border-slate-800 rounded-2xl p-6">
            <div className="md:col-span-6 flex justify-center">
              <ExerciseFigure
                exerciseName={exercise.name}
                primaryMuscle={exercise.primaryMuscle}
                secondaryMuscles={exercise.secondaryMuscles}
                step={activeStep}
                className="w-full max-w-[240px]"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                Step {activeStep} Cue
              </div>
              <h3 className="text-lg font-bold text-white">
                {stepLabels[activeStep - 1].label}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900 border border-slate-800/80 rounded-xl p-4">
                {stepLabels[activeStep - 1].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Setup Comfort Cues */}
        <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" /> Comfort & Gym Anxiety Setup Guide
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5">
            {exercise.setupInstructions}
          </p>
        </div>

        {/* Good Burn vs Bad Pain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Good Burn (Correct Activation)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{exercise.goodBurn}</p>
          </div>
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-rose-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Bad Pain (Stop & Check Form)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{exercise.badPain}</p>
          </div>
        </div>

        {/* Reps & Sets */}
        <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" /> Recommended Reps & Sets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                Beginner Target
              </div>
              <div className="text-3xl font-black text-white">
                {exercise.beginnerSets} × {exercise.beginnerReps}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                sets × reps — Focus purely on smooth tempo and mind-muscle connection.
              </p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Advanced Target
              </div>
              <div className="text-3xl font-black text-white">
                {exercise.advancedSets} × {exercise.advancedReps}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                sets × reps — Push close to mechanical failure on your last 2 working sets.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" /> Go Back
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 text-sm shadow-md"
          >
            <Home className="w-4 h-4" /> Return to Main Menu
          </Link>
        </div>
      </main>
    </div>
  );
}
