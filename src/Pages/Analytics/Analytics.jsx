// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   Dialog, DialogTitle, DialogContent,
//   IconButton, Alert, Snackbar,
// } from '@mui/material';
// import {
//   TrendingUp as TrendingUpIcon,
//   TrendingDown as TrendingDownIcon,
//   CalendarToday as CalendarIcon,
//   DirectionsCar as CarIcon,
//   CreditCard as CreditCardIcon,
//   WarningAmber as WarningIcon,
//   Refresh as RefreshIcon,
//   KeyboardArrowDown as ArrowDownIcon,
//   TwoWheeler as TwoWheelerIcon,
//   DirectionsBus as BusIcon,
//   LocalShipping as TruckIcon,
//   ElectricRickshaw as RickshawIcon,
//   Assessment as AssessmentIcon,
//   PieChart as PieChartIcon,
//   ShowChart as ShowChartIcon,
//   Close as CloseIcon,
//   EmojiEvents as TrophyIcon,
//   CheckCircle as CheckCircleIcon,
// } from '@mui/icons-material';
// import {
//   Chart as ChartJS,
//   CategoryScale, LinearScale, BarElement,
//   Title, Tooltip as ChartTooltip, Legend, ArcElement,
// } from 'chart.js';
// import { Bar, Pie } from 'react-chartjs-2';
// import { getMonthlyAnalytics } from '../../../redux/slice/analyticsSlice';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend, ArcElement);

// // ── Vehicle config ─────────────────────────────────────────────────────────────
// const VEHICLE_MAP = {
//   '2':  { icon: TwoWheelerIcon, color: '#1d4ed8', label: '2-Wheeler'  },
//   '3':  { icon: RickshawIcon,   color: '#be185d', label: '3-Wheeler'  },
//   '4':  { icon: CarIcon,        color: '#065f46', label: '4-Wheeler'  },
//   '17': { icon: TruckIcon,      color: '#92400e', label: 'Traveller'  },
//   '45': { icon: BusIcon,        color: '#5b21b6', label: 'Bus'        },
// };

// // ── Shimmer Skeleton ───────────────────────────────────────────────────────────
// const Sk = ({ width, height, borderRadius = 6, style = {} }) => (
//   <div className="sk" style={{ width, height, borderRadius, flexShrink: 0, display: 'inline-block', ...style }} />
// );

// const SHIMMER_CSS = `
//   @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
//   .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
// `;

// function SkeletonLoader() {
//   return (
//     <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box' }}>
//       <style>{SHIMMER_CSS}</style>
//       <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//         {/* Header */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
//           <div>
//             <Sk width={240} height={28} style={{ marginBottom: 8 }} />
//             <Sk width={180} height={14} />
//           </div>
//           <div style={{ display: 'flex', gap: 8 }}>
//             <Sk width={36} height={36} borderRadius={10} />
//             <Sk width={130} height={36} borderRadius={10} />
//           </div>
//         </div>

//         {/* Stat cards */}
//         <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
//           {[1,2,3,4].map(i => (
//             <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '16px 20px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
//                 <Sk width={40} height={40} borderRadius={12} />
//                 <Sk width={100} height={13} />
//               </div>
//               <Sk width={100} height={30} style={{ marginBottom: 6 }} />
//               <Sk width={130} height={11} style={{ marginBottom: 14 }} />
//               <div style={{ paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
//                 <Sk width={120} height={12} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Daily bookings chart */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//               <Sk width={38} height={38} borderRadius={12} />
//               <Sk width={180} height={16} />
//             </div>
//             <Sk width={100} height={24} borderRadius={999} />
//           </div>
//           <Sk width="100%" height={260} borderRadius={8} style={{ display: 'block' }} />
//           <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6', flexWrap: 'wrap' }}>
//             {[1,2,3,4].map(i => <Sk key={i} width={90} height={12} />)}
//           </div>
//         </div>

//         {/* Vehicle distribution */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//               <Sk width={38} height={38} borderRadius={12} />
//               <Sk width={200} height={16} />
//             </div>
//             <Sk width={80} height={24} borderRadius={999} />
//           </div>
//           <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
//             <Sk width={240} height={240} borderRadius={999} style={{ flexShrink: 0 }} />
//             <div style={{ flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', gap: 0 }}>
//               {[1,2,3,4].map(i => (
//                 <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f3f4f6' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                     <Sk width={36} height={36} borderRadius={10} />
//                     <Sk width={90} height={13} />
//                   </div>
//                   <div style={{ display: 'flex', gap: 8 }}>
//                     <Sk width={30} height={14} />
//                     <Sk width={45} height={20} borderRadius={999} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Payment + Summary grid */}
//         <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
//           {[1,2].map(i => (
//             <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                   <Sk width={38} height={38} borderRadius={12} />
//                   <Sk width={140} height={16} />
//                 </div>
//                 <Sk width={70} height={24} borderRadius={999} />
//               </div>
//               <Sk width="100%" height={220} borderRadius={8} style={{ display: 'block' }} />
//             </div>
//           ))}
//         </div>

//         {/* Top days */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//               <Sk width={38} height={38} borderRadius={12} />
//               <Sk width={180} height={16} />
//             </div>
//             <Sk width={140} height={24} borderRadius={999} />
//           </div>
//           <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(5, 1fr)' }}>
//             {[1,2,3,4,5].map(i => (
//               <div key={i} style={{ padding: '16px 12px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6' }}>
//                 <Sk width={28} height={28} borderRadius="50%" style={{ margin: '0 auto 10px' }} />
//                 <Sk width={40} height={11} style={{ marginBottom: 6, display: 'block', margin: '0 auto 6px' }} />
//                 <Sk width={30} height={28} style={{ margin: '0 auto 10px', display: 'block' }} />
//                 <Sk width="100%" height={6} borderRadius={3} style={{ marginBottom: 6, display: 'block' }} />
//                 <Sk width={50} height={11} style={{ display: 'block', margin: '0 auto' }} />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// // ─── Month Picker Modal ────────────────────────────────────────────────────────
// const MonthPickerModal = ({ open, onClose, selectedMonthYear, onSelect }) => {
//   const currentYear = new Date().getFullYear();
//   const [selectedYear, setSelectedYear] = useState(currentYear);
//   const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

