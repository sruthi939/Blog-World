const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, 'client', 'src');
const serverDir = path.join(__dirname, 'server');

// Directories to create
const dirs = [
  path.join(clientDir, 'pages', 'author'),
  path.join(clientDir, 'components', 'author'),
  path.join(serverDir, 'routes'),
  path.join(serverDir, 'controllers'),
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
const authorPages = {
  'AuthorDashboard.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\nimport Navbar from '../../components/author/Navbar';\n\nconst AuthorDashboard = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 flex flex-col">\n        <Navbar />\n        <div className="p-8">\n          <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Author Dashboard</h1>\n          <p>Overview of your stats and recent activities will go here.</p>\n        </div>\n      </div>\n    </div>\n  );\n};\nexport default AuthorDashboard;`,
  'CreatePost.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\nimport PostForm from '../../components/author/PostForm';\n\nconst CreatePost = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Create New Post</h1>\n        <PostForm mode="create" />\n      </div>\n    </div>\n  );\n};\nexport default CreatePost;`,
  'EditPost.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\nimport PostForm from '../../components/author/PostForm';\n\nconst EditPost = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Edit Post</h1>\n        <PostForm mode="edit" />\n      </div>\n    </div>\n  );\n};\nexport default EditPost;`,
  'MyPosts.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\n\nconst MyPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">My Posts</h1>\n        <p>List of all your published posts.</p>\n      </div>\n    </div>\n  );\n};\nexport default MyPosts;`,
  'DraftPosts.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\n\nconst DraftPosts = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Draft Posts</h1>\n        <p>List of your unpublished drafts.</p>\n      </div>\n    </div>\n  );\n};\nexport default DraftPosts;`,
  'AuthorProfile.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\n\nconst AuthorProfile = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Author Profile</h1>\n        <p>Manage your bio, social links, and public profile.</p>\n      </div>\n    </div>\n  );\n};\nexport default AuthorProfile;`,
  'PostAnalytics.jsx': `import React from 'react';\nimport Sidebar from '../../components/author/Sidebar';\n\nconst PostAnalytics = () => {\n  return (\n    <div className="flex bg-[#121212] min-h-screen text-white">\n      <Sidebar />\n      <div className="flex-1 p-8">\n        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Post Analytics</h1>\n        <p>Detailed views, likes, and comments metrics.</p>\n      </div>\n    </div>\n  );\n};\nexport default PostAnalytics;`,
};

Object.entries(authorPages).forEach(([filename, content]) => {
  writeIfNotExist(path.join(clientDir, 'pages', 'author', filename), content);
});

// 2. Frontend Components
const authorComponents = {
  'PostForm.jsx': `import React from 'react';\nimport RichEditor from './RichEditor';\nimport UploadImage from './UploadImage';\n\nconst PostForm = ({ mode }) => {\n  return (\n    <form className="space-y-6 max-w-4xl bg-white/5 p-8 rounded-2xl border border-white/10">\n      <div>\n        <label className="block text-gray-400 text-sm mb-2">Title</label>\n        <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:border-[#E5B85C]/50 outline-none" placeholder="Post Title" />\n      </div>\n      <UploadImage />\n      <div>\n        <label className="block text-gray-400 text-sm mb-2">Content</label>\n        <RichEditor />\n      </div>\n      <button type="submit" className="bg-[#E5B85C] text-black px-6 py-2 rounded-xl font-bold hover:bg-[#d5a84b] transition-colors">\n        {mode === 'create' ? 'Publish Post' : 'Save Changes'}\n      </button>\n    </form>\n  );\n};\nexport default PostForm;`,
  'PostCard.jsx': `import React from 'react';\n\nconst PostCard = () => {\n  return (\n    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4">\n      <div className="w-24 h-24 bg-black/40 rounded-lg"></div>\n      <div>\n        <h3 className="text-lg font-bold text-white">Post Title</h3>\n        <p className="text-gray-400 text-sm">Status: Published</p>\n      </div>\n    </div>\n  );\n};\nexport default PostCard;`,
  'RichEditor.jsx': `import React from 'react';\n\nconst RichEditor = () => {\n  return (\n    <div className="border border-white/10 rounded-xl overflow-hidden">\n      <div className="bg-black/60 p-2 flex gap-2 border-b border-white/10">\n        <button type="button" className="text-gray-400 hover:text-white px-2">B</button>\n        <button type="button" className="text-gray-400 hover:text-white px-2">I</button>\n      </div>\n      <textarea className="w-full h-64 bg-black/40 p-4 text-white focus:outline-none resize-none" placeholder="Start writing..."></textarea>\n    </div>\n  );\n};\nexport default RichEditor;`,
  'UploadImage.jsx': `import React from 'react';\n\nconst UploadImage = () => {\n  return (\n    <div className="border border-dashed border-white/20 rounded-xl p-8 text-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer">\n      <p className="text-gray-400">Click to upload cover image</p>\n    </div>\n  );\n};\nexport default UploadImage;`,
  'StatsCard.jsx': `import React from 'react';\n\nconst StatsCard = ({ title, value }) => {\n  return (\n    <div className="bg-white/5 border border-white/10 rounded-xl p-6">\n      <p className="text-gray-400 text-sm">{title}</p>\n      <h3 className="text-3xl font-bold text-[#E5B85C] mt-2">{value}</h3>\n    </div>\n  );\n};\nexport default StatsCard;`,
  'Sidebar.jsx': `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Sidebar = () => {\n  return (\n    <div className="w-64 bg-[#0a0a0a] border-r border-white/10 p-6 flex flex-col">\n      <div className="text-[#E5B85C] font-bold text-xl mb-10">Author Panel</div>\n      <nav className="flex flex-col gap-4">\n        <Link to="/author/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>\n        <Link to="/author/create-post" className="text-gray-300 hover:text-white">Create Post</Link>\n        <Link to="/author/my-posts" className="text-gray-300 hover:text-white">My Posts</Link>\n        <Link to="/author/drafts" className="text-gray-300 hover:text-white">Drafts</Link>\n        <Link to="/author/analytics" className="text-gray-300 hover:text-white">Analytics</Link>\n        <Link to="/author/profile" className="text-gray-300 hover:text-white">Profile</Link>\n      </nav>\n    </div>\n  );\n};\nexport default Sidebar;`,
  'Navbar.jsx': `import React from 'react';\n\nconst Navbar = () => {\n  return (\n    <div className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center justify-end px-8">\n      <div className="flex items-center gap-3">\n        <span className="text-sm text-gray-300">Author Name</span>\n        <div className="w-8 h-8 rounded-full bg-[#E5B85C]"></div>\n      </div>\n    </div>\n  );\n};\nexport default Navbar;`,
};

Object.entries(authorComponents).forEach(([filename, content]) => {
  writeIfNotExist(path.join(clientDir, 'components', 'author', filename), content);
});

// 3. Backend Routes
const backendRoutes = {
  'authorRoutes.js': `const express = require('express');\nconst router = express.Router();\nconst authorController = require('../controllers/authorController');\n\nrouter.get('/profile', authorController.getProfile);\nrouter.put('/profile', authorController.updateProfile);\n\nmodule.exports = router;`,
  'postRoutes.js': `const express = require('express');\nconst router = express.Router();\nconst postController = require('../controllers/postController');\n\nrouter.post('/', postController.createPost);\nrouter.put('/:id', postController.updatePost);\nrouter.delete('/:id', postController.deletePost);\nrouter.get('/my-posts', postController.getMyPosts);\n\nmodule.exports = router;`,
  'uploadRoutes.js': `const express = require('express');\nconst router = express.Router();\nconst uploadController = require('../controllers/uploadController');\n\nrouter.post('/image', uploadController.uploadImage);\n\nmodule.exports = router;`,
};

Object.entries(backendRoutes).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'routes', filename), content);
});

