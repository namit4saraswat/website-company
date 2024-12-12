import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;