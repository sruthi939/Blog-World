import React from 'react'
import Navbar from '../../components/Navbar'
import { Target, Users, Zap, Award } from 'lucide-react'

const About = () => {
   return (
      <div className='min-h-screen bg-[#121212] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black'>
         <Navbar />

         {/* Hero Section */}
         <div className='relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/5'>
            <div className='absolute top-[-50%] right-[-10%] w-[60%] h-[100%] bg-[#D4AF37]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none'></div>

            <div className='relative z-10 text-center px-6 max-w-3xl mx-auto'>
               <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg'>
                  About <span className='text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#FFF0B3]'>Blog-World</span>
               </h1>
               <p className='text-gray-400 text-lg md:text-xl leading-relaxed'>
                  We are on a mission to democratize storytelling, giving every voice a platform and every reader a window into new perspectives.
               </p>
            </div>
         </div>

         {/* Content Section */}
         <div className='w-full py-24 relative flex-grow'>
            <div className='absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-6 sm:px-12 relative z-10'>

               {/* Story */}
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24'>
                  <div>
                     <h2 className='text-3xl font-bold text-white mb-6'>Our Story</h2>
                     <p className='text-gray-400 leading-relaxed mb-6'>
                        Founded in 2026, Blog-World emerged from a simple idea: the internet needs a quieter, more thoughtful place for long-form content. Away from the noise of infinite scrolling and rapid-fire social media, we built a sanctuary for ideas that matter.
                     </p>
                     <p className='text-gray-400 leading-relaxed'>
                        What started as a small project has grown into a global community of writers, thinkers, and industry leaders sharing their insights on technology, startups, lifestyle, and finance.
                     </p>
                  </div>
                  <div className='relative'>
                     <div className='absolute inset-0 bg-linear-to-tr from-[#D4AF37]/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10'></div>
                     <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Our Team"
                        className='rounded-2xl border border-white/10 shadow-2xl object-cover h-80 w-full opacity-90 hover:opacity-100 transition-opacity duration-500'
                     />
                  </div>
               </div>

               {/* Core Values */}
               <div className='mb-16'>
                  <div className='text-center mb-16'>
                     <h2 className='text-3xl font-bold text-white mb-4'>Our Core Values</h2>
                     <p className='text-gray-400 max-w-2xl mx-auto'>We are guided by principles that prioritize quality, community, and innovation.</p>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                     {[
                        { icon: <Target className='text-[#D4AF37]' size={32} />, title: 'Purpose-Driven', desc: 'Every feature we build serves the goal of elevating great writing.' },
                        { icon: <Users className='text-[#D4AF37]' size={32} />, title: 'Community First', desc: 'We foster a respectful, engaging environment for readers and authors.' },
                        { icon: <Zap className='text-[#D4AF37]' size={32} />, title: 'Innovation', desc: 'We leverage modern tech to provide a seamless, blazing-fast experience.' },
                        { icon: <Award className='text-[#D4AF37]' size={32} />, title: 'Quality', desc: 'A premium aesthetic paired with top-tier content curation.' }
                     ].map((val, idx) => (
                        <div key={idx} className='bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 group shadow-lg'>
                           <div className='w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors shadow-inner'>
                              {val.icon}
                           </div>
                           <h3 className='text-xl font-bold text-white mb-3'>{val.title}</h3>
                           <p className='text-gray-400 text-sm leading-relaxed'>{val.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default About
