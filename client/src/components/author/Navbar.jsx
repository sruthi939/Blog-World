import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div className="h-20 border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-[#00E5FF] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-white/5">
          <span className="text-sm text-gray-300 font-medium">Author</span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00E5FF] to-blue-500 shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;