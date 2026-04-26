import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { blog_data } from '../../assets/assets'
import { Clock, ChevronRight, PenLine, BookOpen, Compass, Lightbulb, Camera, Mic2, Flame, Star } from 'lucide-react'

// Blog creator / storyteller categories
const getBloggerTypes = (allBlogs) => [
  {
    id: 'storytellers',
    title: 'Story Tellers',
    icon: <BookOpen size={26} />,
    tagline: 'Narratives that pull you in and never let go.',
    desc: 'Bloggers who craft compelling personal stories, fiction-style narratives, and human experiences that resonate deeply.',
    tags: ['Lifestyle', 'Startup'],
    from: '#f59e0b',
    to: '#d97706',
    glow: 'rgba(245,158,11,0.15)',
    featured: allBlogs.filter(b => b.category === 'Lifestyle').slice(0, 3)
  },
  {
    id: 'writers',
    title: 'Writers',
    icon: <PenLine size={26} />,
    tagline: 'Words crafted with intent, depth, and purpose.',
    desc: 'Long-form essayists, opinion columnists, and thoughtful bloggers who transform complex ideas into clear, engaging prose.',
    tags: ['Technology', 'Finance'],
    from: '#6366f1',
    to: '#4338ca',
    glow: 'rgba(99,102,241,0.15)',
    featured: allBlogs.filter(b => b.category === 'Technology').slice(0, 3)
  },
  {
    id: 'explorers',
    title: 'Explorers',
    icon: <Compass size={26} />,
    tagline: 'Adventures in ideas, places, and possibilities.',
    desc: 'Curious minds who venture into new territories — travel, culture, philosophy — and bring back blogs worth reading.',
    tags: ['Lifestyle'],
    from: '#10b981',
    to: '#047857',
    glow: 'rgba(16,185,129,0.15)',
    featured: allBlogs.filter(b => b.category === 'Lifestyle').slice(1, 4)
  },
  {
    id: 'thinkers',
    title: 'Thinkers',
    icon: <Lightbulb size={26} />,
    tagline: 'Big ideas broken into brilliant insights.',
    desc: 'Analysts, strategists, and visionaries who connect dots others miss and challenge conventional wisdom with evidence.',
    tags: ['Startup', 'Finance'],
    from: '#3b82f6',
    to: '#1d4ed8',
    glow: 'rgba(59,130,246,0.15)',
    featured: allBlogs.filter(b => b.category === 'Startup').slice(0, 3)
  },
  {
    id: 'creators',
    title: 'Creators',
    icon: <Camera size={26} />,
    tagline: 'Building things that didn\'t exist before.',
    desc: 'Makers, designers, developers, and entrepreneurs who document their creative process and share what they build.',
    tags: ['Technology', 'Startup'],
    from: '#ec4899',
    to: '#be185d',
    glow: 'rgba(236,72,153,0.15)',
    featured: allBlogs.filter(b => b.category === 'Technology').slice(1, 4)
  },
  {
    id: 'educators',
    title: 'Educators',
    icon: <Mic2 size={26} />,
    tagline: 'Turning knowledge into powerful lessons.',
    desc: 'Teachers, coaches, and mentors who make learning accessible, practical, and genuinely enjoyable through their writing.',
    tags: ['Technology', 'Lifestyle'],
    from: '#f97316',
    to: '#c2410c',
    glow: 'rgba(249,115,22,0.15)',
    featured: allBlogs.filter(b => b.isPublished).slice(4, 7)
  }
]

