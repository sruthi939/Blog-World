import React from 'react';

const RejectModal = () => {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Reject Post</h2>
                <textarea className="w-full bg-black/40 border border-white/10 rounded p-3 text-white mb-4" placeholder="Reason for rejection..."></textarea>
                <div className="flex justify-end gap-4">
                    <button className="text-gray-400 hover:text-white">Cancel</button>
                    <button className="bg-red-500 text-white px-6 py-2 rounded font-bold">Reject</button>
                </div>
            </div>
        </div>
    );
};
export default RejectModal;