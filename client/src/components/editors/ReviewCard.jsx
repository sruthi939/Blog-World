import React from 'react';

const ReviewCard = () => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Reviewing: The Future of AI</h3>
            <p className="text-gray-400 mb-6">By Author Name</p>
            <div className="flex gap-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
            </div>
        </div>
    );
};
export default ReviewCard;