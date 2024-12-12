import React from 'react';
import CourseCard from './ui/CourseCard';

const PopularCourses = () => {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Full Stack Web Development",
      description: "Master both frontend and backend development with modern technologies",
      duration: "6 months",
      students: 1500,
      rating: 4.8,
      price: "$499"
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Mobile App Development",
      description: "Learn to build iOS and Android apps using React Native",
      duration: "4 months",
      students: 1200,
      rating: 4.7,
      price: "$399"
    },
    {
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      title: "Data Science & ML",
      description: "Master data analysis and machine learning algorithms",
      duration: "5 months",
      students: 800,
      rating: 4.9,
      price: "$599"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our most popular courses and start your journey today
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;