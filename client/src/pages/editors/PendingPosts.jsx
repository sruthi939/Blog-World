import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import PostTable from '../../components/editors/PostTable';
import { Sparkles } from 'lucide-react';

const PendingPosts = () => {
  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#E5B85C]/30">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="h-24 px-10 flex items-center border-b border-white/5 bg-[#121212] sticky top-0 z-10 shadow-sm">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E5B85C] to-[#F5D061] tracking-tight flex items-center gap-3">
              Pending Posts
              <Sparkles className="w-6 h-6 text-[#E5B85C]" />
            </h1>
            <p className="text-gray-400 text-sm mt-1">Review and approve articles submitted by authors</p>
          </div>
        </div>
        
        <div className="p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] h-full">
          <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-8">
            <PostTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PendingPosts;