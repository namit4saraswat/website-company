import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ITServices from './components/ITServices';
import CompanyWelcome from './components/CompanyWelcome';
import Projects from './components/Projects';
import PopularCourses from './components/PopularCourses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TechnologySection from './components/Technology';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ITServices />
      <Features />
      <TechnologySection />
      {/* <CompanyWelcome /> */}
      <Projects />
      {/* <PopularCourses /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;