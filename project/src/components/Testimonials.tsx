import React from 'react';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      content: "The team at Dataworks truly understands the needs of a growing business. They transformed our outdated IT infrastructure into a cutting-edge system, ensuring seamless operations and enhanced security. Their professionalism and timely delivery exceeded our expectations!",
      author: "Sarah Johnson",
      role: "Full Stack Developer at Tech Corp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      content: "We partnered with Dataworks for our mobile app development project, and the results were outstanding. They combined creativity with technical expertise to deliver an app that has significantly increased our customer engagement. Highly recommend their services",
      author: "Michael Chen",
      role: "Mobile Developer at StartUp Inc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      content: "From the initial consultation to the final deployment, Dataworks was with us every step of the way. Their cloud migration solution was smooth, and we experienced zero downtime during the transition. Exceptional service!",
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
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          {/* <p className="mt-4 text-lg text-gray-600">
            Hear from our successful graduates who transformed their careers
          </p> */}
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