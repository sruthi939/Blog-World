import React from 'react';

const PostForm = ({ mode }) => {
  return (
    <form className="max-w-4xl mx-auto space-y-6 bg-[#151A23] p-8 rounded-3xl border border-white/5 shadow-2xl">
      <div>
        <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Article Title</label>
        <input type="text" className="w-full bg-[#0B0E14] border border-white/5 rounded-xl p-4 text-white text-xl focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 outline-none transition-all placeholder-gray-600" placeholder="Enter a captivating title..." />
      </div>
      
      <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center bg-[#0B0E14] hover:border-[#00E5FF]/30 transition-colors cursor-pointer group">
        <div className="w-16 h-16 bg-[#151A23] rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-gray-400 group-hover:text-[#00E5FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <p className="text-gray-300 font-medium">Click to upload cover image</p>
        <p className="text-gray-500 text-sm mt-1">16:9 recommended, max 5MB</p>
      </div>

      <div>
        <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Content</label>
        <div className="border border-white/5 rounded-2xl overflow-hidden focus-within:border-[#00E5FF]/50 transition-colors">
          <div className="bg-[#0B0E14] p-3 flex gap-2 border-b border-white/5">
            {['B', 'I', 'U', 'H1', 'H2', 'Link'].map(btn => (
              <button key={btn} type="button" className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">{btn}</button>
            ))}
          </div>
          <textarea className="w-full h-[400px] bg-[#0B0E14] p-6 text-gray-300 leading-relaxed focus:outline-none resize-y placeholder-gray-600" placeholder="Start writing your story here..."></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
        <button type="button" className="text-gray-400 hover:text-white font-medium transition-colors">Save as Draft</button>
        <button type="submit" className="bg-[#00E5FF] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#00c9e0] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          {mode === 'create' ? 'Publish Post' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};
export default PostForm;