//   const handleMonthSelect = (monthNumber) => {
//     onSelect(`${selectedYear}-${monthNumber.toString().padStart(2,'0')}`);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
//       PaperProps={{ style: { borderRadius: '20px', maxWidth: 400, padding: '4px' } }}>
//       <DialogTitle style={{ paddingBottom: 4 }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//             <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <CalendarIcon sx={{ color: '#1a3c5e', fontSize: 20 }} />
//             </div>
//             <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Select Month</span>
//           </div>
//           <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
//         </div>
//       </DialogTitle>
//       <DialogContent style={{ paddingTop: 16 }}>
//         <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
//           {[currentYear - 1, currentYear].map((yr) => (
//             <button key={yr} onClick={() => setSelectedYear(yr)}
//               style={{ flex: 1, padding: '8px 0', fontSize: 14, fontWeight: 600, borderRadius: 12, border: `1px solid ${selectedYear === yr ? '#1a3c5e' : '#e5e7eb'}`, background: selectedYear === yr ? '#1a3c5e' : '#fff', color: selectedYear === yr ? '#fff' : '#6b7280', cursor: 'pointer', transition: 'all 0.15s' }}>
//               {yr}
//             </button>
//           ))}
//         </div>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, paddingBottom: 8 }}>
//           {MONTHS.map((month, index) => {
//             const formattedMonth = (index + 1).toString().padStart(2, '0');
//             const isSelected = selectedMonthYear === `${selectedYear}-${formattedMonth}`;
//             return (
//               <button key={index} onClick={() => handleMonthSelect(index + 1)}
//                 style={{ padding: '10px 0', fontSize: 13, fontWeight: 600, borderRadius: 12, border: `1px solid ${isSelected ? '#1a3c5e' : '#e5e7eb'}`, background: isSelected ? '#1a3c5e' : '#fff', color: isSelected ? '#fff' : '#6b7280', cursor: 'pointer', transition: 'all 0.15s' }}>
//                 {month}
//               </button>
//             );
//           })}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// // ─── No Data Modal ─────────────────────────────────────────────────────────────
// const NoDataModal = ({ open, onClose, onSelectMonth }) => (
//   <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
//     PaperProps={{ style: { borderRadius: '20px', maxWidth: 380, padding: '4px' } }}>
//     <DialogContent style={{ padding: '24px', textAlign: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
//         <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
//       </div>
//       <div style={{ width: 64, height: 64, borderRadius: 16, margin: '0 auto 16px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <WarningIcon sx={{ fontSize: 32, color: '#f59e0b' }} />
//       </div>
//       <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: 8, color: '#1f2937' }}>No Data Available</h3>
//       <p style={{ fontSize: 13, marginBottom: 24, color: '#6b7280', lineHeight: 1.6 }}>No booking data found for this month. Please select a different month.</p>
//       <div style={{ display: 'flex', gap: 12 }}>
//         <button onClick={onClose} style={{ flex: 1, padding: '10px 0', border: '1px solid #e5e7eb', color: '#374151', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer', background: '#fff' }}>Close</button>
//         <button onClick={onSelectMonth} style={{ flex: 1, padding: '10px 0', background: '#1a3c5e', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Select Month</button>
//       </div>
//     </DialogContent>
//   </Dialog>
// );

// // ─── Stat Card ─────────────────────────────────────────────────────────────────
// const StatCard = ({ icon: Icon, iconBg, iconColor, label, value, trend, trendUp, subtitle, delay }) => (
//   <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '16px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'transform 0.25s, box-shadow 0.25s', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
//   >
//     <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
//       <div style={{ width: 40, height: 40, borderRadius: 12, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Icon style={{ color: iconColor, fontSize: 20 }} />
//       </div>
//       <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{label}</span>
//     </div>
//     <p style={{ fontSize: 28, fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{value}</p>
//     <p style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 12px' }}>{subtitle}</p>
//     <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
//       {trendUp
//         ? <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#16a34a' }}><TrendingUpIcon sx={{ fontSize: 14 }} />{trend}</span>
//         : <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#dc2626' }}><TrendingDownIcon sx={{ fontSize: 14 }} />{trend}</span>}
//     </div>
//   </div>
// );

// // ─── Chart Card wrapper ────────────────────────────────────────────────────────
// const ChartCard = ({ icon: Icon, title, badge, children, delay }) => (
//   <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', padding: '20px 20px 16px', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}>
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//         <div style={{ width: 38, height: 38, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <Icon sx={{ color: '#1a3c5e', fontSize: 20 }} />
//         </div>
//         <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1a3c5e', margin: 0 }}>{title}</h3>
//       </div>
//       {badge && (<span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 999, background: '#e8eef4', color: '#1a3c5e' }}>{badge}</span>)}
//     </div>
//     {children}
//   </div>
// );

// // ─── Main Analytics Component ──────────────────────────────────────────────────
// export default function Analytics() {
//   const dispatch = useDispatch();
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showMonthPicker, setShowMonthPicker] = useState(false);
//   const [showNoDataModal, setShowNoDataModal] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [selectedMonthYear, setSelectedMonthYear] = useState(() => {
//     const now = new Date();
//     return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
//   });

//   const fetchAnalyticsData = async (year, month) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const result = await dispatch(getMonthlyAnalytics({ year, month }));
//       if (result.payload?.success && result.payload?.data) {
//         const data = result.payload.data;
//         setAnalyticsData(data);
//         if (data.BookingCount === 0) setShowNoDataModal(true);
//       } else if (result.error) {
//         setError(result.error);
//         setSnackbar({ open: true, message: result.error, severity: 'error' });
//       }
//     } catch (err) {
//       setError('Failed to fetch analytics data');
//       setSnackbar({ open: true, message: 'Failed to fetch analytics data', severity: 'error' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const [year, month] = selectedMonthYear.split('-').map(Number);
//     fetchAnalyticsData(year, month);
//   }, [dispatch, selectedMonthYear]);

//   const hasData = analyticsData && analyticsData.BookingCount > 0;
//   const peakDay = hasData && analyticsData.daysWithBookings?.length > 0
//     ? analyticsData.daysWithBookings.reduce((max, day) => day.bookingCount > max.bookingCount ? day : max, { day: 0, bookingCount: 0 })
//     : { day: 0, bookingCount: 0 };

//   const totalDaysWithBookings = analyticsData?.daysWithBookings?.length || 0;
//   const bookingRate = analyticsData?.daysInMonth ? ((totalDaysWithBookings / analyticsData.daysInMonth) * 100).toFixed(1) : '0.0';

//   const vehicleTypes = analyticsData?.VehicalType
//     ? Object.entries(analyticsData.VehicalType).map(([type, count], index) => {
//         const v = VEHICLE_MAP[type] || VEHICLE_MAP['4'];
//         return { label: v.label, value: count, color: ['#1a3c5e','#2563eb','#10b981','#8b5cf6','#f59e0b'][index % 5], icon: v.icon };
//       })
//     : [];

//   const paymentMethods = analyticsData?.PymentMethod
//     ? (() => {
//         let upiTotal = 0, cashTotal = 0;
//         Object.values(analyticsData.PymentMethod).forEach(week => {
//           if (week.UPI) upiTotal += week.UPI;
//           if (week.CASH) cashTotal += week.CASH;
//         });
//         return [{ label: 'UPI', value: upiTotal, color: '#6366f1' }, { label: 'Cash', value: cashTotal, color: '#10b981' }];
//       })()
//     : [];

//   const chartTooltipStyle = { backgroundColor: '#1a3c5e', titleColor: '#fff', bodyColor: '#fff', padding: 12, cornerRadius: 8 };

//   const dailyChartData = {
//     labels: analyticsData?.daysWithBookings?.map(d => d.day.toString()) || [],
//     datasets: [{ label: 'Bookings', data: analyticsData?.daysWithBookings?.map(d => d.bookingCount) || [], backgroundColor: analyticsData?.daysWithBookings?.map(d => d.bookingCount > 20 ? '#10b981' : d.bookingCount > 15 ? '#1a3c5e' : d.bookingCount > 10 ? '#3b82f6' : '#ef4444') || [], borderRadius: 8, borderSkipped: false }],
//   };

//   const vehicleChartData = {
//     labels: vehicleTypes.map(v => v.label),
//     datasets: [{ data: vehicleTypes.map(v => v.value), backgroundColor: vehicleTypes.map(v => v.color), borderWidth: 0 }],
//   };

//   const paymentChartData = {
//     labels: paymentMethods.map(p => p.label),
//     datasets: [{ label: 'Transactions', data: paymentMethods.map(p => p.value), backgroundColor: paymentMethods.map(p => p.color), borderRadius: 8 }],
//   };

//   const barOptions = {
//     responsive: true, maintainAspectRatio: false,
//     plugins: { legend: { display: false }, tooltip: chartTooltipStyle },
//     scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 5, color: '#9ca3af' } }, x: { grid: { display: false }, ticks: { color: '#9ca3af' } } },
//   };

//   const pieOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: chartTooltipStyle } };

//   const stats = [
//     { icon: TrendingUpIcon,  iconBg: '#e8eef4', iconColor: '#1a3c5e', label: 'Total Bookings', value: analyticsData?.BookingCount || 0, trend: `${analyticsData?.Avrage?.toFixed(1) || 0} avg/day`, trendUp: true,  subtitle: 'Completed transactions' },
//     { icon: TrophyIcon,      iconBg: '#fef3c7', iconColor: '#d97706', label: 'Peak Day',       value: peakDay?.bookingCount || 0,         trend: peakDay?.day ? `Day ${peakDay.day}` : 'No data',   trendUp: true,  subtitle: `${bookingRate}% active days` },
//     { icon: CheckCircleIcon, iconBg: '#d1fae5', iconColor: '#059669', label: 'Active Days',    value: totalDaysWithBookings,              trend: `${analyticsData?.daysInMonth || 0} total days`,    trendUp: true,  subtitle: `${((totalDaysWithBookings / (analyticsData?.daysInMonth || 1)) * 100).toFixed(0)}% of month` },
//     { icon: PieChartIcon,    iconBg: '#ede9fe', iconColor: '#7c3aed', label: 'Vehicle Types',  value: vehicleTypes.length,                trend: `${vehicleTypes.length} categories`,                trendUp: true,  subtitle: 'Active types' },
//   ];

//   // ── Shimmer Skeleton (initial load) ─────────────────────────────────────────
//   if (loading && !analyticsData) return <SkeletonLoader />;

//   if (error && !analyticsData) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: 32, background: '#fff', borderRadius: 16, border: '1px solid #fee2e2', maxWidth: 360 }}>
//           <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading analytics</p>
//           <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 4 }}>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   // ── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
//         .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
//         .analytics-grid-4 { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
//         @media (min-width: 640px)  { .analytics-grid-4 { grid-template-columns: repeat(2, 1fr); } }
//         @media (min-width: 1024px) { .analytics-grid-4 { grid-template-columns: repeat(4, 1fr); } }
//         .analytics-grid-2 { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
//         @media (min-width: 768px) { .analytics-grid-2 { grid-template-columns: repeat(2, 1fr); } }
//         .analytics-grid-summary { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
//         .analytics-top5 { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
//         @media (min-width: 640px)  { .analytics-top5 { grid-template-columns: repeat(3, 1fr); } }
//         @media (min-width: 1024px) { .analytics-top5 { grid-template-columns: repeat(5, 1fr); } }
//         .vehicle-dist-inner { display: flex; flex-direction: column; gap: 24px; }
//         @media (min-width: 1024px) { .vehicle-dist-inner { flex-direction: row; align-items: flex-start; } }
//       `}</style>

