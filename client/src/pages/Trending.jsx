import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { TrendingUp, Clock, ChevronRight, Loader2 } from 'lucide-react'

const Trending = () => {
  const [trendingPosts, setTrendingPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs`)
        const data = await response.json()
        if (data.success) {
          // Simulate trending by slicing the first 6 posts
          setTrendingPosts(data.blogs.slice(0, 6))
        }
      } catch (error) {
        console.error('Error fetching trending blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTrending()
  }, [])

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      {/* Page Header */}
      <div className='w-full pt-24 pb-14 px-6 sm:px-12 xl:px-24 text-center'>
        <div className='flex items-center justify-center gap-2 text-[#E5B85C] text-xs font-semibold tracking-[4px] uppercase mb-4'>
          <TrendingUp size={16} /> Hot Right Now
        </div>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Trending Blogs</h1>
        <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
          The most read, shared, and discussed blogs across the platform this week.
        </p>
      </div>

      {/* Trending List */}
      <div className='max-w-5xl mx-auto w-full px-6 sm:px-12 mb-20'>
        {loading ? (
          <div className='flex justify-center items-center py-20'>
            <Loader2 className='animate-spin text-[#E5B85C]' size={32} />
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
            {trendingPosts.map((blog, index) => {
              const readTime = Math.ceil(blog.description.replace(/<[^>]+>/g, '').split(' ').length / 200)
              const number = (index + 1).toString().padStart(2, '0')

            return (
              <Link 
                key={blog._id} 
                to={`/blog/${blog._id}`}
                className='group flex items-start gap-6 p-4 rounded-2xl border border-transparent hover:bg-white/5 hover:border-white/10 transition-all duration-300'
              >
                {/* Big Number */}
                <div className='text-5xl font-bold text-white/10 group-hover:text-[#E5B85C]/30 transition-colors pt-1'>
                  {number}
                </div>

                {/* Content */}
                <div className='flex flex-col flex-grow min-w-0'>
                  {/* Category & Date */}
                  <div className='flex items-center gap-3 mb-2 text-xs'>
                    <span className='text-[#E5B85C] font-semibold tracking-wider uppercase'>{blog.category}</span>
                    <span className='text-gray-600'>•</span>
                    <span className='text-gray-500'>
                      {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className='text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#E5B85C] transition-colors line-clamp-2'>
                    {blog.title}
                  </h2>
                  
                  {/* Subtitle / Description */}
                  <p className='text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3'>
                    {blog.subTitle || "Click to read this amazing blog and discover more insights."}
                  </p>

                  {/* Footer Stats */}
                  <div className='flex items-center justify-between mt-auto pt-2'>
                    <span className='text-gray-500 text-xs flex items-center gap-1.5'>
                      <Clock size={12} /> {readTime} min read
                    </span>
                    <span className='text-[#E5B85C] text-sm flex items-center gap-1 font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0'>
                      Read <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        )}

        {/* Explore More CTA */}
        <div className='mt-16 flex justify-center'>
          <Link 
            to='/blog' 
            className='flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/15 text-gray-300 rounded-full hover:border-[#E5B85C]/50 hover:text-white transition-all duration-300 shadow-sm'
          >
            Explore All Blogs <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Trending
