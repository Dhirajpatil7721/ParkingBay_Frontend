import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    {
      name: 'Why Us?',
      path: '/whyus',
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-body
        ${isScrolled
          ? 'bg-background-card/95 backdrop-blur-lg shadow-lg py-2'
          : 'bg-background-card/80 backdrop-blur-sm shadow-md py-4'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* <div className="w-10 h-10 flex items-center justify-center shadow-lg">
                <span className="text-primary-contrast font-heading font-bold text-xl -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <img src={Logo} alt="" />
                </span>
              </div> */}
            <div className="w-12 h-12s flex items-center justify-center shadow-lg">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover group-hover:rotate-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-tight">
                <span className="text-primary-600">Parking</span>
                <span className="text-secondary-500">Bay</span>
              </span>
              <span className="text-text-secondary text-xs hidden sm:block">
                Park Smart, Save Time
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300
                        ${location.pathname === item.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-text-primary hover:text-primary-600 hover:bg-primary-50'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background-card rounded-xl shadow-xl border border-border-light overflow-hidden animate-fade-in">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            to={dropItem.path}
                            className="block px-4 py-3 text-text-primary hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 border-b border-border-light last:border-0"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300
                      ${location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-text-primary hover:text-primary-600 hover:bg-primary-50'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/auth/login"
              className="px-5 py-2 rounded-lg text-primary-600 border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium"
            >
              Login
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-background-card/95 backdrop-blur-lg border-t border-border-light transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container-custom py-4">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-text-primary hover:bg-primary-50 transition-all duration-300"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                    </button>

                    <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === index ? 'max-h-96 mt-1' : 'max-h-0'
                      }`}>
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className="block px-4 py-2 text-text-secondary hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50 font-medium'
                      : 'text-text-primary hover:text-primary-600 hover:bg-primary-50'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 mt-4 border-t border-border-light space-y-2">
              <Link
                to="/auth/login"
                className="block text-center px-4 py-3 rounded-lg text-primary-600 border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block text-center px-4 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  