import React from 'react';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      content: "The course structure and mentorship helped me land my dream job as a full-stack developer. The practical projects were particularly valuable.",
      author: "Sarah Johnson",
      role: "Full Stack Developer at Tech Corp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      content: "The instructors are incredibly knowledgeable and supportive. The 24/7 support system made learning much easier.",
      author: "Michael Chen",
      role: "Mobile Developer at StartUp Inc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      content: "The course exceeded my expectations. The curriculum is well-structured and the community support is amazing.",
      author: "Emily Rodriguez",
      role: "Data Scientist at Analytics Co",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our successful graduates who transformed their careers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;