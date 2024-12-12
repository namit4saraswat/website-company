import React from 'react';
import { Code, Users, BookOpen, Video, MessageSquare, GraduationCap } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Experienced and certified professionals',
      description: 'Build real-world projects to strengthen your portfolio'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Customized and scalable IT solutions',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Proven track record of successful projects',
      description: 'Well-structured content covering fundamentals to advanced topics'
    },
    // {
    //   icon: <Video className="h-8 w-8 text-blue-600" />,
    //   title: 'Transparent and collaborative approach',
    //   description: 'High-quality video lectures with detailed explanations'
    // },
    // {
    //   icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    //   title: '24/7 Support',
    //   description: 'Get help whenever you need through our support system'
    // },
    // {
    //   icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    //   title: 'Certification',
    //   description: 'Earn certificates upon course completion'
    // }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Partner with Us?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide everything you need to become a successful developer
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;