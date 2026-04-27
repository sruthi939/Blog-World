import React, { useState, useEffect, useContext } from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import { FiCheck, FiX, FiMessageSquare, FiClock } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const mockComments = [
  { id: 1, author: 'Alex Rivera', avatar: 'https://i.pravatar.cc/100?u=alex', date: '2 hours ago', content: 'The section on generative transformers was particularly well-explained. Do you think we\'ll see more edge-AI integration this year?', postTitle: 'The Silent Revolution: AI in 2026' },
  { id: 2, author: 'Jordan Smith', avatar: 'https://i.pravatar.cc/100?u=jordan', date: '5 hours ago', content: 'I disagree with the point about quantum supremacy in finance. We are still years away from practical application.', postTitle: 'Quantum Computing in Modern Finance' },
  { id: 3, author: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah', date: '1 day ago', content: 'Could you provide more sources for the sustainable architecture case studies? I\'m working on a similar project.', postTitle: 'Sustainable Architecture: Building for Tomorrow' },
];

const CommentsModeration = () => {
  const { token } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/editor/comments', {
          headers: { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` }
        });
        const data = await res.json();
        if (data.success) {
          setComments(data.comments.length > 0 ? data.comments : mockComments);
        }
      } catch (err) {
        setComments(mockComments);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [token]);

  const handleAction = (id, action) => {
    setComments(comments.filter(c => (c._id || c.id) !== id));
  };

  return (
    <div className="flex bg-[#121212] min-h-screen text-white font-sans selection:bg-[#E5B85C] selection:text-black">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar />
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h1 className="text-4xl font-bold text-[#E5B85C] mb-2 tracking-tight">Comments Moderation</h1>
                <p className="text-gray-400">Review, approve, or reject user comments on articles.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 flex items-center gap-2">
                <span className="text-[#E5B85C] font-bold">{comments.length}</span>
                <span className="text-gray-400 text-sm">Pending Reviews</span>
              </div>
            </div>

            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment._id || comment.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar & Author Info */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
                      <img src={comment.avatar || 'https://i.pravatar.cc/100?u=anon'} alt={comment.author || 'Anonymous'} className="w-12 h-12 rounded-full border-2 border-white/10" />
                      <div>
                        <h4 className="font-semibold text-white">{comment.author || 'Guest'}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <FiClock className="w-3 h-3" />
                          <span>{comment.date || 'Just now'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Comment Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-xs text-[#E5B85C] font-medium mb-2 uppercase tracking-wider flex items-center gap-2">
                          <FiMessageSquare className="w-3 h-3" />
                          On: {comment.postTitle || 'Untitled Blog'}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed italic">"{comment.content}"</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 shrink-0">
                      <button
                        onClick={() => handleAction(comment._id || comment.id, 'approve')}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 px-4 py-2 rounded-xl transition-all"
                      >
                        <FiCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">Approve</span>
                      </button>
                      <button
                        onClick={() => handleAction(comment._id || comment.id, 'reject')}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-2 rounded-xl transition-all"
                      >
                        <FiX className="w-4 h-4" />
                        <span className="text-sm font-medium">Reject</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {comments.length === 0 && (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                  <FiMessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-400">All caught up!</h3>
                  <p className="text-gray-500 mt-2">No pending comments to moderate.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsModeration;