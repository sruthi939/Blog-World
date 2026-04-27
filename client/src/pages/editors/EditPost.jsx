import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';

const EditPost = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Edit Post</h1>
        <p>Editor interface to modify author posts.</p>
      </div>
    </div>
  );
};
export default EditPost;