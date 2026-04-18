// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Shield, Users, Globe, Award, Clock } from 'lucide-react';
// import story1 from '../../assets/About_Us_Our Story_1.png'
// import story2 from '../../assets/About_Us_Our Story_2.png'
// const AboutUs = () => {
//   const stats = [
//     { value: '50K+', label: 'Active Users', icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
//     { value: '100+', label: 'Parking Locations', icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
//     { value: '24/7', label: 'Support Available', icon: <Clock className="w-5 h-5 md:w-6 md:h-6" /> },
//     { value: '4.9★', label: 'User Rating', icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
//   ];

//   const teamMembers = [
//     { name: 'Michael Chen', role: 'CEO & Founder', image: 'https://i.pravatar.cc/150?img=11', bio: 'Former tech executive with 15+ years in mobility solutions' },
//     { name: 'Sarah Williams', role: 'CTO', image: 'https://i.pravatar.cc/150?img=12', bio: 'Expert in IoT and smart city infrastructure' },
//     { name: 'David Kumar', role: 'Head of Operations', image: 'https://i.pravatar.cc/150?img=13', bio: 'Former parking industry leader with 10+ years experience' },
//   ];

//   return (
//     <div className="font-body">
//       {/* ── Hero ── */}
//       <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 md:pt-24 pb-10 md:pb-16">
//         <div className="container-custom text-center">
//           <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
//             About{' '}
//             <span className="text-primary-600">Parking</span>
//             <span className="text-secondary-500">Bay</span>
//           </h1>
//           <p className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
//             We're on a mission to revolutionize parking management through innovative technology,
//             making parking smarter, more efficient, and hassle-free for everyone.
//           </p>
//         </div>
//       </section>

//       {/* ── Our Story ── */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="animate-slide-right text-center lg:text-left">
//               <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
//                 Our <span className="text-primary-600">Story</span>
//               </h2>
//               <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-4 md:mb-6 mx-auto lg:mx-0" />
//               <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
//                 Founded in 2020, ParkingBay emerged from a simple observation: people waste
//                 millions of hours every year searching for parking. We set out to change that
//                 by creating a comprehensive parking management ecosystem.
//               </p>
//               <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
//                 Today, we've grown into a trusted platform serving over 50,000 customers
//                 across 100+ parking locations. Our innovative approach combines web and
//                 mobile applications with smart hardware integration.
//               </p>
//               <p className="text-text-secondary leading-relaxed text-sm md:text-base">
//                 We're proud to be at the forefront of the smart parking revolution, helping
//                 reduce traffic congestion, lower carbon emissions, and make urban mobility
//                 more sustainable.
//               </p>
//             </div>
//             <div className="relative animate-slide-left mt-4 lg:mt-0">
//               <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:max-w-none">
//                 <div className="rounded-2xl overflow-hidden shadow-xl">
//                   <img
//                     src={story1}
//                     alt="Parking facility"
//                     className="w-full h-40 sm:h-52 md:h-64 object-cover"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden shadow-xl mt-6 md:mt-8">
//                   <img
//                     src={story2}
//                     alt="Smart parking"
//                     className="w-full h-40 sm:h-52 md:h-64 object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Stats ── */}
//       <section className="py-12 md:py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="flex justify-center mb-2 md:mb-3">
//                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center">{stat.icon}</div>
//                 </div>
//                 <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-0.5 md:mb-1">{stat.value}</div>
//                 <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Mission & Vision ── */}
//       <section className="section-padding bg-background-card">
//         <div className="container-custom">
//           <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
//             <div className="card p-6 md:p-8 text-center animate-slide-up">
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
//               </div>
//               <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Mission</h3>
//               <p className="text-text-secondary text-sm md:text-base">
//                 To simplify urban parking through innovative technology, reducing stress and
//                 saving time for millions of drivers while helping parking vendors optimize their operations.
//               </p>
//             </div>
//             <div className="card p-6 md:p-8 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
//               <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
//                 <Globe className="w-6 h-6 md:w-8 md:h-8 text-secondary-500" />
//               </div>
//               <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Vision</h3>
//               <p className="text-text-secondary text-sm md:text-base">
//                 To create a world where finding and managing parking is seamless, contributing
//                 to smarter, more sustainable cities with reduced traffic congestion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

  
//       {/* ── CTA ── */}
//       <section className="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
//             Ready to Experience Smart Parking?
//           </h2>
//           <p className="text-text-secondary text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who've made the switch to ParkingBay
//           </p>
//           <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
//             <Link to="/find-parking" className="btn-primary text-sm md:text-base">Find Parking</Link>
//             <Link to="/contact" className="btn-outline text-sm md:text-base">Contact Us</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import story1 from '../../assets/About_Us_Our Story_1.png';
import story2 from '../../assets/About_Us_Our Story_2.png';

