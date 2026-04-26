import React from 'react';

const EditorNavbar = () => {
    return (
        <div className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-8">
            <div className="text-[#E5B85C] font-bold">Editor Portal</div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-300">Editor Name</span>
                <div className="w-8 h-8 rounded-full bg-[#E5B85C]"></div>
            </div>
        </div>
    );
};
export default EditorNavbar;