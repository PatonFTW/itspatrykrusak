'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Home,
  Dumbbell,
  Apple,
  BookOpen,
  Settings,
  Sparkles,
  Menu,
  X,
  Play,
} from 'lucide-react';

interface NavigationProps {
  setupComplete?: boolean;
}

export function Navigation({ setupComplete = true }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isHome = pathname === '/';

  const navLinks = [
    { href: '/', label: 'Main Menu', icon: Home },
    { href: '/dashboard/workout', label: 'Workout Blueprint', icon: Dumbbell },
    { href: '/dashboard/nutrition', label: 'Nutrition Guide', icon: Apple },
    { href: '/encyclopedia', label: 'Encyclopedia', icon: BookOpen },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Top Fixed Header with Back & Main Menu Buttons */}
      <header className="sticky top-0 z-50 w-full bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Left Action Cluster: Back Button & Logo */}
          <div className="flex items-center gap-3">
            {!isHome && (
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-slate-300 hover:text-cyan-400 text-xs font-semibold transition-all shadow-sm group"
                title="Go back to previous page"
              >
                <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}

            <Link
              href="/"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Dumbbell className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-black text-lg sm:text-xl tracking-tight text-white">
                Fit<span className="text-cyan-400">Pulse</span>
              </span>
            </Link>
          </div>

          {/* Center/Right Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname?.startsWith(link.href + '/');

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <link.icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : ''}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster: Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0f1219] px-4 py-4 space-y-2 shadow-2xl animate-fadeIn">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname?.startsWith(link.href + '/');

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f1219]/95 backdrop-blur-xl border-t border-slate-800/90 pb-safe">
        <div className="flex items-center justify-around h-16 px-1">
          {!isHome && (
            <button
              onClick={() => router.back()}
              className="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-[10px] font-semibold mt-0.5">Back</span>
            </button>
          )}

          {navLinks.slice(0, 4).map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium mt-0.5">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
