import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center">
      {icon}
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;