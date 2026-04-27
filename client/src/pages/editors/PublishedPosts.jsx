import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import PostTable from '../../components/editors/PostTable';

const PublishedPosts = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Published Posts</h1>
        <PostTable />
      </div>
    </div>
  );
};
export default PublishedPosts;