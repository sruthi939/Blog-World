import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />
      <div className='flex-grow flex flex-col items-center justify-center px-6 text-center'>
        {/* Decorative rings */}
        <div className='relative w-52 h-52 flex items-center justify-center mb-10'>
          <div className='absolute w-52 h-52 rounded-full border-2 border-[#E5B85C]/20 animate-ping' style={{ animationDuration: '3s' }} />
          <div className='absolute w-36 h-36 rounded-full border-2 border-[#E5B85C]/30' />
          <span className='text-7xl font-black text-[#E5B85C] relative z-10' style={{ textShadow: '0 0 40px rgba(229,184,92,0.4)' }}>
            404
          </span>
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Page Not Found</h1>
        <p className='text-gray-400 text-lg max-w-md mb-10 leading-relaxed'>
          Looks like this page wandered off the map. It might have been moved, deleted, or never existed.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <Link to='/'
            className='flex items-center gap-2 px-8 py-3.5 bg-[#E5B85C] text-black font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 shadow-lg shadow-[#E5B85C]/20'>
            <Home size={18} /> Go Home
          </Link>
          <Link to='/blog'
            className='flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/15 text-gray-300 rounded-full hover:border-[#E5B85C]/50 hover:text-white transition-all duration-300'>
            <ArrowLeft size={18} /> Browse Articles
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
