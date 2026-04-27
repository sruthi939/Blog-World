import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, 
  FileText, 
  Heart, 
  TrendingUp, 
  ArrowUpRight, 
  Clock,
  Sparkles
} from 'lucide-react';

const AuthorDashboard = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authHeader = { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` };
        
        // Fetch stats
        const statsRes = await fetch('http://localhost:5000/api/author/analytics', { headers: authHeader });
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.stats);

        // Fetch recent posts
        const postsRes = await fetch('http://localhost:5000/api/author/posts', { headers: authHeader });
        const postsData = await postsRes.json();
        if (postsData.success) setRecentPosts(postsData.posts.slice(0, 3));

      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-emerald-500/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        
        <main className="flex-1 p-10 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-[#0a0a0a] to-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            {/* Hero Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
                  Studio Overview
                  <Sparkles className="w-6 h-6 text-emerald-500" />
                </h1>
                <p className="text-gray-500 mt-1 font-medium">Your creative performance at a glance.</p>
              </div>
              <button 
                onClick={() => navigate('/author/create-post')}
                className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-2xl font-bold transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] active:scale-95 flex items-center gap-2"
              >
                <FileText size={18} />
                New Article
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Views', value: stats?.totalViews || '0', icon: Eye, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { label: 'Published', value: stats?.published || '0', icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                { label: 'Drafts', value: stats?.drafts || '0', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10' },
                { label: 'Total Likes', value: stats?.totalLikes || '0', icon: Heart, color: 'text-rose-400', bg: 'bg-rose-400/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                      <stat.icon size={20} />
                    </div>
                    <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg flex items-center gap-1">
                      <TrendingUp size={12} />
                      +12%
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</h3>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Content & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Articles */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Recent Articles</h3>
                  <button onClick={() => navigate('/author/my-posts')} className="text-emerald-500 text-sm font-bold hover:underline flex items-center gap-1">
                    View All <ArrowUpRight size={14} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post._id} className="bg-[#121212] border border-white/5 rounded-3xl p-5 hover:border-emerald-500/30 transition-all group flex gap-5">
                      <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                        {post.image ? <img src={post.image} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-700 font-black">BW</div>}
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] uppercase font-black text-emerald-500 tracking-widest">{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-white/10"></span>
                          <span className="text-[10px] text-gray-500 font-bold">{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">{post.title}</h4>
                        <div className="flex items-center gap-4 mt-3">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${post.isPublished ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                            {post.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {recentPosts.length === 0 && !loading && (
                    <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-3xl">
                      <FileText className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">No articles yet. Start writing!</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions / Tips */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Creator Tips</h3>
                <div className="bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/20 rounded-3xl p-6">
                  <Sparkles className="text-emerald-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Optimize for SEO</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Make sure to include relevant keywords in your first paragraph and use descriptive alt text for images to improve your search ranking.
                  </p>
                  <button className="mt-4 text-emerald-400 text-xs font-bold uppercase tracking-widest hover:underline">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthorDashboard;