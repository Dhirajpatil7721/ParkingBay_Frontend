// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { 
// //   Shield, 
// //   Clock, 
// //   CreditCard, 
// //   MapPin, 
// //   Star, 
// //   ChevronRight,
// //   Car,
// //   Smartphone,
// //   Users
// // } from 'lucide-react';

// // const Home = () => {
// //   const features = [
// //     {
// //       icon: <Clock className="w-8 h-8" />,
// //       title: 'Real-time Availability',
// //       description: 'Check parking space availability in real-time and book instantly.'
// //     },
// //     {
// //       icon: <Shield className="w-8 h-8" />,
// //       title: 'Secure Parking',
// //       description: 'All parking locations are secure with 24/7 surveillance.'
// //     },
// //     {
// //       icon: <CreditCard className="w-8 h-8" />,
// //       title: 'Easy Payment',
// //       description: 'Multiple payment options including cards, UPI, and wallets.'
// //     },
// //     {
// //       icon: <MapPin className="w-8 h-8" />,
// //       title: 'Multiple Locations',
// //       description: 'Find parking spots across 100+ locations in the city.'
// //     },
// //   ];

// //   const steps = [
// //     {
// //       number: '01',
// //       title: 'Find Parking',
// //       description: 'Search for available parking spots near your destination.'
// //     },
// //     {
// //       number: '02',
// //       title: 'Book Slot',
// //       description: 'Select your preferred time slot and book instantly.'
// //     },
// //     {
// //       number: '03',
// //       title: 'Pay Online',
// //       description: 'Secure online payment with multiple options.'
// //     },
// //     {
// //       number: '04',
// //       title: 'Park & Go',
// //       description: 'Scan QR code at entry and enjoy hassle-free parking.'
// //     },
// //   ];

// //   const testimonials = [
// //     {
// //       name: 'John Smith',
// //       role: 'Regular Customer',
// //       content: 'ParkingWeb has made my daily commute so much easier. No more circling around for parking!',
// //       rating: 5,
// //       image: 'https://i.pravatar.cc/100?img=1'
// //     },
// //     {
// //       name: 'Sarah Johnson',
// //       role: 'Business Professional',
// //       content: 'The best parking solution in town. Reliable, secure, and great customer service.',
// //       rating: 5,
// //       image: 'https://i.pravatar.cc/100?img=2'
// //     },
// //     {
// //       name: 'Mike Wilson',
// //       role: 'Frequent Traveler',
// //       content: 'I use ParkingWeb at the airport every time. Never disappointed with their service.',
// //       rating: 5,
// //       image: 'https://i.pravatar.cc/100?img=3'
// //     },
// //   ];

// //   return (
// //     <div className="font-body">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
// //         {/* Animated Background */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
// //           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
// //         </div>

// //         <div className="container-custom relative">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="animate-slide-right">
// //               <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
// //                 Find & Book Parking{' '}
// //                 <span className="text-primary-600">Spots</span>{' '}
// //                 <span className="text-secondary-500">Instantly</span>
// //               </h1>
// //               <p className="text-text-secondary text-lg mb-8 max-w-lg">
// //                 Never waste time finding parking again. Book your spot in advance and enjoy a stress-free parking experience.
// //               </p>
              
// //               <div className="flex flex-wrap gap-4">
// //                 <Link to="/find-parking" className="btn-primary">
// //                   Find Parking Now
// //                 </Link>
// //                 <Link to="/how-it-works" className="btn-outline">
// //                   How It Works
// //                 </Link>
// //               </div>

// //               <div className="flex items-center gap-8 mt-12">
// //                 <div className="flex -space-x-2">
// //                   {[1, 2, 3, 4].map((i) => (
// //                     <img
// //                       key={i}
// //                       src={`https://i.pravatar.cc/40?img=${i}`}
// //                       alt="User"
// //                       className="w-10 h-10 rounded-full border-2 border-white"
// //                     />
// //                   ))}
// //                 </div>
// //                 <div>
// //                   <div className="flex items-center gap-1">
// //                     {[...Array(5)].map((_, i) => (
// //                       <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
// //                     ))}
// //                   </div>
// //                   <p className="text-text-secondary text-sm">Trusted by 50,000+ customers</p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="relative animate-slide-left">
// //               <div className="relative bg-white rounded-2xl shadow-2xl p-6">
// //                 <div className="flex items-center gap-4 mb-6">
// //                   <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
// //                     <Car className="w-6 h-6 text-primary-600" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-heading font-semibold">Quick Search</h3>
// //                     <p className="text-text-secondary text-sm">Find parking near you</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="space-y-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Enter location"
// //                     className="input-field"
// //                   />
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <input
// //                       type="date"
// //                       className="input-field"
// //                     />
// //                     <input
// //                       type="time"
// //                       className="input-field"
// //                     />
// //                   </div>
// //                   <button className="btn-primary w-full">
// //                     Search Parking
// //                   </button>
// //                 </div>

