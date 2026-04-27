import React, { useState, useEffect, useContext } from 'react';
import StatusBadge from './StatusBadge';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const PostTable = ({ statusFilter = 'Pending' }) => {
    const { token } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const endpoint = statusFilter === 'Pending' ? 'pending' : 'published';
                const response = await fetch(`http://localhost:5000/api/editor/${endpoint}`, {
                    headers: {
                        'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setPosts(data.posts);
                }
            } catch (error) {
                console.error(`Failed to fetch ${statusFilter} posts`, error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [token, statusFilter]);

    const handleApprove = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/editor/approve/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}`
                }
            });
            setPosts(posts.filter(post => post._id !== id));
        } catch (error) {
            console.error('Failed to approve', error);
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-[#E5B85C] font-bold">Loading {statusFilter.toLowerCase()} posts...</div>;
    }

    return (
        <div className="w-full">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-gray-500 font-extrabold">
                        <th className="pb-4 px-4">Post Title</th>
                        <th className="pb-4 px-4">Author</th>
                        <th className="pb-4 px-4 text-center">Status</th>
                        <th className="pb-4 px-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {posts.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="py-8 text-center text-gray-500 font-medium">No {statusFilter.toLowerCase()} posts found.</td>
                        </tr>
                    ) : (
                        posts.map(post => (
                            <tr key={post._id} className="group hover:bg-white/[0.02] transition-all duration-300">
                                <td className="py-5 px-4">
                                    <p className="font-bold text-gray-200 group-hover:text-[#E5B85C] transition-colors">{post.title || 'Untitled'}</p>
                                    <p className="text-xs text-gray-500 mt-1">Submitted {new Date(post.createdAt).toLocaleDateString()}</p>
                                </td>
                                <td className="py-5 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-gray-300 border border-white/10 shadow-inner uppercase">
                                            {(post.author?.name || 'A')[0]}
                                        </div>
                                        <span className="text-gray-300 font-medium">{post.author?.name || 'Anonymous'}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-4 text-center">
                                    <StatusBadge status={statusFilter} />
                                </td>
                                <td className="py-5 px-4 text-right flex justify-end gap-2">
                                    {statusFilter === 'Pending' ? (
                                        <button onClick={() => handleApprove(post._id)} className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                            <CheckCircle className="w-4 h-4" />
                                            Approve
                                        </button>
                                    ) : (
                                        <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E5B85C]/10 hover:bg-[#E5B85C]/20 border border-[#E5B85C]/30 rounded-lg text-xs font-bold text-[#E5B85C] transition-all shadow-[0_0_10px_rgba(229,184,92,0.1)] hover:shadow-[0_0_15px_rgba(229,184,92,0.3)]">
                                            <Eye className="w-4 h-4" />
                                            View
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default PostTable;