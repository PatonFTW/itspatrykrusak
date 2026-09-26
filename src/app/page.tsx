'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Dumbbell, Utensils, BookOpen, Settings, ChevronRight, Activity } from 'lucide-react';

type UserState = 'loading' | 'not-logged-in' | 'logged-in-no-setup' | 'logged-in-setup';

export default function Home() {
  const [userState, setUserState] = useState<UserState>('loading');
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setUserState('not-logged-in');
        return;
      }

      setUser(session.user);
      
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileData?.setup_complete) {
        setProfile(profileData);
        setUserState('logged-in-setup');
      } else {
        setUserState('logged-in-no-setup');
      }
    }

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        setUserState('not-logged-in');
        setUser(null);
        setProfile(null);
      } else {
        checkAuth();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function handleGoogleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
  }

  if (userState === 'loading') {
    return (
      <div className="min-h-screen bg-[#07090e] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white overflow-hidden relative">
      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto px-4 py-16 relative z-10 flex flex-col items-center">
        {userState === 'not-logged-in' && (
          <div className="text-center w-full max-w-4xl space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Your Personal Gym Blueprint
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Eliminate gym anxiety with science-backed workouts and nutrition tailored perfectly to your body.
              </p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center mx-auto space-x-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <Link href="/encyclopedia" className="block text-cyan-500 hover:text-cyan-400 font-medium transition-colors">
              Browse the Workout Encyclopedia &rarr;
            </Link>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
              {[
                { title: 'Workout Blueprint', icon: Dumbbell, desc: 'Personalized sets & reps' },
                { title: 'Nutrition Guide', icon: Utensils, desc: 'Macros tailored for you' },
                { title: 'Exercise Encyclopedia', icon: BookOpen, desc: 'Master every movement' },
              ].map((f, i) => (
                <div key={i} className="bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all flex flex-col items-center text-center">
                  <f.icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {userState === 'logged-in-no-setup' && (
          <div className="text-center w-full max-w-2xl space-y-8">
            <h1 className="text-4xl font-bold">Welcome, {user?.user_metadata?.full_name || 'Lifter'}!</h1>
            <p className="text-xl text-gray-400">Your journey starts here. Let's tailor the perfect plan for your body.</p>
            
            <div className="space-y-4">
              <Link href="/setup" className="group block w-full bg-[#0f1219] p-8 rounded-2xl border-2 border-transparent bg-clip-padding relative hover:bg-[#161b26] transition-all">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 [mask-image:linear-gradient(white,white)] [mask-clip:padding-box,border-box] -z-10 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all"></div>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Start Your Gym Journey</h2>
                    <p className="text-gray-400">Complete your profile to generate your blueprint.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              
              <Link href="/encyclopedia" className="block w-full bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-[#161b26] transition-all flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BookOpen className="text-emerald-400 w-6 h-6" />
                  <span className="font-semibold text-lg">The Workout Encyclopedia</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </Link>

              <Link href="/settings" className="block w-full bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-[#161b26] transition-all flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Settings className="text-gray-400 w-6 h-6" />
                  <span className="font-semibold text-lg">Account Settings</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </Link>
            </div>
          </div>
        )}

        {userState === 'logged-in-setup' && profile && (
          <div className="w-full max-w-4xl space-y-8">
            <h1 className="text-4xl font-bold text-center mb-12">Welcome back, {user?.user_metadata?.full_name?.split(' ')[0] || 'Lifter'}!</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/dashboard/workout" className="group block bg-gradient-to-br from-[#0f1219] to-[#161b26] p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/20 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Dumbbell className="w-24 h-24 text-cyan-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">My Workout Blueprint</h2>
                <p className="text-gray-400 mb-6">{profile.setup_data?.daysPerWeek || 4} days/week • {profile.setup_data?.goalType?.replace('_', ' ') || 'Goal'}</p>
                <div className="flex items-center text-cyan-400 font-medium">
                  View Plan <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/dashboard/nutrition" className="group block bg-[#0f1219] p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Utensils className="w-24 h-24 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">My Nutrition Guide</h2>
                <p className="text-gray-400 mb-6">Current: {profile.currentWeightKg || profile.setup_data?.weightKg} kg &rarr; Goal: {profile.setup_data?.goalWeightKg} kg</p>
                <div className="flex items-center text-emerald-400 font-medium">
                  View Macros <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link href="/encyclopedia" className="block bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-[#161b26] transition-all flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-xl"><BookOpen className="text-gray-300 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold text-lg">The Encyclopedia</h3>
                    <p className="text-sm text-gray-400">Master every exercise</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </Link>
              
              <Link href="/setup" className="block bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-[#161b26] transition-all flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-xl"><Activity className="text-amber-500 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold text-lg">Change Goals</h3>
                    <p className="text-sm text-gray-400">Update your stats</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </Link>
            </div>
            
            <div className="text-center pt-8">
              <Link href="/settings" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center space-x-2">
                <Settings className="w-4 h-4" /> <span>Account Settings</span>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
