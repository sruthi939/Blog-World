import React, { useState } from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import { Save, ArrowLeft, Eye, MessageSquare, CheckCircle, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState(`The rapid advancement of artificial intelligence is no longer just a trend—it's a fundamental shift in how we perceive technology. As we move into 2026, the integration of generative models into daily workflows has reached a tipping point...`);

    return (
        <div className="flex bg-[#0a0a0a] min-h-screen text-white font-sans">
            <EditorSidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <div className="h-20 px-8 flex items-center justify-between border-b border-white/5 bg-[#121212] sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all">
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">Edit Submission</h1>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">ID: BW-9482-AI</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl text-sm font-semibold transition-all">
                            <Eye size={16} /> Preview
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 bg-[#E5B85C] hover:bg-[#d4a74b] text-black rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(229,184,92,0.2)]">
                            <Save size={16} /> Save Changes
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    {/* Main Editor Area */}
                    <div className="flex-1 overflow-y-auto p-10 bg-[#0a0a0a]">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Article Title</label>
                                <input 
                                    type="text" 
                                    defaultValue="The Silent Revolution: AI in 2026"
                                    className="w-full bg-transparent text-4xl font-black text-white focus:outline-none placeholder-gray-800 border-l-4 border-[#E5B85C] pl-6"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Content Editor</label>
                                <textarea 
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full h-[500px] bg-white/5 border border-white/10 rounded-3xl p-8 text-gray-300 leading-relaxed focus:outline-none focus:border-[#E5B85C]/30 transition-all resize-none font-serif text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Editorial Sidebar */}
                    <div className="w-80 border-l border-white/5 bg-[#121212] overflow-y-auto p-6 space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <Info size={16} className="text-[#E5B85C]" />
                                Meta Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] text-gray-600 uppercase font-bold mb-1">Status</p>
                                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-bold border border-yellow-500/20">In Review</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-600 uppercase font-bold mb-1">Category</p>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none">
                                        <option>Technology</option>
                                        <option>Finance</option>
                                        <option>Lifestyle</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <MessageSquare size={16} className="text-[#E5B85C]" />
                                Editorial Notes
                            </h3>
                            <textarea 
                                placeholder="Add internal feedback for the author..."
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-gray-400 focus:outline-none focus:border-[#E5B85C]/30 resize-none"
                            />
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <button className="w-full py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-xs font-bold border border-emerald-500/20 transition-all flex items-center justify-center gap-2">
                                <CheckCircle size={16} /> Mark as Approved
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;