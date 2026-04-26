import React from 'react';

const RichEditor = () => {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <div className="bg-black/60 p-2 flex gap-2 border-b border-white/10">
        <button type="button" className="text-gray-400 hover:text-white px-2">B</button>
        <button type="button" className="text-gray-400 hover:text-white px-2">I</button>
      </div>
      <textarea className="w-full h-64 bg-black/40 p-4 text-white focus:outline-none resize-none" placeholder="Start writing..."></textarea>
    </div>
  );
};
export default RichEditor;