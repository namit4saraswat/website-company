import React from 'react';
import { Code2, Smartphone, Globe2, Database, Cloud, Shield } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const ITServices = () => {
  const services = [
    {
      Icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and best practices.'
    },
    {
      Icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android devices.'
    },
    {
      Icon: Globe2,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and engagement.'
    },
    {
      Icon: Database,
      title: 'Database Solutions',
      description: 'Scalable database architecture and optimization services.'
    },
    {
      Icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management.'
    },
    {
      Icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We Make Awesome IT Services</h2>
          <p className="text-lg text-gray-600">
            Delivering innovative technology solutions to help businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;