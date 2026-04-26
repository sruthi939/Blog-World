import React from 'react';
import { Link } from 'react-router-dom';

const EditorSidebar = () => {
    return (
        <div className="w-64 bg-[#0a0a0a] border-r border-white/10 p-6 flex flex-col">
            <div className="text-[#E5B85C] font-bold text-xl mb-10">Editor Panel</div>
            <nav className="flex flex-col gap-4">
                <Link to="/editor/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                <Link to="/editor/pending" className="text-gray-300 hover:text-white">Pending Posts</Link>
                <Link to="/editor/review" className="text-gray-300 hover:text-white">Review Queue</Link>
                <Link to="/editor/published" className="text-gray-300 hover:text-white">Published Posts</Link>
                <Link to="/editor/scheduled" className="text-gray-300 hover:text-white">Scheduled Posts</Link>
                <Link to="/editor/categories" className="text-gray-300 hover:text-white">Categories</Link>
                <Link to="/editor/comments" className="text-gray-300 hover:text-white">Comments</Link>
                <Link to="/editor/profile" className="text-gray-300 hover:text-white">Profile</Link>
            </nav>
        </div>
    );
};
export default EditorSidebar;