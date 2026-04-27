import React, { useContext } from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import { FiUser, FiMail, FiMapPin, FiTwitter, FiGithub, FiEdit3, FiAward } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const mockProfile = {
  name: 'Sruthi Alex',
  role: 'admin',
  email: 'sruthi.alex@blogworld.com',
  avatar: 'https://i.pravatar.cc/150?u=sruthi',
  location: 'San Francisco, CA',
  bio: 'Chief Editorial Director with over 10 years of experience in technical journalism and digital media strategy. Passionate about AI, sustainability, and the future of web technologies.',
  social: {
    twitter: '@sruthi_editorial',
    github: 'sruthi-alex'
  },
  stats: {
    reviewed: 124,
    published: 86,
    rating: '4.9'
  }
};

const EditorProfile = () => {
  const { user } = useContext(AuthContext);
  const profile = user || mockProfile;
  return (
    <div className="flex bg-[#121212] min-h-screen text-white font-sans selection:bg-[#E5B85C] selection:text-black">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar />
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-10 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-4xl font-bold text-[#E5B85C] mb-2 tracking-tight">Editor Profile</h1>
              <p className="text-gray-400">Manage your personal information and preferences.</p>
            </div>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full font-medium transition-all">
              <FiEdit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#E5B85C]/20 to-transparent"></div>
                
                <div className="relative mb-6 mt-4">
                  <div className="absolute inset-0 bg-[#E5B85C] rounded-full blur-md opacity-20"></div>
                  <img src={profile.avatar || mockProfile.avatar} alt={profile.name} className="w-32 h-32 rounded-full border-4 border-[#121212] relative z-10 object-cover" />
                  <div className="absolute bottom-0 right-0 bg-[#E5B85C] text-black p-2 rounded-full border-2 border-[#121212] z-20">
                    <FiAward className="w-4 h-4" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-1">{profile.name}</h2>
                <p className="text-[#E5B85C] font-medium mb-6">{profile.role === 'admin' ? 'Chief Editorial Director' : (profile.role || 'Senior Editor')}</p>
                
                <div className="w-full space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400 bg-black/20 p-3 rounded-xl">
                    <FiMail className="w-4 h-4 text-gray-500" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 bg-black/20 p-3 rounded-xl">
                    <FiMapPin className="w-4 h-4 text-gray-500" />
                    <span>{profile.location || 'San Francisco, CA'}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Social Presence</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#E5B85C] transition-colors p-2 hover:bg-white/5 rounded-lg">
                    <FiTwitter className="w-5 h-5" />
                    <span className="text-sm">{profile.social?.twitter || mockProfile.social?.twitter || '@editor_tech'}</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#E5B85C] transition-colors p-2 hover:bg-white/5 rounded-lg">
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm">{profile.social?.github || mockProfile.social?.github || 'editor_profile'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Posts Reviewed</p>
                  <p className="text-3xl font-bold text-white">{profile.stats?.reviewed || mockProfile.stats?.reviewed || 0}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Published</p>
                  <p className="text-3xl font-bold text-white">{profile.stats?.published || mockProfile.stats?.published || 0}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Avg Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-3xl font-bold text-[#E5B85C]">{profile.stats?.rating || mockProfile.stats?.rating || '5.0'}</p>
                    <span className="text-[#E5B85C] text-sm">★</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <FiUser className="w-5 h-5 text-[#E5B85C]" />
                  About Me
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {profile.bio || mockProfile.bio || 'Professional Editor at Blog-World.'}
                </p>
              </div>

              {/* Settings Preview */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 text-white">Quick Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                    <div>
                      <h4 className="font-medium text-white">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive alerts for new post submissions</p>
                    </div>
                    <div className="w-12 h-6 bg-[#E5B85C] rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                    <div>
                      <h4 className="font-medium text-white">Public Profile</h4>
                      <p className="text-sm text-gray-500">Allow authors to see your profile details</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default EditorProfile;