import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';

const MyPosts = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="My Posts" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard title="The Art of Minimalism" date="Oct 12, 2026" status="Published" />
            <PostCard title="Understanding Web3" date="Sep 28, 2026" status="Published" />
            <PostCard title="Why Typography Matters" date="Sep 15, 2026" status="Published" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPosts;