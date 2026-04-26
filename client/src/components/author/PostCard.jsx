import React from 'react';

const PostCard = ({ title, date, status }) => {
  const isPublished = status === 'Published';
  return (
    <div className="bg-[#151A23] border border-white/5 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
      <div className="w-full h-40 bg-[#0B0E14] rounded-xl mb-4 border border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-[#00E5FF] transition-colors">{title}</h3>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
        <p className="text-gray-500 text-xs">{date}</p>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${isPublished ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-yellow-500/10 text-yellow-500'}`}>
          {status}
        </span>
      </div>
    </div>
  );
};
export default PostCard;