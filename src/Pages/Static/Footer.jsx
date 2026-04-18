// src/Pages/Static/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({
    quickLinks: false,
    contactInfo: false
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Why Us?', path: '/whyus' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5 flex-shrink-0" />, text: '123 Parking Street, City, State 12345' },
    { icon: <Phone className="w-5 h-5 flex-shrink-0" />, text: '+1 234 567 8900' },
    { icon: <Mail className="w-5 h-5 flex-shrink-0" />, text: 'support@parkingweb.com' },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: '#', color: 'hover:text-[#1877f2]', name: 'Facebook' },
    { icon: <Twitter />, url: '#', color: 'hover:text-[#1da1f2]', name: 'Twitter' },
    { icon: <Instagram />, url: '#', color: 'hover:text-[#e4405f]', name: 'Instagram' },
    { icon: <Linkedin />, url: '#', color: 'hover:text-[#0077b5]', name: 'LinkedIn' },
    { icon: <Youtube />, url: '#', color: 'hover:text-[#ff0000]', name: 'YouTube' },
  ];

  const toggleMobileMenu = (menu) => {
    setOpenMobileMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <footer className="bg-background-card border-t border-border-light font-body relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start space-x-2 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 flex items-center justify-center shadow-lg">
                <span className="text-primary-contrast font-heading font-bold text-xl sm:text-2xl -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  P
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl sm:text-2xl">
                  <span className="text-primary-600">Parking</span>
                  <span className="text-secondary-500">Web</span>
                </span>
              </div>
            </Link>
            
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              ParkingWeb is your trusted partner for hassle-free parking solutions. 
              We make finding and booking parking spots simple, fast, and secure.
            </p>
          </div>

          {/* Quick Links - Mobile Accordion */}
          <div className="space-y-4">
            {/* Mobile Accordion Header */}
            <button 
              onClick={() => toggleMobileMenu('quickLinks')}
              className="w-full sm:hidden flex items-center justify-between text-left group"
            >
              <h3 className="font-heading font-semibold text-lg text-text-primary relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h3>
              {openMobileMenus.quickLinks ? 
                <ChevronUp className="w-5 h-5 text-primary-500" /> : 
                <ChevronDown className="w-5 h-5 text-primary-500" />
              }
            </button>
            
            {/* Desktop Title */}
            <h3 className="hidden sm:block font-heading font-semibold text-lg text-text-primary relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            
            {/* Links List */}
            <ul className={`space-y-2 transition-all duration-300 overflow-hidden ${
              openMobileMenus.quickLinks ? 'max-h-96 mt-3' : 'max-h-0 sm:max-h-96'
            }`}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary-600 transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Mobile Accordion */}
          <div className="space-y-4">
            <button 
              onClick={() => toggleMobileMenu('contactInfo')}
              className="w-full sm:hidden flex items-center justify-between text-left group"
            >
              <h3 className="font-heading font-semibold text-lg text-text-primary relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              </h3>
              {openMobileMenus.contactInfo ? 
                <ChevronUp className="w-5 h-5 text-primary-500" /> : 
                <ChevronDown className="w-5 h-5 text-primary-500" />
              }
            </button>
            
            <h3 className="hidden sm:block font-heading font-semibold text-lg text-text-primary relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openMobileMenus.contactInfo ? 'max-h-96 mt-3' : 'max-h-0 sm:max-h-96'
            }`}>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <span className="text-primary-500 group-hover:text-secondary-500 transition-colors mt-1 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-text-secondary text-xs sm:text-sm group-hover:text-text-primary transition-colors break-words">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links Section - Responsive */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border-light">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-secondary ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  {React.cloneElement(social.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                </a>
              ))}
            </div>
          </div>
        </div>
       
        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
         
          {/* Copyright */}
          <div className="text-text-secondary text-xs sm:text-sm text-center order-2 md:order-1">
            © {currentYear} ParkingWeb. All rights reserved.
          </div>

          {/* Additional Info */}
          <div className="text-text-secondary text-xs sm:text-sm text-center order-1 md:order-2">
            <span className="hidden sm:inline">Park Smart, Save Time</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Shows after scroll */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-contrast rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
};

export default Footer;