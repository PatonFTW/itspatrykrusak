'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { Dumbbell, Activity, ChevronDown, CheckCircle2, Lock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WorkoutDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        setProfile(data);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-cyan-400">Loading Blueprint...</div>;
  }

  // Locked State if setup incomplete or reset
  if (!profile?.setup_complete || !profile?.setup_data) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Workout Blueprint Locked
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              You need to complete the 3-step setup wizard first so we can generate your personalized workout split, exercises, and sets/reps.
            </p>
          </div>
          <Link
            href="/setup"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-cyan-500 text-slate-950 font-black text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Start 3-Step Setup Wizard <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Generated plan based on setup_data
  const days = [
    { name: 'Day 1', focus: 'Upper Body Power', exercises: [
      { id: 'bench-press', name: 'Barbell Bench Press', sets: '4', reps: '5-8', target: 'Chest' },
      { id: 'pull-ups', name: 'Pull-ups', sets: '3', reps: '8-10', target: 'Back' },
      { id: 'ohp', name: 'Overhead Press', sets: '3', reps: '8-12', target: 'Shoulders' },
    ]},
    { name: 'Day 2', focus: 'Lower Body Strength', exercises: [
      { id: 'squat', name: 'Barbell Squat', sets: '4', reps: '5-8', target: 'Quads' },
      { id: 'rdl', name: 'Romanian Deadlift', sets: '3', reps: '8-10', target: 'Hamstrings' },
      { id: 'calf-raise', name: 'Standing Calf Raise', sets: '4', reps: '15-20', target: 'Calves' },
    ]},
    { name: 'Day 3', focus: 'Active Recovery', exercises: [] },
    { name: 'Day 4', focus: 'Upper Body Hypertrophy', exercises: [
      { id: 'db-incline', name: 'Incline DB Press', sets: '3', reps: '10-12', target: 'Upper Chest' },
      { id: 'rows', name: 'Seated Cable Row', sets: '3', reps: '10-12', target: 'Back' },
      { id: 'curls', name: 'Bicep Curls', sets: '3', reps: '12-15', target: 'Biceps' },
    ]},
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">My Workout Blueprint</h1>
        <p className="text-gray-400">Based on your goal: <span className="text-cyan-400 capitalize">{profile?.setup_data?.goalType?.replace('_', ' ')}</span></p>
      </div>

      <div className="space-y-4">
        {days.map((day, idx) => (
          <div key={idx} className="bg-[#0f1219] rounded-2xl border border-gray-800 overflow-hidden transition-all">
            <button 
              onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 hover:bg-[#161b26] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${day.exercises.length ? 'bg-cyan-500/10 text-cyan-400' : 'bg-gray-800 text-gray-500'}`}>
                  {day.exercises.length ? <Dumbbell className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{day.name}</h3>
                  <p className="text-sm text-gray-400">{day.focus}</p>
                </div>
              </div>
              <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${expandedDay === idx ? 'rotate-180' : ''}`} />
            </button>

            {expandedDay === idx && day.exercises.length > 0 && (
              <div className="p-6 pt-0 border-t border-gray-800/50 bg-[#0a0c13]">
                <div className="grid gap-4 mt-4">
                  {day.exercises.map((ex, eIdx) => (
                    <div key={eIdx} className="bg-[#0f1219] p-4 rounded-xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                         <Link href={`/encyclopedia/${ex.id}`} className="font-bold text-cyan-400 hover:text-cyan-300 text-lg mb-1 block">
                          {ex.name}
                        </Link>
                        <p className="text-sm text-gray-400">Target: {ex.target}</p>
                      </div>
                      <div className="flex items-center gap-4 sm:justify-end text-sm">
                        <div className="bg-gray-800 px-3 py-1.5 rounded-lg font-medium">Sets: <span className="text-white">{ex.sets}</span></div>
                        <div className="bg-gray-800 px-3 py-1.5 rounded-lg font-medium">Reps: <span className="text-white">{ex.reps}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {expandedDay === idx && day.exercises.length === 0 && (
              <div className="p-6 pt-0 border-t border-gray-800/50 bg-[#0a0c13] text-center text-gray-400 pb-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mt-6 mb-3 opacity-50" />
                <p>Rest and recover. Let your muscles grow.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
