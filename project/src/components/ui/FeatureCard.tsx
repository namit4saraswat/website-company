import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {/* <p className="mt-2 text-gray-600">{description}</p> */}
    </div>
  );
};

export default FeatureCard;