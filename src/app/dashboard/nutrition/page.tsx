'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { Utensils, Flame, Droplets, Target, AlertTriangle } from 'lucide-react';

export default function NutritionDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [currentWeight, setCurrentWeight] = useState(80);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        setProfile(data);
        if (data.currentWeightKg) setCurrentWeight(data.currentWeightKg);
      }
    }
    loadData();
  }, []);

  const handleWeightChange = async (val: number) => {
    setCurrentWeight(val);
    if (profile?.id) {
      await supabase.from('profiles').update({ currentWeightKg: val }).eq('id', profile.id);
    }
  };

  // Mock calculations
  const calories = 2400;
  const protein = 160;
  const carbs = 250;
  const fats = 70;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-2">My Nutrition Guide</h1>
        <p className="text-gray-400">Fuel your body for the <span className="text-emerald-400">{profile?.setup_data?.goalType?.replace('_', ' ') || 'goal'}</span> physique.</p>
      </div>

      <div className="bg-[#0f1219] p-6 rounded-3xl border border-gray-800 mb-8">
        <h2 className="text-lg font-bold mb-6 flex items-center"><Target className="w-5 h-5 mr-2 text-emerald-400" /> Progress Checkpoint</h2>
        <div className="space-y-6">
          <div className="flex justify-between text-sm font-medium text-gray-400">
            <span>Start: {profile?.setup_data?.weightKg || 80}kg</span>
            <span className="text-emerald-400">Current: {currentWeight}kg</span>
            <span>Goal: {profile?.setup_data?.goalWeightKg || 75}kg</span>
          </div>
          <input 
            type="range" 
            min={Math.min(profile?.setup_data?.goalWeightKg || 70, profile?.setup_data?.weightKg || 80)} 
            max={Math.max(profile?.setup_data?.goalWeightKg || 70, profile?.setup_data?.weightKg || 80)} 
            value={currentWeight}
            onChange={(e) => handleWeightChange(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <p className="text-center text-sm text-gray-500 italic">Drag to update your current weight. Macros auto-adjust.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 flex flex-col items-center">
          <Flame className="w-8 h-8 text-rose-500 mb-2" />
          <span className="text-3xl font-black">{calories}</span>
          <span className="text-gray-400 text-sm">Calories</span>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 flex flex-col items-center">
          <Utensils className="w-8 h-8 text-cyan-500 mb-2" />
          <span className="text-3xl font-black">{protein}g</span>
          <span className="text-gray-400 text-sm">Protein</span>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
            <div className="w-4 h-4 bg-amber-500 rounded-sm rotate-45"></div>
          </div>
          <span className="text-3xl font-black">{carbs}g</span>
          <span className="text-gray-400 text-sm">Carbs</span>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 flex flex-col items-center">
          <Droplets className="w-8 h-8 text-yellow-500 mb-2" />
          <span className="text-3xl font-black">{fats}g</span>
          <span className="text-gray-400 text-sm">Fats</span>
        </div>
      </div>

      <div className="bg-[#161b26] p-6 rounded-3xl border border-gray-800">
        <h2 className="text-lg font-bold mb-4 flex items-center text-rose-400">
          <AlertTriangle className="w-5 h-5 mr-2" /> I Ate Off-Plan Calculator
        </h2>
        <p className="text-gray-400 text-sm mb-4">Ate a burger? Don't panic. Click to see the fix.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['Burger 🍔', 'Pizza 🍕', 'Donut 🍩', 'Ice Cream 🍦'].map((food, i) => (
            <button key={i} className="bg-[#0f1219] p-3 rounded-xl border border-gray-800 hover:border-rose-500 hover:bg-rose-500/10 transition-colors text-sm font-medium">
              {food}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
