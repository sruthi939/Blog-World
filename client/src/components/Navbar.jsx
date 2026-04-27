import React, { useState, useContext } from 'react'
import { ArrowRight, Globe, Search, User, PenLine, LogOut, Shield } from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  
  const { user, logout } = useContext(AuthContext)

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/blog?search=${encodeURIComponent(search.trim())}`)
      setSearch('')
    }
  }

  const handleLogout = () => {
    logout()
    setShowDropdown(false)
    navigate('/')
  }

  // Links without About, Contact
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Blogs', path: '/blog' },
    { name: 'Categories', path: '/categories' },
    { name: 'Trending', path: '/trending' }
  ]

  return (
    <div className='w-full pt-8 px-8 sm:px-16 xl:px-24 flex justify-between items-center z-50 bg-transparent'>
      
      {/* Logo */}
      <div className='flex items-center gap-3 cursor-pointer' onClick={() => navigate('/')}>
        <div className='text-[#E5B85C]'>
           <Globe size={40} strokeWidth={1.5} />
        </div>
        <div className='flex flex-col'>
           <h1 className='text-2xl font-bold tracking-wide leading-none'>
             <span className='text-white'>BLOG</span> <span className='text-[#E5B85C]'>WORLD</span>
           </h1>
           <span className='text-gray-400 text-sm tracking-wider'>Stories that stay.</span>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className='hidden lg:flex items-center gap-10 font-medium text-sm text-gray-300'>
         {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path
            return (
              <span 
                key={i} 
                onClick={() => navigate(link.path)} 
                className={`cursor-pointer hover:text-white transition-colors relative pb-1
                  ${isActive ? 'text-[#E5B85C]' : ''}
                `}
              >
                 {link.name}
                 {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#E5B85C]'></span>
                 )}
              </span>
            )
         })}
      </div>

      {/* Right side Actions (Search + Login/Profile) */}
      <div className='flex items-center gap-4 sm:gap-6 relative'>
         <form onSubmit={handleSearch} className='relative hidden md:flex items-center'>
            <Search size={16} className='absolute left-4 text-gray-500' />
            <input 
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E5B85C]/50 transition-colors w-48 lg:w-64 placeholder-gray-500'
            />
         </form>

         {user ? (
           <div className='relative'>
             <button 
               onClick={() => setShowDropdown(!showDropdown)}
               className='flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white/5 border border-white/10 hover:border-[#E5B85C]/50 transition-colors cursor-pointer'
             >
               <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#E5B85C] to-[#c9994a] flex items-center justify-center'>
                 <span className='text-black font-bold text-sm'>{user.name.charAt(0).toUpperCase()}</span>
               </div>
               <span className='text-sm text-gray-300 font-medium hidden sm:block'>{user.name.split(' ')[0]}</span>
             </button>

             {/* Dropdown Menu */}
             {showDropdown && (
               <div className='absolute right-0 mt-3 w-48 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl py-2 z-50'>
                 <div className='px-4 py-3 border-b border-white/10 mb-2'>
                   <p className='text-white text-sm font-semibold truncate'>{user.name}</p>
                   <p className='text-gray-500 text-xs truncate'>{user.email}</p>
                 </div>
                 <Link to='/profile' onClick={() => setShowDropdown(false)} className='flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors'>
                   <User size={16} /> Profile & Settings
                 </Link>
                 {(user.role === 'admin' || user.role === 'writer') && (
                   <Link to='/editor/dashboard' onClick={() => setShowDropdown(false)} className='flex items-center gap-3 px-4 py-2.5 text-sm text-[#E5B85C] hover:bg-[#E5B85C]/10 transition-colors'>
                     <Shield size={16} /> Manage Portal (Editor)
                   </Link>
                 )}
                 <Link to='/write' onClick={() => setShowDropdown(false)} className='flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors'>
                   <PenLine size={16} /> Writer Studio
                 </Link>
                 <div className='h-px bg-white/10 my-2'></div>
                 <button onClick={handleLogout} className='w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors text-left'>
                   <LogOut size={16} /> Sign Out
                 </button>
               </div>
             )}
           </div>
         ) : (
           <button 
             onClick={() => navigate('/login')} 
             className='flex items-center gap-2 rounded-full text-sm font-medium cursor-pointer border border-[#E5B85C]/60 text-gray-300 px-6 py-2.5 hover:bg-[#E5B85C]/10 transition-all duration-300'
           >
             Login
             <ArrowRight size={16} className='text-[#E5B85C]' />
           </button>
         )}
      </div>

    </div>
  )
}

export default Navbar