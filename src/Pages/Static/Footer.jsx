// src/Pages/Static/Footer.jsx
import React from 'react';
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
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Find Parking', path: '/find-parking' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cancellation Policy', path: '/cancellation' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: '123 Parking Street, City, State 12345' },
    { icon: <Phone className="w-5 h-5" />, text: '+1 234 567 8900' },
    { icon: <Mail className="w-5 h-5" />, text: 'support@parkingweb.com' },
    { icon: <Clock className="w-5 h-5" />, text: '24/7 Customer Support' },
  ];

  const socialLinks = [
    { icon: <Facebook />, url: '#', color: 'hover:text-[#1877f2]' },
    { icon: <Twitter />, url: '#', color: 'hover:text-[#1da1f2]' },
    { icon: <Instagram />, url: '#', color: 'hover:text-[#e4405f]' },
    { icon: <Linkedin />, url: '#', color: 'hover:text-[#0077b5]' },
    { icon: <Youtube />, url: '#', color: 'hover:text-[#ff0000]' },
  ];

  return (
    <footer className="bg-background-card border-t border-border-light font-body relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <Link to="/" className="flex items-center space-x-2 group inline-flex">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 flex items-center justify-center shadow-lg">
                <span className="text-primary-contrast font-heading font-bold text-2xl -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  P
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-2xl">
                  <span className="text-primary-600">Parking</span>
                  <span className="text-secondary-500">Web</span>
                </span>
              </div>
            </Link>
            
            <p className="text-text-secondary text-sm leading-relaxed">
              ParkingWeb is your trusted partner for hassle-free parking solutions. 
              We make finding and booking parking spots simple, fast, and secure.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <span className="px-3 py-1 bg-success-light/30 text-success-dark rounded-full text-xs font-medium">
                ✓ Secure
              </span>
              <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                💳 Easy Payment
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in animation-delay-100">
            <h3 className="font-heading font-semibold text-lg text-text-primary relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary-600 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4 animate-fade-in animation-delay-200">
            <h3 className="font-heading font-semibold text-lg text-text-primary relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary-600 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in animation-delay-300">
            <h3 className="font-heading font-semibold text-lg text-text-primary relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <span className="text-primary-500 group-hover:text-secondary-500 transition-colors mt-1">
                    {item.icon}
                  </span>
                  <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-sm font-medium text-text-primary mb-2">Subscribe to Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-background-body border-2 border-border-light rounded-l-lg focus:border-primary-500 outline-none transition-all duration-300 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-contrast rounded-r-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border-light">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-heading font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">50K+</div>
            <div className="text-text-secondary text-sm">Happy Customers</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-heading font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">100+</div>
            <div className="text-text-secondary text-sm">Parking Locations</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-heading font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">24/7</div>
            <div className="text-text-secondary text-sm">Customer Support</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-heading font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">5★</div>
            <div className="text-text-secondary text-sm">Average Rating</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-text-secondary text-sm">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-text-secondary ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
              >
                {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-sm text-center">
            © {currentYear} ParkingWeb. All rights reserved.
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="text-text-secondary text-sm">We accept:</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-600">VISA</span>
              <span className="px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-600">MC</span>
              <span className="px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-600">AMEX</span>
              <span className="px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-600">UPI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-contrast rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group animate-bounce"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;