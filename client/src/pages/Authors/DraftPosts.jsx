import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';

const DraftPosts = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Drafts" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard title="10 Tips for React Developers" date="Last edited 2 hours ago" status="Draft" />
            <PostCard title="The Future of AI in Design" date="Last edited 1 day ago" status="Draft" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DraftPosts;