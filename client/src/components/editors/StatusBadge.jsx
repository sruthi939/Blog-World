import React from 'react';

const StatusBadge = ({ status }) => {
    const colors = {
        Pending: 'bg-yellow-500/20 text-yellow-500',
        Published: 'bg-green-500/20 text-green-500',
        Rejected: 'bg-red-500/20 text-red-500',
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs ${colors[status] || 'bg-gray-500/20 text-gray-500'}`}>
            {status}
        </span>
    );
};
export default StatusBadge;