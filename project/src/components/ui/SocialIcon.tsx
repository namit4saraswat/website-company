import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6" />
    </a>
  );
};

export default SocialIcon;