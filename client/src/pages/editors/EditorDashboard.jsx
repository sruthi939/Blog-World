import React, { useState, useEffect, useContext } from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import { AuthContext } from '../../context/AuthContext';
import { Sparkles, FileClock, CheckCircle, AlertCircle } from 'lucide-react';

const EditorDashboard = () => {
  const { token } = useContext(AuthContext);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/editor/pending', {
          headers: {
            'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setPendingCount(data.posts.length);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, [token]);

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#E5B85C]/30">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar />
        <div className="h-24 px-10 flex items-center border-b border-white/5 bg-[#121212] sticky top-0 z-10 shadow-sm">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E5B85C] to-[#F5D061] tracking-tight flex items-center gap-3">
              Dashboard Overview
              <Sparkles className="w-6 h-6 text-[#E5B85C]" />
            </h1>
            <p className="text-gray-400 text-sm mt-1">Real-time statistics and moderation tasks</p>
          </div>
        </div>

        <div className="p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pending Stat Card */}
            <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#E5B85C]/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B85C]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#E5B85C]/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium tracking-wide">Pending Review</p>
                <div className="p-2.5 bg-[#E5B85C]/10 rounded-xl text-[#E5B85C] shadow-inner border border-[#E5B85C]/20">
                  <FileClock className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold text-white tracking-tight">{pendingCount}</h3>
              <p className="text-sm text-gray-500 mt-4 font-medium flex items-center gap-2">
                <span className="text-emerald-400">Action Required</span>
              </p>
            </div>

            {/* Placeholder Published Card */}
            <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium tracking-wide">Published Today</p>
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 shadow-inner border border-emerald-500/20">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold text-white tracking-tight">--</h3>
              <p className="text-sm text-gray-500 mt-4 font-medium">Auto-updated</p>
            </div>

            {/* Placeholder Flagged Card */}
            <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-rose-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-rose-500/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium tracking-wide">Flagged Issues</p>
                <div className="p-2.5 bg-rose-500/10 rounded-xl text-rose-400 shadow-inner border border-rose-500/20">
                  <AlertCircle className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-5xl font-extrabold text-white tracking-tight">--</h3>
              <p className="text-sm text-gray-500 mt-4 font-medium">Needs Attention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditorDashboard;