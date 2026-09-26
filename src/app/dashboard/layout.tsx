import { ReactNode } from 'react';
import Link from 'next/link';
import { Dumbbell, Utensils, LayoutDashboard } from 'lucide-react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // In a real app we might fetch user data here in a server component or just wrap with client navigation
  
  return (
    <div className="min-h-screen bg-[#07090e] flex flex-col">
      <nav className="border-b border-gray-800 bg-[#0f1219]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center">
              <span className="text-cyan-400 mr-2">Fit</span>Pulse
            </Link>
            
            <div className="flex space-x-6">
              <Link href="/dashboard/workout" className="text-gray-300 hover:text-white flex items-center transition-colors">
                <Dumbbell className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="hidden sm:inline">Workout</span>
              </Link>
              <Link href="/dashboard/nutrition" className="text-gray-300 hover:text-white flex items-center transition-colors">
                <Utensils className="w-4 h-4 mr-2 text-emerald-400" />
                <span className="hidden sm:inline">Nutrition</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}