// 4. Backend Controllers
const backendControllers = {
  'authorController.js': `exports.getProfile = async (req, res) => { res.json({ success: true, message: 'Get author profile' }); };\nexports.updateProfile = async (req, res) => { res.json({ success: true, message: 'Update author profile' }); };`,
  'postController.js': `exports.createPost = async (req, res) => { res.json({ success: true, message: 'Create post' }); };\nexports.updatePost = async (req, res) => { res.json({ success: true, message: 'Update post' }); };\nexports.deletePost = async (req, res) => { res.json({ success: true, message: 'Delete post' }); };\nexports.getMyPosts = async (req, res) => { res.json({ success: true, message: 'Get my posts' }); };`,
  'analyticsController.js': `exports.getAnalytics = async (req, res) => { res.json({ success: true, message: 'Get analytics' }); };`,
  'uploadController.js': `exports.uploadImage = async (req, res) => { res.json({ success: true, message: 'Image uploaded' }); };`,
};

Object.entries(backendControllers).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'controllers', filename), content);
});

// 5. Backend Models (MongoDB)
// We already have User.js and maybe Blog.js. We'll create Post.js (or map it to Blog.js), Comment.js, Category.js
const backendModels = {
  'Post.js': `const mongoose = require('mongoose');\nconst postSchema = new mongoose.Schema({ title: String, content: String, authorId: mongoose.Schema.Types.ObjectId, isPublished: Boolean }, { timestamps: true });\nmodule.exports = mongoose.model('Post', postSchema);`,
  'Comment.js': `const mongoose = require('mongoose');\nconst commentSchema = new mongoose.Schema({ postId: mongoose.Schema.Types.ObjectId, content: String, authorName: String }, { timestamps: true });\nmodule.exports = mongoose.model('Comment', commentSchema);`,
  'Category.js': `const mongoose = require('mongoose');\nconst categorySchema = new mongoose.Schema({ name: String, slug: String }, { timestamps: true });\nmodule.exports = mongoose.model('Category', categorySchema);`,
};

Object.entries(backendModels).forEach(([filename, content]) => {
  writeIfNotExist(path.join(serverDir, 'models', filename), content);
});

console.log('Finished scaffolding Author feature set.');
