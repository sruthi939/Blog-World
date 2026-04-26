import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { blog_data, comments_data } from '../../assets/assets'
import { Clock, Tag, User, ArrowLeft, Heart, Share2, MessageCircle, ChevronRight } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [relatedBlogs, setRelatedBlogs] = useState([])

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs/${id}`)
        const data = await response.json()
        if (data.success) {
          setBlog(data.blog)
          // For related blogs, fetch all and filter
          const allRes = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs`)
          const allData = await allRes.json()
          if (allData.success) {
            setRelatedBlogs(allData.blogs.filter(b => b.category === data.blog.category && b._id !== data.blog._id).slice(0, 3))
          }
        }
      } catch (error) {
        console.error('Error fetching blog:', error)
      }
    }

    fetchBlogData()
    // Comments are still using local state for now until comment backend is built
    const relatedComments = comments_data.filter(c => c.blog && c.blog._id === id && c.isApproved)
    setComments(relatedComments)
    window.scrollTo(0, 0)
  }, [id])

  if (!blog) {
    return (
      <div className='min-h-screen bg-dot-pattern flex flex-col items-center justify-center text-white'>
        <Navbar />
        <p className='text-gray-400 mt-20'>Article not found.</p>
      </div>
    )
  }

  const readTime = Math.ceil(blog.description.replace(/<[^>]+>/g, '').split(' ').length / 200)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!comment.trim() || !name.trim()) return
    setComments(prev => [...prev, {
      _id: Date.now().toString(),
      name,
      content: comment,
      createdAt: new Date().toISOString(),
      isApproved: true
    }])
    setComment('')
    setName('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      {/* Hero Image */}
      <div className='w-full h-[55vh] relative overflow-hidden'>
        <img src={blog.image} alt={blog.title} className='w-full h-full object-cover opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2a]/60 to-transparent' />
        <div className='absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-10 max-w-4xl mx-auto w-full'>
          <Link to='/blog' className='flex items-center gap-2 text-[#E5B85C] text-sm mb-6 hover:underline w-fit'>
            <ArrowLeft size={16} /> Back to all articles
          </Link>
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-[#E5B85C]/20 border border-[#E5B85C]/40 text-[#E5B85C] text-xs font-semibold rounded-full uppercase tracking-wider'>{blog.category}</span>
            <span className='text-gray-400 text-sm flex items-center gap-1'><Clock size={14} /> {readTime} min read</span>
          </div>
          <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>{blog.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto w-full px-6 md:px-20 py-12'>
        {/* Author bar */}
        <div className='flex items-center justify-between py-6 border-b border-white/10 mb-10'>
          <div className='flex items-center gap-4'>
            <div className='w-11 h-11 rounded-full bg-gradient-to-br from-[#E5B85C] to-[#c9994a] flex items-center justify-center'>
              <User size={20} className='text-black' />
            </div>
            <div>
              <p className='text-white font-semibold text-sm'>Blog World Author</p>
              <p className='text-gray-400 text-xs'>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <button onClick={() => setLiked(l => !l)} className={`flex items-center gap-2 text-sm transition-colors ${liked ? 'text-[#E5B85C]' : 'text-gray-400 hover:text-[#E5B85C]'}`}>
              <Heart size={18} fill={liked ? '#E5B85C' : 'none'} /> {liked ? 'Liked' : 'Like'}
            </button>
            <button className='flex items-center gap-2 text-sm text-gray-400 hover:text-[#E5B85C] transition-colors'>
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Blog body */}
        <div
          className='prose prose-invert max-w-none text-gray-300 leading-relaxed text-[17px] prose-headings:text-white prose-headings:font-bold prose-strong:text-white prose-a:text-[#E5B85C]'
          dangerouslySetInnerHTML={{ __html: blog.description }}
          style={{ lineHeight: '1.9' }}
        />

        {/* Tags */}
        <div className='mt-12 flex flex-wrap items-center gap-3'>
          <span className='text-gray-400 text-sm flex items-center gap-1'><Tag size={14} /> Tags:</span>
          {[blog.category, 'Blog World', 'Insights'].map(tag => (
            <span key={tag} className='px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full hover:border-[#E5B85C]/50 transition-colors cursor-pointer'>{tag}</span>
          ))}
        </div>

        {/* Comments */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
            <MessageCircle className='text-[#E5B85C]' size={24} /> Comments ({comments.length})
          </h3>

          {comments.length > 0 ? (
            <div className='space-y-5 mb-10'>
              {comments.map(c => (
                <div key={c._id} className='bg-white/5 border border-white/10 rounded-2xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-9 h-9 rounded-full bg-gradient-to-br from-[#E5B85C]/40 to-[#c9994a]/40 flex items-center justify-center text-[#E5B85C] font-bold text-sm'>
                      {c.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className='text-white font-semibold text-sm'>{c.name}</p>
                      <p className='text-gray-500 text-xs'>{new Date(c.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className='text-gray-300 text-sm leading-relaxed'>{c.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-gray-500 mb-8 text-sm'>No comments yet. Be the first to share your thoughts!</p>
          )}

          {/* Comment form */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-6'>
            <h4 className='text-white font-semibold mb-5'>Leave a Comment</h4>
            {submitted && <p className='text-[#E5B85C] text-sm mb-4'>✓ Comment submitted for review!</p>}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <input
                type='text'
                placeholder='Your name'
                value={name}
                onChange={e => setName(e.target.value)}
                className='w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E5B85C]/50 placeholder-gray-500 transition-colors'
              />
              <textarea
                placeholder='Share your thoughts...'
                rows={4}
                value={comment}
                onChange={e => setComment(e.target.value)}
                className='w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E5B85C]/50 placeholder-gray-500 transition-colors resize-none'
              />
              <button type='submit' className='px-7 py-3 bg-[#E5B85C] text-black font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 text-sm'>
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <div className='mt-20'>
            <h3 className='text-2xl font-bold text-white mb-8'>Related Articles</h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              {relatedBlogs.map(r => (
                <Link key={r._id} to={`/blog/${r._id}`} className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E5B85C]/40 transition-all duration-300 hover:-translate-y-1'>
                  <img src={r.image} alt={r.title} className='w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity' />
                  <div className='p-4'>
                    <span className='text-[#E5B85C] text-xs font-semibold uppercase tracking-wider'>{r.category}</span>
                    <p className='text-white font-semibold text-sm mt-2 leading-snug line-clamp-2 group-hover:text-[#E5B85C] transition-colors'>{r.title}</p>
                    <span className='text-[#E5B85C] text-xs mt-3 flex items-center gap-1 group-hover:gap-2 transition-all'>Read <ChevronRight size={12} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPost
