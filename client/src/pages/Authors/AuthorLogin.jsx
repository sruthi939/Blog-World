import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenSquare, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, Sparkles, User } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const AuthorLogin = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isRegister ? 'register' : 'login';
      const body = isRegister 
        ? { ...formData, role: 'writer' } 
        : { email: formData.email, password: formData.password };

      const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (data.success) {
        login(data.token, data.user);
        navigate('/author/dashboard');
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Connection to server failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fastAuth = () => {
    setFormData({
      email: 'james.wilson@blogworld.com',
      password: 'author123'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 font-sans selection:bg-emerald-500/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-[440px] relative z-10">
        <div className="bg-[#121212]/80 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <PenSquare className="text-black w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">
              {isRegister ? 'Join the Studio' : 'Author Login'}
            </h1>
            <p className="text-gray-500 font-medium">
              {isRegister ? 'Start your creative journey today' : 'Manage your articles and reach'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-2xl text-sm mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all"
                    placeholder="Dr. James Wilson"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all"
                  placeholder="name@blogworld.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                {!isRegister && <button type="button" className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter hover:underline">Forgot?</button>}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.08] transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-black py-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 group mt-8"
            >
              {loading ? <Loader2 className="animate-spin" /> : (
                <>
                  {isRegister ? 'Create Studio Account' : 'Enter Studio'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-center mt-8 text-gray-500 text-sm font-medium">
            {isRegister ? 'Already have an account?' : 'Want to join the staff?'}
            <button
              onClick={() => { setIsRegister(!isRegister); setError(''); }}
              className="ml-2 text-emerald-500 font-bold hover:underline"
            >
              {isRegister ? 'Sign In' : 'Register Creator Account'}
            </button>
          </p>

          {/* Fast Auth for Demo */}
          {!isRegister && (
            <div className="mt-8 pt-8 border-t border-white/5">
              <button
                onClick={fastAuth}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={14} />
                Fast Authorization (Dr. Wilson)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorLogin;
