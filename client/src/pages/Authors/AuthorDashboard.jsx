import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import StatsCard from '../../components/author/StatsCard';

const AuthorDashboard = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Dashboard" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Total Views" value="24.5K" icon="views" />
            <StatsCard title="Published Posts" value="12" icon="posts" />
            <StatsCard title="Total Likes" value="1,204" icon="likes" />
          </div>
          
          <div className="bg-[#151A23] rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0B0E14] rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-medium">The Future of AI Design</p>
                  <p className="text-sm text-gray-500">Published 2 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-xs font-medium">Published</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0B0E14] rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-medium">10 Tips for Better Code</p>
                  <p className="text-sm text-gray-500">Draft saved 5 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorDashboard;