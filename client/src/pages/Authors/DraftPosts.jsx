import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FileEdit } from 'lucide-react';

const DraftPosts = () => {
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
          // Filter for draft posts on this page
          setPosts(data.posts.filter(p => !p.isPublished));
        }
      } catch (err) {
        console.error('Failed to fetch drafts', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [token]);

  const handleEdit = (id) => navigate(`/author/edit-post/${id}`);
  const handleDelete = (id) => setPosts(posts.filter(p => p._id !== id));

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-emerald-500/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        
        <main className="flex-1 p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-[#0a0a0a] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-black text-white tracking-tight">Saved Drafts</h1>
              <p className="text-gray-500 mt-1 font-medium">Continue working on your unpublished masterpieces.</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-50">
                {[1, 2].map(i => <div key={i} className="h-96 bg-white/5 rounded-[2rem] animate-pulse"></div>)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard 
                    key={post._id} 
                    post={post} 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} 
                  />
                ))}

                {posts.length === 0 && (
                  <div className="col-span-full text-center py-40 bg-white/5 border border-dashed border-white/10 rounded-[3rem]">
                    <FileEdit className="w-16 h-16 text-gray-800 mx-auto mb-6" />
                    <h2 className="text-2xl font-black text-gray-700">No drafts found.</h2>
                    <p className="text-gray-600 mt-2">All your work is either published or you haven't started yet!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DraftPosts;