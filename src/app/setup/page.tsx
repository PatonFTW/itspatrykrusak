'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { ChevronRight, ChevronLeft, Check, Activity, Dumbbell, Target } from 'lucide-react';

type ExperienceLevel = 'beginner' | 'novice' | 'intermediate' | 'advanced';
type GoalType = 'slim_toned' | 'lean_shredded' | 'big_muscular';
type UnitSystem = 'metric' | 'imperial';

export default function SetupWizard() {
  const router = useRouter();
  const supabase = createClient();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [setupData, setSetupData] = useState({
    sex: 'male' as 'male' | 'female',
    age: 25,
    heightCm: 175,
    weightKg: 80,
    bodyFatPercent: 20,
    muscleLevel: 5,
    experience: 'beginner' as ExperienceLevel,
    goalType: 'lean_shredded' as GoalType,
    goalBodyFatPercent: 12,
    goalMuscleLevel: 7,
    goalWeightKg: 75,
    daysPerWeek: 4,
    sessionMinutes: 60,
    noSpotter: false,
    shyBeginner: false,
    unitSystem: 'metric' as UnitSystem,
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleComplete = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/');
      return;
    }

    await supabase
      .from('profiles')
      .update({
        setup_data: setupData,
        setup_complete: true,
        currentWeightKg: setupData.weightKg,
      })
      .eq('id', session.user.id);
      
    router.push('/');
  };

  const updateData = (key: keyof typeof setupData, value: any) => {
    setSetupData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white overflow-hidden py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 font-medium">Step {step} of 3</span>
            <span className="text-cyan-400 font-bold">
              {step === 1 ? 'Your Body Right Now' : step === 2 ? 'Your Goal Physique' : 'Your Schedule'}
            </span>
          </div>
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-[#0f1219] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="flex gap-4 p-1 bg-gray-800/50 rounded-xl w-fit">
                <button onClick={() => updateData('sex', 'male')} className={`px-6 py-2 rounded-lg font-bold transition-all ${setupData.sex === 'male' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}>Male</button>
                <button onClick={() => updateData('sex', 'female')} className={`px-6 py-2 rounded-lg font-bold transition-all ${setupData.sex === 'female' ? 'bg-rose-500 text-white' : 'text-gray-400 hover:text-white'}`}>Female</button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Age</span>
                      <span className="text-cyan-400">{setupData.age} yrs</span>
                    </label>
                    <input type="range" min="14" max="80" value={setupData.age} onChange={(e) => updateData('age', Number(e.target.value))} className="w-full accent-cyan-500" />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Weight</span>
                      <span className="text-cyan-400">{setupData.weightKg} kg</span>
                    </label>
                    <input type="range" min="40" max="150" value={setupData.weightKg} onChange={(e) => updateData('weightKg', Number(e.target.value))} className="w-full accent-cyan-500" />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Body Fat</span>
                      <span className="text-cyan-400">{setupData.bodyFatPercent}%</span>
                    </label>
                    <input type="range" min="5" max="50" value={setupData.bodyFatPercent} onChange={(e) => updateData('bodyFatPercent', Number(e.target.value))} className="w-full accent-cyan-500" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-300 mb-2">Experience Level</h3>
                  {['beginner', 'novice', 'intermediate', 'advanced'].map((lvl) => (
                    <div 
                      key={lvl}
                      onClick={() => updateData('experience', lvl)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${setupData.experience === lvl ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-800 hover:border-gray-600'}`}
                    >
                      <h4 className="capitalize font-bold text-white">{lvl}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="flex gap-4 justify-center mb-8">
                {[
                  { id: 'slim_toned', label: 'Slim & Toned' },
                  { id: 'lean_shredded', label: 'Lean & Shredded' },
                  { id: 'big_muscular', label: 'Big & Muscular' }
                ].map((goal) => (
                  <button 
                    key={goal.id}
                    onClick={() => updateData('goalType', goal.id)}
                    className={`px-4 py-3 rounded-xl font-bold border transition-all flex-1 ${setupData.goalType === goal.id ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-gray-800 text-gray-400 hover:border-gray-600'}`}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                   <div>
                    <label className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Goal Weight</span>
                      <span className="text-emerald-400">{setupData.goalWeightKg} kg</span>
                    </label>
                    <input type="range" min="40" max="150" value={setupData.goalWeightKg} onChange={(e) => updateData('goalWeightKg', Number(e.target.value))} className="w-full accent-emerald-500" />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Goal Body Fat</span>
                      <span className="text-emerald-400">{setupData.goalBodyFatPercent}%</span>
                    </label>
                    <input type="range" min="5" max="30" value={setupData.goalBodyFatPercent} onChange={(e) => updateData('goalBodyFatPercent', Number(e.target.value))} className="w-full accent-emerald-500" />
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center text-center">
                  <Target className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scientific Timeline</h3>
                  <p className="text-gray-400 text-sm">Based on your stats, reaching this goal safely will take approximately 12-16 weeks of consistent effort.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
              <div>
                <h3 className="font-semibold text-gray-300 mb-4">Days Per Week</h3>
                <div className="flex gap-2">
                  {[2,3,4,5,6].map((days) => (
                    <button 
                      key={days}
                      onClick={() => updateData('daysPerWeek', days)}
                      className={`flex-1 py-3 rounded-xl font-bold border transition-all ${setupData.daysPerWeek === days ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-gray-800 text-gray-400 hover:border-gray-600'}`}
                    >
                      {days}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-300 mb-4">Session Duration</h3>
                <div className="flex flex-wrap gap-2">
                  {[30, 45, 60, 90].map((mins) => (
                    <button 
                      key={mins}
                      onClick={() => updateData('sessionMinutes', mins)}
                      className={`flex-1 py-3 rounded-xl font-bold border transition-all ${setupData.sessionMinutes === mins ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-gray-800 text-gray-400 hover:border-gray-600'}`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-800">
                <label className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-gray-900/30 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 className="font-bold text-white mb-1">No-Spotter / Solo Lifter</h4>
                    <p className="text-sm text-gray-400">Avoid exercises that are dangerous to fail alone</p>
                  </div>
                  <input type="checkbox" checked={setupData.noSpotter} onChange={(e) => updateData('noSpotter', e.target.checked)} className="w-6 h-6 accent-cyan-500 rounded" />
                </label>
                
                <label className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-gray-900/30 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 className="font-bold text-white mb-1">Shy Beginner</h4>
                    <p className="text-sm text-gray-400">Prioritize dumbbells and machines in quieter areas</p>
                  </div>
                  <input type="checkbox" checked={setupData.shyBeginner} onChange={(e) => updateData('shyBeginner', e.target.checked)} className="w-6 h-6 accent-cyan-500 rounded" />
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-800 pt-6">
            <button 
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center px-4 py-2 font-semibold transition-colors ${step === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white'}`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" /> Back
            </button>
            
            {step < 3 ? (
              <button 
                onClick={handleNext}
                className="flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-cyan-500/20"
              >
                Next <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            ) : (
              <button 
                onClick={handleComplete}
                disabled={loading}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate Blueprint'} <Check className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