//       <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
//         <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//           {/* ── Header ── */}
//           <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, animation: 'fadeSlideUp 0.35s ease both' }}>
//             <div>
//               <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>Analytics Dashboard</h1>
//               {analyticsData?.monthName && (
//                 <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{analyticsData.monthName} {analyticsData.year} • {analyticsData.daysInMonth || 0} days</p>
//               )}
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <button onClick={() => { const [y, m] = selectedMonthYear.split('-').map(Number); fetchAnalyticsData(y, m); }}
//                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer' }} title="Refresh">
//                 <RefreshIcon sx={{ fontSize: 18 }} />
//               </button>
//               <button onClick={() => setShowMonthPicker(true)}
//                 style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
//                 <CalendarIcon sx={{ fontSize: 16 }} />
//                 {new Date(`${selectedMonthYear}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                 <ArrowDownIcon sx={{ fontSize: 14 }} />
//               </button>
//             </div>
//           </div>

//           {/* ── Stats Cards ── */}
//           {hasData && (
//             <div className="analytics-grid-4">
//               {stats.map((s, i) => (<StatCard key={s.label} {...s} delay={`${i * 60}ms`} />))}
//             </div>
//           )}

//           {/* ── No Data State ── */}
//           {!hasData && analyticsData && (
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', textAlign: 'center', animation: 'fadeSlideUp 0.4s ease both' }}>
//               <div style={{ width: 64, height: 64, borderRadius: 16, background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
//                 <WarningIcon sx={{ fontSize: 34, color: '#f59e0b' }} />
//               </div>
//               <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No Data Available</p>
//               <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>No booking data found for {analyticsData.monthName} {analyticsData.year}</p>
//               <button onClick={() => setShowMonthPicker(true)}
//                 style={{ marginTop: 16, padding: '8px 20px', fontSize: 13, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer' }}>
//                 Select Another Month
//               </button>
//             </div>
//           )}

//           {hasData && dailyChartData.labels.length > 0 && (
//             <ChartCard icon={ShowChartIcon} title="Daily Bookings Trend" badge={`Avg: ${analyticsData?.Avrage?.toFixed(1) || 0}/day`} delay="0.45s">
//               <div style={{ height: 260 }}><Bar data={dailyChartData} options={barOptions} /></div>
//               <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 20px', marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
//                 {[{ color: '#ef4444', label: 'Low (0–10)' }, { color: '#3b82f6', label: 'Medium (11–15)' }, { color: '#1a3c5e', label: 'High (16–20)' }, { color: '#10b981', label: 'Very High (21+)' }].map(item => (
//                   <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                     <div style={{ width: 10, height: 10, borderRadius: 2, background: item.color }} />
//                     <span style={{ fontSize: 11, color: '#9ca3af' }}>{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </ChartCard>
//           )}

//           {hasData && vehicleTypes.length > 0 && (
//             <ChartCard icon={CarIcon} title="Vehicle Type Distribution" badge={`Total: ${analyticsData?.BookingCount || 0}`} delay="0.5s">
//               <div className="vehicle-dist-inner">
//                 <div style={{ flex: 1, minWidth: 220, height: 240 }}><Pie data={vehicleChartData} options={pieOptions} /></div>
//                 <div style={{ flex: 1, minWidth: 220 }}>
//                   {vehicleTypes.map((item, index) => {
//                     const Icon = item.icon;
//                     const pct = analyticsData?.BookingCount ? ((item.value / analyticsData.BookingCount) * 100).toFixed(1) : '0';
//                     return (
//                       <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: index < vehicleTypes.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                           <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <Icon style={{ color: item.color, fontSize: 18 }} />
//                           </div>
//                           <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{item.label}</span>
//                         </div>
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                           <span style={{ fontSize: 14, fontWeight: 700, color: '#1a3c5e' }}>{item.value}</span>
//                           <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: '#f3f4f6', color: '#6b7280' }}>{pct}%</span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </ChartCard>
//           )}

//           <div className="analytics-grid-2">
//             {hasData && paymentMethods.length > 0 && (
//               <ChartCard icon={CreditCardIcon} title="Payment Methods" badge={`${paymentMethods.reduce((s, p) => s + p.value, 0)} txns`} delay="0.55s">
//                 <div style={{ height: 220 }}><Bar data={paymentChartData} options={barOptions} /></div>
//               </ChartCard>
//             )}
//             <ChartCard icon={AssessmentIcon} title="Monthly Summary" badge={`${analyticsData?.monthName || ''} ${analyticsData?.year || ''}`} delay="0.55s">
//               <div className="analytics-grid-summary" style={{ marginBottom: 16 }}>
//                 {[
//                   { label: 'Total Bookings', value: analyticsData?.BookingCount || 0 },
//                   { label: 'Daily Avg',       value: analyticsData?.Avrage?.toFixed(1) || 0 },
//                   { label: 'Active Days',     value: totalDaysWithBookings },
//                   { label: 'Vehicle Types',  value: vehicleTypes.length },
//                 ].map(item => (
//                   <div key={item.label} style={{ padding: '12px 16px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6', background: '#f8fafc' }}>
//                     <p style={{ fontSize: 22, fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{item.value}</p>
//                     <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{item.label}</p>
//                   </div>
//                 ))}
//               </div>
//               <div style={{ paddingTop: 12, borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: 8 }}>
//                 {[
//                   { label: 'Days in Month', value: `${analyticsData?.daysInMonth || 0} days`, highlight: false },
//                   { label: 'Active Days',   value: `${totalDaysWithBookings} days`,            highlight: false },
//                   { label: 'Utilization',   value: `${bookingRate}%`,                          highlight: true },
//                 ].map(row => (
//                   <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <span style={{ fontSize: 12, color: '#9ca3af' }}>{row.label}</span>
//                     <span style={{ fontSize: 13, fontWeight: 600, color: row.highlight ? '#16a34a' : '#374151' }}>{row.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </ChartCard>
//           </div>

//           {hasData && analyticsData?.daysWithBookings?.length > 0 && (
//             <ChartCard icon={TrophyIcon} title="Top Performing Days" badge={`Peak: Day ${peakDay?.day || 0} • ${peakDay?.bookingCount || 0} bookings`} delay="0.6s">
//               <div className="analytics-top5">
//                 {[...(analyticsData?.daysWithBookings || [])].sort((a, b) => b.bookingCount - a.bookingCount).slice(0, 5).map((day, index) => {
//                   const colors = ['#10b981','#1a3c5e','#7c3aed','#f59e0b','#ef4444'];
//                   const pct = peakDay?.bookingCount ? (day.bookingCount / peakDay.bookingCount) * 100 : 0;
//                   return (
//                     <div key={index} style={{ padding: '16px 12px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6', transition: 'box-shadow 0.2s', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${index * 60}ms` }}
//                       onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)')}
//                       onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}>
//                       <div style={{ width: 28, height: 28, borderRadius: '50%', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', background: colors[index] }}>#{index + 1}</div>
//                       <p style={{ fontSize: 11, fontWeight: 600, color: '#6b7280', margin: '0 0 4px' }}>Day {day.day}</p>
//                       <p style={{ fontSize: 24, fontWeight: 800, color: '#1a3c5e', margin: '0 0 10px', letterSpacing: '-0.03em' }}>{day.bookingCount}</p>
//                       <div style={{ width: '100%', height: 6, borderRadius: 3, background: '#f3f4f6', marginBottom: 6, overflow: 'hidden' }}>
//                         <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: colors[index], transition: 'width 0.5s' }} />
//                       </div>
//                       <span style={{ fontSize: 11, fontWeight: 600, color: colors[index] }}>{pct.toFixed(0)}% of peak</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </ChartCard>
//           )}
//         </div>
//       </div>

//       <MonthPickerModal open={showMonthPicker} onClose={() => setShowMonthPicker(false)} selectedMonthYear={selectedMonthYear} onSelect={setSelectedMonthYear} />
//       <NoDataModal open={showNoDataModal} onClose={() => setShowNoDataModal(false)} onSelectMonth={() => { setShowNoDataModal(false); setShowMonthPicker(true); }} />

//       <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>{snackbar.message}</Alert>
//       </Snackbar>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog, DialogTitle, DialogContent,
  IconButton, Alert, Snackbar,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  CalendarToday as CalendarIcon,
  DirectionsCar as CarIcon,
  CreditCard as CreditCardIcon,
  WarningAmber as WarningIcon,
  Refresh as RefreshIcon,
  KeyboardArrowDown as ArrowDownIcon,
  TwoWheeler as TwoWheelerIcon,
  DirectionsBus as BusIcon,
  LocalShipping as TruckIcon,
  ElectricRickshaw as RickshawIcon,
  Assessment as AssessmentIcon,
  PieChart as PieChartIcon,
  ShowChart as ShowChartIcon,
  Close as CloseIcon,
  EmojiEvents as TrophyIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip as ChartTooltip, Legend, ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { getMonthlyAnalytics } from '../../../redux/slice/analyticsSlice';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend, ArcElement);

// ── Vehicle config ─────────────────────────────────────────────────────────────
const VEHICLE_MAP = {
  '2':  { icon: TwoWheelerIcon, color: '#1d4ed8', label: '2-Wheeler'  },
  '3':  { icon: RickshawIcon,   color: '#be185d', label: '3-Wheeler'  },
  '4':  { icon: CarIcon,        color: '#065f46', label: '4-Wheeler'  },
  '17': { icon: TruckIcon,      color: '#92400e', label: 'Traveller'  },
  '45': { icon: BusIcon,        color: '#5b21b6', label: 'Bus'        },
};

// ── Shimmer Skeleton ───────────────────────────────────────────────────────────
const Sk = ({ width, height, borderRadius = 6, style = {} }) => (
  <div className="sk" style={{ width, height, borderRadius, flexShrink: 0, display: 'inline-block', ...style }} />
);

const SHIMMER_CSS = `
  @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
  .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
`;

