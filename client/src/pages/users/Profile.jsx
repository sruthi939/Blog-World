import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { blog_data } from '../../assets/assets'
import { User, BookOpen, Bookmark, Settings, LogOut, ChevronRight, Clock } from 'lucide-react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('saved')
  const saved = blog_data.slice(0, 4)
  const tabs = ['saved', 'settings']

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      <div className='max-w-5xl mx-auto w-full px-6 sm:px-12 pt-20 pb-16'>
        {/* Profile Header */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 p-8 bg-white/5 border border-white/10 rounded-3xl'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#E5B85C] to-[#c9994a] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E5B85C]/20'>
            <User size={40} className='text-black' />
          </div>
          <div className='flex-grow text-center sm:text-left'>
            <h1 className='text-2xl font-bold text-white mb-1'>Reader</h1>
            <p className='text-gray-400 text-sm mb-4'>reader@blogworld.com</p>
            <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
              <div className='text-center'>
                <p className='text-[#E5B85C] font-bold text-lg'>{saved.length}</p>
                <p className='text-gray-500 text-xs'>Saved</p>
              </div>
              <div className='text-center'>
                <p className='text-[#E5B85C] font-bold text-lg'>12</p>
                <p className='text-gray-500 text-xs'>Read</p>
              </div>
            </div>
          </div>
          <button className='flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/15 text-gray-300 text-sm rounded-full hover:border-red-500/50 hover:text-red-400 transition-all'>
            <LogOut size={15} /> Sign Out
          </button>
        </div>

        {/* Tabs */}
        <div className='flex gap-1 bg-white/5 border border-white/10 rounded-xl p-1 w-fit mb-8'>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${activeTab === tab ? 'bg-[#E5B85C] text-black' : 'text-gray-400 hover:text-white'}`}>
              {tab === 'saved' ? <span className='flex items-center gap-2'><Bookmark size={14} /> Saved Articles</span> : <span className='flex items-center gap-2'><Settings size={14} /> Settings</span>}
            </button>
          ))}
        </div>

        {/* Saved Articles */}
        {activeTab === 'saved' && (
          <div className='space-y-4'>
            {saved.map(blog => {
              const readTime = Math.ceil(blog.description.replace(/<[^>]+>/g, '').split(' ').length / 200)
              return (
                <Link key={blog._id} to={`/blog/${blog._id}`}
                  className='group flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#E5B85C]/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(229,184,92,0.08)]'>
                  <img src={blog.image} alt={blog.title} className='w-20 h-20 rounded-xl object-cover flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity' />
                  <div className='flex-grow min-w-0'>
                    <span className='text-[#E5B85C] text-xs font-semibold uppercase tracking-wider'>{blog.category}</span>
                    <h3 className='text-white font-semibold text-base mt-1 line-clamp-1 group-hover:text-[#E5B85C] transition-colors'>{blog.title}</h3>
                    <p className='text-gray-500 text-xs mt-1 flex items-center gap-1'><Clock size={11} /> {readTime} min read · {new Date(blog.createdAt).toLocaleDateString()}</p>
                  </div>
                  <ChevronRight size={18} className='text-gray-600 group-hover:text-[#E5B85C] transition-colors flex-shrink-0' />
                </Link>
              )
            })}
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className='bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6'>
            <h3 className='text-white font-semibold text-lg mb-6'>Account Settings</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {[['Full Name', 'Reader'], ['Email Address', 'reader@blogworld.com'], ['Username', '@reader'], ['Bio', 'Passionate reader and thinker.']].map(([label, val]) => (
                <div key={label}>
                  <label className='text-gray-400 text-xs font-medium uppercase tracking-wider mb-2 block'>{label}</label>
                  <input type='text' defaultValue={val}
                    className='w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E5B85C]/50 transition-colors' />
                </div>
              ))}
            </div>
            <div className='pt-4 border-t border-white/10'>
              <button className='px-8 py-3 bg-[#E5B85C] text-black font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 text-sm'>
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
