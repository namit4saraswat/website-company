import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  avatar,
  rating,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      {/* <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div> */}
    </div>
  );
};

export default TestimonialCard;