function SkeletonLoader() {
  return (
    <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box' }}>
      <style>{SHIMMER_CSS}</style>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <Sk width={240} height={28} style={{ marginBottom: 8 }} />
            <Sk width={180} height={14} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Sk width={36} height={36} borderRadius={10} />
            <Sk width={130} height={36} borderRadius={10} />
          </div>
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '16px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <Sk width={40} height={40} borderRadius={12} />
                <Sk width={100} height={13} />
              </div>
              <Sk width={100} height={30} style={{ marginBottom: 6 }} />
              <Sk width={130} height={11} style={{ marginBottom: 14 }} />
              <div style={{ paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
                <Sk width={120} height={12} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
          <Sk width="100%" height={260} borderRadius={8} style={{ display: 'block' }} />
        </div>
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
          <Sk width={240} height={240} borderRadius={999} style={{ display: 'block', margin: '0 auto' }} />
        </div>
        {[1, 2].map(i => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
            <Sk width="100%" height={220} borderRadius={8} style={{ display: 'block' }} />
          </div>
        ))}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ padding: '16px 12px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6' }}>
                <Sk width={28} height={28} borderRadius="50%" style={{ display: 'block', margin: '0 auto 10px' }} />
                <Sk width={40} height={11} style={{ display: 'block', margin: '0 auto 6px' }} />
                <Sk width={30} height={28} style={{ display: 'block', margin: '0 auto 10px' }} />
                <Sk width="100%" height={6} borderRadius={3} style={{ display: 'block', marginBottom: 6 }} />
                <Sk width={50} height={11} style={{ display: 'block', margin: '0 auto' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Month Picker Modal ────────────────────────────────────────────────────────
const MonthPickerModal = ({ open, onClose, selectedMonthYear, onSelect }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const handleMonthSelect = (monthNumber) => {
    onSelect(`${selectedYear}-${monthNumber.toString().padStart(2,'0')}`);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
      PaperProps={{ style: { borderRadius: '20px', maxWidth: 400, padding: '4px' } }}>
      <DialogTitle style={{ paddingBottom: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CalendarIcon sx={{ color: '#1a3c5e', fontSize: 20 }} />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Select Month</span>
          </div>
          <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ paddingTop: 16 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          {[currentYear - 1, currentYear].map((yr) => (
            <button key={yr} onClick={() => setSelectedYear(yr)}
              style={{ flex: 1, padding: '8px 0', fontSize: 14, fontWeight: 600, borderRadius: 12, border: `1px solid ${selectedYear === yr ? '#1a3c5e' : '#e5e7eb'}`, background: selectedYear === yr ? '#1a3c5e' : '#fff', color: selectedYear === yr ? '#fff' : '#6b7280', cursor: 'pointer', transition: 'all 0.15s' }}>
              {yr}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, paddingBottom: 8 }}>
          {MONTHS.map((month, index) => {
            const formattedMonth = (index + 1).toString().padStart(2, '0');
            const isSelected = selectedMonthYear === `${selectedYear}-${formattedMonth}`;
            return (
              <button key={index} onClick={() => handleMonthSelect(index + 1)}
                style={{ padding: '10px 0', fontSize: 13, fontWeight: 600, borderRadius: 12, border: `1px solid ${isSelected ? '#1a3c5e' : '#e5e7eb'}`, background: isSelected ? '#1a3c5e' : '#fff', color: isSelected ? '#fff' : '#6b7280', cursor: 'pointer', transition: 'all 0.15s' }}>
                {month}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ─── No Data Modal ─────────────────────────────────────────────────────────────
const NoDataModal = ({ open, onClose, onSelectMonth }) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
    PaperProps={{ style: { borderRadius: '20px', maxWidth: 380, padding: '4px' } }}>
    <DialogContent style={{ padding: '24px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
      </div>
      <div style={{ width: 64, height: 64, borderRadius: 16, margin: '0 auto 16px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WarningIcon sx={{ fontSize: 32, color: '#f59e0b' }} />
      </div>
      <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: 8, color: '#1f2937' }}>No Data Available</h3>
      <p style={{ fontSize: 13, marginBottom: 24, color: '#6b7280', lineHeight: 1.6 }}>No booking data found for this month. Please select a different month.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={onClose} style={{ flex: 1, padding: '10px 0', border: '1px solid #e5e7eb', color: '#374151', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer', background: '#fff' }}>Close</button>
        <button onClick={onSelectMonth} style={{ flex: 1, padding: '10px 0', background: '#1a3c5e', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Select Month</button>
      </div>
    </DialogContent>
  </Dialog>
);

// ─── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, iconBg, iconColor, label, value, trend, trendUp, subtitle, delay }) => (
  <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '16px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'transform 0.25s, box-shadow 0.25s', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ color: iconColor, fontSize: 20 }} />
      </div>
      <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{label}</span>
    </div>
    <p style={{ fontSize: 28, fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{value}</p>
    <p style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 12px' }}>{subtitle}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: 12, borderTop: '1px solid #f3f4f6' }}>
      {trendUp
        ? <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#16a34a' }}><TrendingUpIcon sx={{ fontSize: 14 }} />{trend}</span>
        : <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#dc2626' }}><TrendingDownIcon sx={{ fontSize: 14 }} />{trend}</span>}
    </div>
  </div>
);

// ─── Chart Card wrapper ────────────────────────────────────────────────────────
const ChartCard = ({ icon: Icon, title, badge, children, delay }) => (
  <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', padding: '20px 20px 16px', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon sx={{ color: '#1a3c5e', fontSize: 20 }} />
        </div>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1a3c5e', margin: 0 }}>{title}</h3>
      </div>
      {badge && (<span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 999, background: '#e8eef4', color: '#1a3c5e' }}>{badge}</span>)}
    </div>
    {children}
  </div>
);

// ─── Main Analytics Component ──────────────────────────────────────────────────
export default function Analytics() {
  const dispatch = useDispatch();
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showNoDataModal, setShowNoDataModal] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [selectedMonthYear, setSelectedMonthYear] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  const fetchAnalyticsData = async (year, month) => {
    setLoading(true);
    setError(null);
    try {
      const result = await dispatch(getMonthlyAnalytics({ year, month }));
      if (result.payload?.success && result.payload?.data) {
        const data = result.payload.data;
        setAnalyticsData(data);
        if (data.BookingCount === 0) setShowNoDataModal(true);
      } else if (result.error) {
        setError(result.error);
        setSnackbar({ open: true, message: result.error, severity: 'error' });
      }
    } catch (err) {
      setError('Failed to fetch analytics data');
      setSnackbar({ open: true, message: 'Failed to fetch analytics data', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const [year, month] = selectedMonthYear.split('-').map(Number);
    fetchAnalyticsData(year, month);
  }, [dispatch, selectedMonthYear]);

  const hasData = analyticsData && analyticsData.BookingCount > 0;
  const peakDay = hasData && analyticsData.daysWithBookings?.length > 0
    ? analyticsData.daysWithBookings.reduce((max, day) => day.bookingCount > max.bookingCount ? day : max, { day: 0, bookingCount: 0 })
    : { day: 0, bookingCount: 0 };

  const totalDaysWithBookings = analyticsData?.daysWithBookings?.length || 0;
  const bookingRate = analyticsData?.daysInMonth ? ((totalDaysWithBookings / analyticsData.daysInMonth) * 100).toFixed(1) : '0.0';

  const vehicleTypes = analyticsData?.VehicalType
    ? Object.entries(analyticsData.VehicalType).map(([type, count], index) => {
        const v = VEHICLE_MAP[type] || VEHICLE_MAP['4'];
        return { label: v.label, value: count, color: ['#1a3c5e','#2563eb','#10b981','#8b5cf6','#f59e0b'][index % 5], icon: v.icon };
      })
    : [];

  const paymentMethods = analyticsData?.PymentMethod
    ? (() => {
        let upiTotal = 0, cashTotal = 0;
        Object.values(analyticsData.PymentMethod).forEach(week => {
          if (week.UPI) upiTotal += week.UPI;
          if (week.CASH) cashTotal += week.CASH;
        });
        return [{ label: 'UPI', value: upiTotal, color: '#6366f1' }, { label: 'Cash', value: cashTotal, color: '#10b981' }];
      })()
    : [];

  const chartTooltipStyle = { backgroundColor: '#1a3c5e', titleColor: '#fff', bodyColor: '#fff', padding: 12, cornerRadius: 8 };

  const dailyChartData = {
    labels: analyticsData?.daysWithBookings?.map(d => d.day.toString()) || [],
    datasets: [{ label: 'Bookings', data: analyticsData?.daysWithBookings?.map(d => d.bookingCount) || [], backgroundColor: analyticsData?.daysWithBookings?.map(d => d.bookingCount > 20 ? '#10b981' : d.bookingCount > 15 ? '#1a3c5e' : d.bookingCount > 10 ? '#3b82f6' : '#ef4444') || [], borderRadius: 8, borderSkipped: false }],
  };

  const vehicleChartData = {
    labels: vehicleTypes.map(v => v.label),
    datasets: [{ data: vehicleTypes.map(v => v.value), backgroundColor: vehicleTypes.map(v => v.color), borderWidth: 0 }],
  };

  const paymentChartData = {
    labels: paymentMethods.map(p => p.label),
    datasets: [{ label: 'Transactions', data: paymentMethods.map(p => p.value), backgroundColor: paymentMethods.map(p => p.color), borderRadius: 8 }],
  };

  const barOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: chartTooltipStyle },
    scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 5, color: '#9ca3af' } }, x: { grid: { display: false }, ticks: { color: '#9ca3af' } } },
  };

  const pieOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: chartTooltipStyle } };

  const stats = [
    { icon: TrendingUpIcon,  iconBg: '#e8eef4', iconColor: '#1a3c5e', label: 'Total Bookings', value: analyticsData?.BookingCount || 0, trend: `${analyticsData?.Avrage?.toFixed(1) || 0} avg/day`, trendUp: true,  subtitle: 'Completed transactions' },
    { icon: TrophyIcon,      iconBg: '#fef3c7', iconColor: '#d97706', label: 'Peak Day',       value: peakDay?.bookingCount || 0,         trend: peakDay?.day ? `Day ${peakDay.day}` : 'No data',   trendUp: true,  subtitle: `${bookingRate}% active days` },
    { icon: CheckCircleIcon, iconBg: '#d1fae5', iconColor: '#059669', label: 'Active Days',    value: totalDaysWithBookings,              trend: `${analyticsData?.daysInMonth || 0} total days`,    trendUp: true,  subtitle: `${((totalDaysWithBookings / (analyticsData?.daysInMonth || 1)) * 100).toFixed(0)}% of month` },
    { icon: PieChartIcon,    iconBg: '#ede9fe', iconColor: '#7c3aed', label: 'Vehicle Types',  value: vehicleTypes.length,                trend: `${vehicleTypes.length} categories`,                trendUp: true,  subtitle: 'Active types' },
  ];

  if (loading && !analyticsData) return <SkeletonLoader />;

  if (error && !analyticsData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
        <div style={{ textAlign: 'center', padding: 32, background: '#fff', borderRadius: 16, border: '1px solid #fee2e2', maxWidth: 360 }}>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading analytics</p>
          <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 4 }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
        .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }

        /* Stat cards: 1 col mobile → 2 col tablet → 4 col desktop */
        .analytics-grid-4 { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 640px)  { .analytics-grid-4 { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .analytics-grid-4 { grid-template-columns: repeat(4, 1fr); } }

        /* Summary inner 2x2 grid */
        .analytics-grid-summary { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }

        /* Top 5 days: 1 col mobile → 3 col tablet → 5 col desktop */
        .analytics-top5 { display: grid; gap: 12px; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 480px)  { .analytics-top5 { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .analytics-top5 { grid-template-columns: repeat(5, 1fr); } }

        /* Vehicle: stacked on mobile, side-by-side on desktop */
        .vehicle-dist-inner { display: flex; flex-direction: column; gap: 24px; }
        @media (min-width: 1024px) { .vehicle-dist-inner { flex-direction: row; align-items: flex-start; } }

        /* Pie: centered + constrained on mobile, flex on desktop */
        .vehicle-pie-wrap { width: 100%; max-width: 280px; height: 240px; margin: 0 auto; }
        @media (min-width: 1024px) { .vehicle-pie-wrap { flex: 1; min-width: 220px; max-width: unset; margin: 0; } }

        /* Vehicle list: always full width */
        .vehicle-list-wrap { width: 100%; }
        @media (min-width: 1024px) { .vehicle-list-wrap { flex: 1; min-width: 220px; } }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* ── Header ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, animation: 'fadeSlideUp 0.35s ease both' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>Analytics Dashboard</h1>
              {analyticsData?.monthName && (
                <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{analyticsData.monthName} {analyticsData.year} • {analyticsData.daysInMonth || 0} days</p>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => { const [y, m] = selectedMonthYear.split('-').map(Number); fetchAnalyticsData(y, m); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer' }} title="Refresh">
                <RefreshIcon sx={{ fontSize: 18 }} />
              </button>
              <button onClick={() => setShowMonthPicker(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <CalendarIcon sx={{ fontSize: 16 }} />
                {new Date(`${selectedMonthYear}-01`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                <ArrowDownIcon sx={{ fontSize: 14 }} />
              </button>
            </div>
          </div>

          {/* ── Stats Cards: 1 per row on mobile ── */}
          {hasData && (
            <div className="analytics-grid-4">
              {stats.map((s, i) => (<StatCard key={s.label} {...s} delay={`${i * 60}ms`} />))}
            </div>
          )}

          {/* ── No Data State ── */}
          {!hasData && analyticsData && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', textAlign: 'center', animation: 'fadeSlideUp 0.4s ease both' }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <WarningIcon sx={{ fontSize: 34, color: '#f59e0b' }} />
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No Data Available</p>
              <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>No booking data found for {analyticsData.monthName} {analyticsData.year}</p>
              <button onClick={() => setShowMonthPicker(true)}
                style={{ marginTop: 16, padding: '8px 20px', fontSize: 13, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Select Another Month
              </button>
            </div>
          )}

          {/* ── Daily Bookings Trend — full width ── */}
          {hasData && dailyChartData.labels.length > 0 && (
            <ChartCard icon={ShowChartIcon} title="Daily Bookings Trend" badge={`Avg: ${analyticsData?.Avrage?.toFixed(1) || 0}/day`} delay="0.45s">
              <div style={{ height: 260 }}><Bar data={dailyChartData} options={barOptions} /></div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 20px', marginTop: 16, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
                {[{ color: '#ef4444', label: 'Low (0–10)' }, { color: '#3b82f6', label: 'Medium (11–15)' }, { color: '#1a3c5e', label: 'High (16–20)' }, { color: '#10b981', label: 'Very High (21+)' }].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: item.color }} />
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          )}

          {/* ── Vehicle Type Distribution — pie full width, list full width below on mobile ── */}
          {hasData && vehicleTypes.length > 0 && (
            <ChartCard icon={CarIcon} title="Vehicle Type Distribution" badge={`Total: ${analyticsData?.BookingCount || 0}`} delay="0.5s">
              <div className="vehicle-dist-inner">
                <div className="vehicle-pie-wrap">
                  <Pie data={vehicleChartData} options={pieOptions} />
                </div>
                <div className="vehicle-list-wrap">
                  {vehicleTypes.map((item, index) => {
                    const Icon = item.icon;
                    const pct = analyticsData?.BookingCount ? ((item.value / analyticsData.BookingCount) * 100).toFixed(1) : '0';
                    return (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: index < vehicleTypes.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon style={{ color: item.color, fontSize: 18 }} />
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{item.label}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#1a3c5e' }}>{item.value}</span>
                          <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: '#f3f4f6', color: '#6b7280' }}>{pct}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ChartCard>
          )}

          {/* ── Payment Methods — always full width, own row ── */}
          {hasData && paymentMethods.length > 0 && (
            <ChartCard icon={CreditCardIcon} title="Payment Methods" badge={`${paymentMethods.reduce((s, p) => s + p.value, 0)} txns`} delay="0.55s">
              <div style={{ height: 220 }}><Bar data={paymentChartData} options={barOptions} /></div>
            </ChartCard>
          )}

          {/* ── Monthly Summary — always full width, own row ── */}
          <ChartCard icon={AssessmentIcon} title="Monthly Summary" badge={`${analyticsData?.monthName || ''} ${analyticsData?.year || ''}`} delay="0.58s">
            <div className="analytics-grid-summary" style={{ marginBottom: 16 }}>
              {[
                { label: 'Total Bookings', value: analyticsData?.BookingCount || 0 },
                { label: 'Daily Avg',       value: analyticsData?.Avrage?.toFixed(1) || 0 },
                { label: 'Active Days',     value: totalDaysWithBookings },
                { label: 'Vehicle Types',  value: vehicleTypes.length },
              ].map(item => (
                <div key={item.label} style={{ padding: '12px 16px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6', background: '#f8fafc' }}>
                  <p style={{ fontSize: 22, fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{item.value}</p>
                  <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 12, borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Days in Month', value: `${analyticsData?.daysInMonth || 0} days`, highlight: false },
                { label: 'Active Days',   value: `${totalDaysWithBookings} days`,            highlight: false },
                { label: 'Utilization',   value: `${bookingRate}%`,                          highlight: true },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>{row.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: row.highlight ? '#16a34a' : '#374151' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* ── Top Performing Days — 1 col mobile → 3 col tablet → 5 col desktop ── */}
          {hasData && analyticsData?.daysWithBookings?.length > 0 && (
            <ChartCard icon={TrophyIcon} title="Top Performing Days" badge={`Peak: Day ${peakDay?.day || 0} • ${peakDay?.bookingCount || 0} bookings`} delay="0.6s">
              <div className="analytics-top5">
                {[...(analyticsData?.daysWithBookings || [])].sort((a, b) => b.bookingCount - a.bookingCount).slice(0, 5).map((day, index) => {
                  const colors = ['#10b981','#1a3c5e','#7c3aed','#f59e0b','#ef4444'];
                  const pct = peakDay?.bookingCount ? (day.bookingCount / peakDay.bookingCount) * 100 : 0;
                  return (
                    <div key={index} style={{ padding: '16px 12px', textAlign: 'center', borderRadius: 12, border: '1px solid #f3f4f6', transition: 'box-shadow 0.2s', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${index * 60}ms` }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', background: colors[index] }}>#{index + 1}</div>
                      <p style={{ fontSize: 11, fontWeight: 600, color: '#6b7280', margin: '0 0 4px' }}>Day {day.day}</p>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#1a3c5e', margin: '0 0 10px', letterSpacing: '-0.03em' }}>{day.bookingCount}</p>
                      <div style={{ width: '100%', height: 6, borderRadius: 3, background: '#f3f4f6', marginBottom: 6, overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: colors[index], transition: 'width 0.5s' }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: colors[index] }}>{pct.toFixed(0)}% of peak</span>
                    </div>
                  );
                })}
              </div>
            </ChartCard>
          )}

        </div>
      </div>

      <MonthPickerModal open={showMonthPicker} onClose={() => setShowMonthPicker(false)} selectedMonthYear={selectedMonthYear} onSelect={setSelectedMonthYear} />
      <NoDataModal open={showNoDataModal} onClose={() => setShowNoDataModal(false)} onSelectMonth={() => { setShowNoDataModal(false); setShowMonthPicker(true); }} />

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}     