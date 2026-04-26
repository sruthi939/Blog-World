import React from 'react';
import EditorSidebar from '../../components/editor/EditorSidebar';

const Categories = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Manage Categories</h1>
        <p>Create, edit, and organize site categories.</p>
      </div>
    </div>
  );
};
export default Categories;