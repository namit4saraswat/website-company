import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const CompanyWelcome = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Our Mission",
      description: "To empower individuals with cutting-edge programming skills and launch successful tech careers."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Our Vision",
      description: "To become the world's leading platform for accessible, high-quality programming education."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Our Values",
      description: "Excellence, innovation, inclusivity, and continuous improvement drive everything we do."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome To Our Company</h2>
          <p className="text-lg text-gray-600">
            At DataWorks, we're passionate about transforming aspiring developers into industry professionals through comprehensive education and practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2020, DataWorks emerged from a simple vision: making quality programming education accessible to everyone. What started as a small community has grown into a global platform, helping thousands of students achieve their dreams.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Learn More About Us
              </button>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Our team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyWelcome;