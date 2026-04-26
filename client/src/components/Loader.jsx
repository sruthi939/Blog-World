import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-[#2a2a2a]'
      style={{ animation: 'fadeOut 0.4s ease 1.2s forwards' }}>

      <style>{`
        @keyframes spinCW  { to { transform: rotate(360deg);  } }
        @keyframes spinCCW { to { transform: rotate(-360deg); } }
        @keyframes fadeOut { to { opacity: 0; pointer-events: none; } }
      `}</style>

      {/* Container */}
      <div className='relative w-36 h-36 flex items-center justify-center'>

        {/* Outer ring */}
        <div
          className='absolute w-36 h-36 rounded-full border-[3px] border-transparent'
          style={{
            borderTopColor: '#E5B85C',
            borderRightColor: '#E5B85C',
            animation: 'spinCW 1s linear infinite'
          }}
        />

        {/* Inner ring */}
        <div
          className='absolute w-24 h-24 rounded-full border-[3px] border-transparent'
          style={{
            borderBottomColor: '#c9994a',
            borderLeftColor: '#c9994a',
            animation: 'spinCCW 0.8s linear infinite'
          }}
        />

        {/* Center text */}
        <div className='absolute flex flex-col items-center leading-none gap-0.5'>
          <span className='text-[11px] font-extrabold tracking-[3px] text-white'>BLOG</span>
          <span className='text-[11px] font-extrabold tracking-[3px] text-[#E5B85C]'>WORLD</span>
        </div>

      </div>
    </div>
  )
}

export default Loader
