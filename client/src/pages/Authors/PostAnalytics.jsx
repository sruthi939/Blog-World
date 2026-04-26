import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';

const PostAnalytics = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Analytics" />
        <div className="p-8 overflow-y-auto">
          <div className="bg-[#151A23] rounded-2xl p-8 border border-white/5 h-96 flex items-center justify-center">
            <p className="text-gray-500">Detailed charts and graphs will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostAnalytics;