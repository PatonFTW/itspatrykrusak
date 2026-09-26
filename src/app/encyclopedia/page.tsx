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
  ChevronRight,
  Award,
  Layers,
} from 'lucide-react';

// Define Muscle Subgroup hierarchy
interface MuscleGroupStructure {
  name: string;
  subgroups: string[];
}

const MUSCLE_GROUPS: MuscleGroupStructure[] = [
  {
    name: 'All',
    subgroups: ['All'],
  },
  {
    name: 'Chest',
    subgroups: ['All Chest', 'Upper Chest', 'Mid Chest', 'Lower Chest'],
  },
  {
    name: 'Back',
    subgroups: ['All Back', 'Lats', 'Upper Traps', 'Rhomboids', 'Lower Back'],
  },
  {
    name: 'Shoulders',
    subgroups: ['All Shoulders', 'Front Delts', 'Side Delts', 'Rear Delts'],
  },
  {
    name: 'Biceps',
    subgroups: ['All Biceps', 'Biceps Long Head', 'Biceps Short Head', 'Brachialis'],
  },
  {
    name: 'Triceps',
    subgroups: ['All Triceps', 'Triceps Long Head', 'Triceps Lateral Head', 'Medial Head'],
  },
  {
    name: 'Quads',
    subgroups: ['All Quads', 'Quadriceps'],
  },
  {
    name: 'Hamstrings',
    subgroups: ['All Hamstrings', 'Hamstrings'],
  },
  {
    name: 'Glutes',
    subgroups: ['All Glutes', 'Glutes', 'Glutes (Medius)'],
  },
  {
    name: 'Calves',
    subgroups: ['All Calves', 'Calves (Gastrocnemius)', 'Calves (Soleus)'],
  },
  {
    name: 'Core',
    subgroups: ['All Core', 'Upper Abs', 'Lower Abs', 'Obliques'],
  },
];

