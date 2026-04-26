import React from 'react';

const Publish = () => {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Publish Post</h2>
                <p className="text-gray-400 mb-6">Are you sure you want to publish this post immediately?</p>
                <div className="flex justify-end gap-4">
                    <button className="text-gray-400 hover:text-white">Cancel</button>
                    <button className="bg-[#E5B85C] text-black px-6 py-2 rounded font-bold">Publish Now</button>
                </div>
            </div>
        </div>
    );
};
export default Publish;