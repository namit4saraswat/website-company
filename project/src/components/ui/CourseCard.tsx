import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  duration,
  students,
  rating,
  price,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {students}
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
            {rating}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;