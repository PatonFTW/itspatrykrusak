'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Dumbbell, Star } from 'lucide-react';

export default function Encyclopedia() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const exercises = [
    { id: 'bench-press', name: 'Barbell Bench Press', muscle: 'Chest', equip: 'Barbell', rank: 1 },
    { id: 'squat', name: 'Barbell Squat', muscle: 'Quads', equip: 'Barbell', rank: 1 },
    { id: 'pull-ups', name: 'Pull-ups', muscle: 'Back', equip: 'Bodyweight', rank: 2 },
    { id: 'db-curl', name: 'Dumbbell Curl', muscle: 'Biceps', equip: 'Dumbbells', rank: 3 },
  ];

  const filtered = exercises.filter(ex => 
    ex.name.toLowerCase().includes(search.toLowerCase()) && 
    (filter === 'All' || ex.equip === filter)
  );

  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Workout Encyclopedia</h1>
          <p className="text-gray-400">Master the technique of every effective exercise.</p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search exercises..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0f1219] border border-gray-800 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Barbell', 'Dumbbells', 'Machines', 'Cables', 'Bodyweight'].map(eq => (
            <button 
              key={eq}
              onClick={() => setFilter(eq)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === eq ? 'bg-cyan-600 text-white' : 'bg-[#0f1219] text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600'}`}
            >
              {eq}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(ex => (
            <Link href={`/encyclopedia/${ex.id}`} key={ex.id} className="group bg-[#0f1219] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl group-hover:text-cyan-400 transition-colors">{ex.name}</h3>
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < (4 - ex.rank) ? 'text-amber-500 fill-amber-500' : 'text-gray-700'}`} />
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex gap-3">
                <span className="px-3 py-1 bg-gray-800 rounded-lg text-xs font-medium text-gray-300">{ex.muscle}</span>
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-800 rounded-lg text-xs font-medium flex items-center">
                  <Dumbbell className="w-3 h-3 mr-1" /> {ex.equip}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
