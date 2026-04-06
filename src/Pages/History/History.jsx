// import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { getVendorHistory, deleteHistoryByAmount, generateVendorHistoryPDF } from '../../../redux/slice/BookingHistory';
// import {
//   Pagination,
//   PaginationItem,
//   Select,
//   MenuItem,
//   FormControl,
//   Tooltip,
//   Alert,
//   Snackbar,
// } from '@mui/material';
// import {
//   DirectionsCar as CarIcon,
//   TwoWheeler as BikeIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
//   Search as SearchIcon,
//   Clear as ClearIcon,
//   Refresh as RefreshIcon,
//   Download as DownloadIcon,
//   Delete as DeleteIcon,
//   ViewList as ListIcon,
//   GridView as GridIcon,
//   ElectricRickshaw as RickshawIcon,
//   LocalShipping as TruckIcon,
//   DirectionsBus as DirectionsBusIcon,
//   Receipt as ReceiptIcon,
// } from '@mui/icons-material';

// // ── Vehicle config ─────────────────────────────────────────────────────────────
// const VEHICLE_MAP = {
//   '2':  { icon: BikeIcon,          bg: '#dbeafe', color: '#1d4ed8', label: '2-Wheeler'  },
//   '3':  { icon: RickshawIcon,      bg: '#fce7f3', color: '#be185d', label: '3-Wheeler'  },
//   '4':  { icon: CarIcon,           bg: '#d1fae5', color: '#065f46', label: '4-Wheeler'  },
//   '17': { icon: TruckIcon,         bg: '#fef3c7', color: '#92400e', label: 'Traveller'  },
//   '55': { icon: DirectionsBusIcon, bg: '#ede9fe', color: '#5b21b6', label: 'Bus'        },
// };

// const getVehicle = (type) => VEHICLE_MAP[String(type)] || VEHICLE_MAP['4'];

// // ── Vehicle Icon Circle ────────────────────────────────────────────────────────
// const VehicleIcon = ({ vehicleType, size = 40 }) => {
//   const v = getVehicle(vehicleType);
//   const IconComp = v.icon;
//   return (
//     <div style={{
//       width: size, height: size, borderRadius: '50%',
//       background: v.bg, color: v.color,
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//       flexShrink: 0,
//     }}>
//       <IconComp sx={{ fontSize: size * 0.5 }} />
//     </div>
//   );
// };

// // ── Helpers ────────────────────────────────────────────────────────────────────
// const formatDate = (date) =>
//   new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

// const formatDateTime = (date) => {
//   if (!date) return '—';
//   return new Date(date).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
// };

// const formatCurrency = (amount) =>
//   new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);

// // ── History Card (matches ActiveBookings card exactly) ─────────────────────────
// const HistoryCard = ({ booking, index }) => (
//   <div
//     style={{
//       background: '#fff',
//       borderRadius: '16px',
//       border: '1px solid #e5e7eb',
//       padding: '16px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
//       transition: 'box-shadow 0.25s, transform 0.25s',
//       cursor: 'default',
//       animation: 'fadeSlideUp 0.4s ease both',
//       animationDelay: `${index * 40}ms`,
//       minWidth: 0,
//       width: '100%',
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
//       e.currentTarget.style.transform = 'translateY(-2px)';
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
//       e.currentTarget.style.transform = 'translateY(0)';
//     }}
//   >
//     {/* Icon + vehicle number */}
//     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//       <VehicleIcon vehicleType={booking.vehicleType} size={40} />
//       <div style={{ minWidth: 0, flex: 1 }}>
//         <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {booking.vehicleNo}
//         </p>
//         <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {getVehicle(booking.vehicleType).label}
//         </p>
//       </div>
//     </div>

//     <div style={{ height: '1px', background: '#f3f4f6' }} />

//     {/* Status */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Status</span>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed',
//         color: booking.paymentSucsess ? '#15803d' : '#c2410c',
//       }}>
//         {booking.paymentSucsess ? 'Completed' : 'Pending'}
//       </span>
//     </div>

//     {/* Amount */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Amount</span>
//       <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{formatCurrency(booking.amount)}</span>
//     </div>

//     {/* Advance (only if > 0) */}
//     {booking.advance > 0 && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280' }}>Advance</span>
//         <span style={{ fontSize: '12px', fontWeight: 600, color: '#16a34a' }}>{formatCurrency(booking.advance)}</span>
//       </div>
//     )}

//     {/* Payment method */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Payment</span>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff',
//         color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3',
//       }}>
//         {booking.paymentMethod || '—'}
//       </span>
//     </div>

//     {/* In Time */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>In Time</span>
//       <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//         {formatDateTime(booking.inTime)}
//       </span>
//     </div>

//     {/* Out Time */}
//     {booking.outTime && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>Out Time</span>
//         <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {formatDateTime(booking.outTime)}
//         </span>
//       </div>
//     )}

//     {/* Created By */}
//     {booking.createdBy?.name && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>By</span>
//         <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {booking.createdBy.name}
//         </span>
//       </div>
//     )}
//   </div>
// );

// // ── History List Row ───────────────────────────────────────────────────────────
// const HistoryRow = ({ booking, index, rowNum }) => (
//   <tr
//     style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s', animation: 'fadeSlideUp 0.35s ease both', animationDelay: `${index * 40}ms` }}
//     onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
//     onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
//   >
//     <td style={{ padding: '12px 16px', fontSize: '12px', color: '#9ca3af' }}>{rowNum}</td>
//     <td style={{ padding: '12px 16px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <VehicleIcon vehicleType={booking.vehicleType} size={36} />
//         <div>
//           <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0 }}>{booking.vehicleNo}</p>
//           <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0' }}>{booking.createdBy?.name || '—'}</p>
//         </div>
//       </div>
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{getVehicle(booking.vehicleType).label}</td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{formatDateTime(booking.inTime)}</td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{booking.outTime ? formatDateTime(booking.outTime) : '—'}</td>
//     <td style={{ padding: '12px 16px' }}>
//       <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a3c5e', margin: 0 }}>{formatCurrency(booking.amount)}</p>
//       {booking.advance > 0 && <p style={{ fontSize: '11px', color: '#16a34a', margin: '2px 0 0' }}>Adv: {formatCurrency(booking.advance)}</p>}
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff',
//         color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3',
//       }}>
//         {booking.paymentMethod || '—'}
//       </span>
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed',
//         color: booking.paymentSucsess ? '#15803d' : '#c2410c',
//       }}>
//         {booking.paymentSucsess ? 'Completed' : 'Pending'}
//       </span>
//     </td>
//   </tr>
// );

// // ── Main Component ─────────────────────────────────────────────────────────────
// export default function History() {
//   const dispatch = useDispatch();
//   const [historyData, setHistoryData]     = useState(null);
//   const [loading, setLoading]             = useState(false);
//   const [pdfLoading, setPdfLoading]       = useState(false);
//   const [error, setError]                 = useState(null);
//   const [snackbar, setSnackbar]           = useState({ open: false, message: '', severity: 'success' });
//   const [viewMode, setViewMode]           = useState('list');

//   const [startDate, setStartDate]         = useState('');
//   const [endDate, setEndDate]             = useState('');
//   const [search, setSearch]               = useState('');
//   const [currentPage, setCurrentPage]     = useState(1);
//   const [itemsPerPage, setItemsPerPage]   = useState(25);

//   const [showDeleteModal, setShowDeleteModal]   = useState(false);
//   const [deleteAmount, setDeleteAmount]         = useState('');
//   const [deleteStartDate, setDeleteStartDate]   = useState('');
//   const [deleteEndDate, setDeleteEndDate]       = useState('');
//   const [deleting, setDeleting]                 = useState(false);

//   const user      = JSON.parse(localStorage.getItem('user') || '{}');
//   const vendor_id = user.vendor_id;

//   const showNotification = (message, severity = 'success') =>
//     setSnackbar({ open: true, message, severity });

//   const fetchHistory = useCallback(async (page = 1) => {
//     if (!vendor_id) { setError('Vendor ID not found'); return; }
//     setLoading(true);
//     try {
//       const result = await dispatch(getVendorHistory({
//         vendor_id, startDate: startDate || null, endDate: endDate || null,
//         page, limit: itemsPerPage,
//       })).unwrap();
//       setHistoryData(result);
//       setCurrentPage(page);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch history');
//       showNotification(err.message || 'Failed to fetch history', 'error');
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, vendor_id, startDate, endDate, itemsPerPage]);

//   useEffect(() => { fetchHistory(1); }, [fetchHistory]);

//   const handleFilter = () => { setCurrentPage(1); fetchHistory(1); showNotification('Filters applied', 'success'); };
//   const handleClear  = () => { setStartDate(''); setEndDate(''); setSearch(''); setCurrentPage(1); fetchHistory(1); showNotification('Filters cleared', 'info'); };

//   const handlePageChange = (_, newPage) => {
//     fetchHistory(newPage);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleRowsPerPageChange = (e) => {
//     setItemsPerPage(parseInt(e.target.value, 10));
//     setCurrentPage(1);
//     fetchHistory(1);
//   };

//   const handleDownloadPDF = async () => {
//     if (!historyData?.data?.length) { showNotification('No data to generate PDF', 'warning'); return; }
//     setPdfLoading(true);
//     try {
//       const result = await dispatch(generateVendorHistoryPDF({ vendor_id, startDate: startDate || null, endDate: endDate || null })).unwrap();
//       const url  = window.URL.createObjectURL(result);
//       const link = document.createElement('a');
//       const dateRangeStr = startDate && endDate ? `${startDate}_to_${endDate}` : new Date().toISOString().slice(0, 7);
//       link.href = url;
//       link.setAttribute('download', `booking_report_${dateRangeStr}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//       showNotification('PDF downloaded successfully', 'success');
//     } catch (err) {
//       showNotification(err || 'Failed to download PDF', 'error');
//     } finally {
//       setPdfLoading(false);
//     }
//   };

//   const handleDeleteHistory = async () => {
//     if (!deleteAmount || deleteAmount <= 0) { showNotification('Enter a valid amount', 'error'); return; }
//     setDeleting(true);
//     try {
//       const result = await dispatch(deleteHistoryByAmount({ vendor_id, amount: parseFloat(deleteAmount), startDate: deleteStartDate || null, endDate: deleteEndDate || null })).unwrap();
//       showNotification(result.message || 'History deleted successfully', 'success');
//       setTimeout(() => { fetchHistory(1); closeDeleteModal(); }, 2000);
//     } catch (err) {
//       showNotification(err.message || 'Failed to delete history', 'error');
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const openDeleteModal = () => { setDeleteAmount(''); setDeleteStartDate(startDate); setDeleteEndDate(endDate); setShowDeleteModal(true); };
//   const closeDeleteModal = () => { setShowDeleteModal(false); setDeleteAmount(''); };

//   const getFilteredData = () => {
//     if (!historyData?.data) return [];
//     if (!search) return historyData.data;
//     return historyData.data.filter((b) =>
//       b.vehicleNo?.toLowerCase().includes(search.toLowerCase()) ||
//       b.vehicleType?.toLowerCase().includes(search.toLowerCase()) ||
//       b.paymentMethod?.toLowerCase().includes(search.toLowerCase()) ||
//       b.createdBy?.name?.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   const filteredData    = getFilteredData();
//   const { summary, dateRange } = historyData || {};
//   const totalPages  = Math.ceil(filteredData.length / itemsPerPage);
//   const startEntry  = (currentPage - 1) * itemsPerPage + 1;
//   const endEntry    = Math.min(currentPage * itemsPerPage, filteredData.length);

//   const PaginationControls = () =>
//     totalPages > 1 ? (
//       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '16px', padding: '12px 0 4px' }}>
//         <div style={{ fontSize: '13px', color: '#6b7280' }}>
//           Showing {startEntry}–{endEntry} of {filteredData.length} entries
//         </div>
//         <Pagination
//           count={totalPages} page={currentPage} onChange={handlePageChange}
//           color="primary" size="medium" siblingCount={1} boundaryCount={1}
//           renderItem={(item) => (
//             <PaginationItem slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }} {...item} />
//           )}
//           sx={{
//             '& .MuiPaginationItem-root': { borderRadius: '10px', fontWeight: 500 },
//             '& .Mui-selected': { backgroundColor: '#1a3c5e !important', color: 'white', '&:hover': { backgroundColor: '#0f2a44 !important' } },
//           }}
//         />
//       </div>
//     ) : null;

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
//           <div style={{ width: 48, height: 48, borderRadius: '12px', background: '#1a3c5e', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'bounce 1s infinite' }}>
//             <ReceiptIcon sx={{ fontSize: 26, color: '#fff' }} />
//           </div>
//           <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>Loading history…</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid #fee2e2', maxWidth: '360px' }}>
//           <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading history</p>
//           <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!historyData) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px' }}>
//           <p style={{ color: '#6b7280' }}>No data available</p>
//         </div>
//       </div>
//     );
//   }

//   // ── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }

//         /* ── Responsive Card Grid (identical to ActiveBookings) ── */
//         .history-card-grid {
//           display: grid;
//           gap: 16px;
//           width: 100%;
//           grid-template-columns: repeat(1, 1fr);
//         }
//         @media (min-width: 480px) {
//           .history-card-grid { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (min-width: 768px) {
//           .history-card-grid { grid-template-columns: repeat(4, 1fr); }
//         }
//         @media (min-width: 1024px) {
//           .history-card-grid { grid-template-columns: repeat(5, 1fr); }
//         }
//         @media (min-width: 1440px) {
//           .history-card-grid { grid-template-columns: repeat(6, 1fr); }
//         }
//         @media (min-width: 2560px) {
//           .history-card-grid { grid-template-columns: repeat(6, 1fr); }
//         }

//         @media (max-width: 640px) {
//           .hide-on-mobile { display: none; }
//         }

//         .toolbar-row {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           gap: 10px;
//         }
//         .search-box {
//           flex: 1;
//           min-width: 180px;
//           max-width: 420px;
//         }
//         .toolbar-right {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           flex-wrap: wrap;
//           margin-left: auto;
//         }
//       `}</style>

//       <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', animation: 'fadeIn 0.25s ease', boxSizing: 'border-box' }}>
//         <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

//           {/* ── Header ── */}
//           <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', animation: 'fadeSlideUp 0.35s ease both' }}>
//             <div>
//               <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
//                 Booking History
//               </h1>
//               {dateRange?.startDate && dateRange?.endDate && (
//                 <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0' }}>
//                   Showing data from {formatDate(dateRange.startDate)} to {formatDate(dateRange.endDate)}
//                 </p>
//               )}
//             </div>

//             {/* Action buttons */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <Tooltip title="Delete History" arrow>
//                 <button
//                   onClick={openDeleteModal}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #fecaca', background: '#fff1f2', color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#fee2e2')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff1f2')}
//                 >
//                   <DeleteIcon sx={{ fontSize: 18 }} />
//                 </button>
//               </Tooltip>

//               <Tooltip title="Download PDF Report" arrow>
//                 <button
//                   onClick={handleDownloadPDF}
//                   disabled={pdfLoading}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#16a34a', cursor: pdfLoading ? 'not-allowed' : 'pointer', opacity: pdfLoading ? 0.6 : 1, transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => !pdfLoading && (e.currentTarget.style.background = '#dcfce7')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#f0fdf4')}
//                 >
//                   {pdfLoading
//                     ? <div style={{ width: 16, height: 16, border: '2px solid #16a34a', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//                     : <DownloadIcon sx={{ fontSize: 18 }} />
//                   }
//                 </button>
//               </Tooltip>

//               <Tooltip title="Refresh" arrow>
//                 <button
//                   onClick={() => fetchHistory(currentPage)}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
//                 >
//                   <RefreshIcon sx={{ fontSize: 18 }} />
//                 </button>
//               </Tooltip>
//             </div>
//           </div>

