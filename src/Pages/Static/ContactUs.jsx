// // src/Pages/Static/ContactUs.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock,
//   Send,
//   CheckCircle,
//   AlertCircle
// } from 'lucide-react';
// import { 
//   createContact, 
//   clearError, 
//   clearSuccess
// } from '../../../redux/slice/Contact';

// const ContactUs = () => {
//   const dispatch = useDispatch();
  
//   // Direct state access using the correct key 'Contact' (capital C)
//   const { 
//     createContactLoading: isLoading,
//     error,
//     success: isSubmitted,
//     successMessage
//   } = useSelector((state) => state.Contact); // Changed from state.contact to state.Contact
  
//   // Rest of your component remains the same...
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });
  
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   useEffect(() => {
//     if (isSubmitted) {
//       const timer = setTimeout(() => {
//         dispatch(clearSuccess());
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSubmitted, dispatch]);

//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//     const fieldError = validateField(name, formData[name]);
//     if (fieldError) {
//       setErrors(prev => ({ ...prev, [name]: fieldError }));
//     }
//   };

//   const validateField = (fieldName, value) => {
//     switch (fieldName) {
//       case 'fullName':
//         if (!value.trim()) return 'Full name is required';
//         if (value.trim().length < 2) return 'Name must be at least 2 characters';
//         return '';
//       case 'email':
//         if (!value.trim()) return 'Email is required';
//         if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address';
//         return '';
//       case 'phone':
//         if (!value.trim()) return 'Phone number is required';
//         const cleanPhone = value.replace(/\D/g, '');
//         if (!/^\d{10}$/.test(cleanPhone)) return 'Please enter a valid 10-digit phone number';
//         return '';
//       case 'subject':
//         if (!value.trim()) return 'Subject is required';
//         if (value.trim().length < 3) return 'Subject must be at least 3 characters';
//         return '';
//       case 'message':
//         if (!value.trim()) return 'Message is required';
//         if (value.trim().length < 10) return 'Message must be at least 10 characters';
//         return '';
//       default:
//         return '';
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const fields = ['fullName', 'email', 'phone', 'subject', 'message'];
    
