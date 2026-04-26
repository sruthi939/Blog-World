import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'

const API = 'http://localhost:5000/api/auth'

const Login = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const { login } = useContext(AuthContext)

  // Form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  // UI state
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const switchMode = () => {
    setIsLogin(p => !p)
    setError('')
    setSuccess('')
    setName('')
    setEmail('')
    setPassword('')
  }

  const validate = () => {
    if (!isLogin && !name.trim()) return 'Please enter your full name.'
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return 'Please enter a valid email address.'
    if (password.length < 6) return 'Password must be at least 6 characters.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const validationError = validate()
    if (validationError) return setError(validationError)

    setLoading(true)
    try {
      const endpoint = isLogin ? `${API}/login` : `${API}/register`
      const body = isLogin ? { email, password } : { name, email, password }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const data = await res.json()

      if (!data.success) {
        setError(data.message || 'Something went wrong.')
        return
      }

      // Save token + user
      login(data.user, data.token)

      setSuccess(data.message)
      setTimeout(() => navigate('/'), 1200)

    } catch {
      setError('Cannot connect to server. Please make sure the server is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      <div className='w-full flex-grow flex items-center justify-center py-20 relative overflow-hidden'>
        {/* Ambient glow */}
        <div className='absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#E5B85C]/10 blur-[150px] rounded-full pointer-events-none' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E5B85C]/5 blur-[120px] rounded-full pointer-events-none' />

        <div className='relative z-10 w-full max-w-md px-6'>
          <div className='bg-[#1e1e1e]/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

            {/* Header */}
            <div className='text-center mb-8'>
              <div className='w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#E5B85C] to-[#c9994a] flex items-center justify-center shadow-lg shadow-[#E5B85C]/20'>
                <User size={26} className='text-black' />
              </div>
              <h2 className='text-3xl font-bold text-white tracking-tight mb-2'>
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className='text-gray-400 text-sm'>
                {isLogin
                  ? 'Sign in to access your Blog-World dashboard.'
                  : 'Join Blog-World to share and discover amazing stories.'}
              </p>
            </div>

            {/* Alerts */}
            {error && (
              <div className='flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-6'>
                <AlertCircle size={16} className='flex-shrink-0 mt-0.5' />
                {error}
              </div>
            )}
            {success && (
              <div className='flex items-start gap-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-xl px-4 py-3 mb-6'>
                <CheckCircle size={16} className='flex-shrink-0 mt-0.5' />
                {success}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

              {/* Name (sign up only) */}
              {!isLogin && (
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500'>
                    <User size={18} />
                  </div>
                  <input
                    type='text'
                    placeholder='Full Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-[#E5B85C]/50 transition-colors placeholder-gray-500 text-sm'
                  />
                </div>
              )}

              {/* Email */}
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500'>
                  <Mail size={18} />
                </div>
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-[#E5B85C]/50 transition-colors placeholder-gray-500 text-sm'
                />
              </div>

              {/* Password */}
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500'>
                  <Lock size={18} />
                </div>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-white focus:outline-none focus:border-[#E5B85C]/50 transition-colors placeholder-gray-500 text-sm'
                />
                <button
                  type='button'
                  onClick={() => setShowPass(p => !p)}
                  className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors'
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password strength hint on signup */}
              {!isLogin && password.length > 0 && (
                <div className='flex gap-1.5 mt-1'>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${password.length >= 12 ? 'bg-green-500' :
                        password.length >= 8 ? (i < 3 ? 'bg-yellow-400' : 'bg-white/10') :
                          password.length >= 6 ? (i < 2 ? 'bg-orange-400' : 'bg-white/10') :
                            (i < 1 ? 'bg-red-400' : 'bg-white/10')
                      }`} />
                  ))}
                  <span className='text-xs text-gray-500 ml-1'>
                    {password.length >= 12 ? 'Strong' : password.length >= 8 ? 'Good' : password.length >= 6 ? 'Weak' : 'Too short'}
                  </span>
                </div>
              )}

              {/* Forgot password */}
              {isLogin && (
                <div className='flex justify-end -mt-1'>
                  <a href='#' className='text-[#E5B85C] text-xs font-medium hover:text-[#f0cc7a] transition-colors'>
                    Forgot Password?
                  </a>
                </div>
              )}

              {/* Submit */}
              <button
                type='submit'
                disabled={loading}
                className='w-full bg-[#E5B85C] text-black font-bold rounded-xl px-6 py-4 mt-2 hover:bg-[#d5a84b] transition-all duration-300 shadow-[0_0_20px_rgba(229,184,92,0.25)] hover:shadow-[0_0_30px_rgba(229,184,92,0.4)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed'
              >
                {loading
                  ? <><Loader2 size={18} className='animate-spin' /> Processing...</>
                  : <>{isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} /></>
                }
              </button>
            </form>

            {/* Switch mode */}
            <div className='mt-8 text-center'>
              <p className='text-gray-400 text-sm'>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={switchMode}
                  className='text-[#E5B85C] font-semibold hover:text-[#f0cc7a] transition-colors ml-2'
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
