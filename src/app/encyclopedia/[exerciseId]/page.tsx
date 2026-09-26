'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { exerciseDatabase } from '@/lib/workout-data';
import type { Exercise } from '@/lib/workout-data';
import { ExerciseFigure } from '@/components/svg/ExerciseFigure';
import {
  ArrowLeft,
  Dumbbell,
  Target,
  AlertTriangle,
  CheckCircle2,
  Flame,
  TrendingUp,
  Shield,
  ChevronRight,
} from 'lucide-react';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const exerciseId = params.exerciseId as string;
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
        <Link
          href="/encyclopedia"
          className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Encyclopedia
        </Link>
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
    { num: 3 as const, label: 'Top Squeeze', desc: exercise.movementSteps.top },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/encyclopedia"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Encyclopedia
          </Link>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              equipmentColors[exercise.equipment] || 'bg-slate-800 text-slate-300'
            }`}
          >
            {exercise.equipment.charAt(0).toUpperCase() + exercise.equipment.slice(1)}
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Exercise Title & Muscles */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Rank #{exercise.effectivenessRank} for {exercise.primaryMuscle}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {exercise.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <div className="flex items-center gap-1.5 text-sm">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-semibold">{exercise.primaryMuscle}</span>
            </div>
            {exercise.secondaryMuscles.map((m: string) => (
              <div key={m} className="flex items-center gap-1.5 text-sm">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-orange-300">{m}</span>
              </div>
            ))}
          </div>
          {exercise.spotterRequired && (
            <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
              <AlertTriangle className="w-4 h-4" /> Spotter recommended for heavy weights
            </div>
          )}
        </div>

        {/* 3-Step Movement Figures */}
        <div className="bg-[#0f1219] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-cyan-400" /> Movement Breakdown
          </h2>

          {/* Step Tabs (Mobile) / Side by side (Desktop) */}
          <div className="flex gap-2 mb-6 md:hidden">
            {stepLabels.map((s) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeStep === s.num
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Step {s.num}
              </button>
            ))}
          </div>

          {/* Figures */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {stepLabels.map((s) => (
              <div
                key={s.num}
                className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col items-center"
              >
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  Step {s.num}: {s.label}
                </div>
                <ExerciseFigure
                  exerciseName={exercise.name}
                  primaryMuscle={exercise.primaryMuscle}
                  secondaryMuscles={exercise.secondaryMuscles}
                  step={s.num}
                  className="w-full max-w-[160px] mb-4"
                />
                <p className="text-xs text-slate-300 text-center leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: single step view */}
          <div className="md:hidden">
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                Step {activeStep}: {stepLabels[activeStep - 1].label}
              </div>
              <ExerciseFigure
                exerciseName={exercise.name}
                primaryMuscle={exercise.primaryMuscle}
                secondaryMuscles={exercise.secondaryMuscles}
                step={activeStep}
                className="w-full max-w-[180px] mb-4"
              />
              <p className="text-sm text-slate-300 text-center leading-relaxed">
                {stepLabels[activeStep - 1].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Setup Comfort Box */}
        <div className="bg-[#0f1219] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" /> How to Set This Up So You&apos;re
            Comfortable
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">{exercise.setupInstructions}</p>
        </div>

        {/* Good Burn vs Bad Pain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Good Burn (Correct Form)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{exercise.goodBurn}</p>
          </div>
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-rose-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Bad Pain (Fix Your Form)
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{exercise.badPain}</p>
          </div>
        </div>

        {/* Reps & Sets */}
        <div className="bg-[#0f1219] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" /> Your Reps & Sets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                Beginner
              </div>
              <div className="text-2xl font-black text-white">
                {exercise.beginnerSets} × {exercise.beginnerReps}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                sets × reps — Focus on form and the mind-muscle connection
              </p>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Advanced
              </div>
              <div className="text-2xl font-black text-white">
                {exercise.advancedSets} × {exercise.advancedReps}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                sets × reps — Push close to failure on the last 2 sets
              </p>
            </div>
          </div>
        </div>

        {/* Weight Selection Guide */}
        <div className="bg-[#0f1219] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" /> How to Pick Your Weight & Progress
          </h2>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm shrink-0">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Find Your Comfort Baseline</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Start with a light weight for a few easy reps just to feel the path of the
                  movement and make sure your joints feel 100% comfortable. There&apos;s zero shame
                  in starting light — every single person in the gym did the same thing on Day 1.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">The Too-Light Test</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pick a weight where you can do 12 to 15 reps with clean form. If you reach rep 15
                  and feel like you could easily keep going without your muscles burning or slowing
                  down, it&apos;s too light — move the pin down one slot (or grab the next dumbbell
                  up).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">How to Progress Over Time</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Work with the weight where reps 12 to 15 are tough to finish cleanly. Once that
                  weight starts feeling comfortable for all 3 sets of 15, move up to the next weight
                  the following week! This is called progressive overload — it&apos;s the single most
                  important principle for building muscle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex justify-center pb-8">
          <Link
            href="/encyclopedia"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-2 font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Exercise Encyclopedia
          </Link>
        </div>
      </main>
    </div>
  );
}
