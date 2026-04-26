import React, { useState, useEffect } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Note: Ensure the backend server is running on port 5000 and the DB is seeded.
const RecentBlogs = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs')
        const data = await response.json()
        if (data.success) {
          setBlogs(data.blogs)
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])
  
  return (
    <div className='w-full py-20 bg-[#121212] relative'>
       {/* Ambient background glow */}
       <div className='absolute top-[30%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none'></div>

       <div className='max-w-7xl mx-auto px-6 sm:px-12 relative z-10'>
          <div className='flex items-end justify-between mb-12'>
             <div>
               <h2 className='text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight'>Latest Articles</h2>
               <p className='text-gray-400'>Stay updated with the newest stories from our writers.</p>
             </div>
             <button className='hidden sm:flex items-center gap-2 text-[#D4AF37] hover:text-[#FFF0B3] transition-colors font-medium'>
                View all <ArrowRight size={16} />
             </button>
          </div>
          
          {loading ? (
             <div className='text-[#D4AF37] flex justify-center items-center h-40'>Loading articles...</div>
          ) : (
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogs.slice(0, 6).map((blog, index) => (
                   <div key={index} className='group bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] flex flex-col'>
                      <div className='relative h-56 overflow-hidden bg-black/40'>
                         {/* Fallback image logic since images are served locally or need to be mapped. */}
                         <img 
                           src={`/assets/${blog.image}.png`} 
                           alt={blog.title} 
                           onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
                           className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'
                         />
                         <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10'>
                            {blog.category}
                         </div>
                      </div>
                      <div className='p-6 flex flex-col flex-grow'>
                         <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug'>
                            {blog.title}
                         </h3>
                         <p className='text-gray-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed' dangerouslySetInnerHTML={{__html: blog.description.substring(0, 150) + '...'}}></p>
                         
                         <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                            <div className='flex items-center gap-2 text-xs text-gray-500'>
                               <Clock size={14} />
                               <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <button className='text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0'>
                               <ArrowRight size={18} />
                            </button>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          )}
          
          <button className='mt-10 w-full sm:hidden flex items-center justify-center gap-2 text-[#D4AF37] py-3.5 border border-white/10 rounded-xl hover:bg-white/5 transition-colors font-medium'>
             View all articles <ArrowRight size={16} />
          </button>
       </div>
    </div>
  )
}

export default RecentBlogs
