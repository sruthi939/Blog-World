import React from 'react';
import StatusBadge from './StatusBadge';

const PostTable = () => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                        <th className="pb-3">Post Title</th>
                        <th className="pb-3">Author</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-white/5">
                        <td className="py-4">Sample Post</td>
                        <td className="py-4">Author Name</td>
                        <td className="py-4"><StatusBadge status="Pending" /></td>
                        <td className="py-4"><button className="text-[#E5B85C]">Review</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default PostTable;