const Categories = () => {
  const [active, setActive] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
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

  const bloggerTypes = getBloggerTypes(blogs)

  const activeType = bloggerTypes.find(b => b.id === active)

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      {/* Header */}
      <div className='w-full pt-24 pb-14 px-6 sm:px-12 xl:px-24 text-center'>
        <div className='flex items-center justify-center gap-2 text-[#E5B85C] text-xs font-semibold tracking-[4px] uppercase mb-4'>
          <Flame size={14} /> Discover Your Tribe
        </div>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Blog Categories</h1>
        <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
          Every great blog has a voice. Find the type of bloggers and writers whose words speak to you.
        </p>
      </div>

      <div className='max-w-7xl mx-auto w-full px-6 sm:px-12 mb-20'>

        {/* Category Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
          {bloggerTypes.map(type => {
            const isActive = active === type.id
            return (
              <button
                key={type.id}
                onClick={() => setActive(isActive ? null : type.id)}
                className='group text-left p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden'
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${type.from}22, ${type.to}11)`
                    : 'rgba(255,255,255,0.03)',
                  borderColor: isActive ? `${type.from}60` : 'rgba(255,255,255,0.08)',
                  boxShadow: isActive ? `0 12px 40px ${type.glow}` : 'none'
                }}
              >
                {/* Ambient glow */}
                <div
                  className='absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
                  style={{ background: type.glow, transform: 'translate(30%, -30%)' }}
                />

                {/* Icon */}
                <div
                  className='w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white transition-all duration-300 shadow-lg'
                  style={{ background: `linear-gradient(135deg, ${type.from}, ${type.to})` }}
                >
                  {type.icon}
                </div>

                {/* Title */}
                <h3 className='text-white font-bold text-xl mb-1'>{type.title}</h3>
                <p className='mb-3' style={{ color: type.from, fontSize: '13px', fontWeight: 600 }}>{type.tagline}</p>
                <p className='text-gray-400 text-sm leading-relaxed mb-5'>{type.desc}</p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-5'>
                  {type.tags.map(tag => (
                    <span key={tag}
                      className='text-xs px-2.5 py-1 rounded-full font-medium'
                      style={{ background: `${type.from}18`, color: type.from }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className='flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2'
                  style={{ color: isActive ? type.from : '#9ca3af' }}
                >
                  {isActive ? 'Hide blogs ↑' : 'See blogs'} <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Expanded posts for selected category */}
        {activeType && (
          <div key={activeType.id} className='animate-fadeIn'>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-xl flex items-center justify-center text-white'
                  style={{ background: `linear-gradient(135deg, ${activeType.from}, ${activeType.to})` }}
                >
                  {React.cloneElement(activeType.icon, { size: 18 })}
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-white'>{activeType.title}</h2>
                  <p className='text-gray-500 text-xs'>{activeType.featured.length} featured blogs</p>
                </div>
              </div>
              <Link to='/blog' className='text-[#E5B85C] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all'>
                Browse all blogs <ChevronRight size={14} />
              </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {activeType.featured.map((blog, i) => {
                const readTime = Math.ceil(blog.description.replace(/<[^>]+>/g, '').split(' ').length / 200)
                return (
                  <Link key={blog._id} to={`/blog/${blog._id}`}
                    className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E5B85C]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(229,184,92,0.08)] flex flex-col'>
                    <div className='relative overflow-hidden h-48'>
                      <img src={blog.image} alt={blog.title}
                        className='w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500' />
                      {i === 0 && (
                        <div className='absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-[#E5B85C] text-black text-xs font-bold rounded-full'>
                          <Star size={10} fill='black' /> Featured
                        </div>
                      )}
                    </div>
                    <div className='p-5 flex flex-col flex-grow'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='px-2.5 py-1 bg-[#E5B85C]/10 border border-[#E5B85C]/20 text-[#E5B85C] text-xs font-semibold rounded-full'>{blog.category}</span>
                        <span className='text-gray-500 text-xs flex items-center gap-1'><Clock size={11} /> {readTime} min read</span>
                      </div>
                      <h3 className='text-white font-semibold text-base leading-snug mb-2 group-hover:text-[#E5B85C] transition-colors line-clamp-2'>{blog.title}</h3>
                      <p className='text-gray-400 text-sm leading-relaxed line-clamp-2 flex-grow'>{blog.subTitle}</p>
                      <div className='flex items-center justify-between mt-4 pt-4 border-t border-white/10'>
                        <span className='text-gray-500 text-xs'>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className='text-[#E5B85C] text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all'>Read <ChevronRight size={13} /></span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {!active && (
          <div className='mt-4 text-center'>
            <div className='inline-flex flex-col items-center gap-4 p-10 bg-white/5 border border-white/10 rounded-3xl max-w-xl w-full'>
              <div className='flex -space-x-3'>
                {['#f59e0b', '#6366f1', '#10b981', '#ec4899'].map(c => (
                  <div key={c} className='w-10 h-10 rounded-full border-2 border-[#2a2a2a]' style={{ background: c }} />
                ))}
              </div>
              <h3 className='text-white font-bold text-xl'>Find your kind of blog</h3>
              <p className='text-gray-400 text-sm max-w-sm'>Click any category above to explore blogs from that type of blogger and see what resonates with you.</p>
              <Link to='/blog' className='px-7 py-3 bg-[#E5B85C] text-black font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 text-sm'>
                Browse All Blogs →
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.35s ease forwards; }
      `}</style>
    </div>
  )
}

export default Categories
