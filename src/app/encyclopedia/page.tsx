'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { exerciseDatabase, type Exercise } from '@/lib/workout-data';
import { MuscleMap } from '@/components/svg/MuscleMap';
import {
  Search,
  Dumbbell,
  Filter,
  Flame,
  Target,
  Sparkles,
  ShieldAlert,
  Volume2,
  ChevronRight,
  Info,
} from 'lucide-react';

export default function EncyclopediaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('All');
  const [activeMuscleTarget, setActiveMuscleTarget] = useState<string | null>(null);

  const categories = [
    'All',
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    'Quads',
    'Hamstrings',
    'Glutes',
    'Calves',
    'Core',
  ];

  const equipmentList = [
    { label: 'All Equipment', value: 'All' },
    { label: 'Dumbbell', value: 'dumbbell' },
    { label: 'Barbell', value: 'barbell' },
    { label: 'Cable', value: 'cable' },
    { label: 'Machine', value: 'machine' },
    { label: 'Bodyweight', value: 'bodyweight' },
  ];

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return exerciseDatabase.filter((ex) => {
      // Category filter (match primary or secondary)
      const matchesCategory =
        selectedCategory === 'All' ||
        ex.primaryMuscle.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        ex.secondaryMuscles.some((m) =>
          m.toLowerCase().includes(selectedCategory.toLowerCase())
        );

      // MuscleMap interactive selection override if active
      const matchesMuscleMap =
        !activeMuscleTarget ||
        ex.primaryMuscle.toLowerCase().includes(activeMuscleTarget.toLowerCase()) ||
        ex.secondaryMuscles.some((m) =>
          m.toLowerCase().includes(activeMuscleTarget.toLowerCase())
        );

      // Equipment filter
      const matchesEquipment =
        selectedEquipment === 'All' || ex.equipment === selectedEquipment;

      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        ex.name.toLowerCase().includes(query) ||
        ex.primaryMuscle.toLowerCase().includes(query) ||
        ex.secondaryMuscles.some((m) => m.toLowerCase().includes(query)) ||
        ex.equipment.toLowerCase().includes(query);

      return matchesCategory && matchesMuscleMap && matchesEquipment && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedEquipment, activeMuscleTarget]);

  const equipmentBadgeStyles: Record<string, string> = {
    machine: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    dumbbell: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cable: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    barbell: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    bodyweight: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pb-20">
      {/* Header Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#0f1219] to-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Science-Backed Encyclopedia
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Exercise Database
              </h1>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Ranked by EMG muscle activation studies. Every movement comes with step-by-step
                form guides, setup cues, and good burn vs bad pain checks.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shrink-0">
              <div className="text-center px-3 border-r border-slate-800">
                <div className="text-2xl font-black text-cyan-400">{exerciseDatabase.length}</div>
                <div className="text-[11px] text-slate-400 font-medium">Exercises</div>
              </div>
              <div className="text-center px-3 border-r border-slate-800">
                <div className="text-2xl font-black text-emerald-400">10</div>
                <div className="text-[11px] text-slate-400 font-medium">Muscle Groups</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-black text-amber-400">EMG</div>
                <div className="text-[11px] text-slate-400 font-medium">Ranked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Anatomical Muscle Selector & Search Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Anatomical Muscle Map */}
          <div className="lg:col-span-5 bg-[#0f1219] border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" /> Click a Muscle Region
              </h3>
              {activeMuscleTarget && (
                <button
                  onClick={() => setActiveMuscleTarget(null)}
                  className="text-xs text-slate-400 hover:text-cyan-400 underline transition-colors"
                >
                  Clear Selection
                </button>
              )}
            </div>

            <MuscleMap
              activeMuscle={activeMuscleTarget || undefined}
              onMuscleClick={(m: string) => {
                setActiveMuscleTarget(m === activeMuscleTarget ? null : m);
                if (m) setSelectedCategory('All');
              }}
              className="w-full max-w-[280px] mx-auto py-2"
            />
            {activeMuscleTarget && (
              <div className="text-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 py-2 rounded-xl">
                Filtering by target: {activeMuscleTarget}
              </div>
            )}
          </div>

          {/* Search Controls & Filter Tabs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search exercise name, muscle (e.g. Upper Chest, Lats), or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f1219] border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm shadow-inner"
              />
            </div>

            {/* Category Pills */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Target Muscle Group
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setActiveMuscleTarget(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat && !activeMuscleTarget
                        ? 'bg-cyan-500 border border-cyan-400 text-slate-950 shadow-md'
                        : 'bg-[#0f1219] border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Equipment Filter Pills */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Equipment Type
              </div>
              <div className="flex flex-wrap gap-2">
                {equipmentList.map((eq) => (
                  <button
                    key={eq.value}
                    onClick={() => setSelectedEquipment(eq.value)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedEquipment === eq.value
                        ? 'bg-emerald-500 border border-emerald-400 text-slate-950 shadow-md'
                        : 'bg-[#0f1219] border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {eq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span>
                Showing <strong className="text-white">{filteredExercises.length}</strong> exercises
              </span>
              {(selectedCategory !== 'All' ||
                selectedEquipment !== 'All' ||
                searchQuery ||
                activeMuscleTarget) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedEquipment('All');
                    setSearchQuery('');
                    setActiveMuscleTarget(null);
                  }}
                  className="text-cyan-400 hover:underline font-medium"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Exercise Cards Grid */}
        {filteredExercises.length === 0 ? (
          <div className="bg-[#0f1219] border border-slate-800 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
            <Dumbbell className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No exercises matched your search</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Try adjusting your muscle group, equipment filter, or clearing the search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedEquipment('All');
                setSearchQuery('');
                setActiveMuscleTarget(null);
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredExercises.map((ex) => (
              <Link
                key={ex.id}
                href={`/encyclopedia/${ex.id}`}
                className="group bg-[#0f1219] border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Header & Equipment Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wider ${
                        equipmentBadgeStyles[ex.equipment] || 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {ex.equipment}
                    </span>

                    {(selectedCategory !== 'All' || activeMuscleTarget) && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold">
                        Rank #{ex.effectivenessRank}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug mb-2">
                    {ex.name}
                  </h3>

                  {/* Target Muscles */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-red-400 font-semibold">
                      <Target className="w-3.5 h-3.5 shrink-0" />
                      <span>{ex.primaryMuscle}</span>
                    </div>
                    {ex.secondaryMuscles.length > 0 && (
                      <div className="flex flex-wrap gap-1 text-[11px] text-slate-400">
                        <span className="text-slate-500">Also targets:</span>
                        {ex.secondaryMuscles.slice(0, 3).map((sec, idx) => (
                          <span key={sec}>
                            {sec}
                            {idx < Math.min(ex.secondaryMuscles.length, 3) - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Features */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    {ex.quietCornerFriendly && (
                      <span className="text-[10px] bg-slate-900 border border-slate-700/60 px-2 py-0.5 rounded text-slate-300">
                        Quiet Corner
                      </span>
                    )}
                    {ex.spotterRequired && (
                      <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                        Spotter
                      </span>
                    )}
                  </div>

                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 text-xs font-semibold">
                    View Form <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
