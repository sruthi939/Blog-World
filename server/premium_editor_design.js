const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'client', 'src');

const editorPages = {
  'EditorDashboard.jsx': `import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';

const EditorDashboard = () => {
  return (
    <div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans selection:bg-indigo-500/30">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar title="Dashboard Overview" />
        <div className="p-8 overflow-y-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium">Pending Review</p>
                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight">24</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium">Published Today</p>
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight">142</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:border-rose-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-rose-500/20 transition-all"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium">Flagged Comments</p>
                <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight">8</h3>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-indigo-500"></span>
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                    ED
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Editor Name approved a post</h4>
                    <p className="text-sm text-gray-400">"The Future of React 19" by John Doe</p>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default EditorDashboard;`,

  'PendingPosts.jsx': `import React from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import PostTable from '../../components/editors/PostTable';

const PendingPosts = () => {
  return (
    <div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans selection:bg-indigo-500/30">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar title="Pending Review Queue" />
        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Pending Posts</h1>
            <p className="text-gray-400">Review and moderate articles submitted by authors before they go live.</p>
          </div>
          <PostTable statusFilter="Pending" />
        </div>
      </div>
    </div>
  );
};
export default PendingPosts;`,
  
  // Create basic wrappers for the rest of the pages to match the layout
  'ReviewPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\n\nconst ReviewPosts = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Review Posts" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Review Posts</h1><p className="text-gray-400">Select a post from the queue to begin reviewing.</p></div></div></div>); };\nexport default ReviewPosts;`,
  'PublishedPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\nimport PostTable from '../../components/editors/PostTable';\n\nconst PublishedPosts = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Published Posts" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Published Posts</h1><PostTable statusFilter="Published" /></div></div></div>); };\nexport default PublishedPosts;`,
  'ScheduledPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\nimport PostTable from '../../components/editors/PostTable';\n\nconst ScheduledPosts = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Scheduled Posts" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Scheduled Posts</h1><PostTable statusFilter="Scheduled" /></div></div></div>); };\nexport default ScheduledPosts;`,
  'Categories.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\n\nconst Categories = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Manage Categories" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Categories</h1><p className="text-gray-400">Add, edit, or remove blog categories.</p></div></div></div>); };\nexport default Categories;`,
  'CommentsModeration.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\n\nconst CommentsModeration = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Comment Moderation" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Comments Moderation</h1><p className="text-gray-400">Review flagged comments from readers.</p></div></div></div>); };\nexport default CommentsModeration;`,
  'EditorProfile.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\n\nconst EditorProfile = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Editor Profile" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">My Profile</h1><p className="text-gray-400">Manage your editor account settings.</p></div></div></div>); };\nexport default EditorProfile;`,
  'EditPost.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editors/EditorSidebar';\nimport EditorNavbar from '../../components/editors/EditorNavbar';\n\nconst EditPost = () => { return (<div className="flex bg-[#0f1115] min-h-screen text-gray-100 font-sans"><EditorSidebar /><div className="flex-1 flex flex-col h-screen overflow-hidden"><EditorNavbar title="Edit Post" /><div className="p-8 overflow-y-auto"><h1 className="text-3xl font-bold text-white mb-6">Edit Post</h1><p className="text-gray-400">Modify content for compliance or formatting.</p></div></div></div>); };\nexport default EditPost;`,
};

const editorComponents = {
  'EditorNavbar.jsx': `import React from 'react';

const EditorNavbar = ({ title }) => {
  return (
    <div className="h-20 border-b border-white/5 bg-white/[0.02] backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <svg className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#0f1115]"></span>
        </div>
        
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-white leading-tight">Admin User</p>
            <p className="text-xs text-indigo-400 font-medium">Senior Editor</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[2px]">
            <div className="w-full h-full bg-[#0f1115] rounded-[10px] flex items-center justify-center">
              <span className="font-bold text-sm">AU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditorNavbar;`,

  'EditorSidebar.jsx': `import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EditorSidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const menuGroups = [
    {
      title: "Main Menu",
      links: [
        { to: '/editor/dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
      ]
    },
    {
      title: "Content",
      links: [
        { to: '/editor/pending', label: 'Pending Posts', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { to: '/editor/review', label: 'Review Queue', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { to: '/editor/published', label: 'Published Posts', icon: 'M5 13l4 4L19 7' },
        { to: '/editor/scheduled', label: 'Scheduled', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      ]
    },
    {
      title: "Management",
      links: [
        { to: '/editor/categories', label: 'Categories', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
        { to: '/editor/comments', label: 'Comments', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
        { to: '/editor/profile', label: 'Profile Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
      ]
    }
  ];

  return (
    <div className="w-72 bg-white/[0.02] border-r border-white/5 flex flex-col h-screen backdrop-blur-xl shrink-0">
      <div className="h-20 flex items-center px-8 border-b border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Moderation</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{group.title}</p>
            <nav className="flex flex-col gap-1">
              {group.links.map(link => {
                const isActive = path === link.to;
                return (
                  <Link 
                    key={link.to} 
                    to={link.to} 
                    className={\`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative group \${isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}\`}
                  >
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>}
                    <svg className={\`w-5 h-5 \${isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-300'}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path></svg>
                    <span className="font-medium text-sm">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-white/5">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span className="font-medium text-sm">Exit Portal</span>
        </Link>
      </div>
    </div>
  );
};
export default EditorSidebar;`,

  'PostTable.jsx': `import React from 'react';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

const PostTable = ({ statusFilter }) => {
  // Mock data to show the premium design
  const posts = [
    { id: 1, title: 'Understanding Glassmorphism in UI', author: 'Sruthi Alex', status: 'Pending', date: '2 mins ago', readTime: '4 min' },
    { id: 2, title: 'The Future of Web Development with Vite', author: 'John Doe', status: 'Published', date: '5 hours ago', readTime: '7 min' },
    { id: 3, title: 'Mastering Tailwind CSS v4', author: 'Jane Smith', status: 'Scheduled', date: 'Tomorrow', readTime: '5 min' },
  ];

  const filteredPosts = statusFilter ? posts.filter(p => p.status === statusFilter) : posts;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/10 text-xs uppercase tracking-wider text-gray-400 font-bold">
              <th className="py-4 px-6">Post Details</th>
              <th className="py-4 px-6">Author</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredPosts.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-12 text-center text-gray-500">
                  No {statusFilter ? statusFilter.toLowerCase() : ''} posts found.
                </td>
              </tr>
            ) : (
              filteredPosts.map(post => (
                <tr key={post.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-6">
                    <p className="font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{post.date} • {post.readTime} read</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-300 border border-white/10">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-gray-300 font-medium text-sm">{post.author}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition-all">
                      {post.status === 'Pending' ? 'Review' : 'View'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PostTable;`,

  'StatusBadge.jsx': `import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]',
    Published: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
    Scheduled: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]',
    Rejected: 'bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]',
  };

  const style = styles[status] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';

  return (
    <span className={\`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border \${style}\`}>
      <span className={\`w-1.5 h-1.5 rounded-full \${style.split(' ')[1].replace('text', 'bg')}\`}></span>
      {status}
    </span>
  );
};
export default StatusBadge;`
};

Object.entries(editorPages).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(clientDir, 'pages', 'editors', filename), content);
  console.log('Overwrote', filename);
});

Object.entries(editorComponents).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(clientDir, 'components', 'editors', filename), content);
  console.log('Overwrote', filename);
});

console.log('Editor Redesign complete.');
