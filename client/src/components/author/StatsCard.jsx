import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#151A23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#00E5FF]/30 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-[#00E5FF]/10 transition-colors"></div>
      <p className="text-gray-400 text-sm font-medium mb-1 relative z-10">{title}</p>
      <h3 className="text-4xl font-bold text-white relative z-10">{value}</h3>
    </div>
  );
};
export default StatsCard;