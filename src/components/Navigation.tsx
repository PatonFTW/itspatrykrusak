'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell, Apple, BookOpen, Settings, Play } from 'lucide-react';

interface NavigationProps {
  setupComplete: boolean;
}

export function Navigation({ setupComplete }: NavigationProps) {
  const pathname = usePathname();

  const getDesktopLinks = () => {
    const links = [];
    if (!setupComplete) {
      links.push({ href: '/setup', label: 'Start Your Journey', icon: Play });
    } else {
      links.push({ href: '/workout', label: 'Workout Blueprint', icon: Dumbbell });
      links.push({ href: '/nutrition', label: 'Nutrition Guide', icon: Apple });
    }
    links.push({ href: '/encyclopedia', label: 'Encyclopedia', icon: BookOpen });
    links.push({ href: '/settings', label: 'Settings', icon: Settings });
    return links;
  };

  const desktopLinks = getDesktopLinks();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 w-full h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <Dumbbell className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">FitPulse</span>
          </Link>

          <div className="flex items-center gap-6">
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  pathname === link.href || pathname?.startsWith(link.href + '/')
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Bottom bar) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#0f1219]/90 backdrop-blur-lg border-t border-slate-800/80 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {desktopLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all ${
                  isActive ? 'text-cyan-400 scale-110' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <link.icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`} />
                <span className="text-[10px] font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
