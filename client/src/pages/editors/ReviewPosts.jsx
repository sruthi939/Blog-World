import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import ReviewCard from '../../components/editors/ReviewCard';
import { FiFilter, FiSearch } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const mockPosts = [
  { id: 1, title: 'The Future of Neural Networks', category: 'AI', submittedAt: new Date().toISOString(), wordCount: 1200, readTime: '8 min', excerpt: 'Exploring the shift from large language models to agentic AI systems...', author: { name: 'Dr. James Wilson', avatar: 'https://i.pravatar.cc/100?u=james' }, tags: ['AI', 'Neural Networks', 'Future'] },
  { id: 2, title: 'Rust vs Go: 2026 Comparison', category: 'Dev', submittedAt: new Date().toISOString(), wordCount: 950, readTime: '6 min', excerpt: 'A deep dive into performance, safety, and ecosystem growth...', author: { name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/100?u=sarah' }, tags: ['Rust', 'Go', 'Performance'] },
];

const ReviewPosts = () => {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/editor/pending', {
          headers: { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` }
        });
        const data = await res.json();
        if (data.success) {
          setPosts(data.posts.length > 0 ? data.posts : mockPosts);
        }
      } catch (err) {
        setPosts(mockPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [token]);

  const navigate = useNavigate();

  const handleAction = async (id, action) => {
    if (action === 'read') {
      navigate(`/editor/edit-post/${id}`);
      return;
    }

    try {
      const endpoint = action === 'approve' ? 'approve' : 'reject';
      const res = await fetch(`http://localhost:5000/api/editor/${endpoint}/${id}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` }
      });
      const data = await res.json();
      if (data.success) {
        setPosts(posts.filter(p => (p._id || p.id) !== id));
      }
    } catch (err) {
      console.error('Action failed', err);
    }
  };

  return (
    <div className="flex bg-[#121212] min-h-screen text-white font-sans selection:bg-[#E5B85C] selection:text-black">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar />
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#E5B85C] mb-2 tracking-tight">Review Posts</h1>
              <p className="text-gray-400">Evaluate submitted articles for publication.</p>
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search submissions..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#E5B85C]/50 focus:ring-1 focus:ring-[#E5B85C]/50 transition-all text-white placeholder:text-gray-600"
                />
              </div>
              <button className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <FiFilter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <ReviewCard key={post._id || post.id} post={post} onAction={(action) => handleAction(post._id || post.id, action)} />
            ))}
            
            {posts.length === 0 && (
              <div className="text-center py-24 bg-white/5 border border-dashed border-white/10 rounded-3xl">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inbox Zero!</h3>
                <p className="text-gray-400">You've reviewed all pending submissions.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default ReviewPosts;