const AboutUs = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { value: '50K+', label: 'Active Users', icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '100+', label: 'Parking Locations', icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '4.9★', label: 'User Rating', icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  const teamMembers = [
    { name: 'Michael Chen', role: 'CEO & Founder', image: 'https://i.pravatar.cc/150?img=11', bio: 'Former tech executive with 15+ years in mobility solutions' },
    { name: 'Sarah Williams', role: 'CTO', image: 'https://i.pravatar.cc/150?img=12', bio: 'Expert in IoT and smart city infrastructure' },
    { name: 'David Kumar', role: 'Head of Operations', image: 'https://i.pravatar.cc/150?img=13', bio: 'Former parking industry leader with 10+ years experience' },
  ];

  const nextTeam = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeam = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="font-body overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 px-2">
            About{' '}
            <span className="text-primary-600">Parking</span>
            <span className="text-secondary-500">Bay</span>
          </h1>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            We're on a mission to revolutionize parking management through innovative technology,
            making parking smarter, more efficient, and hassle-free for everyone.
          </p>
        </div>
      </section>

      {/* ── Our Story Section ── */}
    <section className="section-padding py-12 sm:py-16 md:py-20 bg-background-body">
  <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="animate-slide-right text-center lg:text-left order-2 lg:order-1">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
          Our <span className="text-primary-600">Story</span>
        </h2>
        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-4 md:mb-6 mx-auto lg:mx-0" />
        <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base px-2 lg:px-0">
          Founded in 2020, ParkingBay emerged from a simple observation: people waste
          millions of hours every year searching for parking. We set out to change that
          by creating a comprehensive parking management ecosystem.
        </p>
        <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base px-2 lg:px-0">
          Today, we've grown into a trusted platform serving over 50,000 customers
          across 100+ parking locations. Our innovative approach combines web and
          mobile applications with smart hardware integration.
        </p>
        <p className="text-text-secondary leading-relaxed text-sm md:text-base px-2 lg:px-0">
          We're proud to be at the forefront of the smart parking revolution, helping
          reduce traffic congestion, lower carbon emissions, and make urban mobility
          more sustainable.
        </p>
      </div>
      <div className="relative animate-slide-left order-1 lg:order-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={story1}
              alt="Parking facility"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-gray-50"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 sm:mt-8 md:mt-12">
            <img
              src={story2}
              alt="Smart parking"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-gray-50"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── Stats Section ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in px-2" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-0.5 md:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Section ── */}
      <section className="section-padding py-12 sm:py-16 md:py-20 bg-background-card">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="card p-6 md:p-8 text-center animate-slide-up hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Mission</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                To simplify urban parking through innovative technology, reducing stress and
                saving time for millions of drivers while helping parking vendors optimize their operations.
              </p>
            </div>
            <div className="card p-6 md:p-8 text-center animate-slide-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-secondary-500" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Vision</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                To create a world where finding and managing parking is seamless, contributing
                to smarter, more sustainable cities with reduced traffic congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* ── Values Section ── */}
      <section className="section-padding py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Our Core <span className="text-primary-600">Values</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎯</div>
              <h3 className="font-heading font-bold text-base md:text-lg mb-1">Innovation</h3>
              <p className="text-text-secondary text-xs md:text-sm">Constantly evolving to serve you better</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🤝</div>
              <h3 className="font-heading font-bold text-base md:text-lg mb-1">Trust</h3>
              <p className="text-text-secondary text-xs md:text-sm">Building lasting relationships</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🌱</div>
              <h3 className="font-heading font-bold text-base md:text-lg mb-1">Sustainability</h3>
              <p className="text-text-secondary text-xs md:text-sm">Committed to greener cities</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">💡</div>
              <h3 className="font-heading font-bold text-base md:text-lg mb-1">Excellence</h3>
              <p className="text-text-secondary text-xs md:text-sm">Delivering quality in everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 text-white">
            Ready to Experience Smart Parking?
          </h2>
          <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who've made the switch to ParkingBay
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link 
              to="/find-parking" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-primary-600 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              Find Parking
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 md:px-8 md:py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-all duration-300 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;