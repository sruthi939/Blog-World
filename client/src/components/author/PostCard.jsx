import React from 'react';
import { Calendar, MessageCircle, BarChart2, Edit3, Trash2, Eye } from 'lucide-react';

const PostCard = ({ post, onEdit, onDelete }) => {
  if (!post) return null;

  return (
    <div className="bg-[#121212] border border-white/10 rounded-[2rem] p-6 hover:border-emerald-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-emerald-500/10 transition-all"></div>
      
      {/* Image / Placeholder */}
      <div className="w-full h-48 bg-white/5 rounded-2xl mb-6 border border-white/5 overflow-hidden relative">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 font-black text-4xl select-none">
            {post.category?.charAt(0)}
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${post.isPublished ? 'bg-emerald-500 text-black' : 'bg-amber-500 text-black'} shadow-lg`}>
            {post.isPublished ? 'Published' : 'Draft'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">{post.category}</span>
          <span className="w-1 h-1 rounded-full bg-white/10"></span>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
            <Calendar size={10} />
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
      </div>

      {/* Stats Mini Row */}
      <div className="flex items-center gap-4 mb-6 text-gray-500">
        <div className="flex items-center gap-1.5">
          <Eye size={14} />
          <span className="text-xs font-bold">1.2k</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MessageCircle size={14} />
          <span className="text-xs font-bold">12</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BarChart2 size={14} />
          <span className="text-xs font-bold">Analytic</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-6 border-t border-white/5 mt-auto">
        <button 
          onClick={() => onEdit(post._id)}
          className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/10"
        >
          <Edit3 size={14} />
          Edit
        </button>
        <button 
          onClick={() => onDelete(post._id)}
          className="p-2.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all border border-red-500/20"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;