import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import { CalendarClock, Clock, MoreVertical, Edit3, Trash2 } from 'lucide-react';

const mockScheduled = [
  { id: 1, title: 'The Impact of 6G on Global Connectivity', author: 'Dr. Sarah Mitchell', date: '2024-04-01', time: '09:00 AM', category: 'Tech' },
  { id: 2, title: 'Urban Gardening: A Guide for Skyscrapers', author: 'Marcus Green', date: '2024-04-02', time: '10:30 AM', category: 'Lifestyle' },
  { id: 3, title: 'Decentralized Finance: The Next Evolution', author: 'Elena Vance', date: '2024-04-05', time: '02:00 PM', category: 'Finance' },
];

const ScheduledPosts = () => {
  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#E5B85C]/30">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="h-24 px-10 flex items-center border-b border-white/5 bg-[#121212] sticky top-0 z-10 shadow-sm">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E5B85C] to-[#F5D061] tracking-tight flex items-center gap-3">
              Scheduled Posts
              <CalendarClock className="w-6 h-6 text-[#E5B85C]" />
            </h1>
            <p className="text-gray-400 text-sm mt-1">Manage articles queued for future publication</p>
          </div>
        </div>
        
        <div className="p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockScheduled.map((post) => (
              <div key={post.id} className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#E5B85C]/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E5B85C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-[#E5B85C]/10 text-[#E5B85C] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#E5B85C]/20">
                    {post.category}
                  </span>
                  <button className="text-gray-600 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E5B85C] transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">by {post.author}</p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock size={14} className="text-[#E5B85C]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="text-xs text-gray-600 font-bold">•</div>
                    <div className="text-xs text-gray-400">{post.time}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
                      <Edit3 size={14} />
                    </button>
                    <button className="p-2 bg-red-500/5 hover:bg-red-500/10 rounded-lg text-gray-500 hover:text-red-400 transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduledPosts;