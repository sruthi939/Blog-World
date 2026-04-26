import React from 'react';
import Sidebar from '../../components/author/Sidebar';
import Navbar from '../../components/author/Navbar';

const AuthorProfile = () => {
  return (
    <div className="flex bg-[#0B0E14] min-h-screen text-gray-200 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar title="My Profile" />
        <div className="p-8 overflow-y-auto max-w-4xl">
          <div className="bg-[#151A23] rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00E5FF] to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                A
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Author Name</h2>
                <p className="text-[#00E5FF]">Lead Writer</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Display Name</label>
                <input type="text" defaultValue="Author Name" className="w-full bg-[#0B0E14] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Bio</label>
                <textarea rows="4" className="w-full bg-[#0B0E14] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors" defaultValue="Writing about technology, design, and the future."></textarea>
              </div>
              <button className="bg-[#00E5FF] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#00c9e0] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">Save Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthorProfile;