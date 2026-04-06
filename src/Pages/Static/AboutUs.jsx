// // src/Pages/Static/AboutUs.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Shield,
//   Users,
//   Globe,
//   Award,
//   Clock,
//   Smartphone,
//   ChevronRight,
//   CheckCircle,
//   TrendingUp,
//   FileText,
//   Printer
// } from 'lucide-react';

// const AboutUs = () => {
//   const stats = [
//     { value: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
//     { value: '100+', label: 'Parking Locations', icon: <Globe className="w-6 h-6" /> },
//     { value: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
//     { value: '4.9★', label: 'User Rating', icon: <Award className="w-6 h-6" /> }
//   ];

//   const teamMembers = [
//     {
//       name: 'Michael Chen',
//       role: 'CEO & Founder',
//       image: 'https://i.pravatar.cc/150?img=11',
//       bio: 'Former tech executive with 15+ years in mobility solutions'
//     },
//     {
//       name: 'Sarah Williams',
//       role: 'CTO',
//       image: 'https://i.pravatar.cc/150?img=12',
//       bio: 'Expert in IoT and smart city infrastructure'
//     },
//     {
//       name: 'David Kumar',
//       role: 'Head of Operations',
//       image: 'https://i.pravatar.cc/150?img=13',
//       bio: 'Former parking industry leader with 10+ years experience'
//     }
//   ];

//   return (
//     <div className="font-body">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-16">
//         <div className="container-custom text-center">
//           <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
//             About{' '}
//             <span className="text-primary-600">Parking</span>
//             <span className="text-secondary-500">Bay</span>
//           </h1>
//           <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
//             We're on a mission to revolutionize parking management through innovative technology,
//             making parking smarter, more efficient, and hassle-free for everyone.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-right">
//               <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//                 Our{' '}
//                 <span className="text-primary-600">Story</span>
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6"></div>
//               <p className="text-text-secondary mb-4 leading-relaxed">
//                 Founded in 2020, ParkingBay emerged from a simple observation: people waste
//                 millions of hours every year searching for parking. We set out to change that
//                 by creating a comprehensive parking management ecosystem that serves both
//                 vehicle owners and parking vendors.
//               </p>
//               <p className="text-text-secondary mb-4 leading-relaxed">
//                 Today, we've grown into a trusted platform serving over 50,000 customers
//                 across 100+ parking locations. Our innovative approach combines web and
//                 mobile applications with smart hardware integration, providing real-time
//                 tracking, digital ticketing, and seamless payment solutions.
//               </p>
//               <p className="text-text-secondary leading-relaxed">
//                 We're proud to be at the forefront of the smart parking revolution, helping
//                 reduce traffic congestion, lower carbon emissions, and make urban mobility
//                 more sustainable.
//               </p>
//             </div>
//             <div className="relative animate-slide-left">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="rounded-2xl overflow-hidden shadow-xl">
//                   <img
//                     src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=500&fit=crop"
//                     alt="Parking facility"
//                     className="w-full h-64 object-cover"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden shadow-xl mt-8">
//                   <img
//                     src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=500&fit=crop"
//                     alt="Smart parking"
//                     className="w-full h-64 object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="flex justify-center mb-3">
//                   <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                     {stat.icon}
//                   </div>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-heading font-bold mb-1">{stat.value}</div>
//                 <div className="text-sm opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="section-padding bg-background-card">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="card p-8 text-center animate-slide-up">
//               <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-primary-600" />
//               </div>
//               <h3 className="font-heading font-bold text-2xl mb-3">Our Mission</h3>
//               <p className="text-text-secondary">
//                 To simplify urban parking through innovative technology, reducing stress and
//                 saving time for millions of drivers while helping parking vendors optimize
//                 their operations.
//               </p>
//             </div>
//             <div className="card p-8 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
//               <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Globe className="w-8 h-8 text-secondary-500" />
//               </div>
//               <h3 className="font-heading font-bold text-2xl mb-3">Our Vision</h3>
//               <p className="text-text-secondary">
//                 To create a world where finding and managing parking is seamless, contributing
//                 to smarter, more sustainable cities with reduced traffic congestion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               Meet Our{' '}
//               <span className="text-primary-600">Leadership</span>
//             </h2>
//             <p className="text-text-secondary">
//               Passionate experts dedicated to transforming parking management
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
//                 />
//                 <h3 className="font-heading font-semibold text-xl">{member.name}</h3>
//                 <p className="text-primary-600 text-sm mb-2">{member.role}</p>
//                 <p className="text-text-secondary text-sm">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//             Ready to Experience Smart Parking?
//           </h2>
//           <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who've made the switch to ParkingBay
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link to="/find-parking" className="btn-primary">
//               Find Parking
//             </Link>
//             <Link to="/contact" className="btn-outline">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
// src/Pages/Static/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award, Clock } from 'lucide-react';

const AboutUs = () => {
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

  return (
    <div className="font-body">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 md:pt-24 pb-10 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            About{' '}
            <span className="text-primary-600">Parking</span>
            <span className="text-secondary-500">Bay</span>
          </h1>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            We're on a mission to revolutionize parking management through innovative technology,
            making parking smarter, more efficient, and hassle-free for everyone.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Our <span className="text-primary-600">Story</span>
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-4 md:mb-6 mx-auto lg:mx-0" />
              <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                Founded in 2020, ParkingBay emerged from a simple observation: people waste
                millions of hours every year searching for parking. We set out to change that
                by creating a comprehensive parking management ecosystem.
              </p>
              <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                Today, we've grown into a trusted platform serving over 50,000 customers
                across 100+ parking locations. Our innovative approach combines web and
                mobile applications with smart hardware integration.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                We're proud to be at the forefront of the smart parking revolution, helping
                reduce traffic congestion, lower carbon emissions, and make urban mobility
                more sustainable.
              </p>
            </div>
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=500&fit=crop"
                    alt="Parking facility"
                    className="w-full h-40 sm:h-52 md:h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl mt-6 md:mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=500&fit=crop"
                    alt="Smart parking"
                    className="w-full h-40 sm:h-52 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center">{stat.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-0.5 md:mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-background-card">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <div className="card p-6 md:p-8 text-center animate-slide-up">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Mission</h3>
              <p className="text-text-secondary text-sm md:text-base">
                To simplify urban parking through innovative technology, reducing stress and
                saving time for millions of drivers while helping parking vendors optimize their operations.
              </p>
            </div>
            <div className="card p-6 md:p-8 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-secondary-500" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3">Our Vision</h3>
              <p className="text-text-secondary text-sm md:text-base">
                To create a world where finding and managing parking is seamless, contributing
                to smarter, more sustainable cities with reduced traffic congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Meet Our <span className="text-primary-600">Leadership</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Passionate experts dedicated to transforming parking management</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto md:max-w-none">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-4 md:p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto mb-3 md:mb-4 object-cover border-4 border-primary-100"
                />
                <h3 className="font-heading font-semibold text-base md:text-xl">{member.name}</h3>
                <p className="text-primary-600 text-xs md:text-sm mb-1 md:mb-2">{member.role}</p>
                <p className="text-text-secondary text-xs md:text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Ready to Experience Smart Parking?
          </h2>
          <p className="text-text-secondary text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made the switch to ParkingBay
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link to="/find-parking" className="btn-primary text-sm md:text-base">Find Parking</Link>
            <Link to="/contact" className="btn-outline text-sm md:text-base">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;