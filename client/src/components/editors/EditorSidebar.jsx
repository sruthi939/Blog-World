import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileClock, ClipboardCheck, FileCheck, CalendarClock, Tags, MessageSquare, UserCircle } from 'lucide-react';

const EditorSidebar = () => {
    const location = useLocation();

    const links = [
        { name: 'Dashboard', path: '/editor/dashboard', icon: LayoutDashboard },
        { name: 'Pending Posts', path: '/editor/pending', icon: FileClock },
        { name: 'Review Queue', path: '/editor/review', icon: ClipboardCheck },
        { name: 'Published Posts', path: '/editor/published', icon: FileCheck },
        { name: 'Scheduled Posts', path: '/editor/scheduled', icon: CalendarClock },
        { name: 'Categories', path: '/editor/categories', icon: Tags },
        { name: 'Comments', path: '/editor/comments', icon: MessageSquare },
        { name: 'Profile', path: '/editor/profile', icon: UserCircle },
    ];

    return (
        <div className="w-72 bg-[#121212] border-r border-white/5 h-screen sticky top-0 flex flex-col shadow-2xl">
            <div className="p-8 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E5B85C] to-[#F5D061] flex items-center justify-center shadow-[0_0_15px_rgba(229,184,92,0.3)]">
                        <span className="text-black font-bold text-lg">EP</span>
                    </div>
                    <span className="text-[#E5B85C] font-extrabold text-2xl tracking-wide">Editor Panel</span>
                </div>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Moderation Menu</p>
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;
                    return (
                        <Link 
                            key={link.path} 
                            to={link.path} 
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 relative group ${isActive ? 'bg-[#E5B85C]/10 text-[#E5B85C]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#E5B85C] rounded-r-full shadow-[0_0_10px_rgba(229,184,92,0.5)]"></div>}
                            <Icon className={`w-5 h-5 ${isActive ? 'text-[#E5B85C]' : 'text-gray-500 group-hover:text-gray-300'}`} />
                            <span className="font-medium text-[15px]">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
export default EditorSidebar;