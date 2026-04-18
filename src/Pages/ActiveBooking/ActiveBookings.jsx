// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   FormControl,
//   Select,
//   MenuItem,
//   Pagination,
//   PaginationItem,
//   Tooltip,
// } from '@mui/material';
// import {
//   DirectionsCar as CarIcon,
//   TwoWheeler as BikeIcon,
//   LocalParking as ParkingIcon,
//   Search as SearchIcon,
//   Clear as ClearIcon,
//   ViewList as ListIcon,
//   GridView as GridIcon,
//   ElectricRickshaw as RickshawIcon,
//   LocalShipping as TruckIcon,
//   DirectionsBus as DirectionsBusIcon,
//   Refresh as RefreshIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
// } from '@mui/icons-material';
// import { getActiveBookingsForDashboard } from '../../../redux/slice/BookingHistory';

// // ── Vehicle config ─────────────────────────────────────────────────────────────
// const VEHICLE_MAP = {
//   '2':  { icon: BikeIcon,          bg: '#dbeafe', color: '#1d4ed8', label: '2-Wheeler'  },
//   '3':  { icon: RickshawIcon,      bg: '#fce7f3', color: '#be185d', label: '3-Wheeler'  },
//   '4':  { icon: CarIcon,           bg: '#d1fae5', color: '#065f46', label: '4-Wheeler'  },
//   '17': { icon: TruckIcon,         bg: '#fef3c7', color: '#92400e', label: 'Traveller'  },
//   '55': { icon: DirectionsBusIcon, bg: '#ede9fe', color: '#5b21b6', label: 'Bus'        },
// };

// const getVehicle = (type) => VEHICLE_MAP[String(type)] || VEHICLE_MAP['4'];

// // ── Helpers ────────────────────────────────────────────────────────────────────
// const formatTime = (dateString) => {
//   if (!dateString) return '--';
//   return new Date(dateString).toLocaleString('en-IN', {
//     day: '2-digit', month: 'short',
//     hour: '2-digit', minute: '2-digit',
//   });
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
//       <div style={{ maxWidth: 1600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//         {/* Header */}
//         <div>
//           <Sk width={200} height={28} style={{ marginBottom: 8 }} />
//           <Sk width={260} height={14} />
//         </div>

//         {/* Toolbar */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '12px 16px' }}>
//           <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
//             <Sk width={300} height={36} borderRadius={10} style={{ flex: 1, minWidth: 180 }} />
//             <Sk width={110} height={36} borderRadius={8} />
//             <Sk width={36} height={36} borderRadius={8} />
//             <Sk width={36} height={36} borderRadius={8} />
//           </div>
//         </div>

//         {/* Card Grid Skeleton */}
//         <div className="bookings-card-grid-sk">
//           {[1,2,3,4,5,6,7,8].map(i => (
//             <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                 <Sk width={40} height={40} borderRadius="50%" />
//                 <div>
//                   <Sk width={110} height={13} style={{ marginBottom: 6 }} />
//                   <Sk width={70} height={11} />
//                 </div>
//               </div>
//               <div style={{ height: 1, background: '#f3f4f6' }} />
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <Sk width={50} height={12} />
//                 <Sk width={60} height={22} borderRadius={999} />
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <Sk width={55} height={12} />
//                 <Sk width={40} height={13} />
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <Sk width={50} height={12} />
//                 <Sk width={100} height={11} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .bookings-card-grid-sk { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
//         @media (min-width: 640px) and (max-width: 1023px) { .bookings-card-grid-sk { grid-template-columns: repeat(3, 1fr); } }
//         @media (min-width: 1024px) { .bookings-card-grid-sk { grid-template-columns: repeat(4, 1fr); } }
//       `}</style>
//     </div>
//   );
// }

// // ── Vehicle Icon Circle ────────────────────────────────────────────────────────
// const VehicleIcon = ({ vehicleType, size = 40 }) => {
//   const v = getVehicle(vehicleType);
//   const IconComp = v.icon;
//   return (
//     <div style={{ width: size, height: size, borderRadius: '50%', background: v.bg, color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//       <IconComp sx={{ fontSize: size * 0.5 }} />
//     </div>
//   );
// };

