import React from 'react';
import { FiClock, FiFileText, FiTag, FiEye, FiCheck, FiX } from 'react-icons/fi';

const ReviewCard = ({ post, onAction }) => {
  if (!post) return null;

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#E5B85C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#E5B85C]/10 text-[#E5B85C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center text-xs text-gray-500 gap-1">
              <FiClock className="w-3 h-3" />
              <span>Submitted: {formatDate(post.submittedAt)}</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E5B85C] transition-colors line-clamp-1">{post.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
          
          {/* Metadata & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg">
                <FiFileText className="w-3.5 h-3.5" />
                <span>{post.wordCount} words</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg">
                <FiEye className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <FiTag className="text-gray-500 w-3.5 h-3.5" />
              {post.tags?.map((tag, idx) => (
                <span key={idx} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md">{tag}</span>
              ))}
              {!post.tags && <span className="text-xs text-gray-600">No tags</span>}
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="lg:w-64 flex flex-col justify-between shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
          <div className="flex items-center gap-3 mb-6 lg:mb-0">
            <img src={post.author?.avatar || 'https://i.pravatar.cc/150?u=anonymous'} alt={post.author?.name || 'Anonymous'} className="w-10 h-10 rounded-full border border-white/20" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Author</p>
              <p className="text-sm text-white font-medium">{post.author?.name || 'Guest User'}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => onAction('read')}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/10"
            >
              <FiEye className="w-4 h-4" />
              Read Full Post
            </button>
            <div className="flex gap-2">
              <button 
                onClick={() => onAction('approve')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border border-green-500/20"
              >
                <FiCheck className="w-4 h-4" />
                Approve
              </button>
              <button 
                onClick={() => onAction('reject')}
                className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border border-red-500/20"
              >
                <FiX className="w-4 h-4" />
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;