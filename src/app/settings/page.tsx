'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { User, Settings2, Trash2, LogOut, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) setUser(session.user);
    }
    loadUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleClearData = async () => {
    if (!user) return;
    await supabase.from('profiles').update({ setup_data: null, setup_complete: false }).eq('id', user.id);
    setShowConfirm(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

        <div className="bg-[#0f1219] p-6 rounded-3xl border border-gray-800 flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-cyan-500/20">
            {user?.user_metadata?.full_name?.charAt(0) || <User />}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user?.user_metadata?.full_name || 'Lifter'}</h2>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/setup" className="w-full bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500 hover:bg-[#161b26] transition-all flex items-center justify-between group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-900/20 rounded-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Settings2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Change My Goals / Redo Setup</h3>
                <p className="text-sm text-gray-400">Update your stats and generate a new plan</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </Link>

          <button onClick={handleSignOut} className="w-full bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-[#161b26] transition-all flex items-center justify-between group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-xl text-gray-400 group-hover:text-white transition-colors">
                <LogOut className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-left">Sign Out</h3>
            </div>
          </button>

          <button onClick={() => setShowConfirm(true)} className="w-full bg-[#0f1219] p-6 rounded-2xl border border-gray-800 hover:border-rose-500/50 hover:bg-[#161b26] transition-all flex items-center justify-between group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-rose-900/20 rounded-xl text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-rose-500">Clear All Data & Restart</h3>
                <p className="text-sm text-gray-400">Permanently delete your profile data</p>
              </div>
            </div>
          </button>
        </div>

        {showConfirm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#0f1219] p-8 rounded-3xl border border-gray-800 max-w-md w-full animate-in zoom-in-95 duration-200">
              <h3 className="text-2xl font-bold mb-4 text-white">Are you sure?</h3>
              <p className="text-gray-400 mb-8">This will delete your current workout blueprint and nutrition guide. You will need to complete the setup again.</p>
              <div className="flex space-x-4">
                <button onClick={() => setShowConfirm(false)} className="flex-1 py-3 rounded-xl font-bold bg-gray-800 hover:bg-gray-700 transition-colors text-white">Cancel</button>
                <button onClick={handleClearData} className="flex-1 py-3 rounded-xl font-bold bg-rose-600 hover:bg-rose-500 transition-colors text-white shadow-lg shadow-rose-500/20">Clear Data</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
