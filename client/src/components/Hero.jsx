import React from 'react'
import { ArrowRight } from 'lucide-react'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
   return (
      <div className='w-full min-h-[85vh] flex items-center justify-between px-8 sm:px-16 xl:px-24 bg-transparent relative z-10'>

         <div className='w-full lg:w-1/2 flex flex-col justify-center mt-[-10vh]'>

            <div className='flex items-center gap-2 text-[#E5B85C] font-semibold tracking-widest text-sm mb-6 uppercase'>
               <div className='w-2.5 h-2.5 rounded-full bg-[#E5B85C]'></div>
               WELCOME TO BLOG WORLD
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight'>
               Words that <span className='text-[#E5B85C]'>inspire,</span><br />
               stories that <span className='text-[#E5B85C]'>stay.</span>
            </h1>

            <p className='text-gray-300 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light'>
               Discover powerful stories, practical insights, and fresh ideas on life, tech, culture, and more.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-6'>
               <button className='w-full sm:w-auto px-8 py-3.5 bg-[#E5B85C] text-black font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 shadow-lg flex items-center justify-center gap-2'>
                  Explore Blogs <ArrowRight size={18} />
               </button>
            </div>
         </div>

         <div className='hidden md:flex w-1/2 justify-end items-center relative mt-[-5vh]'>
            <img
               src={hero_image}
               alt='Classical Statue with Gold Mask'
               className='max-w-[120%] w-[350px] lg:w-[450px] xl:w-[500px] object-contain drop-shadow-2xl mix-blend-normal'
            />
         </div>

      </div>
   )
}

export default Hero
