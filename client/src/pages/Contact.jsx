import React from 'react'
import Navbar from '../components/Navbar'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#121212] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black'>
      <Navbar />
      
      {/* Hero Section */}
      <div className='relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/5'>
         <div className='absolute top-[-50%] right-[-10%] w-[60%] h-[100%] bg-[#D4AF37]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none'></div>
         
         <div className='relative z-10 text-center px-6 max-w-3xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg'>
              Get in <span className='text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#FFF0B3]'>Touch</span>
            </h1>
            <p className='text-gray-400 text-lg md:text-xl leading-relaxed'>
              Have a question, feedback, or a story to share? We'd love to hear from you. Reach out to the Blog-World team today.
            </p>
         </div>
      </div>

      {/* Main Content */}
      <div className='w-full py-24 relative flex-grow'>
         <div className='absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none'></div>
         
         <div className='max-w-7xl mx-auto px-6 sm:px-12 relative z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
               
               {/* Contact Information */}
               <div>
                  <h2 className='text-3xl font-bold text-white mb-6'>Contact Information</h2>
                  <p className='text-gray-400 leading-relaxed mb-12'>
                     Whether you're looking to partner with us, have a support request, or simply want to say hello, our inbox is always open.
                  </p>
                  
                  <div className='flex flex-col gap-8'>
                     <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] shadow-inner'>
                           <MapPin size={20} />
                        </div>
                        <div>
                           <h4 className='text-white font-semibold text-lg mb-1'>Office Location</h4>
                           <p className='text-gray-400'>123 Innovation Drive, Tech District<br />San Francisco, CA 94105</p>
                        </div>
                     </div>
                     
                     <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] shadow-inner'>
                           <Phone size={20} />
                        </div>
                        <div>
                           <h4 className='text-white font-semibold text-lg mb-1'>Phone Number</h4>
                           <p className='text-gray-400'>+1 (555) 123-4567<br />Mon-Fri from 9am to 6pm PST</p>
                        </div>
                     </div>
                     
                     <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] shadow-inner'>
                           <Mail size={20} />
                        </div>
                        <div>
                           <h4 className='text-white font-semibold text-lg mb-1'>Email Address</h4>
                           <p className='text-gray-400'>support@blogworld.com<br />partnerships@blogworld.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Contact Form */}
               <div className='bg-[#1A1A1A]/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden'>
                  <div className='absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#D4AF37]/10 blur-[50px] rounded-full pointer-events-none'></div>
                  
                  <h3 className='text-2xl font-bold text-white mb-6'>Send us a Message</h3>
                  
                  <form className='flex flex-col gap-6' onSubmit={(e) => e.preventDefault()}>
                     <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='flex-1'>
                           <label className='block text-gray-400 text-sm mb-2'>First Name</label>
                           <input type='text' placeholder='John' className='w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors' />
                        </div>
                        <div className='flex-1'>
                           <label className='block text-gray-400 text-sm mb-2'>Last Name</label>
                           <input type='text' placeholder='Doe' className='w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors' />
                        </div>
                     </div>
                     
                     <div>
                        <label className='block text-gray-400 text-sm mb-2'>Email Address</label>
                        <input type='email' placeholder='john@example.com' className='w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors' />
                     </div>
                     
                     <div>
                        <label className='block text-gray-400 text-sm mb-2'>Message</label>
                        <textarea rows={4} placeholder='How can we help you?' className='w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none'></textarea>
                     </div>
                     
                     <button type='submit' className='w-full bg-[#D4AF37] text-black font-semibold rounded-lg px-6 py-3.5 mt-2 hover:bg-[#F3D568] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2'>
                        Send Message <Send size={18} />
                     </button>
                  </form>
               </div>
               
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