// // ── Booking Card ───────────────────────────────────────────────────────────────
// const BookingCard = ({ booking, index }) => (
//   <div
//     style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${index * 40}ms`, minWidth: 0, width: '100%' }}
//     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
//   >
//     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//       <VehicleIcon vehicleType={booking.vehicleType} size={40} />
//       <div style={{ minWidth: 0, flex: 1 }}>
//         <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{booking.vehicleNo}</p>
//         <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{getVehicle(booking.vehicleType).label}</p>
//       </div>
//     </div>
//     <div style={{ height: '1px', background: '#f3f4f6' }} />
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Status</span>
//       <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: '#dcfce7', color: '#15803d' }}>Active</span>
//     </div>
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Advance</span>
//       <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>₹{booking.advance || 0}</span>
//     </div>
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>In Time</span>
//       <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{formatTime(booking.createdAt)}</span>
//     </div>
//   </div>
// );

// // ── Booking List Row ───────────────────────────────────────────────────────────
// const BookingRow = ({ booking, index }) => (
//   <tr
//     style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s', animation: 'fadeSlideUp 0.35s ease both', animationDelay: `${index * 40}ms` }}
//     onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
//     onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
//   >
//     <td style={{ padding: '14px 20px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <VehicleIcon vehicleType={booking.vehicleType} size={36} />
//         <div>
//           <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0 }}>{booking.vehicleNo}</p>
//           <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0' }}>{getVehicle(booking.vehicleType).label}</p>
//         </div>
//       </div>
//     </td>
//     <td style={{ padding: '14px 20px' }}>
//       <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: '#dcfce7', color: '#15803d' }}>Active</span>
//     </td>
//     <td style={{ padding: '14px 20px' }}>
//       <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>₹{booking.advance || 0}</span>
//     </td>
//     <td style={{ padding: '14px 20px' }}>
//       <span style={{ fontSize: '13px', color: '#4b5563' }}>{formatTime(booking.createdAt)}</span>
//     </td>
//   </tr>
// );

// // ── Main Component ─────────────────────────────────────────────────────────────
// export default function ActiveBookings() {
//   const dispatch = useDispatch();
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState('cards');
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(24);
//   const [paginatedBookings, setPaginatedBookings] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await dispatch(getActiveBookingsForDashboard());
//         const data = result.payload?.activeBookings || [];
//         setBookings(data);
//         setFilteredBookings(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredBookings(bookings);
//     } else {
//       setFilteredBookings(bookings.filter((b) =>
//         b.vehicleNo?.toLowerCase().includes(searchTerm.toLowerCase())
//       ));
//     }
//     setPage(1);
//   }, [searchTerm, bookings]);

//   useEffect(() => {
//     const start = (page - 1) * rowsPerPage;
//     setPaginatedBookings(filteredBookings.slice(start, start + rowsPerPage));
//   }, [filteredBookings, page, rowsPerPage]);

//   const totalPages = Math.ceil(filteredBookings.length / rowsPerPage);
//   const startEntry = (page - 1) * rowsPerPage + 1;
//   const endEntry = Math.min(page * rowsPerPage, filteredBookings.length);

//   const handlePageChange = (_, newPage) => {
//     setPage(newPage);
//     document.querySelector('.active-bookings-scroll-top')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const PaginationControls = () =>
//     totalPages > 1 ? (
//       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '20px' }}>
//         <div style={{ fontSize: '13px', color: '#6b7280' }}>Showing {startEntry}–{endEntry} of {filteredBookings.length} entries</div>
//         <Pagination
//           count={totalPages} page={page} onChange={handlePageChange}
//           color="primary" size="medium" siblingCount={1} boundaryCount={1}
//           renderItem={(item) => (<PaginationItem slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }} {...item} />)}
//           sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px', fontWeight: 500 }, '& .Mui-selected': { backgroundColor: '#1a3c5e !important', color: 'white', '&:hover': { backgroundColor: '#0f2a44 !important' } } }}
//         />
//       </div>
//     ) : null;

