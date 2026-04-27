import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PenSquare, 
  Files, 
  FileEdit, 
  BarChart3, 
  UserCircle,
  Settings,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/author/dashboard' },
    { icon: PenSquare, label: 'Create Post', path: '/author/create-post' },
    { icon: Files, label: 'My Published', path: '/author/my-posts' },
    { icon: FileEdit, label: 'Drafts', path: '/author/drafts' },
    { icon: BarChart3, label: 'Analytics', path: '/author/analytics' },
    { icon: UserCircle, label: 'Profile', path: '/author/profile' },
  ];

  return (
    <div className="w-72 bg-[#0a0a0a] border-r border-white/5 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <PenSquare className="text-black w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tighter italic">WRITER<span className="text-emerald-500">STUDIO</span></h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Author Panel</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                  </div>
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-all ${isActive ? 'opacity-100 translate-x-0' : '-translate-x-2'}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-white/5 bg-gradient-to-t from-emerald-500/5 to-transparent">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Creator Status</p>
          </div>
          <p className="text-xs text-white font-medium mb-1">Pro Member</p>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-3/4 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;