//     fields.forEach(field => {
//       const error = validateField(field, formData[field]);
//       if (error) newErrors[field] = error;
//     });
    
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const allTouched = {
//       fullName: true,
//       email: true,
//       phone: true,
//       subject: true,
//       message: true
//     };
//     setTouched(allTouched);
    
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length === 0) {
//       const apiData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         subject: formData.subject,
//         message: formData.message
//       };
      
//       const result = await dispatch(createContact(apiData));
      
//       if (createContact.fulfilled.match(result)) {
//         setFormData({
//           fullName: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: ''
//         });
//         setTouched({});
//         setErrors({});
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   // Rest of your JSX remains the same...
//   return (
//     <div className="font-body">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-16">
//         <div className="container-custom text-center">
//           <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
//             Get in{' '}
//             <span className="text-primary-600">Touch</span>
//           </h1>
//           <p className="text-text-secondary text-lg max-w-2xl mx-auto">
//             Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="section-padding bg-background-body">
//         <div className="container-custom">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
//             <div className="card p-6 text-center animate-slide-up">
//               <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="w-6 h-6 text-primary-600" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg mb-3">Visit Us</h3>
//               <p className="text-text-secondary text-sm">123 Parking Street</p>
//               <p className="text-text-secondary text-sm">City, State 12345</p>
//               <p className="text-text-secondary text-sm">United States</p>
//             </div>
            
//             <div className="card p-6 text-center animate-slide-up">
//               <div className="w-14 h-14 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Phone className="w-6 h-6 text-secondary-600" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg mb-3">Call Us</h3>
//               <p className="text-text-secondary text-sm">+1 (234) 567-8900</p>
//               <p className="text-text-secondary text-sm">+1 (234) 567-8901</p>
//               <p className="text-text-secondary text-sm">24/7 Support</p>
//             </div>
            
//             <div className="card p-6 text-center animate-slide-up">
//               <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Mail className="w-6 h-6 text-primary-600" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg mb-3">Email Us</h3>
//               <p className="text-text-secondary text-sm">support@parkingweb.com</p>
//               <p className="text-text-secondary text-sm">info@parkingweb.com</p>
//               <p className="text-text-secondary text-sm">careers@parkingweb.com</p>
//             </div>
            
//             <div className="card p-6 text-center animate-slide-up">
//               <div className="w-14 h-14 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Clock className="w-6 h-6 text-secondary-600" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg mb-3">Working Hours</h3>
//               <p className="text-text-secondary text-sm">Monday - Friday: 9am - 6pm</p>
//               <p className="text-text-secondary text-sm">Saturday: 10am - 4pm</p>
//               <p className="text-text-secondary text-sm">Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Map */}
//       <section className="section-padding bg-background-body pt-0">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="card p-8 animate-slide-right">
//               <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
//                 Send us a{' '}
//                 <span className="text-primary-600">Message</span>
//               </h2>

//               {isSubmitted && (
//                 <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
//                   <CheckCircle className="w-5 h-5 text-green-600" />
//                   <div>
//                     <p className="text-green-800 font-medium">Message Sent Successfully!</p>
//                     <p className="text-green-600 text-sm">
//                       {successMessage || "Thank you for contacting us! We'll get back to you soon."}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {error && (
//                 <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-fade-in">
//                   <AlertCircle className="w-5 h-5 text-red-600" />
//                   <div>
//                     <p className="text-red-800 font-medium">Error</p>
//                     <p className="text-red-600 text-sm">{error}</p>
//                   </div>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-text-primary font-medium mb-2">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`input-field ${errors.fullName && touched.fullName ? 'border-red-500' : ''}`}
//                     placeholder="John Doe"
//                     disabled={isLoading}
//                   />
//                   {errors.fullName && touched.fullName && (
//                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                       <AlertCircle className="w-4 h-4" /> {errors.fullName}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-text-primary font-medium mb-2">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`input-field ${errors.email && touched.email ? 'border-red-500' : ''}`}
//                       placeholder="john@example.com"
//                       disabled={isLoading}
//                     />
//                     {errors.email && touched.email && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="w-4 h-4" /> {errors.email}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-text-primary font-medium mb-2">
//                       Phone <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`input-field ${errors.phone && touched.phone ? 'border-red-500' : ''}`}
//                       placeholder="1234567890"
//                       maxLength="10"
//                       disabled={isLoading}
//                     />
//                     {errors.phone && touched.phone && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="w-4 h-4" /> {errors.phone}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-text-primary font-medium mb-2">
//                     Subject <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`input-field ${errors.subject && touched.subject ? 'border-red-500' : ''}`}
//                     placeholder="How can we help?"
//                     disabled={isLoading}
//                   />
//                   {errors.subject && touched.subject && (
//                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                       <AlertCircle className="w-4 h-4" /> {errors.subject}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-text-primary font-medium mb-2">
//                     Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     rows="5"
//                     className={`input-field resize-none ${errors.message && touched.message ? 'border-red-500' : ''}`}
//                     placeholder="Write your message here..."
//                     disabled={isLoading}
//                   ></textarea>
//                   {errors.message && touched.message && (
//                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                       <AlertCircle className="w-4 h-4" /> {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="btn-primary w-full flex items-center justify-center gap-2"
//                 >
//                   {isLoading ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Map & FAQs */}
//             <div className="space-y-6 animate-slide-left">
//               <div className="card p-6">
//                 <h3 className="font-heading font-semibold text-xl mb-4">Our Location</h3>
//                 <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458415!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     title="Office Location"
//                     className="w-full h-full"
//                   ></iframe>
//                 </div>
//               </div>

//               {/* FAQs */}
//               <div className="card p-6">
//                 <h3 className="font-heading font-semibold text-xl mb-4">Frequently Asked Questions</h3>
//                 <div className="space-y-4">
//                   <div className="border-b border-border-light pb-4">
//                     <h4 className="font-heading font-medium text-text-primary mb-2">How do I book a parking spot?</h4>
//                     <p className="text-text-secondary text-sm">Simply search for your desired location, select your time slot, and complete the payment. You'll receive a confirmation email with a QR code.</p>
//                   </div>
//                   <div className="border-b border-border-light pb-4">
//                     <h4 className="font-heading font-medium text-text-primary mb-2">Can I cancel my booking?</h4>
//                     <p className="text-text-secondary text-sm">Yes, you can cancel your booking up to 2 hours before the scheduled time for a full refund.</p>
//                   </div>
//                   <div className="border-b border-border-light pb-4">
//                     <h4 className="font-heading font-medium text-text-primary mb-2">Is my payment secure?</h4>
//                     <p className="text-text-secondary text-sm">Absolutely! We use industry-standard encryption and secure payment gateways to protect your information.</p>
//                   </div>
//                   <div className="pb-4">
//                     <h4 className="font-heading font-medium text-text-primary mb-2">What if I arrive late?</h4>
//                     <p className="text-text-secondary text-sm">You have a 30-minute grace period after your booked time slot. After that, additional charges may apply.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-primary-contrast">
//         <div className="container-custom text-center">
//           <h2 className="font-heading font-bold text-3xl mb-4">Prefer to call?</h2>
//           <p className="text-xl mb-6 opacity-90">Our support team is available 24/7</p>
//           <a
//             href="tel:+12345678900"
//             className="inline-flex items-center gap-3 text-3xl font-heading font-bold hover:underline"
//           >
//             <Phone className="w-8 h-8" />
//             +1 (234) 567-8900
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;

// src/Pages/Static/ContactUs.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { createContact, clearError, clearSuccess } from '../../../redux/slice/Contact';

const ContactUs = () => {
  const dispatch = useDispatch();
  const { createContactLoading: isLoading, error, success: isSubmitted, successMessage } =
    useSelector((state) => state.Contact);

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => dispatch(clearSuccess()), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, dispatch]);

  useEffect(() => { return () => { dispatch(clearError()); }; }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, formData[name]);
    if (fieldError) setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'fullName': return !value.trim() ? 'Full name is required' : value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email': return !value.trim() ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email address' : '';
      case 'phone': { const clean = value.replace(/\D/g, ''); return !value.trim() ? 'Phone number is required' : !/^\d{10}$/.test(clean) ? 'Please enter a valid 10-digit phone number' : ''; }
      case 'subject': return !value.trim() ? 'Subject is required' : value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message': return !value.trim() ? 'Message is required' : value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default: return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ['fullName', 'email', 'phone', 'subject', 'message'].forEach(field => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, subject: true, message: true });
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const result = await dispatch(createContact(formData));
      if (createContact.fulfilled.match(result)) {
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
      }
    } else {
      setErrors(newErrors);
    }
  };

  const infoCards = [
    { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />, title: 'Visit Us', lines: ['123 Parking Street', 'City, State 12345', 'United States'], bg: 'bg-primary-50' },
    { icon: <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary-600" />, title: 'Call Us', lines: ['+1 (234) 567-8900', '+1 (234) 567-8901', '24/7 Support'], bg: 'bg-secondary-50' },
    { icon: <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />, title: 'Email Us', lines: ['support@parkingweb.com', 'info@parkingweb.com', 'careers@parkingweb.com'], bg: 'bg-primary-50' },
    { icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary-600" />, title: 'Working Hours', lines: ['Mon - Fri: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'], bg: 'bg-secondary-50' },
  ];

  const faqs = [
    { q: 'How do I book a parking spot?', a: 'Simply search for your desired location, select your time slot, and complete the payment. You\'ll receive a confirmation email with a QR code.' },
    { q: 'Can I cancel my booking?', a: 'Yes, you can cancel your booking up to 2 hours before the scheduled time for a full refund.' },
    { q: 'Is my payment secure?', a: 'Absolutely! We use industry-standard encryption and secure payment gateways to protect your information.' },
    { q: 'What if I arrive late?', a: 'You have a 30-minute grace period after your booked time slot. After that, additional charges may apply.' },
  ];

  return (
    <div className="font-body">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 md:pt-24 pb-8 md:pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="bg-background-body pb-0">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 -mt-6 md:-mt-16 relative z-10">
            {infoCards.map((card, i) => (
              <div key={i} className="card p-3 md:p-6 text-center animate-slide-up">
                <div className={`w-10 h-10 md:w-14 md:h-14 ${card.bg} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-heading font-semibold text-sm md:text-lg mb-1 md:mb-3">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-text-secondary text-xs md:text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form & Map ── */}
      <section className="section-padding bg-background-body pt-8 md:pt-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="card p-4 md:p-8 animate-slide-right order-2 lg:order-1">
              <h2 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                Send us a <span className="text-primary-600">Message</span>
              </h2>

              {isSubmitted && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2 md:gap-3 animate-fade-in">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium text-sm md:text-base">Message Sent Successfully!</p>
                    <p className="text-green-600 text-xs md:text-sm">{successMessage || "Thank you! We'll get back to you soon."}</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 md:gap-3 animate-fade-in">
                  <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium text-sm md:text-base">Error</p>
                    <p className="text-red-600 text-xs md:text-sm">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-text-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" name="fullName" value={formData.fullName}
                    onChange={handleChange} onBlur={handleBlur}
                    className={`input-field text-sm md:text-base ${errors.fullName && touched.fullName ? 'border-red-500' : ''}`}
                    placeholder="John Doe" disabled={isLoading}
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  <div>
                    <label className="block text-text-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`input-field text-sm md:text-base ${errors.email && touched.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com" disabled={isLoading}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4" /> {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-text-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel" name="phone" value={formData.phone}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`input-field text-sm md:text-base ${errors.phone && touched.phone ? 'border-red-500' : ''}`}
                      placeholder="1234567890" maxLength="10" disabled={isLoading}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-text-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" name="subject" value={formData.subject}
                    onChange={handleChange} onBlur={handleBlur}
                    className={`input-field text-sm md:text-base ${errors.subject && touched.subject ? 'border-red-500' : ''}`}
                    placeholder="How can we help?" disabled={isLoading}
                  />
                  {errors.subject && touched.subject && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-text-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleChange} onBlur={handleBlur}
                    rows="4"
                    className={`input-field resize-none text-sm md:text-base ${errors.message && touched.message ? 'border-red-500' : ''}`}
                    placeholder="Write your message here..." disabled={isLoading}
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 md:w-4 md:h-4" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit" disabled={isLoading}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isLoading ? (
                    <><div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            {/* Map & FAQs */}
            <div className="space-y-4 md:space-y-6 animate-slide-left order-1 lg:order-2">
              <div className="card p-4 md:p-6">
                <h3 className="font-heading font-semibold text-base md:text-xl mb-3 md:mb-4">Our Location</h3>
                <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458415!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%" height="100%"
                    style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    title="Office Location" className="w-full h-full"
                  />
                </div>
              </div>

              <div className="card p-4 md:p-6">
                <h3 className="font-heading font-semibold text-base md:text-xl mb-3 md:mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 md:space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className={`${i < faqs.length - 1 ? 'border-b border-border-light pb-3 md:pb-4' : 'pb-2'}`}>
                      <h4 className="font-heading font-medium text-text-primary mb-1 md:mb-2 text-sm md:text-base">{faq.q}</h4>
                      <p className="text-text-secondary text-xs md:text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 md:mb-4">Prefer to call?</h2>
          <p className="text-base md:text-xl mb-4 md:mb-6 opacity-90">Our support team is available 24/7</p>
          <a
            href="tel:+12345678900"
            className="inline-flex items-center gap-2 md:gap-3 text-2xl md:text-3xl font-heading font-bold hover:underline"
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8" />
            +1 (234) 567-8900
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;