//   // ── Shimmer Skeleton ───────────────────────────────────────────────────────
//   if (loading) return <SkeletonLoader />;

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid #fee2e2', maxWidth: '360px' }}>
//           <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading bookings</p>
//           <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{error}</p>
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
//         .bookings-card-grid { display: grid; gap: 16px; width: 100%; }
//         @media (max-width: 639px) { .bookings-card-grid { grid-template-columns: repeat(1, 1fr); } }
//         @media (min-width: 640px) and (max-width: 1023px) { .bookings-card-grid { grid-template-columns: repeat(3, 1fr); } }
//         @media (min-width: 1024px) { .bookings-card-grid { grid-template-columns: repeat(4, 1fr); } }
//         .toolbar-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
//         .search-box { flex: 1; min-width: 180px; max-width: 420px; }
//         .toolbar-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-left: auto; }
//       `}</style>

//       <div className="active-bookings-scroll-top" style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', animation: 'fadeIn 0.25s ease', boxSizing: 'border-box' }}>
//         <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

//           {/* ── Header ── */}
//           <div style={{ animation: 'fadeSlideUp 0.35s ease both' }}>
//             <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>Active Bookings</h1>
//             <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0' }}>Manage your parked vehicles and their status</p>
//           </div>

//           {/* ── Toolbar ── */}
//           <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.4s ease both' }}>
//             <div className="toolbar-row">
//               <div className="search-box" style={{ position: 'relative' }}>
//                 <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}><SearchIcon sx={{ fontSize: 18 }} /></span>
//                 <input type="text" placeholder="Search vehicles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
//                   style={{ width: '100%', paddingLeft: '36px', paddingRight: searchTerm ? '34px' : '12px', paddingTop: '9px', paddingBottom: '9px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
//                   onFocus={(e) => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
//                   onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                 />
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
//                     <ClearIcon sx={{ fontSize: 16 }} />
//                   </button>
//                 )}
//               </div>
//               <div className="toolbar-right">
//                 <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{filteredBookings.length} total</span>
//                 <FormControl size="small" sx={{ minWidth: 110 }}>
//                   <Select value={rowsPerPage} onChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(1); }} sx={{ fontSize: '0.8rem', '& .MuiSelect-select': { py: 0.75, px: 1.5 } }}>
//                     <MenuItem value={12}>12 / page</MenuItem>
//                     <MenuItem value={24}>24 / page</MenuItem>
//                     <MenuItem value={48}>48 / page</MenuItem>
//                     <MenuItem value={96}>96 / page</MenuItem>
//                   </Select>
//                 </FormControl>
//                 <Tooltip arrow>
//                   <button onClick={() => { setViewMode(viewMode === 'list' ? 'cards' : 'list'); setPage(1); }}
//                     style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff', cursor: 'pointer', transition: 'background 0.15s', color: '#374151' }}>
//                     {viewMode === 'list' ? <GridIcon sx={{ fontSize: 18 }} /> : <ListIcon sx={{ fontSize: 18 }} />}
//                   </button>
//                 </Tooltip>
//                 <Tooltip title="Refresh" arrow>
//                   <button onClick={() => { setSearchTerm(''); setPage(1); }}
//                     style={{ display: 'flex', alignItems: 'center', padding: '7px', borderRadius: '8px', border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280', transition: 'color 0.15s' }}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = '#1a3c5e')}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}>
//                     <RefreshIcon sx={{ fontSize: 20 }} />
//                   </button>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>

//           {/* ── Content ── */}
//           <div style={{ animation: 'fadeSlideUp 0.5s ease both' }}>
//             {filteredBookings.length === 0 && searchTerm && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 56, height: 56, borderRadius: '16px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><SearchIcon sx={{ fontSize: 28, color: '#d1d5db' }} /></div>
//                 <p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>No results for "{searchTerm}"</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>Try a different vehicle number</p>
//                 <button onClick={() => setSearchTerm('')} style={{ marginTop: '12px', fontSize: '13px', fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear search</button>
//               </div>
//             )}
//             {filteredBookings.length === 0 && !searchTerm && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 64, height: 64, borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}><ParkingIcon sx={{ fontSize: 34, color: '#93c5fd' }} /></div>
//                 <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', margin: 0 }}>No Active Vehicles</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>No vehicles are currently parked</p>
//               </div>
//             )}
//             {viewMode === 'list' && filteredBookings.length > 0 && (
//               <>
//                 <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//                   <div style={{ overflowX: 'auto' }}>
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                       <thead>
//                         <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
//                           {['Vehicle', 'Status', 'Advance', 'In Time'].map((h) => (
//                             <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {paginatedBookings.map((booking, i) => (<BookingRow key={booking._id} booking={booking} index={i} />))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//             {viewMode === 'cards' && filteredBookings.length > 0 && (
//               <>
//                 <div className="bookings-card-grid">
//                   {paginatedBookings.map((booking, i) => (<BookingCard key={booking._id} booking={booking} index={i} />))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








