'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import {
  Dumbbell,
  Utensils,
  BookOpen,
  Settings,
  ChevronRight,
  Sparkles,
  Lock,
  Play,
  User,
  Activity,
  Flame,
  Target,
  ShieldCheck,
} from 'lucide-react';

type UserState = 'loading' | 'not-logged-in' | 'logged-in-no-setup' | 'logged-in-setup';

export default function Home() {
  const [userState, setUserState] = useState<UserState>('loading');
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

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
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative pb-20 overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/15 blur-[140px] pointer-events-none" />

      {/* BEFORE LOGIN STATE */}
      {userState === 'not-logged-in' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 relative z-10">
          
          {/* Hero Section (ONLY Google Sign-In Button) */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Science-Backed Fitness SaaS
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Fit<span className="text-cyan-400">Pulse</span> — Your Personal Gym Blueprint
            </h1>

            <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Eliminate gym anxiety with a customized nutrition & workout blueprint that guides you to your goal physique without daily tracking stress.
            </p>

            {/* THE ONLY BUTTON BEFORE LOGIN IS SIGN IN WITH GOOGLE */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-slate-950 font-black text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:scale-105 cursor-pointer"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>

          {/* Feature Snippets Section (Static Preview Cards - Locked until login) */}
          <div className="space-y-8 border-t border-slate-800/80 pt-16">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                What You Get When You Sign In
              </h2>
              <p className="text-slate-400 text-sm">
                Unlock your full personalized blueprint suite instantly with Google Sign-In.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 Snippet */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219] border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    1. Workout Blueprint
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom 3, 4, 5, or 6-day splits auto-generated for your body fat %, experience level, and equipment preferences.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs text-cyan-400 font-bold gap-1">
                  <Lock className="w-3.5 h-3.5" /> Sign in to unlock blueprint &rarr;
                </div>
              </div>

              {/* Feature 2 Snippet */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219] border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Utensils className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    2. Nutrition & Macro Engine
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Katch-McArdle BMR/TDEE calculations, protein/carb/fat targets, timelines, and &quot;I Ate Off-Plan&quot; walk-fix calculator.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs text-emerald-400 font-bold gap-1">
                  <Lock className="w-3.5 h-3.5" /> Sign in to unlock macros &rarr;
                </div>
              </div>

              {/* Feature 3 Snippet */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219] border border-slate-800 hover:border-purple-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    3. Exercise Encyclopedia
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    80+ EMG-ranked exercises with anatomical vector muscle maps, 3-step form guides, and good burn vs bad pain checks.
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs text-purple-400 font-bold gap-1">
                  <Lock className="w-3.5 h-3.5" /> Sign in to unlock encyclopedia &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LOGGED IN - NEEDS SETUP WIZARD */}
      {userState === 'logged-in-no-setup' && (
        <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8 relative z-10">
          <div className="bg-[#0f1219] border border-cyan-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <User className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-white">
              Welcome, {user?.user_metadata?.full_name || 'Lifter'}!
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              Your Google account is connected. Now run the 3-step setup wizard to build your personal workout split and macro targets.
            </p>
            <Link
              href="/setup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-black text-base hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Start 3-Step Setup Wizard <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}

      {/* LOGGED IN - SETUP COMPLETE DASHBOARD */}
      {userState === 'logged-in-setup' && profile && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 relative z-10">
          <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Account Active
              </div>
              <h1 className="text-3xl font-black text-white">
                Welcome back, {user?.user_metadata?.full_name?.split(' ')[0] || 'Lifter'}!
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                {profile.setup_data?.daysPerWeek || 4} Days/Week • {profile.setup_data?.goalType?.replace('_', ' ').toUpperCase()} • {profile.setup_data?.sessionMinutes || 60}m Sessions
              </p>
            </div>

            <Link
              href="/setup"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-bold transition-all shrink-0 flex items-center gap-2"
            >
              <Settings className="w-4 h-4 text-cyan-400" /> Edit Goals & Stats
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/dashboard/workout"
              className="group bg-gradient-to-br from-[#0f1219] to-[#161b26] border border-cyan-500/30 hover:border-cyan-400 rounded-3xl p-8 space-y-4 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  My Workout Blueprint
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  View your active weekly split, exercises, sets/reps, and rest timers.
                </p>
              </div>
              <div className="flex items-center text-cyan-400 font-bold text-sm gap-1 pt-2">
                Open Workout Blueprint <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/dashboard/nutrition"
              className="group bg-gradient-to-br from-[#0f1219] to-[#161b26] border border-emerald-500/30 hover:border-emerald-400 rounded-3xl p-8 space-y-4 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  My Nutrition Guide
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  View daily calorie targets, macros, timeline checkpoints, and walk-fix calculator.
                </p>
              </div>
              <div className="flex items-center text-emerald-400 font-bold text-sm gap-1 pt-2">
                Open Nutrition Guide <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/encyclopedia"
              className="group bg-[#0f1219] border border-slate-800 hover:border-purple-500/50 rounded-3xl p-8 space-y-4 transition-all shadow-xl relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">
                  Exercise Encyclopedia
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  80+ EMG-ranked exercises with anatomical vector muscle selection & 3-step form guides.
                </p>
              </div>
              <div className="flex items-center text-purple-400 font-bold text-sm gap-1 pt-2">
                Open Encyclopedia <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/settings"
              className="group bg-[#0f1219] border border-slate-800 hover:border-slate-700 rounded-3xl p-8 space-y-4 transition-all shadow-xl relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  Account & Settings
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Manage unit system (metric/imperial), Google profile, or reset account data.
                </p>
              </div>
              <div className="flex items-center text-slate-300 font-bold text-sm gap-1 pt-2">
                Open Settings <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
