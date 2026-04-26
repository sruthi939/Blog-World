const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, 'client', 'src');
const serverDir = path.join(__dirname, 'server');

// Directories to create
const dirs = [
  path.join(clientDir, 'pages', 'editor'),
  path.join(clientDir, 'components', 'editor'),
  path.join(serverDir, 'routes'),
  path.join(serverDir, 'controllers'),
  path.join(serverDir, 'middleware'),
  path.join(serverDir, 'utils'),
  path.join(serverDir, 'models'),
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Helper to write files if they don't exist
const writeIfNotExist = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
  } else {
    console.log(`Skipped ${filePath} (already exists)`);
  }
};

// 1. Frontend Pages
const editorPages = {
  'EditorDashboard.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\nimport EditorNavbar from '../../components/editor/EditorNavbar';\n\nconst EditorDashboard = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 flex flex-col">\n        <EditorNavbar />\n        <div className="p-8">\n          <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Editor Dashboard</h1>\n          <p>Overview of pending posts, site stats, and editor tasks.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\nexport default EditorDashboard;`,
  'ReviewPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\nimport ReviewCard from '../../components/editor/ReviewCard';\n\nconst ReviewPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Review Posts</h1>\n        <ReviewCard />\n      </div>\n    </div>\n  );\n};\nexport default ReviewPosts;`,
  'PendingPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\nimport PostTable from '../../components/editor/PostTable';\n\nconst PendingPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Pending Posts</h1>\n        <PostTable />\n      </div>\n    </div>\n  );\n};\nexport default PendingPosts;`,
  'EditPost.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\n\nconst EditPost = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Edit Post</h1>\n        <p>Editor interface to modify author posts.</p>\n      </div>\n    </div>\n  );\n};\nexport default EditPost;`,
  'PublishedPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\nimport PostTable from '../../components/editor/PostTable';\n\nconst PublishedPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Published Posts</h1>\n        <PostTable />\n      </div>\n    </div>\n  );\n};\nexport default PublishedPosts;`,
  'ScheduledPosts.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\nimport PostTable from '../../components/editor/PostTable';\n\nconst ScheduledPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Scheduled Posts</h1>\n        <PostTable />\n      </div>\n    </div>\n  );\n};\nexport default ScheduledPosts;`,
  'Categories.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\n\nconst Categories = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Manage Categories</h1>\n        <p>Create, edit, and organize site categories.</p>\n      </div>\n    </div>\n  );\n};\nexport default Categories;`,
  'CommentsModeration.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\n\nconst CommentsModeration = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Comments Moderation</h1>\n        <p>Approve or delete user comments.</p>\n      </div>\n    </div>\n  );\n};\nexport default CommentsModeration;`,
  'EditorProfile.jsx': `import React from 'react';\nimport EditorSidebar from '../../components/editor/EditorSidebar';\n\nconst EditorProfile = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <EditorSidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Editor Profile</h1>\n        <p>Manage your editor credentials and bio.</p>\n      </div>\n    </div>\n  );\n};\nexport default EditorProfile;`,
};

Object.entries(editorPages).forEach(([filename, content]) => {
  writeIfNotExist(path.join(clientDir, 'pages', 'editor', filename), content);
});

