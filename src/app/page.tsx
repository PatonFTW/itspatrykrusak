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
  ChevronDown,
  Sparkles,
  Lock,
  User,
  Activity,
  Flame,
  Target,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Compass,
  BarChart3,
  ArrowUpRight,
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
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative pb-16 overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[40%] rounded-full bg-cyan-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[40%] rounded-full bg-emerald-900/15 blur-[120px] pointer-events-none" />

      {/* BEFORE LOGIN STATE */}
      {userState === 'not-logged-in' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-6 sm:pt-10 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-6 flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[78vh]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Science-Backed Fitness Blueprint
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Fit<span className="text-cyan-400">Pulse</span> — Your Personal Gym Blueprint
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Eliminate gym anxiety with a custom workout split and macro plan tailored specifically to your body & goals.
            </p>

            {/* Google Sign-In Action */}
            <div className="pt-2 w-full max-w-xs space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="w-full px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-black text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Continue with Google</span>
              </button>
              <p className="text-[11px] text-slate-500 font-medium">
                Instant Access • 100% Free • No Credit Card
              </p>
            </div>

            {/* Quick Stat Pill Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 text-center">
                <div className="text-lg sm:text-xl font-black text-cyan-400">80+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">EMG Exercises</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 text-center">
                <div className="text-lg sm:text-xl font-black text-emerald-400">100%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Personalized</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 text-center">
                <div className="text-lg sm:text-xl font-black text-amber-400">0</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Tracking Stress</div>
              </div>
            </div>

            {/* Seamless Scroll Down Indicator */}
            <div className="pt-8 sm:pt-12">
              <a
                href="#features"
                className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                  Scroll to explore features
                </span>
                <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
              </a>
            </div>
          </div>

          {/* Features Showcase Section */}
          <div id="features" className="space-y-10 scroll-mt-20 pt-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Comprehensive Fitness Suite
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Built for Serious Progress
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Everything you need to master your training and nutrition without confusion.
              </p>
            </div>

            {/* Feature Cards Grid (Compact 2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Feature 1: Workout Blueprint */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219]/90 border border-slate-800/90 hover:border-cyan-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] group relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Workout Split
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      1. Scientific Workout Blueprint
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Custom 3, 4, 5, or 6-day splits generated specifically for your body fat percentage, training experience, and gym equipment.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Progressive overload guidance & rest timers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> EMG-ranked exercises for maximal muscle activation
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-cyan-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Sign in to generate split
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Feature 2: Nutrition & Macro Engine */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219]/90 border border-slate-800/90 hover:border-emerald-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] group relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Nutrition Guide
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      2. Precision Macro Engine
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Katch-McArdle BMR/TDEE calculations, exact protein/carb/fat macro split targets, and an intuitive &quot;I Ate Off-Plan&quot; walk-fix tool.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Target date goal timelines & weight tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Zero daily logging stress or food weighing anxiety
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-emerald-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Sign in to calculate macros
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Feature 3: Exercise Encyclopedia */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219]/90 border border-slate-800/90 hover:border-purple-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] group relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-purple-500/10 border border-purple-500/30 text-purple-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Interactive Encyclopedia
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      3. Muscle Map & Form Encyclopedia
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Interactive exercise library featuring anatomical vector muscle diagrams, 3-step range sliders, and good burn vs bad pain checks.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Anatomical front/back muscle selection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Interactive posture & movement step breakdown
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-purple-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Sign in to explore encyclopedia
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Feature 4: Gym Anxiety Elimination */}
              <div
                onClick={handleGoogleSignIn}
                className="bg-[#0f1219]/90 border border-slate-800/90 hover:border-amber-500/50 rounded-3xl p-6 space-y-4 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.12)] group relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Confidence System
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      4. Gym Anxiety Elimination
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Never feel lost or intimidated in the weight room. Clear machine setup cues, pin placement tips, and spotter guidelines for every movement.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Equipment setup instructions for beginners
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Injury prevention & joint protection cues
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-amber-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Sign in to view setup guides
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Bottom Call To Action Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-[#0f1219] to-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-2xl relative overflow-hidden">
              <div className="max-w-xl mx-auto space-y-2">
                <h3 className="text-2xl font-black text-white">
                  Ready to Transform Your Fitness Routine?
                </h3>
                <p className="text-xs text-slate-400">
                  Connect your Google account in 5 seconds to unlock your customized blueprint.
                </p>
              </div>
              <button
                onClick={handleGoogleSignIn}
                className="px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-black text-base hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:scale-[1.02] cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGGED IN - NEEDS SETUP WIZARD */}
      {userState === 'logged-in-no-setup' && (
        <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8 relative z-10">
          <div className="bg-[#0f1219] border border-cyan-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <User className="w-7 h-7" />
            </div>
            <h1 className="text-3xl font-black text-white">
              Welcome, {user?.user_metadata?.full_name || 'Lifter'}!
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              Your Google account is connected. Complete the quick 3-step setup wizard to build your personal workout split and macro targets.
            </p>
            <Link
              href="/setup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-cyan-500 text-slate-950 font-black text-base hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Start 3-Step Setup Wizard <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}

      {/* LOGGED IN - SETUP COMPLETE DASHBOARD */}
      {userState === 'logged-in-setup' && profile && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 relative z-10">
          <div className="bg-[#0f1219] border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Account Active
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Welcome back, {user?.user_metadata?.full_name?.split(' ')[0] || 'Lifter'}!
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                {profile.setup_data?.daysPerWeek || 4} Days/Week • {profile.setup_data?.goalType?.replace('_', ' ').toUpperCase()} • {profile.setup_data?.sessionMinutes || 60}m Sessions
              </p>
            </div>

            <Link
              href="/setup"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-bold transition-all shrink-0 flex items-center gap-2"
            >
              <Settings className="w-4 h-4 text-cyan-400" /> Edit Goals & Stats
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              href="/dashboard/workout"
              className="group bg-gradient-to-br from-[#0f1219] to-[#161b26] border border-cyan-500/30 hover:border-cyan-400 rounded-3xl p-6 space-y-3 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    My Workout Blueprint
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    View active weekly split, exercises, sets/reps, and rest timers.
                  </p>
                </div>
              </div>
              <div className="flex items-center text-cyan-400 font-bold text-xs gap-1 pt-2">
                Open Workout Blueprint <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/dashboard/nutrition"
              className="group bg-gradient-to-br from-[#0f1219] to-[#161b26] border border-emerald-500/30 hover:border-emerald-400 rounded-3xl p-6 space-y-3 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    My Nutrition Guide
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    View daily calorie targets, macros, timeline checkpoints, and walk-fix tool.
                  </p>
                </div>
              </div>
              <div className="flex items-center text-emerald-400 font-bold text-xs gap-1 pt-2">
                Open Nutrition Guide <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/encyclopedia"
              className="group bg-[#0f1219] border border-slate-800 hover:border-purple-500/50 rounded-3xl p-6 space-y-3 transition-all shadow-xl relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                    Exercise Encyclopedia
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    80+ EMG-ranked exercises with vector muscle maps & form sliders.
                  </p>
                </div>
              </div>
              <div className="flex items-center text-purple-400 font-bold text-xs gap-1 pt-2">
                Open Encyclopedia <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/settings"
              className="group bg-[#0f1219] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 space-y-3 transition-all shadow-xl relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    Account & Settings
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    Manage unit preferences, Google profile, or reset account data.
                  </p>
                </div>
              </div>
              <div className="flex items-center text-slate-300 font-bold text-xs gap-1 pt-2">
                Open Settings <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
