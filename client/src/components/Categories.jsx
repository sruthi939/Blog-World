import React from 'react'
import { blogCategories } from '../assets/assets'

const Categories = () => {
  return (
    <div className='w-full py-12 bg-[#0A0A0A] border-y border-white/5'>
      <div className='max-w-7xl mx-auto px-6 sm:px-12'>
        <div className='flex items-center justify-between mb-8'>
           <h2 className='text-2xl font-bold text-white tracking-wide'>Explore Categories</h2>
        </div>
        <div className='flex flex-wrap gap-4'>
           {blogCategories.map((category, index) => (
             <button 
               key={index}
               className={`px-6 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium tracking-wide
                 ${index === 0 
                   ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                   : 'bg-transparent text-gray-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'}`}
             >
               {category}
             </button>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
