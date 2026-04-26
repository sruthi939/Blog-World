import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Trending from './pages/Trending'
import NotFound from './pages/NotFound'

import Blog from './pages/users/Blog'
import BlogPost from './pages/users/BlogPost'
import About from './pages/users/About'
import Login from './pages/users/Login'
import Profile from './pages/users/Profile'
import Categories from './pages/users/Categories'

import WriterStudio from './pages/Authors/WriterStudio'
import Loader from './components/Loader'

// Author Pages
import AuthorDashboard from './pages/Authors/AuthorDashboard'
import CreatePost from './pages/Authors/CreatePost'
import EditPost from './pages/Authors/EditPost'
import MyPosts from './pages/Authors/MyPosts'
import DraftPosts from './pages/Authors/DraftPosts'
import AuthorProfile from './pages/Authors/AuthorProfile'
import PostAnalytics from './pages/Authors/PostAnalytics'

// Editor Pages
import EditorDashboard from './pages/editors/EditorDashboard'
import ReviewPosts from './pages/editors/ReviewPosts'
import PendingPosts from './pages/editors/PendingPosts'
import EditPostEditor from './pages/editors/EditPost'
import PublishedPosts from './pages/editors/PublishedPosts'
import ScheduledPosts from './pages/editors/ScheduledPosts'
import CategoriesEditor from './pages/editors/Categories'
import CommentsModeration from './pages/editors/CommentsModeration'
import EditorProfile from './pages/editors/EditorProfile'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading && <Loader />}
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/write' element={<WriterStudio />} />
        
        {/* Author Routes */}
        <Route path='/author/dashboard' element={<AuthorDashboard />} />
        <Route path='/author/create-post' element={<CreatePost />} />
        <Route path='/author/edit-post/:id' element={<EditPost />} />
        <Route path='/author/my-posts' element={<MyPosts />} />
        <Route path='/author/drafts' element={<DraftPosts />} />
        <Route path='/author/profile' element={<AuthorProfile />} />
        <Route path='/author/analytics' element={<PostAnalytics />} />

        {/* Editor Routes */}
        <Route path='/editor/dashboard' element={<EditorDashboard />} />
        <Route path='/editor/review' element={<ReviewPosts />} />
        <Route path='/editor/pending' element={<PendingPosts />} />
        <Route path='/editor/edit-post/:id' element={<EditPostEditor />} />
        <Route path='/editor/published' element={<PublishedPosts />} />
        <Route path='/editor/scheduled' element={<ScheduledPosts />} />
        <Route path='/editor/categories' element={<CategoriesEditor />} />
        <Route path='/editor/comments' element={<CommentsModeration />} />
        <Route path='/editor/profile' element={<EditorProfile />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
