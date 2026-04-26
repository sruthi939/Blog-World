const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'client', 'src');

// Colors used: 
// 1. Base: #0B0E14
// 2. Card/Sidebar: #151A23
// 3. Accent: #00E5FF (Cyan)

const authorPages = {
  'AuthorDashboard.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import StatsCard from '../../components/author/StatsCard';

const AuthorDashboard = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Dashboard" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Total Views" value="24.5K" icon="views" />
            <StatsCard title="Published Posts" value="12" icon="posts" />
            <StatsCard title="Total Likes" value="1,204" icon="likes" />
          </div>
          
          <div className="bg-[#151A23] rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0B0E14] rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-medium">The Future of AI Design</p>
                  <p className="text-sm text-gray-500">Published 2 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-xs font-medium">Published</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0B0E14] rounded-xl border border-white/5">
                <div>
                  <p className="text-white font-medium">10 Tips for Better Code</p>
                  <p className="text-sm text-gray-500">Draft saved 5 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorDashboard;`,

  'CreatePost.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostForm from '../../components/author/PostForm';

const CreatePost = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Create New Post" />
        <div className="p-8 overflow-y-auto">
          <PostForm mode="create" />
        </div>
      </div>
    </div>
  );
};
export default CreatePost;`,

  'EditPost.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostForm from '../../components/author/PostForm';

const EditPost = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Edit Post" />
        <div className="p-8 overflow-y-auto">
          <PostForm mode="edit" />
        </div>
      </div>
    </div>
  );
};
export default EditPost;`,

  'MyPosts.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';

const MyPosts = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="My Posts" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard title="The Art of Minimalism" date="Oct 12, 2026" status="Published" />
            <PostCard title="Understanding Web3" date="Sep 28, 2026" status="Published" />
            <PostCard title="Why Typography Matters" date="Sep 15, 2026" status="Published" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPosts;`,

  'DraftPosts.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';
import PostCard from '../../components/author/PostCard';

const DraftPosts = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Drafts" />
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard title="10 Tips for React Developers" date="Last edited 2 hours ago" status="Draft" />
            <PostCard title="The Future of AI in Design" date="Last edited 1 day ago" status="Draft" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DraftPosts;`,

  'AuthorProfile.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';

const AuthorProfile = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="My Profile" />
        <div className="p-8 overflow-y-auto max-w-4xl">
          <div className="bg-[#151A23] rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00E5FF] to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                A
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Author Name</h2>
                <p className="text-[#00E5FF]">Lead Writer</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Display Name</label>
                <input type="text" defaultValue="Author Name" className="w-full bg-[#0B0E14] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bio</label>
                <textarea rows="4" className="w-full bg-[#0B0E14] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" defaultValue="Writing about technology, design, and the future."></textarea>
              </div>
              <button className="bg-[#00E5FF] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#00c9e0] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorProfile;`,

  'PostAnalytics.jsx': `import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';

const PostAnalytics = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="Analytics" />
        <div className="p-8 overflow-y-auto">
          <div className="bg-[#151A23] rounded-2xl p-8 border border-white/5 h-96 flex items-center justify-center">
            <p className="text-gray-500">Detailed charts and graphs will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostAnalytics;`,
};

// 2. Frontend Components
const authorComponents = {
  'Navbar.jsx': `import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div className="h-20 border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-[#00E5FF] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-white/5">
          <span className="text-sm text-gray-300 font-medium">Author</span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00E5FF] to-blue-500 shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;`,

  'Sidebar.jsx': `import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: '/author/dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { to: '/author/create-post', label: 'Create Post', icon: 'M12 4v16m8-8H4' },
    { to: '/author/my-posts', label: 'My Posts', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { to: '/author/drafts', label: 'Drafts', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { to: '/author/analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { to: '/author/profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <div className="w-72 bg-[#151A23] border-r border-white/5 p-6 flex flex-col h-screen shadow-2xl">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 bg-[#00E5FF] rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.4)]"></div>
        <span className="text-white font-bold text-2xl tracking-tight">Studio</span>
      </div>
      
      <nav className="flex flex-col gap-2 flex-1">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Menu</div>
        {links.map(link => {
          const isActive = path === link.to;
          return (
            <Link 
              key={link.to} 
              to={link.to} 
              className={\`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 \${isActive ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-gray-400 hover:text-white hover:bg-white/5'}\`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path></svg>
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-white/5 px-2">
        <Link to="/" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          <span className="font-medium">Back to Site</span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;`,

  'StatsCard.jsx': `import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#151A23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#00E5FF]/30 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-[#00E5FF]/10 transition-colors"></div>
      <p className="text-gray-400 text-sm font-medium mb-1 relative z-10">{title}</p>
      <h3 className="text-4xl font-bold text-white relative z-10">{value}</h3>
    </div>
  );
};
export default StatsCard;`,

  'PostCard.jsx': `import React from 'react';

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
        <span className={\`text-xs font-medium px-2.5 py-1 rounded-full \${isPublished ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-yellow-500/10 text-yellow-500'}\`}>
          {status}
        </span>
      </div>
    </div>
  );
};
export default PostCard;`,

  'PostForm.jsx': `import React from 'react';

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
export default PostForm;`,
};

Object.entries(authorPages).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(clientDir, 'pages', 'Authors', filename), content);
  console.log('Overwrote', filename);
});

Object.entries(authorComponents).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(clientDir, 'components', 'author', filename), content);
  console.log('Overwrote', filename);
});

console.log('Redesign complete.');
