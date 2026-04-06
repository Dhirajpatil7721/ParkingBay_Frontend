// // src/Pages/Static/WhyUs.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Smartphone,
//   CreditCard,
//   Users,
//   History,
//   Printer,
//   BarChart3,
//   QrCode,
//   Clock,
//   Shield,
//   Zap,
//   IndianRupee,
//   ChevronRight,
//   Star,
//   CheckCircle,
//   TrendingUp,
//   FileText,
//   Download,
//   PlayCircle
// } from 'lucide-react';

// const WhyUs = () => {
//   const features = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: 'Web & Mobile App',
//       description: 'Access your parking history and manage bookings from any device - web or mobile.',
//       details: ['Real-time availability', 'Instant booking', 'Digital receipts']
//     },
//     {
//       icon: <History className="w-8 h-8" />,
//       title: 'Complete Vehicle History',
//       description: 'Track every vehicle with full details including registration number, entry/exit times, and duration.',
//       details: ['Date-wise history', 'Vehicle number tracking', 'Revenue analytics']
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: 'Traffic & Revenue Insights',
//       description: 'Get detailed analytics about traffic patterns and revenue generation.',
//       details: ['Daily traffic reports', 'Peak hour analysis', 'Revenue tracking']
//     },
//     {
//       icon: <CreditCard className="w-8 h-8" />,
//       title: 'Multiple Payment Options',
//       description: 'Convenient payment methods for every user - UPI, Cash, Cards & Wallets.',
//       details: ['UPI & QR payments', 'Cash on exit', 'Digital wallets']
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Staff Management',
//       description: 'Easily add and manage parking staff under your vendor account.',
//       details: ['Role-based access', 'Attendance tracking', 'Performance metrics']
//     },
//     {
//       icon: <Printer className="w-8 h-8" />,
//       title: 'Digital & Print Tickets',
//       description: 'Generate both digital tickets for app users and printable tickets for traditional users.',
//       details: ['QR code tickets', 'Print receipts', 'SMS/Email delivery']
//     }
//   ];

//   const benefits = [
//     {
//       title: 'For Vehicle Owners',
//       icon: <Shield className="w-6 h-6" />,
//       points: [
//         'Find parking spots in real-time',
//         'Complete parking history of your vehicles',
//         'Digital receipts for all transactions',
//         '24/7 customer support',
//         'Secure payment options'
//       ]
//     },
//     {
//       title: 'For Parking Vendors',
//       icon: <TrendingUp className="w-6 h-6" />,
//       points: [
//         'Smart digital management system',
//         'Real-time occupancy tracking',
//         'Revenue analytics dashboard',
//         'Staff management tools',
//         'Print & digital ticketing'
//       ]
//     }
//   ];

//   const appFeatures = [
//     {
//       title: 'Track Vehicle History',
//       description: 'Maintain complete records of all vehicles with registration numbers, entry/exit times, and payment history.',
//       icon: <FileText className="w-6 h-6" />
//     },
//     {
//       title: 'Date-wise Analytics',
//       description: 'View detailed reports for any date range - track traffic, revenue, and occupancy patterns.',
//       icon: <TrendingUp className="w-6 h-6" />
//     },
//     {
//       title: 'Smart Ticketing',
//       description: 'Generate digital QR tickets or print physical tickets - best of both worlds.',
//       icon: <QrCode className="w-6 h-6" />
//     }
//   ];

