import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';

const EditorProfile = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Editor Profile</h1>
        <p>Manage your editor credentials and bio.</p>
      </div>
    </div>
  );
};
export default EditorProfile;