//           {/* ── Summary Cards ── */}
//           {summary && (
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', animation: 'fadeSlideUp 0.4s ease both' }}>
//               {[
//                 { label: 'Total Revenue', value: formatCurrency(summary.totalAmount), sub: `${summary.totalBookings} bookings` },
//                 { label: 'Total Bookings', value: summary.totalBookings, sub: 'Completed transactions' },
//                 { label: 'Average Amount', value: formatCurrency(summary.averageAmount), sub: 'Per booking' },
//               ].map((card) => (
//                 <div key={card.label} style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
//                   <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 6px', fontWeight: 500 }}>{card.label}</p>
//                   <p style={{ fontSize: '22px', fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{card.value}</p>
//                   <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>{card.sub}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ── Toolbar ── */}
//           <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.45s ease both' }}>
//             {/* Search row */}
//             <div style={{ marginBottom: '12px' }}>
//               <div style={{ position: 'relative', maxWidth: '480px' }}>
//                 <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}>
//                   <SearchIcon sx={{ fontSize: 18 }} />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search vehicles, type, payment..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   style={{ width: '100%', paddingLeft: '36px', paddingRight: search ? '34px' : '12px', paddingTop: '9px', paddingBottom: '9px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
//                   onFocus={(e) => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
//                   onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                 />
//                 {search && (
//                   <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
//                     <ClearIcon sx={{ fontSize: 16 }} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Filters + controls row */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
//               {/* Date range */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
//                 <input
//                   type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
//                   style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }}
//                 />
//                 <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
//                 <input
//                   type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
//                   style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }}
//                 />
//                 <button
//                   onClick={handleFilter}
//                   style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: '#1a3c5e', color: '#fff', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#0f2a44')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3c5e')}
//                 >
//                   Apply
//                 </button>
//                 <button
//                   onClick={handleClear}
//                   style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
//                 >
//                   Clear
//                 </button>
//               </div>

//               {/* Right controls */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', flexWrap: 'wrap' }}>
//                 <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{filteredData.length} total</span>

//                 <FormControl size="small" sx={{ minWidth: 110 }}>
//                   <Select
//                     value={itemsPerPage} onChange={handleRowsPerPageChange}
//                     sx={{ fontSize: '0.8rem', '& .MuiSelect-select': { py: 0.75, px: 1.5 } }}
//                   >
//                     <MenuItem value={15}>15 / page</MenuItem>
//                     <MenuItem value={25}>25 / page</MenuItem>
//                     <MenuItem value={50}>50 / page</MenuItem>
//                     <MenuItem value={100}>100 / page</MenuItem>
//                   </Select>
//                 </FormControl>

//                 {/* View toggle */}
//                 <div style={{ display: 'flex', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
//                   <Tooltip title="List View" arrow>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: 'none', cursor: 'pointer', transition: 'background 0.15s', background: viewMode === 'list' ? '#1a3c5e' : '#f9fafb', color: viewMode === 'list' ? '#fff' : '#374151' }}
//                     >
//                       <ListIcon sx={{ fontSize: 18 }} />
//                     </button>
//                   </Tooltip>
//                   <Tooltip title="Card View" arrow>
//                     <button
//                       onClick={() => setViewMode('card')}
//                       style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: 'none', borderLeft: '1px solid #e5e7eb', cursor: 'pointer', transition: 'background 0.15s', background: viewMode === 'card' ? '#1a3c5e' : '#f9fafb', color: viewMode === 'card' ? '#fff' : '#374151' }}
//                     >
//                       <GridIcon sx={{ fontSize: 18 }} />
//                     </button>
//                   </Tooltip>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Content ── */}
//           <div style={{ animation: 'fadeSlideUp 0.5s ease both' }}>

//             {/* No search results */}
//             {filteredData.length === 0 && search && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 56, height: 56, borderRadius: '16px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
//                   <SearchIcon sx={{ fontSize: 28, color: '#d1d5db' }} />
//                 </div>
//                 <p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>No results for "{search}"</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>Try a different search term</p>
//                 <button onClick={() => setSearch('')} style={{ marginTop: '12px', fontSize: '13px', fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                   Clear search
//                 </button>
//               </div>
//             )}

//             {/* Empty state */}
//             {filteredData.length === 0 && !search && historyData?.data?.length === 0 && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 64, height: 64, borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
//                   <ReceiptIcon sx={{ fontSize: 34, color: '#93c5fd' }} />
//                 </div>
//                 <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', margin: 0 }}>No Booking History</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>No completed bookings found</p>
//               </div>
//             )}

//             {/* ── LIST VIEW ── */}
//             {viewMode === 'list' && filteredData.length > 0 && (
//               <>
//                 <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//                   <div style={{ overflowX: 'auto' }}>
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                       <thead>
//                         <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
//                           {['#', 'Vehicle', 'Type', 'In Time', 'Out Time', 'Amount', 'Payment', 'Status'].map((h, i) => (
//                             <th
//                               key={h}
//                               className={i > 1 && i < 7 ? 'hide-on-mobile' : ''}
//                               style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
//                             >
//                               {h}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
//                           <HistoryRow key={booking._id} booking={booking} index={idx} rowNum={startEntry + idx} />
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Pagination inside table card */}
//                   {totalPages > 1 && (
//                     <div style={{ padding: '12px 16px', borderTop: '1px solid #f3f4f6' }}>
//                       <PaginationControls />
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}

//             {/* ── CARD VIEW ── */}
//             {viewMode === 'card' && filteredData.length > 0 && (
//               <>
//                 <div className="history-card-grid">
//                   {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
//                     <HistoryCard key={booking._id} booking={booking} index={idx} />
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}

//           </div>
//         </div>
//       </div>

//       {/* ── Delete Modal ── */}
//       {showDeleteModal && (
//         <div
//           style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '16px', animation: 'fadeIn 0.2s ease' }}
//           onClick={(e) => e.target === e.currentTarget && closeDeleteModal()}
//         >
//           <div style={{ background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
//             <div style={{ padding: '24px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
//                 <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <DeleteIcon sx={{ fontSize: 20, color: '#dc2626' }} />
//                 </div>
//                 <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: 0 }}>Delete History</h2>
//               </div>

//               <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 20px' }}>
//                 Permanently deletes booking records matching the criteria below. This action cannot be undone.
//               </p>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div>
//                   <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Amount *</label>
//                   <input
//                     type="number" value={deleteAmount} onChange={(e) => setDeleteAmount(e.target.value)}
//                     placeholder="Enter exact amount"
//                     style={{ width: '100%', padding: '9px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', boxSizing: 'border-box', color: '#111827' }}
//                     onFocus={(e) => { e.target.style.borderColor = '#dc2626'; e.target.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.1)'; }}
//                     onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                   />
//                 </div>

//                 <div>
//                   <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Date Range (Optional)</label>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <input type="date" value={deleteStartDate} onChange={(e) => setDeleteStartDate(e.target.value)}
//                       style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
//                     <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
//                     <input type="date" value={deleteEndDate} onChange={(e) => setDeleteEndDate(e.target.value)}
//                       style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: '16px', padding: '12px', background: '#fffbeb', borderRadius: '10px', border: '1px solid #fde68a' }}>
//                 <p style={{ fontSize: '12px', color: '#92400e', margin: 0 }}>
//                   ⚠️ All bookings matching the exact amount will be permanently deleted.
//                 </p>
//               </div>

//               <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
//                 <button
//                   onClick={closeDeleteModal}
//                   style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleDeleteHistory}
//                   disabled={deleting || !deleteAmount}
//                   style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: deleting || !deleteAmount ? '#fca5a5' : '#dc2626', color: '#fff', cursor: deleting || !deleteAmount ? 'not-allowed' : 'pointer', transition: 'background 0.15s' }}
//                 >
//                   {deleting ? 'Deleting...' : 'Delete'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }





// import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { getVendorHistory, deleteHistoryByAmount, generateVendorHistoryPDF } from '../../../redux/slice/BookingHistory';
// import {
//   Pagination,
//   PaginationItem,
//   Select,
//   MenuItem,
//   FormControl,
//   Tooltip,
//   Alert,
//   Snackbar,
// } from '@mui/material';
// import {
//   DirectionsCar as CarIcon,
//   TwoWheeler as BikeIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
//   Search as SearchIcon,
//   Clear as ClearIcon,
//   Refresh as RefreshIcon,
//   Download as DownloadIcon,
//   Delete as DeleteIcon,
//   ViewList as ListIcon,
//   GridView as GridIcon,
//   ElectricRickshaw as RickshawIcon,
//   LocalShipping as TruckIcon,
//   DirectionsBus as DirectionsBusIcon,
//   Receipt as ReceiptIcon,
// } from '@mui/icons-material';

