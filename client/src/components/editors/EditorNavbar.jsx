import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Bell, LogOut, ExternalLink, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditorNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/editor/login');
    };

    return (
        <div className="h-20 border-b border-white/5 bg-[#121212] flex items-center justify-between px-10 sticky top-0 z-50">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#E5B85C] font-bold text-sm uppercase tracking-widest">
                    <Shield size={16} />
                    Verified Editorial Portal
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-semibold transition-all group"
                >
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Main Website
                </button>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-[#E5B85C] transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#121212]"></span>
                </button>
                
                <div className="h-8 w-px bg-white/10"></div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-white leading-none mb-1">{user?.name || 'Sruthi Alex'}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-tighter font-bold">{user?.role || 'Chief Editor'}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5B85C] to-[#c9994a] border-2 border-white/10 flex items-center justify-center text-black font-black">
                        {user?.name?.charAt(0) || 'S'}
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="p-2.5 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
                        title="Sign Out"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default EditorNavbar;