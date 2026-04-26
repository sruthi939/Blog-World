import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostForm from '../../components/author/PostForm';

const CreatePost = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Create New Post" />
        <div className="p-8 overflow-y-auto">
          <PostForm mode="create" />
        </div>
      </div>
    </div>
  );
};
export default CreatePost;