// // ── Vehicle config ─────────────────────────────────────────────────────────────
// const VEHICLE_MAP = {
//   '2': { icon: BikeIcon, bg: '#dbeafe', color: '#1d4ed8', label: '2-Wheeler' },
//   '3': { icon: RickshawIcon, bg: '#fce7f3', color: '#be185d', label: '3-Wheeler' },
//   '4': { icon: CarIcon, bg: '#d1fae5', color: '#065f46', label: '4-Wheeler' },
//   '17': { icon: TruckIcon, bg: '#fef3c7', color: '#92400e', label: 'Traveller' },
//   '55': { icon: DirectionsBusIcon, bg: '#ede9fe', color: '#5b21b6', label: 'Bus' },
// };

// const getVehicle = (type) => VEHICLE_MAP[String(type)] || VEHICLE_MAP['4'];

// // ── Vehicle Icon Circle ────────────────────────────────────────────────────────
// const VehicleIcon = ({ vehicleType, size = 40 }) => {
//   const v = getVehicle(vehicleType);
//   const IconComp = v.icon;
//   return (
//     <div style={{
//       width: size, height: size, borderRadius: '50%',
//       background: v.bg, color: v.color,
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//       flexShrink: 0,
//     }}>
//       <IconComp sx={{ fontSize: size * 0.5 }} />
//     </div>
//   );
// };

// // ── Helpers ────────────────────────────────────────────────────────────────────
// const formatDate = (date) =>
//   new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

// const formatDateTime = (date) => {
//   if (!date) return '—';
//   return new Date(date).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
// };

// const formatCurrency = (amount) =>
//   new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);

// // ── History Card (matches ActiveBookings card exactly) ─────────────────────────
// const HistoryCard = ({ booking, index }) => (
//   <div
//     style={{
//       background: '#fff',
//       borderRadius: '16px',
//       border: '1px solid #e5e7eb',
//       padding: '16px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
//       transition: 'box-shadow 0.25s, transform 0.25s',
//       cursor: 'default',
//       animation: 'fadeSlideUp 0.4s ease both',
//       animationDelay: `${index * 40}ms`,
//       minWidth: 0,
//       width: '100%',
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
//       e.currentTarget.style.transform = 'translateY(-2px)';
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
//       e.currentTarget.style.transform = 'translateY(0)';
//     }}
//   >
//     {/* Icon + vehicle number */}
//     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//       <VehicleIcon vehicleType={booking.vehicleType} size={40} />
//       <div style={{ minWidth: 0, flex: 1 }}>
//         <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {booking.vehicleNo}
//         </p>
//         <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {getVehicle(booking.vehicleType).label}
//         </p>
//       </div>
//     </div>

//     <div style={{ height: '1px', background: '#f3f4f6' }} />

//     {/* Status */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Status</span>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed',
//         color: booking.paymentSucsess ? '#15803d' : '#c2410c',
//       }}>
//         {booking.paymentSucsess ? 'Completed' : 'Pending'}
//       </span>
//     </div>

//     {/* Amount */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Amount</span>
//       <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{formatCurrency(booking.amount)}</span>
//     </div>

//     {/* Advance (only if > 0) */}
//     {booking.advance > 0 && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280' }}>Advance</span>
//         <span style={{ fontSize: '12px', fontWeight: 600, color: '#16a34a' }}>{formatCurrency(booking.advance)}</span>
//       </div>
//     )}

//     {/* Payment method */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280' }}>Payment</span>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff',
//         color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3',
//       }}>
//         {booking.paymentMethod || '—'}
//       </span>
//     </div>

//     {/* In Time */}
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//       <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>In Time</span>
//       <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//         {formatDateTime(booking.inTime)}
//       </span>
//     </div>

//     {/* Out Time */}
//     {booking.outTime && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>Out Time</span>
//         <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {formatDateTime(booking.outTime)}
//         </span>
//       </div>
//     )}

//     {/* Created By */}
//     {booking.createdBy?.name && (
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
//         <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>By</span>
//         <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//           {booking.createdBy.name}
//         </span>
//       </div>
//     )}
//   </div>
// );

// // ── History List Row ───────────────────────────────────────────────────────────
// const HistoryRow = ({ booking, index, rowNum }) => (
//   <tr
//     style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s', animation: 'fadeSlideUp 0.35s ease both', animationDelay: `${index * 40}ms` }}
//     onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
//     onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
//   >
//     <td style={{ padding: '12px 16px', fontSize: '12px', color: '#9ca3af' }}>{rowNum}</td>
//     <td style={{ padding: '12px 16px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <VehicleIcon vehicleType={booking.vehicleType} size={36} />
//         <div>
//           <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0 }}>{booking.vehicleNo}</p>
//           <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0' }}>{booking.createdBy?.name || '—'}</p>
//         </div>
//       </div>
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{getVehicle(booking.vehicleType).label}</td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{formatDateTime(booking.inTime)}</td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{booking.outTime ? formatDateTime(booking.outTime) : '—'}</td>
//     <td style={{ padding: '12px 16px' }}>
//       <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a3c5e', margin: 0 }}>{formatCurrency(booking.amount)}</p>
//       {booking.advance > 0 && <p style={{ fontSize: '11px', color: '#16a34a', margin: '2px 0 0' }}>Adv: {formatCurrency(booking.advance)}</p>}
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff',
//         color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3',
//       }}>
//         {booking.paymentMethod || '—'}
//       </span>
//     </td>
//     <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//       <span style={{
//         fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
//         background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed',
//         color: booking.paymentSucsess ? '#15803d' : '#c2410c',
//       }}>
//         {booking.paymentSucsess ? 'Completed' : 'Pending'}
//       </span>
//     </td>
//   </tr>
// );

// // ── Main Component ─────────────────────────────────────────────────────────────
// export default function History() {
//   const dispatch = useDispatch();
//   const [historyData, setHistoryData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [pdfLoading, setPdfLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [viewMode, setViewMode] = useState('list');

//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(25);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteAmount, setDeleteAmount] = useState('');
//   const [deleteStartDate, setDeleteStartDate] = useState('');
//   const [deleteEndDate, setDeleteEndDate] = useState('');
//   const [deleting, setDeleting] = useState(false);

//   const user = JSON.parse(localStorage.getItem('user') || '{}');
//   const vendor_id = user.vendor_id;

//   const showNotification = (message, severity = 'success') =>
//     setSnackbar({ open: true, message, severity });

//   const fetchHistory = useCallback(async (page = 1) => {
//     if (!vendor_id) { setError('Vendor ID not found'); return; }
//     setLoading(true);
//     try {
//       const result = await dispatch(getVendorHistory({
//         vendor_id, startDate: startDate || null, endDate: endDate || null,
//         page, limit: itemsPerPage,
//       })).unwrap();
//       setHistoryData(result);
//       setCurrentPage(page);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch history');
//       showNotification(err.message || 'Failed to fetch history', 'error');
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, vendor_id, startDate, endDate, itemsPerPage]);

//   useEffect(() => { fetchHistory(1); }, [fetchHistory]);

//   const handleFilter = () => { setCurrentPage(1); fetchHistory(1); showNotification('Filters applied', 'success'); };
//   const handleClear = () => { setStartDate(''); setEndDate(''); setSearch(''); setCurrentPage(1); fetchHistory(1); showNotification('Filters cleared', 'info'); };

//   const handlePageChange = (_, newPage) => {
//     fetchHistory(newPage);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleRowsPerPageChange = (e) => {
//     setItemsPerPage(parseInt(e.target.value, 10));
//     setCurrentPage(1);
//     fetchHistory(1);
//   };

//   const handleDownloadPDF = async () => {
//     if (!historyData?.data?.length) { showNotification('No data to generate PDF', 'warning'); return; }
//     setPdfLoading(true);
//     try {
//       const result = await dispatch(generateVendorHistoryPDF({ vendor_id, startDate: startDate || null, endDate: endDate || null })).unwrap();
//       const url = window.URL.createObjectURL(result);
//       const link = document.createElement('a');
//       const dateRangeStr = startDate && endDate ? `${startDate}_to_${endDate}` : new Date().toISOString().slice(0, 7);
//       link.href = url;
//       link.setAttribute('download', `booking_report_${dateRangeStr}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//       showNotification('PDF downloaded successfully', 'success');
//     } catch (err) {
//       showNotification(err || 'Failed to download PDF', 'error');
//     } finally {
//       setPdfLoading(false);
//     }
//   };

//   const handleDeleteHistory = async () => {
//     if (!deleteAmount || deleteAmount <= 0) { showNotification('Enter a valid amount', 'error'); return; }
//     setDeleting(true);
//     try {
//       const result = await dispatch(deleteHistoryByAmount({ vendor_id, amount: parseFloat(deleteAmount), startDate: deleteStartDate || null, endDate: deleteEndDate || null })).unwrap();
//       showNotification(result.message || 'History deleted successfully', 'success');
//       setTimeout(() => { fetchHistory(1); closeDeleteModal(); }, 2000);
//     } catch (err) {
//       showNotification(err.message || 'Failed to delete history', 'error');
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const openDeleteModal = () => { setDeleteAmount(''); setDeleteStartDate(startDate); setDeleteEndDate(endDate); setShowDeleteModal(true); };
//   const closeDeleteModal = () => { setShowDeleteModal(false); setDeleteAmount(''); };

//   const getFilteredData = () => {
//     if (!historyData?.data) return [];
//     if (!search) return historyData.data;
//     return historyData.data.filter((b) =>
//       b.vehicleNo?.toLowerCase().includes(search.toLowerCase()) ||
//       b.vehicleType?.toLowerCase().includes(search.toLowerCase()) ||
//       b.paymentMethod?.toLowerCase().includes(search.toLowerCase()) ||
//       b.createdBy?.name?.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   const filteredData = getFilteredData();
//   const { summary, dateRange } = historyData || {};
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const startEntry = (currentPage - 1) * itemsPerPage + 1;
//   const endEntry = Math.min(currentPage * itemsPerPage, filteredData.length);

//   const PaginationControls = () =>
//     totalPages > 1 ? (
//       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '16px', padding: '12px 0 4px' }}>
//         <div style={{ fontSize: '13px', color: '#6b7280' }}>
//           Showing {startEntry}–{endEntry} of {filteredData.length} entries
//         </div>
//         <Pagination
//           count={totalPages} page={currentPage} onChange={handlePageChange}
//           color="primary" size="medium" siblingCount={1} boundaryCount={1}
//           renderItem={(item) => (
//             <PaginationItem slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }} {...item} />
//           )}
//           sx={{
//             '& .MuiPaginationItem-root': { borderRadius: '10px', fontWeight: 500 },
//             '& .Mui-selected': { backgroundColor: '#1a3c5e !important', color: 'white', '&:hover': { backgroundColor: '#0f2a44 !important' } },
//           }}
//         />
//       </div>
//     ) : null;

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
//           <div style={{ width: 48, height: 48, borderRadius: '12px', background: '#1a3c5e', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'bounce 1s infinite' }}>
//             <ReceiptIcon sx={{ fontSize: 26, color: '#fff' }} />
//           </div>
//           <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>Loading history…</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid #fee2e2', maxWidth: '360px' }}>
//           <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading history</p>
//           <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!historyData) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px' }}>
//           <p style={{ color: '#6b7280' }}>No data available</p>
//         </div>
//       </div>
//     );
//   }

//   // ── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }

//         /* ── Responsive Card Grid ── */
//         .history-card-grid {
//           display: grid;
//           gap: 16px;
//           width: 100%;
//         }

//         /* Mobile (sm): 1 card */
//         @media (max-width: 639px) {
//           .history-card-grid {
//             grid-template-columns: repeat(1, 1fr);
//           }
//         }

//         /* Tablet: 3 cards */
//         @media (min-width: 640px) and (max-width: 1023px) {
//           .history-card-grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }

//         /* Laptop (1024px) and above: 4 cards */
//         @media (min-width: 1024px) {
//           .history-card-grid {
//             grid-template-columns: repeat(4, 1fr);
//           }
//         }

//         @media (max-width: 640px) {
//           .hide-on-mobile { display: none; }
//         }

//         .toolbar-row {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           gap: 10px;
//         }
//         .search-box {
//           flex: 1;
//           min-width: 180px;
//           max-width: 420px;
//         }
//         .toolbar-right {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           flex-wrap: wrap;
//           margin-left: auto;
//         }
//       `}</style>

//       <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', animation: 'fadeIn 0.25s ease', boxSizing: 'border-box' }}>
//         <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

//           {/* ── Header ── */}
//           <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', animation: 'fadeSlideUp 0.35s ease both' }}>
//             <div>
//               <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
//                 Booking History
//               </h1>
//               {dateRange?.startDate && dateRange?.endDate && (
//                 <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0' }}>
//                   Showing data from {formatDate(dateRange.startDate)} to {formatDate(dateRange.endDate)}
//                 </p>
//               )}
//             </div>

//             {/* Action buttons */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <Tooltip title="Delete History" arrow>
//                 <button
//                   onClick={openDeleteModal}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #fecaca', background: '#fff1f2', color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#fee2e2')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff1f2')}
//                 >
//                   <DeleteIcon sx={{ fontSize: 18 }} />
//                 </button>
//               </Tooltip>

//               <Tooltip title="Download PDF Report" arrow>
//                 <button
//                   onClick={handleDownloadPDF}
//                   disabled={pdfLoading}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#16a34a', cursor: pdfLoading ? 'not-allowed' : 'pointer', opacity: pdfLoading ? 0.6 : 1, transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => !pdfLoading && (e.currentTarget.style.background = '#dcfce7')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#f0fdf4')}
//                 >
//                   {pdfLoading
//                     ? <div style={{ width: 16, height: 16, border: '2px solid #16a34a', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//                     : <DownloadIcon sx={{ fontSize: 18 }} />
//                   }
//                 </button>
//               </Tooltip>

//               <Tooltip title="Refresh" arrow>
//                 <button
//                   onClick={() => fetchHistory(currentPage)}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
//                 >
//                   <RefreshIcon sx={{ fontSize: 18 }} />
//                 </button>
//               </Tooltip>
//             </div>
//           </div>

//           {/* ── Summary Cards ── */}
//           {summary && (
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', animation: 'fadeSlideUp 0.4s ease both' }}>
//               {[
//                 { label: 'Total Revenue', value: formatCurrency(summary.totalAmount), sub: `${summary.totalBookings} bookings` },
//                 { label: 'Total Bookings', value: summary.totalBookings, sub: 'Completed transactions' },
//                 { label: 'Average Amount', value: formatCurrency(summary.averageAmount), sub: 'Per booking' },
//               ].map((card) => (
//                 <div key={card.label} style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
//                   <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 6px', fontWeight: 500 }}>{card.label}</p>
//                   <p style={{ fontSize: '22px', fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{card.value}</p>
//                   <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>{card.sub}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ── Toolbar ── */}
//           <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.45s ease both' }}>
//             {/* Search row */}
//             <div style={{ marginBottom: '12px' }}>
//               <div style={{ position: 'relative', maxWidth: '480px' }}>
//                 <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}>
//                   <SearchIcon sx={{ fontSize: 18 }} />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search vehicles, type, payment..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   style={{ width: '100%', paddingLeft: '36px', paddingRight: search ? '34px' : '12px', paddingTop: '9px', paddingBottom: '9px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
//                   onFocus={(e) => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
//                   onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                 />
//                 {search && (
//                   <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
//                     <ClearIcon sx={{ fontSize: 16 }} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Filters + controls row */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
//               {/* Date range */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
//                 <input
//                   type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
//                   style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }}
//                 />
//                 <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
//                 <input
//                   type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
//                   style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }}
//                 />
//                 <button
//                   onClick={handleFilter}
//                   style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: '#1a3c5e', color: '#fff', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#0f2a44')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3c5e')}
//                 >
//                   Apply
//                 </button>
//                 <button
//                   onClick={handleClear}
//                   style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
//                 >
//                   Clear
//                 </button>
//               </div>

//               {/* Right controls */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', flexWrap: 'wrap' }}>
//                 <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{filteredData.length} total</span>

//                 <FormControl size="small" sx={{ minWidth: 110 }}>
//                   <Select
//                     value={itemsPerPage} onChange={handleRowsPerPageChange}
//                     sx={{ fontSize: '0.8rem', '& .MuiSelect-select': { py: 0.75, px: 1.5 } }}
//                   >
//                     <MenuItem value={15}>15 / page</MenuItem>
//                     <MenuItem value={25}>25 / page</MenuItem>
//                     <MenuItem value={50}>50 / page</MenuItem>
//                     <MenuItem value={100}>100 / page</MenuItem>
//                   </Select>
//                 </FormControl>

//                 <Tooltip arrow>
//                   <button
//                     onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       padding: '7px 10px',
//                       cursor: 'pointer',
//                       transition: 'background 0.15s',
//                       color: '#374151',
//                     }}
//                   >
//                     {viewMode === 'list' ? <GridIcon sx={{ fontSize: 18 }} /> : <ListIcon sx={{ fontSize: 18 }} />}
//                   </button>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>

//           {/* ── Content ── */}
//           <div style={{ animation: 'fadeSlideUp 0.5s ease both' }}>

//             {/* No search results */}
//             {filteredData.length === 0 && search && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 56, height: 56, borderRadius: '16px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
//                   <SearchIcon sx={{ fontSize: 28, color: '#d1d5db' }} />
//                 </div>
//                 <p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>No results for "{search}"</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>Try a different search term</p>
//                 <button onClick={() => setSearch('')} style={{ marginTop: '12px', fontSize: '13px', fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//                   Clear search
//                 </button>
//               </div>
//             )}

//             {/* Empty state */}
//             {filteredData.length === 0 && !search && historyData?.data?.length === 0 && (
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
//                 <div style={{ width: 64, height: 64, borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
//                   <ReceiptIcon sx={{ fontSize: 34, color: '#93c5fd' }} />
//                 </div>
//                 <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', margin: 0 }}>No Booking History</p>
//                 <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>No completed bookings found</p>
//               </div>
//             )}

//             {/* ── LIST VIEW ── */}
//             {viewMode === 'list' && filteredData.length > 0 && (
//               <>
//                 <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//                   <div style={{ overflowX: 'auto' }}>
//                     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                       <thead>
//                         <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
//                           {['#', 'Vehicle', 'Type', 'In Time', 'Out Time', 'Amount', 'Payment', 'Status'].map((h, i) => (
//                             <th
//                               key={h}
//                               className={i > 1 && i < 7 ? 'hide-on-mobile' : ''}
//                               style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
//                             >
//                               {h}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
//                           <HistoryRow key={booking._id} booking={booking} index={idx} rowNum={startEntry + idx} />
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Pagination inside table card */}
//                   {totalPages > 1 && (
//                     <div style={{ padding: '12px 16px', borderTop: '1px solid #f3f4f6' }}>
//                       <PaginationControls />
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}

//             {/* ── CARD VIEW ── */}
//             {viewMode === 'card' && filteredData.length > 0 && (
//               <>
//                 <div className="history-card-grid">
//                   {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
//                     <HistoryCard key={booking._id} booking={booking} index={idx} />
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}

//           </div>
//         </div>
//       </div>

//       {/* ── Delete Modal ── */}
//       {showDeleteModal && (
//         <div
//           style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '16px', animation: 'fadeIn 0.2s ease' }}
//           onClick={(e) => e.target === e.currentTarget && closeDeleteModal()}
//         >
//           <div style={{ background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
//             <div style={{ padding: '24px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
//                 <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <DeleteIcon sx={{ fontSize: 20, color: '#dc2626' }} />
//                 </div>
//                 <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: 0 }}>Delete History</h2>
//               </div>

//               <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 20px' }}>
//                 Permanently deletes booking records matching the criteria below. This action cannot be undone.
//               </p>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                 <div>
//                   <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Amount *</label>
//                   <input
//                     type="number" value={deleteAmount} onChange={(e) => setDeleteAmount(e.target.value)}
//                     placeholder="Enter exact amount"
//                     style={{ width: '100%', padding: '9px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', boxSizing: 'border-box', color: '#111827' }}
//                     onFocus={(e) => { e.target.style.borderColor = '#dc2626'; e.target.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.1)'; }}
//                     onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                   />
//                 </div>

//                 <div>
//                   <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Date Range (Optional)</label>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <input type="date" value={deleteStartDate} onChange={(e) => setDeleteStartDate(e.target.value)}
//                       style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
//                     <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
//                     <input type="date" value={deleteEndDate} onChange={(e) => setDeleteEndDate(e.target.value)}
//                       style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: '16px', padding: '12px', background: '#fffbeb', borderRadius: '10px', border: '1px solid #fde68a' }}>
//                 <p style={{ fontSize: '12px', color: '#92400e', margin: 0 }}>
//                   ⚠️ All bookings matching the exact amount will be permanently deleted.
//                 </p>
//               </div>

//               <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
//                 <button
//                   onClick={closeDeleteModal}
//                   style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleDeleteHistory}
//                   disabled={deleting || !deleteAmount}
//                   style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: deleting || !deleteAmount ? '#fca5a5' : '#dc2626', color: '#fff', cursor: deleting || !deleteAmount ? 'not-allowed' : 'pointer', transition: 'background 0.15s' }}
//                 >
//                   {deleting ? 'Deleting...' : 'Delete'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }


///////Skeleton Loader
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getVendorHistory, deleteHistoryByAmount, generateVendorHistoryPDF } from '../../../redux/slice/BookingHistory';
import {
  Pagination, PaginationItem, Select, MenuItem, FormControl,
  Tooltip, Alert, Snackbar,
} from '@mui/material';
import {
  DirectionsCar as CarIcon,
  TwoWheeler as BikeIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  ViewList as ListIcon,
  GridView as GridIcon,
  ElectricRickshaw as RickshawIcon,
  LocalShipping as TruckIcon,
  DirectionsBus as DirectionsBusIcon,
  Receipt as ReceiptIcon,
} from '@mui/icons-material';

// ── Vehicle config ─────────────────────────────────────────────────────────────
const VEHICLE_MAP = {
  '2':  { icon: BikeIcon,          bg: '#dbeafe', color: '#1d4ed8', label: '2-Wheeler'  },
  '3':  { icon: RickshawIcon,      bg: '#fce7f3', color: '#be185d', label: '3-Wheeler'  },
  '4':  { icon: CarIcon,           bg: '#d1fae5', color: '#065f46', label: '4-Wheeler'  },
  '17': { icon: TruckIcon,         bg: '#fef3c7', color: '#92400e', label: 'Traveller'  },
  '55': { icon: DirectionsBusIcon, bg: '#ede9fe', color: '#5b21b6', label: 'Bus'        },
};

const getVehicle = (type) => VEHICLE_MAP[String(type)] || VEHICLE_MAP['4'];

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
      <div style={{ maxWidth: 1600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <Sk width={200} height={28} style={{ marginBottom: 8 }} />
            <Sk width={280} height={14} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[1,2,3].map(i => <Sk key={i} width={36} height={36} borderRadius={10} />)}
          </div>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 20 }}>
              <Sk width={100} height={12} style={{ marginBottom: 10 }} />
              <Sk width={140} height={26} style={{ marginBottom: 8 }} />
              <Sk width={80} height={11} />
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '12px 16px' }}>
          <Sk width={320} height={36} borderRadius={10} style={{ marginBottom: 12 }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <Sk width={130} height={36} borderRadius={10} />
            <Sk width={14} height={14} />
            <Sk width={130} height={36} borderRadius={10} />
            <Sk width={70} height={36} borderRadius={10} />
            <Sk width={60} height={36} borderRadius={10} />
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <Sk width={110} height={36} borderRadius={8} />
              <Sk width={36} height={36} borderRadius={8} />
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ background: '#f9fafb', padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center', borderBottom: '1px solid #f3f4f6' }}>
            {[20, 140, 80, 100, 100, 80, 70, 70].map((w, i) => <Sk key={i} width={w} height={12} />)}
          </div>
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
              <Sk width={16} height={12} />
              <Sk width={36} height={36} borderRadius="50%" />
              <div style={{ flex: 1 }}>
                <Sk width={120} height={13} style={{ marginBottom: 6 }} />
                <Sk width={80} height={11} />
              </div>
              <Sk width={70} height={12} />
              <Sk width={95} height={12} />
              <Sk width={95} height={12} />
              <Sk width={60} height={13} />
              <Sk width={55} height={22} borderRadius={999} />
              <Sk width={65} height={22} borderRadius={999} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Vehicle Icon Circle ────────────────────────────────────────────────────────
const VehicleIcon = ({ vehicleType, size = 40 }) => {
  const v = getVehicle(vehicleType);
  const IconComp = v.icon;
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: v.bg, color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <IconComp sx={{ fontSize: size * 0.5 }} />
    </div>
  );
};

// ── Helpers ────────────────────────────────────────────────────────────────────
const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

const formatDateTime = (date) => {
  if (!date) return '—';
  return new Date(date).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);

// ── History Card ───────────────────────────────────────────────────────────────
const HistoryCard = ({ booking, index }) => (
  <div
    style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${index * 40}ms`, minWidth: 0, width: '100%' }}
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <VehicleIcon vehicleType={booking.vehicleType} size={40} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{booking.vehicleNo}</p>
        <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{getVehicle(booking.vehicleType).label}</p>
      </div>
    </div>
    <div style={{ height: '1px', background: '#f3f4f6' }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>Status</span>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed', color: booking.paymentSucsess ? '#15803d' : '#c2410c' }}>
        {booking.paymentSucsess ? 'Completed' : 'Pending'}
      </span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>Amount</span>
      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{formatCurrency(booking.amount)}</span>
    </div>
    {booking.advance > 0 && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>Advance</span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#16a34a' }}>{formatCurrency(booking.advance)}</span>
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>Payment</span>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff', color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3' }}>
        {booking.paymentMethod || '—'}
      </span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
      <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>In Time</span>
      <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{formatDateTime(booking.inTime)}</span>
    </div>
    {booking.outTime && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>Out Time</span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{formatDateTime(booking.outTime)}</span>
      </div>
    )}
    {booking.createdBy?.name && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#6b7280', flexShrink: 0 }}>By</span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: '#374151', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{booking.createdBy.name}</span>
      </div>
    )}
  </div>
);

// ── History List Row ───────────────────────────────────────────────────────────
const HistoryRow = ({ booking, index, rowNum }) => (
  <tr
    style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s', animation: 'fadeSlideUp 0.35s ease both', animationDelay: `${index * 40}ms` }}
    onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
  >
    <td style={{ padding: '12px 16px', fontSize: '12px', color: '#9ca3af' }}>{rowNum}</td>
    <td style={{ padding: '12px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <VehicleIcon vehicleType={booking.vehicleType} size={36} />
        <div>
          <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', margin: 0 }}>{booking.vehicleNo}</p>
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0' }}>{booking.createdBy?.name || '—'}</p>
        </div>
      </div>
    </td>
    <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{getVehicle(booking.vehicleType).label}</td>
    <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{formatDateTime(booking.inTime)}</td>
    <td className="hide-on-mobile" style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>{booking.outTime ? formatDateTime(booking.outTime) : '—'}</td>
    <td style={{ padding: '12px 16px' }}>
      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a3c5e', margin: 0 }}>{formatCurrency(booking.amount)}</p>
      {booking.advance > 0 && <p style={{ fontSize: '11px', color: '#16a34a', margin: '2px 0 0' }}>Adv: {formatCurrency(booking.advance)}</p>}
    </td>
    <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: booking.paymentMethod === 'CASH' ? '#dcfce7' : '#e0e7ff', color: booking.paymentMethod === 'CASH' ? '#15803d' : '#3730a3' }}>
        {booking.paymentMethod || '—'}
      </span>
    </td>
    <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
      <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: booking.paymentSucsess ? '#dcfce7' : '#fff7ed', color: booking.paymentSucsess ? '#15803d' : '#c2410c' }}>
        {booking.paymentSucsess ? 'Completed' : 'Pending'}
      </span>
    </td>
  </tr>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export default function History() {
  const dispatch = useDispatch();
  const [historyData, setHistoryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [viewMode, setViewMode] = useState('list');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteAmount, setDeleteAmount] = useState('');
  const [deleteStartDate, setDeleteStartDate] = useState('');
  const [deleteEndDate, setDeleteEndDate] = useState('');
  const [deleting, setDeleting] = useState(false);

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const vendor_id = user.vendor_id;

  const showNotification = (message, severity = 'success') => setSnackbar({ open: true, message, severity });

  const fetchHistory = useCallback(async (page = 1) => {
    if (!vendor_id) { setError('Vendor ID not found'); return; }
    setLoading(true);
    try {
      const result = await dispatch(getVendorHistory({ vendor_id, startDate: startDate || null, endDate: endDate || null, page, limit: itemsPerPage })).unwrap();
      setHistoryData(result);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message || 'Failed to fetch history');
      showNotification(err.message || 'Failed to fetch history', 'error');
    } finally {
      setLoading(false);
    }
  }, [dispatch, vendor_id, startDate, endDate, itemsPerPage]);

  useEffect(() => { fetchHistory(1); }, [fetchHistory]);

  const handleFilter = () => { setCurrentPage(1); fetchHistory(1); showNotification('Filters applied', 'success'); };
  const handleClear = () => { setStartDate(''); setEndDate(''); setSearch(''); setCurrentPage(1); fetchHistory(1); showNotification('Filters cleared', 'info'); };

  const handlePageChange = (_, newPage) => { fetchHistory(newPage); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleRowsPerPageChange = (e) => { setItemsPerPage(parseInt(e.target.value, 10)); setCurrentPage(1); fetchHistory(1); };

  const handleDownloadPDF = async () => {
    if (!historyData?.data?.length) { showNotification('No data to generate PDF', 'warning'); return; }
    setPdfLoading(true);
    try {
      const result = await dispatch(generateVendorHistoryPDF({ vendor_id, startDate: startDate || null, endDate: endDate || null })).unwrap();
      const url = window.URL.createObjectURL(result);
      const link = document.createElement('a');
      const dateRangeStr = startDate && endDate ? `${startDate}_to_${endDate}` : new Date().toISOString().slice(0, 7);
      link.href = url; link.setAttribute('download', `booking_report_${dateRangeStr}.pdf`);
      document.body.appendChild(link); link.click(); link.remove(); window.URL.revokeObjectURL(url);
      showNotification('PDF downloaded successfully', 'success');
    } catch (err) {
      showNotification(err || 'Failed to download PDF', 'error');
    } finally { setPdfLoading(false); }
  };

  const handleDeleteHistory = async () => {
    if (!deleteAmount || deleteAmount <= 0) { showNotification('Enter a valid amount', 'error'); return; }
    setDeleting(true);
    try {
      const result = await dispatch(deleteHistoryByAmount({ vendor_id, amount: parseFloat(deleteAmount), startDate: deleteStartDate || null, endDate: deleteEndDate || null })).unwrap();
      showNotification(result.message || 'History deleted successfully', 'success');
      setTimeout(() => { fetchHistory(1); closeDeleteModal(); }, 2000);
    } catch (err) {
      showNotification(err.message || 'Failed to delete history', 'error');
    } finally { setDeleting(false); }
  };

  const openDeleteModal = () => { setDeleteAmount(''); setDeleteStartDate(startDate); setDeleteEndDate(endDate); setShowDeleteModal(true); };
  const closeDeleteModal = () => { setShowDeleteModal(false); setDeleteAmount(''); };

  const getFilteredData = () => {
    if (!historyData?.data) return [];
    if (!search) return historyData.data;
    return historyData.data.filter((b) =>
      b.vehicleNo?.toLowerCase().includes(search.toLowerCase()) ||
      b.vehicleType?.toLowerCase().includes(search.toLowerCase()) ||
      b.paymentMethod?.toLowerCase().includes(search.toLowerCase()) ||
      b.createdBy?.name?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = getFilteredData();
  const { summary, dateRange } = historyData || {};
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startEntry = (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, filteredData.length);

  const PaginationControls = () =>
    totalPages > 1 ? (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '16px', padding: '12px 0 4px' }}>
        <div style={{ fontSize: '13px', color: '#6b7280' }}>Showing {startEntry}–{endEntry} of {filteredData.length} entries</div>
        <Pagination
          count={totalPages} page={currentPage} onChange={handlePageChange}
          color="primary" size="medium" siblingCount={1} boundaryCount={1}
          renderItem={(item) => (<PaginationItem slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }} {...item} />)}
          sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px', fontWeight: 500 }, '& .Mui-selected': { backgroundColor: '#1a3c5e !important', color: 'white', '&:hover': { backgroundColor: '#0f2a44 !important' } } }}
        />
      </div>
    ) : null;

  // ── Shimmer Skeleton (initial load) ─────────────────────────────────────────
  if (loading && !historyData) return <SkeletonLoader />;

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
        <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px', border: '1px solid #fee2e2', maxWidth: '360px' }}>
          <p style={{ fontWeight: 600, color: '#1f2937' }}>Error loading history</p>
          <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!historyData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
        <div style={{ textAlign: 'center', padding: '32px', background: '#fff', borderRadius: '16px' }}>
          <p style={{ color: '#6b7280' }}>No data available</p>
        </div>
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
        .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
        .history-card-grid { display: grid; gap: 16px; width: 100%; }
        @media (max-width: 639px) { .history-card-grid { grid-template-columns: repeat(1, 1fr); } }
        @media (min-width: 640px) and (max-width: 1023px) { .history-card-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .history-card-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 640px) { .hide-on-mobile { display: none; } }
        .toolbar-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .search-box { flex: 1; min-width: 180px; max-width: 420px; }
        .toolbar-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-left: auto; }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', animation: 'fadeIn 0.25s ease', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* ── Header ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', animation: 'fadeSlideUp 0.35s ease both' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>Booking History</h1>
              {dateRange?.startDate && dateRange?.endDate && (
                <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0' }}>Showing data from {formatDate(dateRange.startDate)} to {formatDate(dateRange.endDate)}</p>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tooltip title="Delete History" arrow>
                <button onClick={openDeleteModal}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #fecaca', background: '#fff1f2', color: '#dc2626', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#fee2e2')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#fff1f2')}>
                  <DeleteIcon sx={{ fontSize: 18 }} />
                </button>
              </Tooltip>
              <Tooltip title="Download PDF Report" arrow>
                <button onClick={handleDownloadPDF} disabled={pdfLoading}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#16a34a', cursor: pdfLoading ? 'not-allowed' : 'pointer', opacity: pdfLoading ? 0.6 : 1, transition: 'background 0.15s' }}
                  onMouseEnter={(e) => !pdfLoading && (e.currentTarget.style.background = '#dcfce7')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#f0fdf4')}>
                  {pdfLoading
                    ? <div style={{ width: 16, height: 16, border: '2px solid #16a34a', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                    : <DownloadIcon sx={{ fontSize: 18 }} />}
                </button>
              </Tooltip>
              <Tooltip title="Refresh" arrow>
                <button onClick={() => fetchHistory(currentPage)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}>
                  <RefreshIcon sx={{ fontSize: 18 }} />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* ── Summary Cards ── */}
          {summary && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', animation: 'fadeSlideUp 0.4s ease both' }}>
              {[
                { label: 'Total Revenue',   value: formatCurrency(summary.totalAmount),  sub: `${summary.totalBookings} bookings` },
                { label: 'Total Bookings',  value: summary.totalBookings,                sub: 'Completed transactions' },
                { label: 'Average Amount',  value: formatCurrency(summary.averageAmount), sub: 'Per booking' },
              ].map((card) => (
                <div key={card.label} style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 6px', fontWeight: 500 }}>{card.label}</p>
                  <p style={{ fontSize: '22px', fontWeight: 800, color: '#1a3c5e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{card.value}</p>
                  <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>{card.sub}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Toolbar ── */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.45s ease both' }}>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ position: 'relative', maxWidth: '480px' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}><SearchIcon sx={{ fontSize: 18 }} /></span>
                <input type="text" placeholder="Search vehicles, type, payment..." value={search} onChange={(e) => setSearch(e.target.value)}
                  style={{ width: '100%', paddingLeft: '36px', paddingRight: search ? '34px' : '12px', paddingTop: '9px', paddingBottom: '9px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                />
                {search && (
                  <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
                    <ClearIcon sx={{ fontSize: 16 }} />
                  </button>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                  style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }} />
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
                  style={{ padding: '7px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#374151', cursor: 'pointer' }} />
                <button onClick={handleFilter}
                  style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: '#1a3c5e', color: '#fff', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#0f2a44')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3c5e')}>Apply</button>
                <button onClick={handleClear}
                  style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}>Clear</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{filteredData.length} total</span>
                <FormControl size="small" sx={{ minWidth: 110 }}>
                  <Select value={itemsPerPage} onChange={handleRowsPerPageChange} sx={{ fontSize: '0.8rem', '& .MuiSelect-select': { py: 0.75, px: 1.5 } }}>
                    <MenuItem value={15}>15 / page</MenuItem>
                    <MenuItem value={25}>25 / page</MenuItem>
                    <MenuItem value={50}>50 / page</MenuItem>
                    <MenuItem value={100}>100 / page</MenuItem>
                  </Select>
                </FormControl>
                <Tooltip arrow>
                  <button onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
                    style={{ display: 'flex', alignItems: 'center', padding: '7px 10px', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff', cursor: 'pointer', transition: 'background 0.15s', color: '#374151' }}>
                    {viewMode === 'list' ? <GridIcon sx={{ fontSize: 18 }} /> : <ListIcon sx={{ fontSize: 18 }} />}
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div style={{ animation: 'fadeSlideUp 0.5s ease both' }}>
            {filteredData.length === 0 && search && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '16px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><SearchIcon sx={{ fontSize: 28, color: '#d1d5db' }} /></div>
                <p style={{ fontWeight: 600, color: '#374151', margin: 0 }}>No results for "{search}"</p>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>Try a different search term</p>
                <button onClick={() => setSearch('')} style={{ marginTop: '12px', fontSize: '13px', fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear search</button>
              </div>
            )}
            {filteredData.length === 0 && !search && historyData?.data?.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '96px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}><ReceiptIcon sx={{ fontSize: 34, color: '#93c5fd' }} /></div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#374151', margin: 0 }}>No Booking History</p>
                <p style={{ fontSize: '13px', color: '#9ca3af', margin: '4px 0 0' }}>No completed bookings found</p>
              </div>
            )}
            {viewMode === 'list' && filteredData.length > 0 && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                        {['#', 'Vehicle', 'Type', 'In Time', 'Out Time', 'Amount', 'Payment', 'Status'].map((h, i) => (
                          <th key={h} className={i > 1 && i < 7 ? 'hide-on-mobile' : ''}
                            style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
                        <HistoryRow key={booking._id} booking={booking} index={idx} rowNum={startEntry + idx} />
                      ))}
                    </tbody>
                  </table>
                </div>
                {totalPages > 1 && (
                  <div style={{ padding: '12px 16px', borderTop: '1px solid #f3f4f6' }}>
                    <PaginationControls />
                  </div>
                )}
              </div>
            )}
            {viewMode === 'card' && filteredData.length > 0 && (
              <>
                <div className="history-card-grid">
                  {filteredData.slice(startEntry - 1, endEntry).map((booking, idx) => (
                    <HistoryCard key={booking._id} booking={booking} index={idx} />
                  ))}
                </div>
                <PaginationControls />
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Delete Modal ── */}
      {showDeleteModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '16px', animation: 'fadeIn 0.2s ease' }}
          onClick={(e) => e.target === e.currentTarget && closeDeleteModal()}>
          <div style={{ background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <DeleteIcon sx={{ fontSize: 20, color: '#dc2626' }} />
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: 0 }}>Delete History</h2>
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 20px' }}>Permanently deletes booking records matching the criteria below. This action cannot be undone.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Amount *</label>
                  <input type="number" value={deleteAmount} onChange={(e) => setDeleteAmount(e.target.value)} placeholder="Enter exact amount"
                    style={{ width: '100%', padding: '9px 12px', fontSize: '13px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', boxSizing: 'border-box', color: '#111827' }}
                    onFocus={(e) => { e.target.style.borderColor = '#dc2626'; e.target.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Date Range (Optional)</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input type="date" value={deleteStartDate} onChange={(e) => setDeleteStartDate(e.target.value)}
                      style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>to</span>
                    <input type="date" value={deleteEndDate} onChange={(e) => setDeleteEndDate(e.target.value)}
                      style={{ flex: 1, padding: '9px 10px', fontSize: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', color: '#374151' }} />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '16px', padding: '12px', background: '#fffbeb', borderRadius: '10px', border: '1px solid #fde68a' }}>
                <p style={{ fontSize: '12px', color: '#92400e', margin: 0 }}>⚠️ All bookings matching the exact amount will be permanently deleted.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button onClick={closeDeleteModal}
                  style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>Cancel</button>
                <button onClick={handleDeleteHistory} disabled={deleting || !deleteAmount}
                  style={{ flex: 1, padding: '10px', fontSize: '13px', fontWeight: 600, borderRadius: '10px', border: 'none', background: deleting || !deleteAmount ? '#fca5a5' : '#dc2626', color: '#fff', cursor: deleting || !deleteAmount ? 'not-allowed' : 'pointer', transition: 'background 0.15s' }}>
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}