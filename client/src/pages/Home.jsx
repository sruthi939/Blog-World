import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import RecentBlogs from '../components/RecentBlogs'

const Home = () => {
  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />
      <Hero />
      {/* <Categories /> */}
      {/* <RecentBlogs /> */}
    </div>
  )
}

export default Home
