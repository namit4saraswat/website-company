import React from 'react';
import { ArrowRight, Users, BookOpen, Trophy } from 'lucide-react';
import StatCard from './ui/StatCard';
import imgHomePage from '../components/ui/webhome.jpeg'; 

const Hero = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 mx-auto text-blue-600" />,
      value: '20+',
      label: 'Engineers'
    },
    {
      icon: <BookOpen className="h-8 w-8 mx-auto text-blue-600" />,
      value: '10+',
      label: 'Technologies'
    },
    {
      icon: <Trophy className="h-8 w-8 mx-auto text-blue-600" />,
      value: '100%',
      label: 'Success Rate'
    }
  ];

  return (
    <section className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Businesses with Cutting-Edge IT Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Transform your vision into reality with our expert IT services and consultation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 flex items-center">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                View Our Projects
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={imgHomePage}
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
            {/* removed the trophy */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold">Trusted Platform</div>
                  <div className="text-sm text-gray-600">Industry recognized</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;