// 2. Frontend Components
const editorComponents = {
  'EditorNavbar.jsx': `import React from 'react';\n\nconst EditorNavbar = () => {\n  return (\n    <div className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-between px-8">\n      <div className="text-[#E5B85C] font-bold">Editor Portal</div>\n      <div className="flex items-center gap-3">\n        <span className="text-sm text-gray-300">Editor Name</span>\n        <div className="w-8 h-8 rounded-full bg-[#E5B85C]"></div>\n      </div>\n    </div>\n  );\n};\nexport default EditorNavbar;`,
  'EditorSidebar.jsx': `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst EditorSidebar = () => {\n  return (\n    <div className="w-64 bg-[#0a0a0a] border-r border-white/10 p-6 flex flex-col">\n      <div className="text-[#E5B85C] font-bold text-xl mb-10">Editor Panel</div>\n      <nav className="flex flex-col gap-4">\n        <Link to="/editor/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>\n        <Link to="/editor/pending" className="text-gray-300 hover:text-white">Pending Posts</Link>\n        <Link to="/editor/review" className="text-gray-300 hover:text-white">Review Queue</Link>\n        <Link to="/editor/published" className="text-gray-300 hover:text-white">Published Posts</Link>\n        <Link to="/editor/scheduled" className="text-gray-300 hover:text-white">Scheduled Posts</Link>\n        <Link to="/editor/categories" className="text-gray-300 hover:text-white">Categories</Link>\n        <Link to="/editor/comments" className="text-gray-300 hover:text-white">Comments</Link>\n        <Link to="/editor/profile" className="text-gray-300 hover:text-white">Profile</Link>\n      </nav>\n    </div>\n  );\n};\nexport default EditorSidebar;`,
  'PostTable.jsx': `import React from 'react';\nimport StatusBadge from './StatusBadge';\n\nconst PostTable = () => {\n  return (\n    <div className="bg-white/5 border border-white/10 rounded-xl p-4">\n      <table className="w-full text-left">\n        <thead>\n          <tr className="border-b border-white/10 text-gray-400">\n            <th className="pb-3">Post Title</th>\n            <th className="pb-3">Author</th>\n            <th className="pb-3">Status</th>\n            <th className="pb-3">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr className="border-b border-white/5">\n            <td className="py-4">Sample Post</td>\n            <td className="py-4">Author Name</td>\n            <td className="py-4"><StatusBadge status="Pending" /></td>\n            <td className="py-4"><button className="text-[#E5B85C]">Review</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  );\n};\nexport default PostTable;`,
  'ReviewCard.jsx': `import React from 'react';\n\nconst ReviewCard = () => {\n  return (\n    <div className="bg-white/5 border border-white/10 rounded-xl p-6">\n      <h3 className="text-xl font-bold text-white mb-2">Reviewing: The Future of AI</h3>\n      <p className="text-gray-400 mb-6">By Author Name</p>\n      <div className="flex gap-4">\n        <button className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>\n        <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>\n      </div>\n    </div>\n  );\n};\nexport default ReviewCard;`,
  'StatusBadge.jsx': `import React from 'react';\n\nconst StatusBadge = ({ status }) => {\n  const colors = {\n    Pending: 'bg-yellow-500/20 text-yellow-500',\n    Published: 'bg-green-500/20 text-green-500',\n    Rejected: 'bg-red-500/20 text-red-500',\n  };\n  return (\n    <span className={\`px-3 py-1 rounded-full text-xs \${colors[status] || 'bg-gray-500/20 text-gray-500'}\`}>\n      {status}\n    </span>\n  );\n};\nexport default StatusBadge;`,
  'PublishModal.jsx': `import React from 'react';\n\nconst PublishModal = () => {\n  return (\n    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">\n      <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10">\n        <h2 className="text-2xl font-bold text-white mb-4">Publish Post</h2>\n        <p className="text-gray-400 mb-6">Are you sure you want to publish this post immediately?</p>\n        <div className="flex justify-end gap-4">\n          <button className="text-gray-400 hover:text-white">Cancel</button>\n          <button className="bg-[#E5B85C] text-black px-6 py-2 rounded font-bold">Publish Now</button>\n        </div>\n      </div>\n    </div>\n  );\n};\nexport default PublishModal;`,
  'RejectModal.jsx': `import React from 'react';\n\nconst RejectModal = () => {\n  return (\n    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">\n      <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10">\n        <h2 className="text-2xl font-bold text-white mb-4">Reject Post</h2>\n        <textarea className="w-full bg-black/40 border border-white/10 rounded p-3 text-white mb-4" placeholder="Reason for rejection..."></textarea>\n        <div className="flex justify-end gap-4">\n          <button className="text-gray-400 hover:text-white">Cancel</button>\n          <button className="bg-red-500 text-white px-6 py-2 rounded font-bold">Reject</button>\n        </div>\n      </div>\n    </div>\n  );\n};\nexport default RejectModal;`,
};

Object.entries(editorComponents).forEach(([filename, content]) => {
  writeIfNotExist(path.join(clientDir, 'components', 'editor', filename), content);
});

// 3. Backend Routes
const backendRoutes = {
  'editorRoutes.js': `const express = require('express');\nconst router = express.Router();\nconst editorController = require('../controllers/editorController');\nconst editorAuth = require('../middleware/editorAuth');\n\nrouter.get('/pending', editorAuth, editorController.getPendingPosts);\nrouter.post('/approve/:id', editorAuth, editorController.approvePost);\nrouter.post('/reject/:id', editorAuth, editorController.rejectPost);\n\nmodule.exports = router;`,
};

Object.entries(backendRoutes).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'routes', filename), content);
});

// 4. Backend Controllers
const backendControllers = {
  'editorController.js': `exports.getPendingPosts = async (req, res) => { res.json({ success: true, message: 'Get pending posts' }); };\nexports.approvePost = async (req, res) => { res.json({ success: true, message: 'Approve post' }); };\nexports.rejectPost = async (req, res) => { res.json({ success: true, message: 'Reject post' }); };`,
};

Object.entries(backendControllers).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'controllers', filename), content);
});

// 5. Backend Middleware
const backendMiddleware = {
  'editorAuth.js': `module.exports = (req, res, next) => { \n  // Placeholder editor auth\n  // if (req.user && req.user.role === 'editor') return next();\n  // res.status(403).json({ message: 'Forbidden' });\n  next(); \n};`,
};

Object.entries(backendMiddleware).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'middleware', filename), content);
});

// 6. Backend Utils
const backendUtils = {
  'notificationService.js': `const Notification = require('../models/Notification');\n\nexports.sendNotification = async (userId, message, type) => {\n  try {\n    const notif = new Notification({ userId, message, type });\n    await notif.save();\n    console.log('Notification sent:', message);\n  } catch (error) {\n    console.error('Error sending notification', error);\n  }\n};`,
};

Object.entries(backendUtils).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'utils', filename), content);
});

// 7. Backend Models
const backendModels = {
  'Notification.js': `const mongoose = require('mongoose');\nconst notificationSchema = new mongoose.Schema({ userId: mongoose.Schema.Types.ObjectId, message: String, type: String, read: { type: Boolean, default: false } }, { timestamps: true });\nmodule.exports = mongoose.model('Notification', notificationSchema);`,
};

Object.entries(backendModels).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'models', filename), content);
});

console.log('Finished scaffolding Editor feature set.');