// //                 {/* Decorative elements */}
// //                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-100 rounded-full -z-10"></div>
// //                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-100 rounded-full -z-10"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="section-padding bg-background-body">
// //         <div className="container-custom">
// //           <div className="text-center max-w-2xl mx-auto mb-12">
// //             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
// //               Why Choose{' '}
// //               <span className="text-primary-600">Parking</span>
// //               <span className="text-secondary-500">Web</span>
// //             </h2>
// //             <p className="text-text-secondary">
// //               We provide the best parking experience with cutting-edge technology and customer-first approach.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {features.map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className="card p-6 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in"
// //                 style={{ animationDelay: `${index * 100}ms` }}
// //               >
// //                 <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
// //                   <div className="text-primary-600 group-hover:scale-110 transition-transform">
// //                     {feature.icon}
// //                   </div>
// //                 </div>
// //                 <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
// //                 <p className="text-text-secondary text-sm">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* How It Works Section */}
// //       <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
// //         <div className="container-custom">
// //           <div className="text-center max-w-2xl mx-auto mb-12">
// //             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
// //               How It{' '}
// //               <span className="text-primary-600">Works</span>
// //             </h2>
// //             <p className="text-text-secondary">
// //               Book your parking spot in four simple steps
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {steps.map((step, index) => (
// //               <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
// //                 <div className="text-center">
// //                   <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 hover:rotate-0 transition-all duration-500">
// //                     <span className="text-primary-contrast font-heading font-bold text-2xl">
// //                       {step.number}
// //                     </span>
// //                   </div>
// //                   <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
// //                   <p className="text-text-secondary text-sm">{step.description}</p>
// //                 </div>
// //                 {index < steps.length - 1 && (
// //                   <ChevronRight className="hidden lg:block absolute top-10 -right-4 w-6 h-6 text-primary-400" />
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-16 bg-background-card">
// //         <div className="container-custom">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //             <div className="text-center">
// //               <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">50K+</div>
// //               <div className="text-text-secondary">Happy Customers</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl md:text-5xl font-heading font-bold text-secondary-500 mb-2">100+</div>
// //               <div className="text-text-secondary">Parking Locations</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">24/7</div>
// //               <div className="text-text-secondary">Customer Support</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl md:text-5xl font-heading font-bold text-secondary-500 mb-2">4.9★</div>
// //               <div className="text-text-secondary">Average Rating</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="section-padding bg-background-body">
// //         <div className="container-custom">
// //           <div className="text-center max-w-2xl mx-auto mb-12">
// //             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
// //               What Our{' '}
// //               <span className="text-primary-600">Customers</span>{' '}
// //               <span className="text-secondary-500">Say</span>
// //             </h2>
// //             <p className="text-text-secondary">
// //               Don't just take our word for it - hear from our satisfied customers
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-6">
// //             {testimonials.map((testimonial, index) => (
// //               <div
// //                 key={index}
// //                 className="card p-6 animate-fade-in"
// //                 style={{ animationDelay: `${index * 100}ms` }}
// //               >
// //                 <div className="flex items-center gap-4 mb-4">
// //                   <img
// //                     src={testimonial.image}
// //                     alt={testimonial.name}
// //                     className="w-14 h-14 rounded-full object-cover"
// //                   />
// //                   <div>
// //                     <h4 className="font-heading font-semibold">{testimonial.name}</h4>
// //                     <p className="text-text-secondary text-sm">{testimonial.role}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-1 mb-3">
// //                   {[...Array(testimonial.rating)].map((_, i) => (
// //                     <Star key={i} className="w-4 h-4 fill-secondary-500 text-secondary-500" />
// //                   ))}
// //                 </div>
// //                 <p className="text-text-secondary italic">"{testimonial.content}"</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-primary-contrast">
// //         <div className="container-custom text-center">
// //           <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
// //             Ready to Park Hassle-Free?
// //           </h2>
// //           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
// //             Join thousands of happy customers who never worry about parking again
// //           </p>
// //           <div className="flex flex-wrap gap-4 justify-center">
// //             <Link
// //               to="/register"
// //               className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
// //             >
// //               Get Started Now
// //             </Link>
// //             <Link
// //               to="/contact"
// //               className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
// //             >
// //               Contact Sales
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       <style jsx>{`
// //         @keyframes blob {
// //           0% { transform: translate(0px, 0px) scale(1); }
// //           33% { transform: translate(30px, -50px) scale(1.1); }
// //           66% { transform: translate(-20px, 20px) scale(0.9); }
// //           100% { transform: translate(0px, 0px) scale(1); }
// //         }
// //         .animate-blob {
// //           animation: blob 7s infinite;
// //         }
// //         .animation-delay-2000 {
// //           animation-delay: 2s;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Shield, 
//   Clock, 
//   CreditCard, 
//   MapPin, 
//   Star, 
//   ChevronRight,
//   Car,
//   Smartphone,
//   Users,
//   History,
//   Printer,
//   IndianRupee,
//   BarChart3,
//   QrCode,
//   Download,
//   UserPlus,
//   TrendingUp,
//   FileText,
//   CheckCircle
// } from 'lucide-react';
// import Logo from '../../assets/Logo.png'; // Adjust path to your logo

// const Home = () => {
//   const features = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: 'Web & Mobile App',
//       description: 'Access parking history and manage bookings from any device - web or mobile.'
//     },
//     {
//       icon: <History className="w-8 h-8" />,
//       title: 'Vehicle History Tracking',
//       description: 'Track complete vehicle information including registration number, entry/exit times, and date-wise history.'
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: 'Traffic & Revenue Analytics',
//       description: 'Get detailed insights about traffic patterns, revenue generation, and peak hours.'
//     },
//     {
//       icon: <IndianRupee className="w-8 h-8" />,
//       title: 'UPI & Cash Payments',
//       description: 'Convenient payment options including UPI, QR codes, cash, cards, and digital wallets.'
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Staff Management',
//       description: 'Easily add and manage parking staff under your vendor account with role-based access.'
//     },
//     {
//       icon: <Printer className="w-8 h-8" />,
//       title: 'Digital & Print Tickets',
//       description: 'Generate digital QR tickets for app users or print physical tickets for traditional users.'
//     },
//     {
//       icon: <QrCode className="w-8 h-8" />,
//       title: 'Smart QR Entry/Exit',
//       description: 'Scan QR code at entry and exit for seamless, hassle-free parking experience.'
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: 'Secure & 24/7 Surveillance',
//       description: 'All parking locations are secure with round-the-clock surveillance and monitoring.'
//     },
//   ];

//   const steps = [
//     {
//       number: '01',
//       title: 'Find Parking',
//       description: 'Search for available parking spots near your destination on our app or website.'
//     },
//     {
//       number: '02',
//       title: 'Track Vehicle',
//       description: 'Enter vehicle details and get real-time tracking with complete history.'
//     },
//     {
//       number: '03',
//       title: 'Pay Digitally',
//       description: 'Pay via UPI, QR code, cash, or card - multiple options available.'
//     },
//     {
//       number: '04',
//       title: 'Smart Entry/Exit',
//       description: 'Scan QR code or print ticket for smooth entry and exit.'
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Rajesh Kumar',
//       role: 'Parking Vendor',
//       content: 'The staff management and revenue tracking features have transformed my parking business. I can now manage everything digitally!',
//       rating: 5,
//       image: 'https://i.pravatar.cc/100?img=1'
//     },
//     {
//       name: 'Priya Sharma',
//       role: 'Regular Customer',
//       content: 'Love the vehicle history tracking! I can see all my parking records and payments in one place. Very convenient.',
//       rating: 5,
//       image: 'https://i.pravatar.cc/100?img=2'
//     },
//     {
//       name: 'Amit Patel',
//       role: 'Fleet Manager',
//       content: 'Perfect solution for managing multiple vehicles. The analytics help me optimize routes and parking costs.',
//       rating: 5,
//       image: 'https://i.pravatar.cc/100?img=3'
//     },
//   ];

//   const stats = [
//     { value: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
//     { value: '100+', label: 'Parking Locations', icon: <MapPin className="w-6 h-6" /> },
//     { value: '1M+', label: 'Vehicles Tracked', icon: <Car className="w-6 h-6" /> },
//     { value: '₹10Cr+', label: 'Revenue Processed', icon: <IndianRupee className="w-6 h-6" /> }
//   ];

//   return (
//     <div className="font-body">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
//         </div>

//         <div className="container-custom relative">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-right">
//               <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
//                 Smart Parking{' '}
//                 <span className="text-primary-600">Management</span>{' '}
//                 <span className="text-secondary-500">System</span>
//               </h1>
//               <p className="text-text-secondary text-lg mb-8 max-w-lg">
//                 Track vehicles, manage staff, process UPI/cash payments, and get real-time analytics - all from one platform.
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/register" className="btn-primary">
//                   Get Started
//                 </Link>
//                 <Link to="/contact" className="btn-outline">
//                   Contact Sales
//                 </Link>
//               </div>

//               <div className="flex flex-wrap gap-6 mt-12">
//                 <div className="flex items-center gap-2">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <img
//                         key={i}
//                         src={`https://i.pravatar.cc/40?img=${i}`}
//                         alt="User"
//                         className="w-10 h-10 rounded-full border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="flex items-center gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-secondary-500 text-secondary-500" />
//                       ))}
//                     </div>
//                     <p className="text-text-secondary text-sm">Trusted by 50,000+ users</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
//                     <Download className="w-4 h-4" />
//                     <span>Play Store</span>
//                   </button>
//                   <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
//                     <Download className="w-4 h-4" />
//                     <span>App Store</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="relative animate-slide-left">
//               <div className="relative bg-white rounded-2xl shadow-2xl p-6">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
//                     <Smartphone className="w-6 h-6 text-primary-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-semibold">Quick Vehicle Entry</h3>
//                     <p className="text-text-secondary text-sm">Track vehicle instantly</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Enter Vehicle Number"
//                     className="input-field"
//                   />
//                   <select className="input-field">
//                     <option value="">Select Vehicle Type</option>
//                     <option value="2">2 Wheeler</option>
//                     <option value="3">3 Wheeler</option>
//                     <option value="4">4 Wheeler (Car)</option>
//                     <option value="17">Heavy Vehicle</option>
//                     <option value="55">Bus/Truck</option>
//                   </select>
//                   <div className="grid grid-cols-2 gap-3">
//                     <button className="btn-primary w-full">
//                       Track Vehicle
//                     </button>
//                     <button className="btn-outline w-full">
//                       Generate Ticket
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-4 border-t border-border-light">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-text-secondary">UPI Payment Available</span>
//                     <span className="text-success-main flex items-center gap-1">
//                       <CheckCircle className="w-4 h-4" /> Cash Accepted
//                     </span>
//                   </div>
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-100 rounded-full -z-10"></div>
//                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-100 rounded-full -z-10"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-background-card">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary-600">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-1">{stat.value}</div>
//                 <div className="text-text-secondary text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               Complete{' '}
//               <span className="text-primary-600">Parking Solution</span>
//             </h2>
//             <p className="text-text-secondary">
//               Everything you need to manage parking operations - from vehicle tracking to staff management and payments
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="card p-6 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
//                   <div className="text-primary-600 group-hover:scale-110 transition-transform">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
//                 <p className="text-text-secondary text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               How It{' '}
//               <span className="text-primary-600">Works</span>
//             </h2>
//             <p className="text-text-secondary">
//               Complete parking management in four simple steps
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {steps.map((step, index) => (
//               <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 hover:rotate-0 transition-all duration-500">
//                     <span className="text-primary-contrast font-heading font-bold text-2xl">
//                       {step.number}
//                     </span>
//                   </div>
//                   <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
//                   <p className="text-text-secondary text-sm">{step.description}</p>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <ChevronRight className="hidden lg:block absolute top-10 -right-4 w-6 h-6 text-primary-400" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vehicle Tracking Showcase */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-right">
//               <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm mb-4">
//                 <History className="w-4 h-4" />
//                 Vehicle History Tracking
//               </div>
//               <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//                 Track Complete{' '}
//                 <span className="text-primary-600">Vehicle History</span>
//               </h2>
//               <p className="text-text-secondary mb-6">
//                 Maintain detailed records of every vehicle that parks at your facility:
//               </p>
//               <div className="space-y-3 mb-8">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Full vehicle number tracking</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Date-wise entry/exit history</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Revenue generated per vehicle</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Traffic pattern analytics</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Peak hour identification</span>
//                 </div>
//               </div>
//               <Link to="/register" className="btn-primary inline-flex items-center gap-2">
//                 Start Tracking <ChevronRight className="w-4 h-4" />
//               </Link>
//             </div>
//             <div className="relative animate-slide-left">
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-heading font-semibold">Recent Vehicles</h3>
//                   <button className="text-primary-600 text-sm">View All →</button>
//                 </div>
//                 <div className="space-y-3">
//                   {['MH01AB1234', 'DL02CD5678', 'KA03EF9012', 'TN04GH3456'].map((vehicle, i) => (
//                     <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <Car className="w-5 h-5 text-primary-600" />
//                         <div>
//                           <p className="font-medium">{vehicle}</p>
//                           <p className="text-text-secondary text-xs">Entry: 10:30 AM | Exit: 2:15 PM</p>
//                         </div>
//                       </div>
//                       <span className="text-success-main font-semibold">₹{50 + i * 20}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Staff Management Section */}
//       <section className="section-padding bg-background-card">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="order-2 lg:order-1 relative animate-slide-right">
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
//                     <UserPlus className="w-6 h-6 text-secondary-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-semibold">Add New Staff</h3>
//                     <p className="text-text-secondary text-sm">Manage your parking team</p>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between p-3 border border-border-light rounded-lg">
//                     <div>
//                       <p className="font-medium">Rahul Sharma</p>
//                       <p className="text-text-secondary text-xs">Staff ID: STF001</p>
//                     </div>
//                     <span className="text-success-main text-sm">Active</span>
//                   </div>
//                   <div className="flex items-center justify-between p-3 border border-border-light rounded-lg">
//                     <div>
//                       <p className="font-medium">Priya Patel</p>
//                       <p className="text-text-secondary text-xs">Staff ID: STF002</p>
//                     </div>
//                     <span className="text-success-main text-sm">Active</span>
//                   </div>
//                   <div className="flex items-center justify-between p-3 border border-border-light rounded-lg">
//                     <div>
//                       <p className="font-medium">Amit Kumar</p>
//                       <p className="text-text-secondary text-xs">Staff ID: STF003</p>
//                     </div>
//                     <span className="text-warning-main text-sm">On Leave</span>
//                   </div>
//                 </div>
//                 <button className="btn-outline w-full mt-4 flex items-center justify-center gap-2">
//                   <UserPlus className="w-4 h-4" /> Add New Staff Member
//                 </button>
//               </div>
//             </div>
//             <div className="order-1 lg:order-2 animate-slide-left">
//               <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm mb-4">
//                 <Users className="w-4 h-4" />
//                 Staff Management
//               </div>
//               <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//                 Manage Your{' '}
//                 <span className="text-secondary-500">Parking Staff</span>
//               </h2>
//               <p className="text-text-secondary mb-6">
//                 Easily add, track, and manage parking staff under your vendor account:
//               </p>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Add new staff members with role-based access</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Track attendance and performance</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Assign specific parking zones to staff</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-success-main" />
//                   <span>Monitor staff activities and transactions</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Payment Options Section */}
//       <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//             Multiple{' '}
//             <span className="text-primary-600">Payment Options</span>
//           </h2>
//           <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
//             Flexible payment methods for your convenience
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="bg-white rounded-xl p-6 shadow-md">
//               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <IndianRupee className="w-8 h-8 text-primary-600" />
//               </div>
//               <p className="font-semibold">UPI Payment</p>
//               <p className="text-text-secondary text-sm">Google Pay, PhonePe, Paytm</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md">
//               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <QrCode className="w-8 h-8 text-primary-600" />
//               </div>
//               <p className="font-semibold">QR Code</p>
//               <p className="text-text-secondary text-sm">Scan & Pay</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md">
//               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <CreditCard className="w-8 h-8 text-primary-600" />
//               </div>
//               <p className="font-semibold">Card Payment</p>
//               <p className="text-text-secondary text-sm">Credit/Debit Cards</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md">
//               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Printer className="w-8 h-8 text-primary-600" />
//               </div>
//               <p className="font-semibold">Cash Payment</p>
//               <p className="text-text-secondary text-sm">Pay at Exit</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               What Our{' '}
//               <span className="text-primary-600">Users</span>{' '}
//               <span className="text-secondary-500">Say</span>
//             </h2>
//             <p className="text-text-secondary">
//               Trusted by parking vendors and vehicle owners across the city
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="card p-6 animate-fade-in"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-heading font-semibold">{testimonial.name}</h4>
//                     <p className="text-text-secondary text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-1 mb-3">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-secondary-500 text-secondary-500" />
//                   ))}
//                 </div>
//                 <p className="text-text-secondary italic">"{testimonial.content}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-primary-contrast">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//             Ready to Digitize Your Parking?
//           </h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Join thousands of parking vendors who have transformed their operations with our smart management system
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link
//               to="/register"
//               className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               Start Free Trial
//             </Link>
//             <Link
//               to="/contact"
//               className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
//             >
//               Contact Sales
//             </Link>
//           </div>
//           <div className="flex justify-center gap-4 mt-8">
//             <button className="flex items-center gap-2 px-6 py-2 bg-black/20 rounded-lg hover:bg-black/30 transition">
//               <Download className="w-5 h-5" />
//               <span>Download App</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

// src/Pages/Static/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, CreditCard, MapPin, Star, ChevronRight,
  Car, Smartphone, Users, History, Printer, IndianRupee,
  BarChart3, QrCode, Download, UserPlus, TrendingUp, FileText,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const features = [
    { icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />, title: 'Web & Mobile App', description: 'Access parking history and manage bookings from any device - web or mobile.' },
    { icon: <History className="w-6 h-6 md:w-8 md:h-8" />, title: 'Vehicle History Tracking', description: 'Track complete vehicle information including registration number, entry/exit times, and date-wise history.' },
    { icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />, title: 'Traffic & Revenue Analytics', description: 'Get detailed insights about traffic patterns, revenue generation, and peak hours.' },
    { icon: <IndianRupee className="w-6 h-6 md:w-8 md:h-8" />, title: 'UPI & Cash Payments', description: 'Convenient payment options including UPI, QR codes, cash, cards, and digital wallets.' },
    { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, title: 'Staff Management', description: 'Easily add and manage parking staff under your vendor account with role-based access.' },
    { icon: <Printer className="w-6 h-6 md:w-8 md:h-8" />, title: 'Digital & Print Tickets', description: 'Generate digital QR tickets for app users or print physical tickets for traditional users.' },
    { icon: <QrCode className="w-6 h-6 md:w-8 md:h-8" />, title: 'Smart QR Entry/Exit', description: 'Scan QR code at entry and exit for seamless, hassle-free parking experience.' },
    { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, title: 'Secure & 24/7 Surveillance', description: 'All parking locations are secure with round-the-clock surveillance and monitoring.' },
  ];

  const steps = [
    { number: '01', title: 'Find Parking', description: 'Search for available parking spots near your destination.' },
    { number: '02', title: 'Track Vehicle', description: 'Enter vehicle details and get real-time tracking with complete history.' },
    { number: '03', title: 'Pay Digitally', description: 'Pay via UPI, QR code, cash, or card.' },
    { number: '04', title: 'Smart Entry/Exit', description: 'Scan QR code or print ticket for smooth entry and exit.' },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Parking Vendor', content: 'The staff management and revenue tracking features have transformed my parking business!', rating: 5, image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Priya Sharma', role: 'Regular Customer', content: 'Love the vehicle history tracking! I can see all my parking records in one place.', rating: 5, image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Amit Patel', role: 'Fleet Manager', content: 'Perfect solution for managing multiple vehicles. The analytics are very helpful.', rating: 5, image: 'https://i.pravatar.cc/100?img=3' },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users', icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '100+', label: 'Parking Locations', icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '1M+', label: 'Vehicles Tracked', icon: <Car className="w-5 h-5 md:w-6 md:h-6" /> },
    { value: '₹10Cr+', label: 'Revenue Processed', icon: <IndianRupee className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  return (
    <div className="font-body">
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-64 h-64 md:w-80 md:h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-64 h-64 md:w-80 md:h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
                Smart Parking{' '}
                <span className="text-primary-600">Management</span>{' '}
                <span className="text-secondary-500">System</span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Track vehicles, manage staff, process UPI/cash payments, and get real-time analytics — all from one platform.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/register" className="btn-primary text-sm md:text-base">Get Started</Link>
                <Link to="/contact" className="btn-outline text-sm md:text-base">Contact Sales</Link>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-12 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-secondary-500 text-secondary-500" />)}
                    </div>
                    <p className="text-text-secondary text-xs md:text-sm">Trusted by 50,000+ users</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg text-xs md:text-sm hover:bg-gray-800 transition">
                    <Download className="w-3 h-3 md:w-4 md:h-4" /> Play Store
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg text-xs md:text-sm hover:bg-gray-800 transition">
                    <Download className="w-3 h-3 md:w-4 md:h-4" /> App Store
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 mx-auto max-w-sm lg:max-w-none">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm md:text-base">Quick Vehicle Entry</h3>
                    <p className="text-text-secondary text-xs md:text-sm">Track vehicle instantly</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <input type="text" placeholder="Enter Vehicle Number" className="input-field text-sm" />
                  <select className="input-field text-sm">
                    <option value="">Select Vehicle Type</option>
                    <option value="2">2 Wheeler</option>
                    <option value="4">4 Wheeler (Car)</option>
                    <option value="17">Heavy Vehicle</option>
                  </select>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <button className="btn-primary w-full text-sm py-2">Track Vehicle</button>
                    <button className="btn-outline w-full text-sm py-2">Generate Ticket</button>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border-light">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-text-secondary">UPI Payment Available</span>
                    <span className="text-success-main flex items-center gap-1"><CheckCircle className="w-3 h-3 md:w-4 md:h-4" /> Cash Accepted</span>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 md:w-20 md:h-20 bg-secondary-100 rounded-full -z-10" />
                <div className="absolute -bottom-3 -left-3 w-14 h-14 md:w-20 md:h-20 bg-primary-100 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-10 md:py-12 bg-background-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 text-primary-600">{stat.icon}</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-600 mb-0.5 md:mb-1">{stat.value}</div>
                <div className="text-text-secondary text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Complete <span className="text-primary-600">Parking Solution</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Everything you need to manage parking operations — from vehicle tracking to staff management and payments</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary-100 transition-colors">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform">{feature.icon}</div>
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              How It <span className="text-primary-600">Works</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Complete parking management in four simple steps</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-up text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform rotate-12 hover:rotate-0 transition-all duration-500">
                  <span className="text-white font-heading font-bold text-lg md:text-2xl">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-lg mb-1 md:mb-2">{step.title}</h3>
                <p className="text-text-secondary text-xs md:text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-7 md:top-10 -right-4 w-5 h-5 md:w-6 md:h-6 text-primary-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Tracking ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4">
                <History className="w-3 h-3 md:w-4 md:h-4" /> Vehicle History Tracking
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Track Complete <span className="text-primary-600">Vehicle History</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">Maintain detailed records of every vehicle that parks at your facility.</p>
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left max-w-sm mx-auto lg:mx-0">
                {['Full vehicle number tracking', 'Date-wise entry/exit history', 'Revenue generated per vehicle', 'Traffic pattern analytics', 'Peak hour identification'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success-main flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/register" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
                Start Tracking <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mx-auto max-w-sm lg:max-w-none">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h3 className="font-heading font-semibold text-sm md:text-base">Recent Vehicles</h3>
                  <button className="text-primary-600 text-xs md:text-sm">View All →</button>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {['MH01AB1234', 'DL02CD5678', 'KA03EF9012', 'TN04GH3456'].map((vehicle, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 md:p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Car className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-xs md:text-sm">{vehicle}</p>
                          <p className="text-text-secondary text-xs hidden sm:block">Entry: 10:30 AM | Exit: 2:15 PM</p>
                        </div>
                      </div>
                      <span className="text-success-main font-semibold text-sm md:text-base">₹{50 + i * 20}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff Management ── */}
      <section className="section-padding bg-background-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-right mt-4 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mx-auto max-w-sm lg:max-w-none">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm md:text-base">Add New Staff</h3>
                    <p className="text-text-secondary text-xs md:text-sm">Manage your parking team</p>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { name: 'Rahul Sharma', id: 'STF001', status: 'Active', color: 'text-success-main' },
                    { name: 'Priya Patel', id: 'STF002', status: 'Active', color: 'text-success-main' },
                    { name: 'Amit Kumar', id: 'STF003', status: 'On Leave', color: 'text-warning-main' },
                  ].map((staff, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 md:p-3 border border-border-light rounded-lg">
                      <div>
                        <p className="font-medium text-xs md:text-sm">{staff.name}</p>
                        <p className="text-text-secondary text-xs">Staff ID: {staff.id}</p>
                      </div>
                      <span className={`${staff.color} text-xs md:text-sm`}>{staff.status}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-outline w-full mt-3 md:mt-4 flex items-center justify-center gap-2 text-sm py-2 md:py-3">
                  <UserPlus className="w-4 h-4" /> Add New Staff Member
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-left text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4">
                <Users className="w-3 h-3 md:w-4 md:h-4" /> Staff Management
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Manage Your <span className="text-secondary-500">Parking Staff</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">Easily add, track, and manage parking staff under your vendor account.</p>
              <div className="space-y-2 md:space-y-3 text-left max-w-sm mx-auto lg:mx-0">
                {['Add new staff members with role-based access', 'Track attendance and performance', 'Assign specific parking zones to staff', 'Monitor staff activities and transactions'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success-main flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Payment Options ── */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Multiple <span className="text-primary-600">Payment Options</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">Flexible payment methods for your convenience</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />, label: 'UPI Payment', sub: 'Google Pay, PhonePe, Paytm' },
              { icon: <QrCode className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />, label: 'QR Code', sub: 'Scan & Pay' },
              { icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />, label: 'Card Payment', sub: 'Credit/Debit Cards' },
              { icon: <Printer className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />, label: 'Cash Payment', sub: 'Pay at Exit' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">{item.icon}</div>
                <p className="font-semibold text-sm md:text-base">{item.label}</p>
                <p className="text-text-secondary text-xs md:text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              What Our <span className="text-primary-600">Users</span> <span className="text-secondary-500">Say</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Trusted by parking vendors and vehicle owners across the city</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="card p-4 md:p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <img src={t.image} alt={t.name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base">{t.name}</h4>
                    <p className="text-text-secondary text-xs md:text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2 md:mb-3">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-secondary-500 text-secondary-500" />)}
                </div>
                <p className="text-text-secondary text-xs md:text-sm italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Ready to Digitize Your Parking?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of parking vendors who have transformed their operations with our smart management system
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link to="/register" className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Start Free Trial
            </Link>
            <Link to="/contact" className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base">
              Contact Sales
            </Link>
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <button className="flex items-center gap-2 px-5 py-2 bg-black/20 rounded-lg hover:bg-black/30 transition text-sm md:text-base">
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Download App
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Home;