export default function EncyclopediaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMainGroup, setSelectedMainGroup] = useState<string>('All');
  const [selectedSubgroup, setSelectedSubgroup] = useState<string>('All');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('All');
  const [activeMuscleMapTarget, setActiveMuscleMapTarget] = useState<string | null>(null);

  const equipmentList = [
    { label: 'All Equipment', value: 'All' },
    { label: 'Dumbbell', value: 'dumbbell' },
    { label: 'Barbell', value: 'barbell' },
    { label: 'Cable', value: 'cable' },
    { label: 'Machine', value: 'machine' },
    { label: 'Bodyweight', value: 'bodyweight' },
  ];

  // Active subgroups array based on selected main group
  const activeSubgroups = useMemo(() => {
    const found = MUSCLE_GROUPS.find((g) => g.name === selectedMainGroup);
    return found ? found.subgroups : ['All'];
  }, [selectedMainGroup]);

  // Handle main group selection
  const handleSelectMainGroup = (groupName: string) => {
    setSelectedMainGroup(groupName);
    setSelectedSubgroup('All');
    setActiveMuscleMapTarget(null);
  };

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return exerciseDatabase.filter((ex) => {
      // 1. MuscleMap interactive selection override if active
      if (activeMuscleMapTarget) {
        const targetLow = activeMuscleMapTarget.toLowerCase().replace('_', ' ');
        const matchesMap =
          ex.primaryMuscle.toLowerCase().includes(targetLow) ||
          ex.secondaryMuscles.some((m) => m.toLowerCase().includes(targetLow));
        if (!matchesMap) return false;
      }

      // 2. Main Group Filter
      if (selectedMainGroup !== 'All' && !activeMuscleMapTarget) {
        const mainLow = selectedMainGroup.toLowerCase();
        const matchesMain =
          ex.primaryMuscle.toLowerCase().includes(mainLow) ||
          ex.secondaryMuscles.some((m) => m.toLowerCase().includes(mainLow));
        if (!matchesMain) return false;
      }

      // 3. Subgroup Filter
      if (selectedSubgroup !== 'All' && !selectedSubgroup.startsWith('All') && !activeMuscleMapTarget) {
        const subLow = selectedSubgroup.toLowerCase();
        const matchesSub =
          ex.primaryMuscle.toLowerCase().includes(subLow) ||
          ex.secondaryMuscles.some((m) => m.toLowerCase().includes(subLow));
        if (!matchesSub) return false;
      }

      // 4. Equipment Filter
      if (selectedEquipment !== 'All' && ex.equipment !== selectedEquipment) {
        return false;
      }

      // 5. Search Query
      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const matchesSearch =
          ex.name.toLowerCase().includes(query) ||
          ex.primaryMuscle.toLowerCase().includes(query) ||
          ex.secondaryMuscles.some((m) => m.toLowerCase().includes(query)) ||
          ex.equipment.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [searchQuery, selectedMainGroup, selectedSubgroup, selectedEquipment, activeMuscleMapTarget]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> EMG Electromyography Science
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Exercise Encyclopedia & EMG Rankings
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore exercises ranked strictly by EMG muscle activation studies. Filter by target
                muscle subgroups, equipment, or click the anatomical vector model.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shrink-0">
              <div className="text-center px-3 border-r border-slate-800">
                <div className="text-2xl font-black text-cyan-400">{exerciseDatabase.length}</div>
                <div className="text-[11px] text-slate-400 font-medium">Exercises</div>
              </div>
              <div className="text-center px-3 border-r border-slate-800">
                <div className="text-2xl font-black text-emerald-400">10</div>
                <div className="text-[11px] text-slate-400 font-medium">Groups</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-black text-amber-400">#1-5</div>
                <div className="text-[11px] text-slate-400 font-medium">EMG Ranks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Anatomical Muscle Selector & Filter Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Vector Muscle Map */}
          <div className="lg:col-span-4 bg-[#0f1219] border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" /> Interactive Anatomical Model
              </h3>
              {activeMuscleMapTarget && (
                <button
                  onClick={() => setActiveMuscleMapTarget(null)}
                  className="text-xs text-slate-400 hover:text-cyan-400 underline transition-colors"
                >
                  Reset Map
                </button>
              )}
            </div>

            <MuscleMap
              activeMuscle={activeMuscleMapTarget || undefined}
              onMuscleClick={(m: string) => {
                setActiveMuscleMapTarget(m === activeMuscleMapTarget ? null : m);
                if (m) {
                  setSelectedMainGroup('All');
                  setSelectedSubgroup('All');
                }
              }}
              className="w-full max-w-[260px] mx-auto"
            />

            {activeMuscleMapTarget && (
              <div className="text-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 py-2 rounded-xl">
                Filtering by Anatomical Target: {activeMuscleMapTarget.replace('_', ' ')}
              </div>
            )}
          </div>

          {/* Filtering Engine */}
          <div className="lg:col-span-8 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search exercise name (e.g. Incline Press, Lat Pulldown, Hammer Curl)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f1219] border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm shadow-inner"
              />
            </div>

            {/* Main Muscle Groups */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-cyan-400" /> Primary Muscle Group
              </div>
              <div className="flex flex-wrap gap-2">
                {MUSCLE_GROUPS.map((g) => (
                  <button
                    key={g.name}
                    onClick={() => handleSelectMainGroup(g.name)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedMainGroup === g.name && !activeMuscleMapTarget
                        ? 'bg-cyan-500 border border-cyan-400 text-slate-950 shadow-md scale-105'
                        : 'bg-[#0f1219] border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Subgroups (if main group selected or has sub-regions) */}
            {activeSubgroups.length > 1 && (
              <div className="bg-[#0f1219]/60 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> Specific Subgroup / Sub-Region
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeSubgroups.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubgroup(sub)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        selectedSubgroup === sub
                          ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Equipment Filter */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-400" /> Equipment Type
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

            {/* Status summary */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span>
                Showing <strong className="text-white">{filteredExercises.length}</strong> science-backed exercises
              </span>
              {(selectedMainGroup !== 'All' ||
                selectedSubgroup !== 'All' ||
                selectedEquipment !== 'All' ||
                searchQuery ||
                activeMuscleMapTarget) && (
                <button
                  onClick={() => {
                    setSelectedMainGroup('All');
                    setSelectedSubgroup('All');
                    setSelectedEquipment('All');
                    setSearchQuery('');
                    setActiveMuscleMapTarget(null);
                  }}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Exercise Cards Grid */}
        {filteredExercises.length === 0 ? (
          <div className="bg-[#0f1219] border border-slate-800 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
            <Dumbbell className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No exercises match these criteria</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Try selecting &quot;All&quot; for equipment or resetting the muscle group filters.
            </p>
            <button
              onClick={() => {
                setSelectedMainGroup('All');
                setSelectedSubgroup('All');
                setSelectedEquipment('All');
                setSearchQuery('');
                setActiveMuscleMapTarget(null);
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
                  {/* ALWAYS VISIBLE EMG RANK BADGE + Equipment */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>
                        EMG Rank #{ex.effectivenessRank} for {ex.primaryMuscle}
                      </span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider shrink-0 ${
                        equipmentBadgeStyles[ex.equipment] || 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {ex.equipment}
                    </span>
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
                        <span className="text-slate-500">Secondary:</span>
                        {ex.secondaryMuscles.map((sec, idx) => (
                          <span key={sec}>
                            {sec}
                            {idx < ex.secondaryMuscles.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Features */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    {ex.quietCornerFriendly && (
                      <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300 font-medium">
                        Quiet Corner
                      </span>
                    )}
                    {ex.spotterRequired && (
                      <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-medium">
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
