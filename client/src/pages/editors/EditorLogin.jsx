import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, Sparkles, User } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const EditorLogin = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const endpoint = isLogin ? 'login' : 'register';
            const body = isLogin 
                ? { email, password } 
                : { name, email, password, role: 'admin' };

            const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (!data.success) {
                setError(data.message || 'Authentication failed.');
                setLoading(false);
                return;
            }

            // For existing users logging in, ensure they have editorial privileges
            if (isLogin && data.user.role !== 'admin' && data.user.role !== 'writer') {
                setError('Access denied: You do not have editorial privileges.');
                setLoading(false);
                return;
            }

            // Save token + user
            login(data.user, data.token);
            navigate('/editor/dashboard');

        } catch (err) {
            setError('Cannot connect to server. Please ensure the backend is running.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center font-sans selection:bg-[#E5B85C]/30 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E5B85C]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E5B85C]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="w-full max-w-md px-6 relative z-10">
                <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-[#E5B85C] to-[#F5D061] flex items-center justify-center shadow-[0_10px_30px_rgba(229,184,92,0.3)]">
                            <Shield size={36} className="text-black" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3 flex items-center justify-center gap-2">
                            Editor Portal
                            <Sparkles className="w-5 h-5 text-[#E5B85C]" />
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">Enter your credentials to access the moderation suite.</p>
                    </div>

                    {/* Alerts */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-xl mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleAuth} className="space-y-5">
                        {!isLogin && (
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5B85C]/50 transition-all"
                                    required={!isLogin}
                                />
                            </div>
                        )}

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="Editorial Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5B85C]/50 transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                <Lock size={18} />
                            </div>
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Access Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5B85C]/50 transition-all"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                            >
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[#E5B85C] to-[#c9994a] text-black font-extrabold rounded-2xl py-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(229,184,92,0.2)] hover:shadow-[0_0_30px_rgba(229,184,92,0.4)] transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                            ) : (
                                <>{isLogin ? 'Access Dashboard' : 'Create Staff Account'} <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    {/* Toggle Mode */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            {isLogin ? "New editorial staff?" : "Already have access?"}
                            <button 
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-[#E5B85C] font-bold hover:underline"
                            >
                                {isLogin ? "Register here" : "Sign in here"}
                            </button>
                        </p>
                    </div>

                    {/* Quick Access for Demo */}
                    {isLogin && (
                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold mb-4">Fast Authorization</p>
                            <button
                                onClick={() => {
                                    setEmail('sruthi.alex@blogworld.com');
                                    setPassword('password123');
                                }}
                                className="text-xs font-bold text-gray-500 hover:text-[#E5B85C] transition-colors flex items-center justify-center gap-2 mx-auto"
                            >
                                Authorize as Sruthi Alex (Chief Editor)
                            </button>
                        </div>
                    )}
                </div>
                
                <p className="text-center mt-10 text-gray-600 text-xs font-medium">
                    Blog-World Editorial System v4.2.0 • Restricted Access
                </p>
            </div>
        </div>
    );
};

export default EditorLogin;
