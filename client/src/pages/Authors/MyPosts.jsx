import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus } from 'lucide-react';

const MyPosts = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/author/posts', {
          headers: { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` }
        });
        const data = await res.json();
        if (data.success) {
          // Filter for published posts on this page
          setPosts(data.posts.filter(p => p.isPublished));
        }
      } catch (err) {
        console.error('Failed to fetch posts', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [token]);

  const handleEdit = (id) => navigate(`/author/edit-post/${id}`);
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      // In a real app, call DELETE API here
      setPosts(posts.filter(p => p._id !== id));
    }
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-emerald-500/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        
        <main className="flex-1 p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-[#0a0a0a] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight">Published Articles</h1>
                <p className="text-gray-500 mt-1 font-medium">Manage your public contribution and reach.</p>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all text-white"
                  />
                </div>
                <button className="bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-colors text-gray-400">
                  <Filter size={20} />
                </button>
              </div>
            </div>

            {/* Posts Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-50">
                {[1, 2, 3].map(i => <div key={i} className="h-96 bg-white/5 rounded-[2rem] animate-pulse"></div>)}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <PostCard 
                      key={post._id} 
                      post={post} 
                      onEdit={handleEdit} 
                      onDelete={handleDelete} 
                    />
                  ))}

                  {/* Add New Quick Card */}
                  <div 
                    onClick={() => navigate('/author/create-post')}
                    className="border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center p-10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Plus className="text-gray-500 group-hover:text-emerald-500" size={32} />
                    </div>
                    <p className="text-gray-500 font-bold group-hover:text-white">Create New Article</p>
                  </div>
                </div>

                {posts.length === 0 && (
                  <div className="text-center py-32">
                    <h2 className="text-2xl font-black text-gray-700">No published articles yet.</h2>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPosts;