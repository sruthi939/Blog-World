import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';

const EditorDashboard = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 flex flex-col">
        <EditorNavbar />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Editor Dashboard</h1>
          <p>Overview of pending posts, site stats, and editor tasks.</p>
        </div>
      </div>
    </div>
  );
};
export default EditorDashboard;