//   return (
//     <div className="font-body">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-16">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-right">
//               <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
//                 Why Choose{' '}
//                 <span className="text-primary-600">Parking</span>
//                 <span className="text-secondary-500">Bay</span>
//               </h1>
//               <p className="text-text-secondary text-lg mb-8">
//                 Experience the future of parking management with our comprehensive solution
//                 that combines web and mobile technology, smart tracking, and seamless payments.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/register" className="btn-primary">
//                   Get Started
//                 </Link>
//                 <Link to="/find-parking" className="btn-outline">
//                   Find Parking
//                 </Link>
//               </div>
//             </div>
//             <div className="relative animate-slide-left">
//               <div className="relative bg-white rounded-3xl shadow-2xl p-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=600&fit=crop"
//                   alt="Parking Bay App Interface"
//                   className="rounded-2xl w-full"
//                 />
//                 <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//                   Available on App Store
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               Comprehensive{' '}
//               <span className="text-primary-600">Parking Solution</span>
//             </h2>
//             <p className="text-text-secondary">
//               Everything you need for smart parking management in one platform
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary-600">
//                   {feature.icon}
//                 </div>
//                 <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
//                 <p className="text-text-secondary text-sm mb-4">{feature.description}</p>
//                 <ul className="space-y-2">
//                   {feature.details.map((detail, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
//                       <CheckCircle className="w-4 h-4 text-success-main" />
//                       {detail}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* App Features Showcase */}
//       <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-right">
//               <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm mb-4">
//                 <Smartphone className="w-4 h-4" />
//                 Mobile Application
//               </div>
//               <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//                 Track Everything from{' '}
//                 <span className="text-primary-600">Your Phone</span>
//               </h2>
//               <p className="text-text-secondary mb-6">
//                 Our mobile app gives you complete control over your parking operations.
//                 Track vehicles, view history, manage staff, and generate reports - all
//                 from the palm of your hand.
//               </p>
//               <div className="space-y-4 mb-8">
//                 {appFeatures.map((item, index) => (
//                   <div key={index} className="flex gap-3">
//                     <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-heading font-semibold">{item.title}</h4>
//                       <p className="text-text-secondary text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
//                   <Download className="w-5 h-5" />
//                   <div className="text-left">
//                     <div className="text-xs">Download on</div>
//                     <div className="font-semibold">Google Play</div>
//                   </div>
//                 </button>
//                 <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
//                   <Download className="w-5 h-5" />
//                   <div className="text-left">
//                     <div className="text-xs">Download on</div>
//                     <div className="font-semibold">App Store</div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div className="relative animate-slide-left">
//               <div className="relative mx-auto max-w-[280px]">
//                 <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
//                   <div className="bg-gray-800 px-4 py-2 flex justify-center">
//                     <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
//                   </div>
//                   <img
//                     src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=600&fit=crop"
//                     alt="App Screenshot"
//                     className="w-full"
//                   />
//                 </div>
//                 {/* Floating elements */}
//                 <div className="absolute -top-8 -right-12 w-24 h-24 bg-secondary-100 rounded-full -z-10"></div>
//                 <div className="absolute -bottom-8 -left-12 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits for Both Users */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//               Benefits for{' '}
//               <span className="text-primary-600">Everyone</span>
//             </h2>
//             <p className="text-text-secondary">
//               Whether you're a vehicle owner or a parking vendor, ParkingBay has you covered
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="font-heading font-semibold text-xl">{benefit.title}</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {benefit.points.map((point, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
//                       <span className="text-text-secondary">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Features */}
//       <section className="section-padding bg-background-card">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//                 Smart <span className="text-primary-600">Digital Management</span>
//               </h2>
//               <p className="text-text-secondary mb-6">
//                 Our platform provides complete digital transformation for parking operations,
//                 from entry to exit, with real-time tracking and analytics.
//               </p>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="flex items-start gap-3 p-4 bg-background-body rounded-xl">
//                   <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
//                     <QrCode className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold">QR Code Entry/Exit</h4>
//                     <p className="text-text-secondary text-sm">Scan and go - seamless entry and exit</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-background-body rounded-xl">
//                   <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
//                     <Printer className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold">Print Tickets</h4>
//                     <p className="text-text-secondary text-sm">Traditional ticket printing support</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-background-body rounded-xl">
//                   <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
//                     <IndianRupee className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold">UPI & Cash Payments</h4>
//                     <p className="text-text-secondary text-sm">Multiple payment options available</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-background-body rounded-xl">
//                   <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
//                     <Users className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold">Staff Management</h4>
//                     <p className="text-text-secondary text-sm">Add and manage parking staff easily</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-6 text-white">
//               <div className="text-center">
//                 <div className="text-5xl font-heading font-bold mb-2">Get Started</div>
//                 <div className="text-3xl font-heading font-bold mb-4">Today!</div>
//                 <p className="mb-6 opacity-90">
//                   Join the smart parking revolution and transform your parking experience
//                 </p>
//                 <Link
//                   to="/register"
//                   className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
//                 >
//                   Sign Up Now
//                   <ChevronRight className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-background-body">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
//             Ready to Go <span className="text-primary-600">Digital?</span>
//           </h2>
//           <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
//             Switch to smart parking management and never worry about tracking or payments again
//           </p>
//           <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
//             Contact Sales
//             <ChevronRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhyUs;


// src/Pages/Static/WhyUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, CreditCard, Users, History, Printer, BarChart3,
  QrCode, Shield, IndianRupee, ChevronRight, CheckCircle, TrendingUp, FileText, Download
} from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Web & Mobile App',
      description: 'Access your parking history and manage bookings from any device.',
      details: ['Real-time availability', 'Instant booking', 'Digital receipts'],
    },
    {
      icon: <History className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Complete Vehicle History',
      description: 'Track every vehicle with full details including registration number, entry/exit times.',
      details: ['Date-wise history', 'Vehicle number tracking', 'Revenue analytics'],
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Traffic & Revenue Insights',
      description: 'Get detailed analytics about traffic patterns and revenue generation.',
      details: ['Daily traffic reports', 'Peak hour analysis', 'Revenue tracking'],
    },
    {
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Multiple Payment Options',
      description: 'Convenient payment methods — UPI, Cash, Cards & Wallets.',
      details: ['UPI & QR payments', 'Cash on exit', 'Digital wallets'],
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Staff Management',
      description: 'Easily add and manage parking staff under your vendor account.',
      details: ['Role-based access', 'Attendance tracking', 'Performance metrics'],
    },
    {
      icon: <Printer className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Digital & Print Tickets',
      description: 'Generate both digital tickets for app users and printable tickets.',
      details: ['QR code tickets', 'Print receipts', 'SMS/Email delivery'],
    },
  ];

  const benefits = [
    {
      title: 'For Vehicle Owners',
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      points: ['Find parking spots in real-time', 'Complete parking history of your vehicles', 'Digital receipts for all transactions', '24/7 customer support', 'Secure payment options'],
    },
    {
      title: 'For Parking Vendors',
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      points: ['Smart digital management system', 'Real-time occupancy tracking', 'Revenue analytics dashboard', 'Staff management tools', 'Print & digital ticketing'],
    },
  ];

  const appFeatures = [
    { title: 'Track Vehicle History', description: 'Maintain complete records of all vehicles with registration numbers, entry/exit times, and payment history.', icon: <FileText className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Date-wise Analytics', description: 'View detailed reports for any date range — track traffic, revenue, and occupancy patterns.', icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Smart Ticketing', description: 'Generate digital QR tickets or print physical tickets — best of both worlds.', icon: <QrCode className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  return (
    <div className="font-body">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 md:pt-24 pb-10 md:pb-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
                Why Choose{' '}
                <span className="text-primary-600">Parking</span>
                <span className="text-secondary-500">Bay</span>
              </h1>
              <p className="text-text-secondary text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Experience the future of parking management with our comprehensive solution
                that combines web and mobile technology, smart tracking, and seamless payments.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/register" className="btn-primary text-sm md:text-base">Get Started</Link>
                <Link to="/find-parking" className="btn-outline text-sm md:text-base">Find Parking</Link>
              </div>
            </div>
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="relative bg-white rounded-3xl shadow-2xl p-3 mx-auto max-w-sm lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop"
                  alt="Parking Bay App"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute -top-3 -right-3 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Available on App Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Comprehensive <span className="text-primary-600">Parking Solution</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Everything you need for smart parking management in one platform</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card p-4 md:p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-3 md:mb-4 text-primary-600">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-base md:text-xl mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">{feature.description}</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-success-main flex-shrink-0" /> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Features ── */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4">
                <Smartphone className="w-3 h-3 md:w-4 md:h-4" /> Mobile Application
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Track Everything from <span className="text-primary-600">Your Phone</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">
                Our mobile app gives you complete control over your parking operations.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {appFeatures.map((item, index) => (
                  <div key={index} className="flex gap-3 text-left">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-text-secondary text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all text-sm">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs">Download on</div>
                    <div className="font-semibold text-xs md:text-sm">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all text-sm">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs">Download on</div>
                    <div className="font-semibold text-xs md:text-sm">App Store</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-[200px] md:max-w-[260px]">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 md:border-8 border-gray-800">
                  <div className="bg-gray-800 px-4 py-1.5 flex justify-center">
                    <div className="w-14 md:w-20 h-1 bg-gray-600 rounded-full" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=500&fit=crop"
                    alt="App Screenshot"
                    className="w-full"
                  />
                </div>
                <div className="absolute -top-6 -right-10 w-20 h-20 bg-secondary-100 rounded-full -z-10" />
                <div className="absolute -bottom-6 -left-10 w-24 h-24 bg-primary-100 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Benefits for <span className="text-primary-600">Everyone</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base">Whether you're a vehicle owner or a parking vendor, ParkingBay has you covered</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-4 md:p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">{benefit.icon}</div>
                  <h3 className="font-heading font-semibold text-base md:text-xl">{benefit.title}</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-text-secondary text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Features ── */}
      <section className="section-padding bg-background-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Smart <span className="text-primary-600">Digital Management</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">
                Our platform provides complete digital transformation for parking operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: <QrCode className="w-4 h-4 md:w-5 md:h-5" />, title: 'QR Code Entry/Exit', desc: 'Scan and go — seamless entry and exit' },
                  { icon: <Printer className="w-4 h-4 md:w-5 md:h-5" />, title: 'Print Tickets', desc: 'Traditional ticket printing support' },
                  { icon: <IndianRupee className="w-4 h-4 md:w-5 md:h-5" />, title: 'UPI & Cash Payments', desc: 'Multiple payment options available' },
                  { icon: <Users className="w-4 h-4 md:w-5 md:h-5" />, title: 'Staff Management', desc: 'Add and manage parking staff easily' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 md:p-4 bg-background-body rounded-xl">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-text-secondary text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-5 md:p-6 text-white flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-5xl font-heading font-bold mb-1 md:mb-2">Get Started</div>
              <div className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4">Today!</div>
              <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">Join the smart parking revolution and transform your parking experience</p>
              <Link to="/register" className="inline-flex items-center gap-2 bg-white text-primary-600 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:shadow-xl transition-all text-sm md:text-base">
                Sign Up Now <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-background-body">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Ready to Go <span className="text-primary-600">Digital?</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Switch to smart parking management and never worry about tracking or payments again
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
            Contact Sales <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;