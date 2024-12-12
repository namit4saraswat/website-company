import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  category,
  link,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6">
        <span className="text-blue-400 text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a 
          href={link}
          className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;