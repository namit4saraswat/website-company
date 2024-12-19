import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import name from '../components/ui/name-bg.png'; 
import logo from '../components/ui/Only Logo nobg.png'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="NamadiSoft Logo" className="h-8 w-8 text-cyan-700" />
            <img src={name} alt="NamadiSoft Logo" className="ml-0 h-8 w-40" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#our-expertise" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#technologies" className="text-gray-700 hover:text-blue-600">Technologies</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Our Projects</a>
            <a href="#footer">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Contact Us
            </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;