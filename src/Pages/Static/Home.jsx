import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, CreditCard, MapPin, Star, ChevronRight,
  Car, Smartphone, Users, History, Printer, IndianRupee,
  BarChart3, QrCode, Download, UserPlus, TrendingUp, FileText,
  CheckCircle, ClipboardCheck, Settings
} from 'lucide-react';
import homeimg from '../../assets/WhyUs_Why_Choose.png'
import qrCodeImage from '../../assets/QR.png'

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


  return (
    <div className="font-body">
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-64 h-64 md:w-80 md:h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-64 h-64 md:w-80 md:h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.onkarsarang.parking_Vendor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" /> Download Now
                </a>
                <Link to="/contact" className="btn-outline text-sm md:text-base">Contact Sales</Link>
              </div>
            </div>

            {/* Single Image with QR Code */}
            <div className="relative animate-slide-left mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Main Image */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={homeimg}
                    alt="Parking Management App Interface"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Stylish QR Code Card */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 group">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-2 md:p-3 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110">
                    {/* QR Code Image */}
                    <div className="relative">
                      <img
                        src={qrCodeImage}
                        alt="Scan QR Code"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl"
                      />

                      {/* QR Code Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* QR Code Label */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Scan to Download
                    </div>
                  </div>

                  {/* Decorative ring around QR */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" style={{ animationDuration: '10s' }} />
                </div>

                {/* Decorative background elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-secondary-100 rounded-full -z-10" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full -z-10" />

                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full shadow-lg px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 animate-bounce">
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                  <span className="text-xs md:text-sm font-semibold text-text-primary">Easy to Use</span>
                </div>

                {/* Download Badge */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Download className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-white text-[10px] md:text-xs font-medium">Download App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow linear infinite;
  }
`}</style>


      {/* ── Features ── */}
      <section className="section-padding bg-background-body">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Complete <span className="text-primary-600">Parking Solution</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base px-4">
              Everything you need to manage parking operations — from vehicle tracking to staff management and payments
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
        card p-4 md:p-6 text-center group 
        hover:shadow-xl transition-all duration-300 animate-fade-in
        flex-1
        min-w-[250px]
        max-w-full
        sm:max-w-[calc(50%-1rem)]
        lg:max-w-[calc(25%-1rem)]
        xl:max-w-[calc(20%-1rem)]
      "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary-100 transition-colors">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
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
            <p classsName="text-text-secondary text-sm md:text-base">Complete parking management in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: '01',
                title: 'Download',
                description: 'Download the app from Google Play Store or App Store',
                icon: <Download className="w-6 h-6 md:w-8 md:h-8" />
              },
              {
                number: '02',
                title: 'Register',
                description: 'Create your account with email or phone number',
                icon: <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8" />
              },
              {
                number: '03',
                title: 'Add Staff',
                description: 'Add your parking staff members and assign roles',
                icon: <UserPlus className="w-6 h-6 md:w-8 md:h-8" />
              },
              {
                number: '04',
                title: 'Ready to Use',
                description: 'Start managing parking, tracking vehicles, and processing payments',
                icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />
              },
            ].map((step, index) => (
              <div key={index} className=" relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Card Box */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                    <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-base md:text-lg mb-2 text-center">{step.title}</h3>

                  {/* Description */}
                  <p className="text-text-secondary text-xs md:text-sm text-center leading-relaxed">{step.description}</p>

                  {/* Step Number Indicator */}
                  <div className="text-center mt-3">
                    <span className="text-xs text-primary-400 font-medium">Step {step.number}</span>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {index < 3 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 md:w-6 md:h-6 text-primary-400 transform -translate-y-1/2" />
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
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Section Header */}
            <div className="mb-8 md:mb-12">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                Multiple <span className="text-primary-600">Payment Options</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-lg max-w-2xl mx-auto">
                Flexible payment methods for your convenience
              </p>
            </div>

            {/* Payment Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  icon: <IndianRupee className="w-6 h-6 md:w-8 md:h-8" />,
                  label: 'UPI Payment',
                  sub: 'Google Pay, PhonePe, Paytm',
                  bgGradient: 'from-blue-50 to-blue-100',
                  iconColor: 'text-blue-600'
                },
                {
                  icon: <QrCode className="w-6 h-6 md:w-8 md:h-8" />,
                  label: 'QR Code',
                  sub: 'Scan & Pay',
                  bgGradient: 'from-green-50 to-green-100',
                  iconColor: 'text-green-600'
                },
                {
                  icon: <Printer className="w-6 h-6 md:w-8 md:h-8" />,
                  label: 'Cash Payment',
                  sub: 'Pay at Exit',
                  bgGradient: 'from-orange-50 to-orange-100',
                  iconColor: 'text-orange-600'
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${item.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                    <div className={`${item.iconColor}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="font-heading font-semibold text-base md:text-xl mb-1 md:mb-2">
                    {item.label}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {item.sub}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Security Badge */}
            <div className="mt-8 md:mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-text-secondary text-xs md:text-sm">
                  🔒 100% Secure Payments
                </span>
              </div>
            </div>
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

          <div className="flex justify-center mt-6 md:mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.onkarsarang.parking_Vendor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-black/20 rounded-lg hover:bg-black/30 transition text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Download App
            </a>
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