/////// Pagination
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CircularProgress,
  FormControl,
  Select,
  MenuItem,
  Pagination,
  PaginationItem,
  Tooltip,
} from '@mui/material';
import {
  DirectionsCar as CarIcon,
  TwoWheeler as BikeIcon,
  LocalParking as ParkingIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
  ViewList as ListIcon,
  GridView as GridIcon,
  ElectricRickshaw as RickshawIcon,
  LocalShipping as TruckIcon,
  DirectionsBus as DirectionsBusIcon,
  Refresh as RefreshIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { getActiveBookingsForDashboard } from '../../../redux/slice/BookingHistory';

// ── Vehicle config ─────────────────────────────────────────────────────────────
const VEHICLE_MAP = {
  '2':  { icon: BikeIcon,          bg: '#dbeafe', color: '#1d4ed8', label: '2-Wheeler'  },
  '3':  { icon: RickshawIcon,      bg: '#fce7f3', color: '#be185d', label: '3-Wheeler'  },
  '4':  { icon: CarIcon,           bg: '#d1fae5', color: '#065f46', label: '4-Wheeler'  },
  '17': { icon: TruckIcon,         bg: '#fef3c7', color: '#92400e', label: 'Traveller'  },
  '45': { icon: DirectionsBusIcon, bg: '#ede9fe', color: '#5b21b6', label: 'Bus'        },
};

const getVehicle = (type) => VEHICLE_MAP[String(type)] || VEHICLE_MAP['4'];

// ── Helpers ────────────────────────────────────────────────────────────────────
const formatTime = (dateString) => {
  if (!dateString) return '--';
  return new Date(dateString).toLocaleString('en-IN', {
    day: '2-digit', month: 'short',
    hour: '2-digit', minute: '2-digit',
  });
};

// ── Vehicle Icon Circle ────────────────────────────────────────────────────────
const VehicleIcon = ({ vehicleType, size = 40 }) => {
  const v = getVehicle(vehicleType);
  const IconComp = v.icon;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: v.bg, color: v.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <IconComp sx={{ fontSize: size * 0.5 }} />
    </div>
  );
};

// ── Booking Card ───────────────────────────────────────────────────────────────
const BookingCard = ({ booking, index }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: '16px',
      border: '1px solid #e5e7eb',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      transition: 'box-shadow 0.25s, transform 0.25s',
      cursor: 'default',
      animation: 'fadeSlideUp 0.4s ease both',
      animationDelay: `${index * 40}ms`,
      minWidth: 0,
      width: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Icon + vehicle number */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <VehicleIcon vehicleType={booking.vehicleType} size={40} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {booking.vehicleNo}
        </p>
        <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {getVehicle(booking.vehicleType).label}
        </p>
      </div>
    </div>

    <div style={{ height: '1px', background: '#f3f4f6' }} />

    {/* Status */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>Status</span>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: '#dcfce7', color: '#15803d' }}>
        Active
      </span>
    </div>

    {/* Advance */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>Advance</span>
      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>₹{booking.advance || 0}</span>
    </div>

    {/* In Time */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
      <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>In Time</span>
      <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {formatTime(booking.createdAt)}
      </span>
    </div>
  </div>
);

// ── Booking List Row ───────────────────────────────────────────────────────────
const BookingRow = ({ booking, index }) => (
  <tr
    style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s', animation: 'fadeSlideUp 0.35s ease both', animationDelay: `${index * 40}ms` }}
    onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
  >
    <td style={{ padding: '14px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <VehicleIcon vehicleType={booking.vehicleType} size={36} />
        <div>
          <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0 }}>{booking.vehicleNo}</p>
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0' }}>{getVehicle(booking.vehicleType).label}</p>
        </div>
      </div>
    </td>
    <td style={{ padding: '14px 20px' }}>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: '#dcfce7', color: '#15803d' }}>
        Active
      </span>
    </td>
    <td style={{ padding: '14px 20px' }}>
      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>₹{booking.advance || 0}</span>
    </td>
    <td style={{ padding: '14px 20px' }}>
      <span style={{ fontSize: '13px', color: '#4b5563' }}>{formatTime(booking.createdAt)}</span>
    </td>
  </tr>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ActiveBookings() {
  const dispatch = useDispatch();
  const [bookings, setBookings]               = useState([]);
  const [totalBookingsCount, setTotalBookingsCount] = useState(0);
  const [loading, setLoading]                 = useState(true);
  const [error, setError]                     = useState(null);
  const [searchTerm, setSearchTerm]           = useState('');
  const [viewMode, setViewMode]               = useState('cards');
  const [page, setPage]                       = useState(1);
  const [rowsPerPage, setRowsPerPage]         = useState(24);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const result = await dispatch(getActiveBookingsForDashboard({ page, limit: rowsPerPage, search: searchTerm }));
          const payload = result.payload;
          const data = payload?.activeBookings || (Array.isArray(payload) ? payload : []);
          const total = payload?.total ?? data.length;
          
          setBookings(data);
          setTotalBookingsCount(total);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [dispatch, page, rowsPerPage, searchTerm]);

  const totalPages  = Math.ceil(totalBookingsCount / rowsPerPage);
  const startEntry  = (page - 1) * rowsPerPage + 1;
  const endEntry    = Math.min(page * rowsPerPage, totalBookingsCount);

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
    document.querySelector('.active-bookings-scroll-top')?.scrollIntoView({ behavior: 'smooth' });
  };

  const PaginationControls = () =>
    totalPages > 0 ? (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '20px' }}>
        <div style={{ fontSize: '13px', color: '#6b7280' }}>
          Showing {totalBookingsCount === 0 ? 0 : startEntry}–{endEntry} of {totalBookingsCount} entries
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span style={{ fontSize: '13px', color: '#6b7280' }}>Rows per page:</span>
             <FormControl size="small" sx={{ minWidth: 80 }}>
               <Select
                 value={rowsPerPage}
                 onChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(1); }}
                 sx={{ fontSize: '0.8rem', '& .MuiSelect-select': { py: 0.75, px: 1.5 } }}
               >
                 <MenuItem value={12}>12</MenuItem>
                 <MenuItem value={24}>24</MenuItem>
                 <MenuItem value={48}>48</MenuItem>
                 <MenuItem value={96}>96</MenuItem>
               </Select>
             </FormControl>
          </div>

          <Pagination
            count={totalPages} page={page} onChange={handlePageChange}
            color="primary" size="medium" siblingCount={1} boundaryCount={1}
            renderItem={(item) => (
              <PaginationItem slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }} {...item} />
            )}
            sx={{
              '& .MuiPaginationItem-root': { borderRadius: '10px', fontWeight: 500 },
              '& .Mui-selected': { backgroundColor: '#1a3c5e !important', color: 'white', '&:hover': { backgroundColor: '#0f2a44 !important' } },
            }}
          />
        </div>
      </div>
    ) : null;

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 48, height: 48, borderRadius: '12px', background: '#1a3c5e', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'bounce 1s infinite' }}>
            <ParkingIcon sx={{ fontSize: 26, color: '#fff' }} />
          </div>
          <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>Loading bookings…</p>
        </div>
      </div>
    );
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
        <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid #fee2e2', maxWidth: '360px' }}>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading bookings</p>
          <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{error}</p>
        </div>
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Responsive Card Grid ── */
        .bookings-card-grid {
          display: grid;
          gap: 16px;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 480px) {
          .bookings-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .bookings-card-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 1024px) {
          .bookings-card-grid { grid-template-columns: repeat(5, 1fr); }
        }
        @media (min-width: 1440px) {
          .bookings-card-grid { grid-template-columns: repeat(6, 1fr); }
        }
        @media (min-width: 2560px) {
          .bookings-card-grid { grid-template-columns: repeat(6, 1fr); }
        }

        .toolbar-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }
        .search-box {
          flex: 1;
          min-width: 180px;
          max-width: 420px;
        }
        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-left: auto;
        }
      `}</style>

      <div
        className="active-bookings-scroll-top"
        style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', animation: 'fadeIn 0.25s ease', boxSizing: 'border-box' }}
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* ── Header ── */}
          <div style={{ animation: 'fadeSlideUp 0.35s ease both' }}>
            <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
              Active Bookings
            </h1>
            <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0' }}>
              Manage your parked vehicles and their status
            </p>
          </div>

          {/* ── Toolbar ── */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.4s ease both' }}>
            <div className="toolbar-row">
              {/* Search */}
              <div className="search-box" style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}>
                  <SearchIcon sx={{ fontSize: 18 }} />
                </span>
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
                  style={{ width: '100%', paddingLeft: '36px', paddingRight: searchTerm ? '34px' : '12px', paddingTop: '9px', paddingBottom: '9px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
                    <ClearIcon sx={{ fontSize: 16 }} />
                  </button>
                )}
              </div>

              {/* Right controls */}
              <div className="toolbar-right">
                <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>
                  {totalBookingsCount} total
                </span>

                {/* View toggle */}
                <div style={{ display: 'flex', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <Tooltip title="Card View" arrow>
                    <button
                      onClick={() => { setViewMode('cards'); setPage(1); }}
                      style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: 'none', cursor: 'pointer', transition: 'background 0.15s', background: viewMode === 'cards' ? '#1a3c5e' : '#f9fafb', color: viewMode === 'cards' ? '#fff' : '#374151' }}
                    >
                      <GridIcon sx={{ fontSize: 18 }} />
                    </button>
                  </Tooltip>
                  <Tooltip title="List View" arrow>
                    <button
                      onClick={() => { setViewMode('list'); setPage(1); }}
                      style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: 'none', borderLeft: '1px solid #e5e7eb', cursor: 'pointer', transition: 'background 0.15s', background: viewMode === 'list' ? '#1a3c5e' : '#f9fafb', color: viewMode === 'list' ? '#fff' : '#374151' }}
                    >
                      <ListIcon sx={{ fontSize: 18 }} />
                    </button>
                  </Tooltip>
                </div>

                {/* Refresh */}
                <Tooltip title="Refresh" arrow>
                  <button
                    onClick={() => { setSearchTerm(''); setPage(1); }}
                    style={{ display: 'flex', alignItems: 'center', padding: '7px', borderRadius: '8px', border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#1a3c5e')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <RefreshIcon sx={{ fontSize: 20 }} />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div style={{ animation: 'fadeSlideUp 0.5s ease both' }}>

            {/* No search results */}
            {bookings.length === 0 && searchTerm && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '16px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <SearchIcon sx={{ fontSize: 28, color: '#d1d5db' }} />
                </div>
                <p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>No results for "{searchTerm}"</p>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>Try a different vehicle number</p>
                <button onClick={() => setSearchTerm('')} style={{ marginTop: '12px', fontSize: '13px', fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  Clear search
                </button>
              </div>
            )}

            {/* Empty state */}
            {bookings.length === 0 && !searchTerm && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <ParkingIcon sx={{ fontSize: 34, color: '#93c5fd' }} />
                </div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', margin: 0 }}>No Active Vehicles</p>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>No vehicles are currently parked</p>
              </div>
            )}

            {/* ── LIST VIEW ── */}
            {viewMode === 'list' && bookings.length > 0 && (
              <>
                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                          {['Vehicle', 'Status', 'Advance', 'In Time'].map((h) => (
                            <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, i) => (
                          <BookingRow key={booking._id} booking={booking} index={i} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <PaginationControls />
              </>
            )}

            {/* ── CARD VIEW ── */}
            {viewMode === 'cards' && bookings.length > 0 && (
              <>
                <div className="bookings-card-grid">
                  {bookings.map((booking, i) => (
                    <BookingCard key={booking._id} booking={booking} index={i} />
                  ))}
                </div>
                <PaginationControls />
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}