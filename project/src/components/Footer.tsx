import React from 'react';
import { Code2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import SocialIcon from './ui/SocialIcon';
import logo from '../components/ui/Only Logo nobg.png'; 

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#' },
    { name: 'Technologies', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Our Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const courses = [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Development', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Cloud Computing', href: '#' },
  ];

  const contactInfo = [
    { Icon: Mail, text: 'contact@namadisoft.com' },
    { Icon: Phone, text: '+91-8957551977' },
    { Icon: MapPin, text: 'Varanasi' },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="NamadiSoft Logo" className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">NamadiSoft</span>
            </div>
            <p className="text-gray-400 mb-6">
            Transform your vision into reality with our expert IT services and consultation.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Expertise</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href={course.href} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.Icon className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NamadiSoft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;