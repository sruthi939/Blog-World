import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { blog_data, blogCategories } from '../../assets/assets'
import { Clock, Search, ChevronRight } from 'lucide-react'

const Blog = () => {
  const [searchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  useEffect(() => {
    if (searchParams.get('search') !== null) {
      setSearchQuery(searchParams.get('search'))
      window.scrollTo(0, 0)
    }
  }, [searchParams])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs`)
        const data = await response.json()
        if (data.success) {
          setBlogs(data.blogs)
        }
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filtered = useMemo(() => {
    return blogs.filter(blog => {
      const matchCat = activeCategory === 'All' || blog.category === activeCategory
      const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch && blog.isPublished
    })
  }, [blogs, activeCategory, searchQuery])

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      <div className='w-full pt-24 pb-14 px-6 sm:px-12 xl:px-24 text-center'>
        <p className='text-[#E5B85C] text-xs font-semibold tracking-[4px] uppercase mb-4'>Explore</p>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>All Articles</h1>
        <p className='text-gray-400 text-lg max-w-xl mx-auto'>Deep dives into technology, lifestyle, startups, and finance.</p>
      </div>

      <div className='max-w-7xl mx-auto w-full px-6 sm:px-12 mb-16'>
        <div className='relative max-w-md mx-auto mb-8'>
          <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500' />
          <input
            type='text'
            placeholder='Search articles...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-5 py-3 text-white text-sm focus:outline-none focus:border-[#E5B85C]/50 placeholder-gray-500 transition-colors'
          />
        </div>

        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {blogCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat ? 'bg-[#E5B85C] text-black border-[#E5B85C]' : 'bg-transparent text-gray-300 border-white/15 hover:border-[#E5B85C]/50 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>

        <p className='text-gray-500 text-sm mb-8'>{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>

        {filtered.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filtered.map(blog => {
              const readTime = Math.ceil(blog.description.replace(/<[^>]+>/g, '').split(' ').length / 200)
              return (
                <Link key={blog._id} to={`/blog/${blog._id}`}
                  className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E5B85C]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(229,184,92,0.1)] flex flex-col'>
                  <div className='overflow-hidden h-52'>
                    <img src={blog.image} alt={blog.title} className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500' />
                  </div>
                  <div className='p-6 flex flex-col flex-grow'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='px-3 py-1 bg-[#E5B85C]/10 border border-[#E5B85C]/25 text-[#E5B85C] text-xs font-semibold rounded-full uppercase tracking-wider'>{blog.category}</span>
                      <span className='text-gray-500 text-xs flex items-center gap-1'><Clock size={12} /> {readTime} min read</span>
                    </div>
                    <h2 className='text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#E5B85C] transition-colors line-clamp-2'>{blog.title}</h2>
                    <p className='text-gray-400 text-sm leading-relaxed line-clamp-2 flex-grow'>{blog.subTitle}</p>
                    <div className='flex items-center justify-between mt-5 pt-4 border-t border-white/10'>
                      <span className='text-gray-500 text-xs'>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className='text-[#E5B85C] text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all'>Read <ChevronRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className='text-center py-24'>
            <p className='text-5xl mb-4'>📭</p>
            <p className='text-white font-semibold text-xl mb-2'>No articles found</p>
            <p className='text-gray-400 text-sm'>Try a different category or search term.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
