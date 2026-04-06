// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   IconButton, Dialog, DialogContent,
//   TextField, InputAdornment, Alert, Snackbar,
// } from '@mui/material';
// import {
//   Person as PersonIcon, Phone as PhoneIcon, Email as EmailIcon,
//   Lock as LockIcon, LockOpen as LockOpenIcon,
//   Edit as EditIcon, Save as SaveIcon,
//   CameraAlt as CameraIcon, PhotoLibrary as PhotoLibraryIcon,
//   QrCode as QrCodeIcon, Delete as DeleteIcon, Close as CloseIcon,
//   LocationOn as LocationIcon, CalendarToday as CalendarIcon,
//   LocalParking as ParkingIcon,
//   TwoWheeler as TwoWheelerIcon, DirectionsCar as FourWheelerIcon,
//   LocalShipping as HeavyVehicleIcon, DirectionsBus as BusIcon,
//   ElectricRickshaw as ThreeWheelerIcon,
//   TrendingUp as TrendingUpIcon, Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon, WarningAmberRounded,
//   Storefront as StorefrontIcon, CheckCircle as CheckCircleIcon,
// } from '@mui/icons-material';
// import {
//   getProfile, updateAdminProfile, uploadQRPhoto, deleteQRPhoto, resetPassword,
//   selectProfile, selectProfileLoading, selectProfileError, selectUploadQRLoading,
//   selectDeleteQRLoading, selectPasswordResetLoading, selectSuccessMessage,
//   clearProfileError, clearSuccessMessage,
// } from '../../../redux/slice/Vendor';

// const VEHICLE_TYPES = {
//   '2':  { key: 'twoWheeler',   label: 'Two Wheeler',   icon: TwoWheelerIcon,     description: 'Motorcycles, Scooters' },
//   '3':  { key: 'threeWheeler', label: 'Three Wheeler', icon: ThreeWheelerIcon,   description: 'Auto rickshaws, Tuk-tuks' },
//   '4':  { key: 'fourWheeler',  label: 'Four Wheeler',  icon: FourWheelerIcon,    description: 'Cars, SUVs, Sedans' },
//   '17': { key: 'heavyVehicle', label: 'Heavy Vehicle', icon: HeavyVehicleIcon,   description: 'Trucks, Lorries' },
//   '55': { key: 'bus',          label: 'Bus',           icon: BusIcon,            description: 'Buses, Coaches' },
// };
// const VEHICLES = Object.entries(VEHICLE_TYPES).map(([type, config]) => ({ vehicleType: type, ...config }));

// const getInitials = (name) => name?.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';

// // ── Section Card ───────────────────────────────────────────────────────────────
// const SectionCard = ({ title, action, children, delay = '0s' }) => (
//   <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', padding: '20px', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}>
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
//       <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1a3c5e', margin: 0 }}>{title}</h3>
//       {action}
//     </div>
//     {children}
//   </div>
// );

// // ── Info Row ───────────────────────────────────────────────────────────────────
// const InfoRow = ({ icon: Icon, label, value, border = true }) => (
//   <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: border ? '1px solid #f3f4f6' : 'none' }}>
//     <div style={{ width: 36, height: 36, borderRadius: 10, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//       <Icon sx={{ fontSize: 16, color: '#1a3c5e' }} />
//     </div>
//     <div>
//       <p style={{ margin: 0, fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{label}</p>
//       <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#1f2937' }}>{value || 'Not set'}</p>
//     </div>
//   </div>
// );

// // ── Edit/Save actions ──────────────────────────────────────────────────────────
// const EditActions = ({ editing, onEdit, onCancel, onSave, loading }) => (
//   editing ? (
//     <div style={{ display: 'flex', gap: 8 }}>
//       <button onClick={onCancel} disabled={loading}
//         style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
//         Cancel
//       </button>
//       <button onClick={onSave} disabled={loading}
//         style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, opacity: loading ? 0.7 : 1 }}>
//         {loading
//           ? <div style={{ width: 12, height: 12, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//           : <SaveIcon sx={{ fontSize: 14 }} />}
//         {loading ? 'Saving…' : 'Save'}
//       </button>
//     </div>
//   ) : (
//     <button onClick={onEdit}
//       style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
//       <EditIcon sx={{ fontSize: 14 }} /> Edit
//     </button>
//   )
// );

// // ── Image Picker Modal ─────────────────────────────────────────────────────────
// const ImagePickerModal = ({ open, onClose, onCamera, onGallery }) => (
//   <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
//     PaperProps={{ style: { borderRadius: 20, maxWidth: 380, padding: 4 } }}>
//     <div style={{ padding: '20px 20px 4px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//           <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <CameraIcon sx={{ color: '#1a3c5e', fontSize: 20 }} />
//           </div>
//           <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>QR Code Image</span>
//         </div>
//         <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
//       </div>
//     </div>
//     <DialogContent style={{ paddingTop: 0, paddingBottom: 24 }}>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//         {[
//           { Icon: CameraIcon, label: 'Take Photo', onClick: onCamera },
//           { Icon: PhotoLibraryIcon, label: 'Choose from Gallery', onClick: onGallery },
//         ].map(({ Icon, label, onClick }) => (
//           <button key={label} onClick={onClick}
//             style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', fontSize: 14, fontWeight: 500, color: '#374151', border: '1px solid #e5e7eb', borderRadius: 12, background: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s' }}
//             onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
//             onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>
//             <Icon sx={{ fontSize: 18, color: '#9ca3af' }} />
//             {label}
//           </button>
//         ))}
//       </div>
//     </DialogContent>
//   </Dialog>
// );

// // ── QR Full View Modal ─────────────────────────────────────────────────────────
// const QRFullViewModal = ({ open, onClose, qrCode }) => (
//   <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth
//     PaperProps={{ style: { borderRadius: 20, maxWidth: 420, width: '100%' } }}>
//     <DialogContent style={{ padding: 24, textAlign: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
//         <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 16, color: '#6b7280' }} /></IconButton>
//       </div>
//       <h3 style={{ fontWeight: 700, fontSize: 20, color: '#1f2937', marginBottom: 16 }}>QR Code</h3>
//       <div style={{ width: 192, height: 192, margin: '0 auto 16px', background: '#f9fafb', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e5e7eb', padding: 16, boxSizing: 'border-box' }}>
//         {qrCode
//           ? <img src={qrCode} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//           : <QrCodeIcon sx={{ fontSize: 80, color: '#d1d5db' }} />}
//       </div>
//       <p style={{ fontSize: 13, color: '#9ca3af' }}>Scan this QR code to access parking details</p>
//     </DialogContent>
//   </Dialog>
// );

// // ── Main Profile Component ─────────────────────────────────────────────────────
// export default function Profile() {
//   const dispatch = useDispatch();
//   const qrFileInput = useRef(null);

//   const profileData     = useSelector(selectProfile);
//   const loading         = useSelector(selectProfileLoading);
//   const uploadLoading   = useSelector(selectUploadQRLoading);
//   const deleteLoading   = useSelector(selectDeleteQRLoading);
//   const passwordLoading = useSelector(selectPasswordResetLoading);
//   const error           = useSelector(selectProfileError);
//   const successMessage  = useSelector(selectSuccessMessage);

//   const [user, setUser]                   = useState(null);
//   const [vendorData, setVendorData]       = useState(null);
//   const [editing, setEditing]             = useState(false);
//   const [editingVehicles, setEditingVehicles] = useState(false);
//   const [editingParkingSpot, setEditingParkingSpot] = useState(false);
//   const [changingPassword, setChangingPassword] = useState(false);
//   const [showQRPicker, setShowQRPicker]   = useState(false);
//   const [showQRFull, setShowQRFull]       = useState(false);
//   const [showDeleteQR, setShowDeleteQR]   = useState(false);
//   const [selectedQR, setSelectedQR]       = useState(null);
//   const [qrCodeImages, setQrCodeImages]   = useState([]);
//   const [vehicleRates, setVehicleRates]   = useState({});
//   const [parkingSpotName, setParkingSpotName] = useState('');
//   const [form, setForm]                   = useState({ name: '', email: '' });
//   const [passwordForm, setPasswordForm]   = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
//   const [showPass, setShowPass]           = useState({ current: false, new: false, confirm: false });
//   const [errors, setErrors]               = useState({});
//   const [snackbar, setSnackbar]           = useState({ open: false, message: '', severity: 'success' });
//   const [actionLoading, setActionLoading] = useState(false);

//   useEffect(() => { dispatch(getProfile()); }, [dispatch]);

//   useEffect(() => {
//     if (profileData) {
//       const admin = profileData.profile || profileData.admin || profileData;
//       if (admin) {
//         setUser({ id: admin._id, name: admin.name, mobile: admin.mobile, role: admin.role, email: admin.email || '' });
//         setVendorData({ name: admin.name, isOneTimeEntry: admin.isOneTimeEntry || false, createdAt: admin.createdAt, location: admin.location || null });
//         setParkingSpotName(admin.parkingSpotName || '');
//         setQrCodeImages(admin.qrPhotos || []);
//         const rates = {};
//         (admin.vehicles || []).forEach(v => { const info = VEHICLE_TYPES[v.vehicleType]; if (info) rates[info.key] = v.charges; });
//         setVehicleRates(rates);
//         setForm({ name: admin.name, email: admin.email || '' });
//       }
//     }
//   }, [profileData]);

//   useEffect(() => {
//     if (successMessage) { setSnackbar({ open: true, message: successMessage, severity: 'success' }); dispatch(clearSuccessMessage()); }
//   }, [successMessage, dispatch]);

//   useEffect(() => {
//     if (error) { setSnackbar({ open: true, message: error, severity: 'error' }); dispatch(clearProfileError()); }
//   }, [error, dispatch]);

//   const fieldChange = field => e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
//   const rateChange  = key   => e => setVehicleRates(p => ({ ...p, [key]: e.target.value === '' ? 0 : Number(e.target.value) }));
//   const passChange  = field => e => { setPasswordForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
//   const togglePass  = field => setShowPass(p => ({ ...p, [field]: !p[field] }));

//   const handleQRFileChange = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (!file.type.startsWith('image/')) { setSnackbar({ open: true, message: 'Please select an image file', severity: 'error' }); return; }
//     if (file.size > 5 * 1024 * 1024) { setSnackbar({ open: true, message: 'File size should be less than 5MB', severity: 'error' }); return; }
//     const formData = new FormData();
//     formData.append('qrPhoto', file);
//     setActionLoading(true);
//     const result = await dispatch(uploadQRPhoto(formData));
//     setActionLoading(false);
//     if (!result.error) { dispatch(getProfile()); setShowQRPicker(false); setSnackbar({ open: true, message: 'QR code uploaded!', severity: 'success' }); }
//     e.target.value = '';
//   };

//   const handleQRRemove = async () => {
//     if (!selectedQR) return;
//     const result = await dispatch(deleteQRPhoto(selectedQR));
//     if (!result.error) { setShowDeleteQR(false); setSelectedQR(null); dispatch(getProfile()); }
//   };

//   const handleSaveProfile = async () => {
//     const e = {};
//     if (!form.name?.trim()) e.name = 'Name is required';
//     setErrors(e);
//     if (Object.keys(e).length) return;
//     const update = { name: form.name.trim() };
//     if (form.email?.trim()) update.email = form.email.trim();
//     const result = await dispatch(updateAdminProfile(update));
//     if (!result.error) { setEditing(false); dispatch(getProfile()); }
//   };

//   const handleSaveParkingSpot = async () => {
//     if (!parkingSpotName.trim()) { setErrors(p => ({ ...p, parkingSpotName: 'Required' })); return; }
//     const result = await dispatch(updateAdminProfile({ parkingSpotName: parkingSpotName.trim() }));
//     if (!result.error) { setEditingParkingSpot(false); dispatch(getProfile()); }
//   };

//   const handleSaveVehicleRates = async () => {
//     const vehicles = Object.entries(vehicleRates)
//       .filter(([_, c]) => c > 0)
//       .map(([key, charges]) => ({ vehicleType: Object.keys(VEHICLE_TYPES).find(t => VEHICLE_TYPES[t].key === key), charges }));
//     const result = await dispatch(updateAdminProfile({ vehicles }));
//     if (!result.error) { setEditingVehicles(false); dispatch(getProfile()); }
//   };

//   const handleSavePassword = async () => {
//     const e = {};
//     if (!passwordForm.currentPassword) e.currentPassword = 'Required';
//     if (!passwordForm.newPassword) e.newPassword = 'Required';
//     else if (passwordForm.newPassword.length < 6) e.newPassword = 'Min 6 characters';
//     if (!passwordForm.confirmPassword) e.confirmPassword = 'Required';
//     else if (passwordForm.newPassword !== passwordForm.confirmPassword) e.confirmPassword = 'Passwords do not match';
//     setErrors(e);
//     if (Object.keys(e).length) return;
//     const result = await dispatch(resetPassword({ oldPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword }));
//     if (!result.error) { setChangingPassword(false); setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' }); }
//   };

//   const inputSx = { '& .MuiOutlinedInput-root': { borderRadius: '12px', fontSize: '0.875rem' } };

//   if (loading && !profileData) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f4f8' }}>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
//           <div style={{ width: 48, height: 48, borderRadius: 12, background: '#1a3c5e', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'bounce 1s infinite' }}>
//             <PersonIcon sx={{ fontSize: 26, color: '#fff' }} />
//           </div>
//           <p style={{ fontSize: 13, color: '#9ca3af', fontWeight: 500 }}>Loading profile…</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         .profile-stats { display: grid; gap: 12px; grid-template-columns: repeat(3, 1fr); }
//         @media (max-width: 480px) { .profile-stats { grid-template-columns: repeat(1, 1fr); } }
//         .profile-vehicles-grid { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
//         @media (min-width: 768px) { .profile-vehicles-grid { grid-template-columns: repeat(3, 1fr); } }
//         .qr-grid { display: grid; gap: 12px; grid-template-columns: repeat(3, 1fr); }
//         @media (min-width: 480px) { .qr-grid { grid-template-columns: repeat(4, 1fr); } }
//         @media (min-width: 768px) { .qr-grid { grid-template-columns: repeat(5, 1fr); } }
//       `}</style>

//       <input type="file" ref={qrFileInput} onChange={handleQRFileChange} accept="image/*" style={{ display: 'none' }} />

//       <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
//         <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//           {/* ── Header ── */}
//           <div style={{ animation: 'fadeSlideUp 0.35s ease both' }}>
//             <h1 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
//               My Profile
//             </h1>
//             <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>Manage your personal information</p>
//           </div>

//           {/* ── Profile Banner ── */}
//           <div style={{ background: '#1a3c5e', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(26,60,94,0.2)', animation: 'fadeSlideUp 0.4s ease both' }}>
//             <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 60%)' }} />
//             <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
//               <div style={{ width: 72, height: 72, borderRadius: 16, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 24, flexShrink: 0, backdropFilter: 'blur(8px)' }}>
//                 {getInitials(vendorData?.name || user?.name)}
//               </div>
//               <div style={{ minWidth: 0 }}>
//                 <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 800, color: '#fff', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                   {vendorData?.name || user?.name}
//                 </h2>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
//                   <PhoneIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }} />
//                   <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{user?.mobile}</span>
//                 </div>
//                 {user?.email && (
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
//                     <EmailIcon sx={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }} />
//                     <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{user.email}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ── Stats Row ── */}
//           <div className="profile-stats" style={{ animation: 'fadeSlideUp 0.45s ease both' }}>
//             {[
//               { icon: ParkingIcon,      bg: '#e8eef4', color: '#1a3c5e', value: Object.keys(vehicleRates).length, label: 'Vehicle Rates' },
//               { icon: TrendingUpIcon,   bg: '#fef3c7', color: '#d97706', value: vendorData?.isOneTimeEntry ? 'One-Time' : 'Regular', label: 'Booking Type' },
//               { icon: CheckCircleIcon,  bg: '#d1fae5', color: '#059669', value: 'Active', label: 'Status' },
//             ].map(({ icon: Icon, bg, color, value, label }) => (
//               <div key={label} style={{ background: '#fff', borderRadius: 14, border: '1px solid #e5e7eb', padding: '14px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                   <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     <Icon sx={{ color, fontSize: 20 }} />
//                   </div>
//                   <div style={{ minWidth: 0 }}>
//                     <p style={{ fontSize: 16, fontWeight: 800, color: '#1a3c5e', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
//                     <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{label}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ── Parking Spot ── */}
//           <SectionCard title="Parking Spot" delay="0.5s"
//             action={<EditActions editing={editingParkingSpot}
//               onEdit={() => setEditingParkingSpot(true)}
//               onCancel={() => { setEditingParkingSpot(false); setErrors(p => ({ ...p, parkingSpotName: '' })); }}
//               onSave={handleSaveParkingSpot} loading={loading} />}>
//             {editingParkingSpot ? (
//               <TextField fullWidth size="small" label="Parking Spot Name" value={parkingSpotName}
//                 onChange={e => { setParkingSpotName(e.target.value); setErrors(p => ({ ...p, parkingSpotName: '' })); }}
//                 error={!!errors.parkingSpotName} helperText={errors.parkingSpotName} disabled={loading} sx={inputSx}
//                 InputProps={{ startAdornment: <InputAdornment position="start"><StorefrontIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
//             ) : (
//               <InfoRow icon={StorefrontIcon} label="Parking Spot Name" value={parkingSpotName || 'Not set'} border={false} />
//             )}
//           </SectionCard>

//           {/* ── QR Codes ── */}
//           <SectionCard title={`QR Codes (${qrCodeImages.length}/5)`} delay="0.55s"
//             action={qrCodeImages.length < 5 && (
//               <button onClick={() => setShowQRPicker(true)} disabled={uploadLoading || actionLoading}
//                 style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #1a3c5e', color: '#1a3c5e', background: '#fff', cursor: 'pointer', opacity: uploadLoading || actionLoading ? 0.6 : 1 }}>
//                 {uploadLoading || actionLoading
//                   ? <div style={{ width: 12, height: 12, border: '2px solid #1a3c5e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//                   : <CameraIcon sx={{ fontSize: 14 }} />}
//                 Add QR
//               </button>
//             )}>
//             {qrCodeImages.length > 0 ? (
//               <div className="qr-grid">
//                 {qrCodeImages.map((qr, i) => (
//                   <div key={i} style={{ position: 'relative' }}>
//                     <div onClick={() => { setSelectedQR(qr); setShowQRFull(true); }}
//                       style={{ aspectRatio: '1/1', border: '2px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
//                       onMouseEnter={e => (e.currentTarget.style.borderColor = '#1a3c5e')}
//                       onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}>
//                       <img src={qr} alt={`QR ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     </div>
//                     <button onClick={() => { setSelectedQR(qr); setShowDeleteQR(true); }} disabled={deleteLoading}
//                       style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', background: '#fee2e2', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>
//                       <DeleteIcon sx={{ fontSize: 12, color: '#dc2626' }} />
//                     </button>
//                   </div>
//                 ))}
//                 {qrCodeImages.length < 5 && (
//                   <button onClick={() => setShowQRPicker(true)}
//                     style={{ aspectRatio: '1/1', border: '2px dashed #e5e7eb', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
//                     onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a3c5e'; e.currentTarget.style.background = '#f8fafc'; }}
//                     onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = 'none'; }}>
//                     <CameraIcon sx={{ fontSize: 24, color: '#d1d5db' }} />
//                     <span style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>Add</span>
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <button onClick={() => setShowQRPicker(true)}
//                 style={{ width: '100%', border: '2px dashed #e5e7eb', borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a3c5e'; e.currentTarget.style.background = '#f8fafc'; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = 'none'; }}>
//                 <QrCodeIcon sx={{ fontSize: 40, color: '#d1d5db', marginBottom: 8 }} />
//                 <p style={{ fontSize: 14, fontWeight: 600, color: '#374151', margin: 0 }}>Add QR Code</p>
//                 <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>Upload QR codes for your parking location</p>
//               </button>
//             )}
//           </SectionCard>

//           {/* ── Profile Information ── */}
//           <SectionCard title="Profile Information" delay="0.6s"
//             action={<EditActions editing={editing}
//               onEdit={() => setEditing(true)}
//               onCancel={() => { setEditing(false); setForm({ name: vendorData?.name || user?.name || '', email: user?.email || '' }); }}
//               onSave={handleSaveProfile} loading={loading} />}>
//             {editing ? (
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//                 <TextField fullWidth size="small" label="Full Name" value={form.name} onChange={fieldChange('name')}
//                   error={!!errors.name} helperText={errors.name} disabled={loading} sx={inputSx}
//                   InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
//                 <TextField fullWidth size="small" label="Email" value={form.email} onChange={fieldChange('email')}
//                   disabled={loading} sx={inputSx}
//                   InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
//               </div>
//             ) : (
//               <div>
//                 <InfoRow icon={PersonIcon} label="Full Name" value={vendorData?.name || user?.name} />
//                 <InfoRow icon={PhoneIcon}  label="Mobile Number" value={user?.mobile} />
//                 {user?.email && <InfoRow icon={EmailIcon} label="Email" value={user.email} border={false} />}
//               </div>
//             )}
//           </SectionCard>

//           {/* ── Vehicle Rates ── */}
//           {user?.role !== 'WORKER' && (
//             <SectionCard title="Vehicle Parking Charges" delay="0.65s"
//               action={<EditActions editing={editingVehicles}
//                 onEdit={() => setEditingVehicles(true)}
//                 onCancel={() => setEditingVehicles(false)}
//                 onSave={handleSaveVehicleRates} loading={loading} />}>
//               {VEHICLES.map((vehicle, i) => (
//                 <div key={vehicle.vehicleType} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < VEHICLES.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
//                   <div style={{ width: 36, height: 36, borderRadius: 10, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     <vehicle.icon sx={{ fontSize: 18, color: '#1a3c5e' }} />
//                   </div>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p style={{ fontSize: 13, fontWeight: 600, color: '#1f2937', margin: 0 }}>{vehicle.label}</p>
//                     <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{vehicle.description}</p>
//                   </div>
//                   {editingVehicles ? (
//                     <TextField size="small" value={vehicleRates[vehicle.key] || ''} onChange={rateChange(vehicle.key)}
//                       disabled={loading} style={{ width: 90 }}
//                       sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', fontSize: '0.875rem' } }}
//                       InputProps={{ startAdornment: <InputAdornment position="start"><span style={{ fontSize: 14 }}>₹</span></InputAdornment> }} />
//                   ) : (
//                     <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999, background: '#e8eef4', color: '#1a3c5e', whiteSpace: 'nowrap' }}>
//                       ₹{vehicleRates[vehicle.key] || 0}
//                     </span>
//                   )}
//                 </div>
//               ))}
//               <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, marginTop: 4, borderTop: '1px solid #f3f4f6' }}>
//                 <span style={{ fontSize: 12, color: '#9ca3af' }}>Rates Configured</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: '#1a3c5e' }}>
//                   {Object.values(vehicleRates).filter(r => r && r > 0).length}/{VEHICLES.length}
//                 </span>
//               </div>
//             </SectionCard>
//           )}

//           {/* ── Location ── */}
//           {vendorData?.location && (
//             <SectionCard title="Location" delay="0.7s">
//               <InfoRow icon={LocationIcon} label="Registered Location"
//                 value={`Lat: ${vendorData.location.latitude}, Lng: ${vendorData.location.longitude}`} border={false} />
//             </SectionCard>
//           )}

//           {/* ── Account Info ── */}
//           <SectionCard title="Account Information" delay="0.75s">
//             <InfoRow icon={CalendarIcon} label="Member Since"
//               value={vendorData?.createdAt ? new Date(vendorData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'} />
//             <InfoRow icon={ParkingIcon} label="Account Type"
//               value={vendorData?.isOneTimeEntry ? 'One-Time Entry' : 'Regular Parking'} border={false} />
//           </SectionCard>

//           {/* ── Security ── */}
//           <SectionCard title="Security" delay="0.8s"
//             action={!changingPassword ? (
//               <button onClick={() => setChangingPassword(true)}
//                 style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
//                 <LockIcon sx={{ fontSize: 14 }} /> Change Password
//               </button>
//             ) : (
//               <div style={{ display: 'flex', gap: 8 }}>
//                 <button
//                   onClick={() => { setChangingPassword(false); setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' }); setErrors({}); }}
//                   disabled={passwordLoading}
//                   style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
//                   Cancel
//                 </button>
//                 <button onClick={handleSavePassword} disabled={passwordLoading}
//                   style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, opacity: passwordLoading ? 0.7 : 1 }}>
//                   {passwordLoading && <div style={{ width: 12, height: 12, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
//                   {passwordLoading ? 'Updating…' : 'Update'}
//                 </button>
//               </div>
//             )}>
//             {changingPassword ? (
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//                 {[
//                   { field: 'currentPassword', label: 'Current Password', icon: LockOpenIcon, show: 'current' },
//                   { field: 'newPassword',      label: 'New Password',     icon: LockIcon,     show: 'new'     },
//                   { field: 'confirmPassword',  label: 'Confirm Password', icon: LockIcon,     show: 'confirm' },
//                 ].map(({ field, label, icon: Icon, show }) => (
//                   <TextField key={field} fullWidth size="small" label={label}
//                     type={showPass[show] ? 'text' : 'password'}
//                     value={passwordForm[field]} onChange={passChange(field)}
//                     error={!!errors[field]} helperText={errors[field]}
//                     disabled={passwordLoading} sx={inputSx}
//                     InputProps={{
//                       startAdornment: <InputAdornment position="start"><Icon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment>,
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton size="small" onClick={() => togglePass(show)} edge="end" disabled={passwordLoading}>
//                             {showPass[show] ? <VisibilityOffIcon sx={{ fontSize: 18 }} /> : <VisibilityIcon sx={{ fontSize: 18 }} />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }} />
//                 ))}
//               </div>
//             ) : (
//               <div>
//                 <InfoRow icon={LockIcon} label="Password" value="••••••••" border={false} />
//                 <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 4, marginLeft: 48 }}>
//                   Change your password regularly to keep your account secure
//                 </p>
//               </div>
//             )}
//           </SectionCard>

//         </div>
//       </div>

//       {/* ── Modals ── */}
//       <ImagePickerModal open={showQRPicker} onClose={() => setShowQRPicker(false)}
//         onCamera={() => { setSnackbar({ open: true, message: 'Camera feature coming soon!', severity: 'info' }); setShowQRPicker(false); }}
//         onGallery={() => { qrFileInput.current?.click(); setShowQRPicker(false); }} />

//       <QRFullViewModal open={showQRFull} onClose={() => setShowQRFull(false)} qrCode={selectedQR} />

//       {/* Delete QR Dialog */}
//       <Dialog open={showDeleteQR} onClose={() => setShowDeleteQR(false)}
//         PaperProps={{ style: { borderRadius: 20, maxWidth: 380, width: '100%' } }}>
//         <DialogContent style={{ padding: 24 }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
//             <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <DeleteIcon sx={{ fontSize: 20, color: '#dc2626' }} />
//             </div>
//             <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1f2937', margin: 0 }}>Remove QR Code</h3>
//           </div>
//           <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 20px' }}>
//             Are you sure you want to remove this QR code? This action cannot be undone.
//           </p>
//           <div style={{ display: 'flex', gap: 12 }}>
//             <button onClick={() => setShowDeleteQR(false)} disabled={deleteLoading}
//               style={{ flex: 1, padding: '10px 0', border: '1px solid #e5e7eb', color: '#374151', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer', background: '#fff' }}>
//               Cancel
//             </button>
//             <button onClick={handleQRRemove} disabled={deleteLoading}
//               style={{ flex: 1, padding: '10px 0', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: deleteLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: deleteLoading ? 0.7 : 1 }}>
//               {deleteLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
//               {deleteLoading ? 'Removing…' : 'Yes, Remove'}
//             </button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       <Snackbar open={snackbar.open} autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }







////////////Skeleton Loader
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconButton, Dialog, DialogContent,
  TextField, InputAdornment, Alert, Snackbar,
} from '@mui/material';
import {
  Person as PersonIcon, Phone as PhoneIcon, Email as EmailIcon,
  Lock as LockIcon, LockOpen as LockOpenIcon,
  Edit as EditIcon, Save as SaveIcon,
  CameraAlt as CameraIcon, PhotoLibrary as PhotoLibraryIcon,
  QrCode as QrCodeIcon, Delete as DeleteIcon, Close as CloseIcon,
  LocationOn as LocationIcon, CalendarToday as CalendarIcon,
  LocalParking as ParkingIcon,
  TwoWheeler as TwoWheelerIcon, DirectionsCar as FourWheelerIcon,
  LocalShipping as HeavyVehicleIcon, DirectionsBus as BusIcon,
  ElectricRickshaw as ThreeWheelerIcon,
  TrendingUp as TrendingUpIcon, Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Storefront as StorefrontIcon, CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import {
  getProfile, updateAdminProfile, uploadQRPhoto, deleteQRPhoto, resetPassword,
  selectProfile, selectProfileLoading, selectProfileError, selectUploadQRLoading,
  selectDeleteQRLoading, selectPasswordResetLoading, selectSuccessMessage,
  clearProfileError, clearSuccessMessage,
} from '../../../redux/slice/Vendor';

const VEHICLE_TYPES = {
  '2':  { key: 'twoWheeler',   label: 'Two Wheeler',   icon: TwoWheelerIcon,   description: 'Motorcycles, Scooters' },
  '3':  { key: 'threeWheeler', label: 'Three Wheeler', icon: ThreeWheelerIcon, description: 'Auto rickshaws, Tuk-tuks' },
  '4':  { key: 'fourWheeler',  label: 'Four Wheeler',  icon: FourWheelerIcon,  description: 'Cars, SUVs, Sedans' },
  '17': { key: 'heavyVehicle', label: 'Heavy Vehicle', icon: HeavyVehicleIcon, description: 'Trucks, Lorries' },
  '55': { key: 'bus',          label: 'Bus',           icon: BusIcon,          description: 'Buses, Coaches' },
};
const VEHICLES = Object.entries(VEHICLE_TYPES).map(([type, config]) => ({ vehicleType: type, ...config }));

const getInitials = (name) => name?.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';

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
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Header */}
        <div>
          <Sk width={140} height={28} style={{ marginBottom: 8 }} />
          <Sk width={220} height={14} />
        </div>

        {/* Profile Banner */}
        <div style={{ background: '#d1dce8', borderRadius: 16, padding: '24px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <Sk width={72} height={72} borderRadius={16} />
          <div>
            <Sk width={180} height={22} style={{ marginBottom: 10 }} />
            <Sk width={120} height={14} style={{ marginBottom: 6 }} />
            <Sk width={150} height={12} />
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #e5e7eb', padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Sk width={36} height={36} borderRadius={10} />
                <div>
                  <Sk width={60} height={16} style={{ marginBottom: 4 }} />
                  <Sk width={80} height={11} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Cards */}
        {[
          { rows: 1, label: 'Parking Spot' },
          { rows: 3, label: 'QR Codes' },
          { rows: 3, label: 'Profile Information' },
          { rows: 5, label: 'Vehicle Parking Charges' },
          { rows: 2, label: 'Account Information' },
          { rows: 1, label: 'Security' },
        ].map(({ rows, label }) => (
          <div key={label} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Sk width={160} height={16} />
              <Sk width={70} height={32} borderRadius={10} />
            </div>
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < rows - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <Sk width={36} height={36} borderRadius={10} />
                <div>
                  <Sk width={60} height={11} style={{ marginBottom: 6 }} />
                  <Sk width={140} height={14} />
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
}

// ── Section Card ───────────────────────────────────────────────────────────────
const SectionCard = ({ title, action, children, delay = '0s' }) => (
  <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', padding: '20px', animation: 'fadeSlideUp 0.4s ease both', animationDelay: delay }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1a3c5e', margin: 0 }}>{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

// ── Info Row ───────────────────────────────────────────────────────────────────
const InfoRow = ({ icon: Icon, label, value, border = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: border ? '1px solid #f3f4f6' : 'none' }}>
    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon sx={{ fontSize: 16, color: '#1a3c5e' }} />
    </div>
    <div>
      <p style={{ margin: 0, fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{label}</p>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#1f2937' }}>{value || 'Not set'}</p>
    </div>
  </div>
);

// ── Edit/Save actions ──────────────────────────────────────────────────────────
const EditActions = ({ editing, onEdit, onCancel, onSave, loading }) => (
  editing ? (
    <div style={{ display: 'flex', gap: 8 }}>
      <button onClick={onCancel} disabled={loading}
        style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
        Cancel
      </button>
      <button onClick={onSave} disabled={loading}
        style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, opacity: loading ? 0.7 : 1 }}>
        {loading
          ? <div style={{ width: 12, height: 12, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
          : <SaveIcon sx={{ fontSize: 14 }} />}
        {loading ? 'Saving…' : 'Save'}
      </button>
    </div>
  ) : (
    <button onClick={onEdit}
      style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
      <EditIcon sx={{ fontSize: 14 }} /> Edit
    </button>
  )
);

// ── Image Picker Modal ─────────────────────────────────────────────────────────
const ImagePickerModal = ({ open, onClose, onCamera, onGallery }) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth
    PaperProps={{ style: { borderRadius: 20, maxWidth: 380, padding: 4 } }}>
    <div style={{ padding: '20px 20px 4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CameraIcon sx={{ color: '#1a3c5e', fontSize: 20 }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>QR Code Image</span>
        </div>
        <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></IconButton>
      </div>
    </div>
    <DialogContent style={{ paddingTop: 0, paddingBottom: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { Icon: CameraIcon, label: 'Take Photo', onClick: onCamera },
          { Icon: PhotoLibraryIcon, label: 'Choose from Gallery', onClick: onGallery },
        ].map(({ Icon, label, onClick }) => (
          <button key={label} onClick={onClick}
            style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', fontSize: 14, fontWeight: 500, color: '#374151', border: '1px solid #e5e7eb', borderRadius: 12, background: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>
            <Icon sx={{ fontSize: 18, color: '#9ca3af' }} />
            {label}
          </button>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

// ── QR Full View Modal ─────────────────────────────────────────────────────────
const QRFullViewModal = ({ open, onClose, qrCode }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth
    PaperProps={{ style: { borderRadius: 20, maxWidth: 420, width: '100%' } }}>
    <DialogContent style={{ padding: 24, textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <IconButton size="small" onClick={onClose}><CloseIcon sx={{ fontSize: 16, color: '#6b7280' }} /></IconButton>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 20, color: '#1f2937', marginBottom: 16 }}>QR Code</h3>
      <div style={{ width: 192, height: 192, margin: '0 auto 16px', background: '#f9fafb', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e5e7eb', padding: 16, boxSizing: 'border-box' }}>
        {qrCode
          ? <img src={qrCode} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          : <QrCodeIcon sx={{ fontSize: 80, color: '#d1d5db' }} />}
      </div>
      <p style={{ fontSize: 13, color: '#9ca3af' }}>Scan this QR code to access parking details</p>
    </DialogContent>
  </Dialog>
);

// ── Main Profile Component ─────────────────────────────────────────────────────
export default function Profile() {
  const dispatch = useDispatch();
  const qrFileInput = useRef(null);

  const profileData     = useSelector(selectProfile);
  const loading         = useSelector(selectProfileLoading);
  const uploadLoading   = useSelector(selectUploadQRLoading);
  const deleteLoading   = useSelector(selectDeleteQRLoading);
  const passwordLoading = useSelector(selectPasswordResetLoading);
  const error           = useSelector(selectProfileError);
  const successMessage  = useSelector(selectSuccessMessage);

  const [user, setUser]                   = useState(null);
  const [vendorData, setVendorData]       = useState(null);
  const [editing, setEditing]             = useState(false);
  const [editingVehicles, setEditingVehicles] = useState(false);
  const [editingParkingSpot, setEditingParkingSpot] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [showQRPicker, setShowQRPicker]   = useState(false);
  const [showQRFull, setShowQRFull]       = useState(false);
  const [showDeleteQR, setShowDeleteQR]   = useState(false);
  const [selectedQR, setSelectedQR]       = useState(null);
  const [qrCodeImages, setQrCodeImages]   = useState([]);
  const [vehicleRates, setVehicleRates]   = useState({});
  const [parkingSpotName, setParkingSpotName] = useState('');
  const [form, setForm]                   = useState({ name: '', email: '' });
  const [passwordForm, setPasswordForm]   = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [showPass, setShowPass]           = useState({ current: false, new: false, confirm: false });
  const [errors, setErrors]               = useState({});
  const [snackbar, setSnackbar]           = useState({ open: false, message: '', severity: 'success' });
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => { dispatch(getProfile()); }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      const admin = profileData.profile || profileData.admin || profileData;
      if (admin) {
        setUser({ id: admin._id, name: admin.name, mobile: admin.mobile, role: admin.role, email: admin.email || '' });
        setVendorData({ name: admin.name, isOneTimeEntry: admin.isOneTimeEntry || false, createdAt: admin.createdAt, location: admin.location || null });
        setParkingSpotName(admin.parkingSpotName || '');
        setQrCodeImages(admin.qrPhotos || []);
        const rates = {};
        (admin.vehicles || []).forEach(v => { const info = VEHICLE_TYPES[v.vehicleType]; if (info) rates[info.key] = v.charges; });
        setVehicleRates(rates);
        setForm({ name: admin.name, email: admin.email || '' });
      }
    }
  }, [profileData]);

  useEffect(() => {
    if (successMessage) { setSnackbar({ open: true, message: successMessage, severity: 'success' }); dispatch(clearSuccessMessage()); }
  }, [successMessage, dispatch]);

  useEffect(() => {
    if (error) { setSnackbar({ open: true, message: error, severity: 'error' }); dispatch(clearProfileError()); }
  }, [error, dispatch]);

  const fieldChange = field => e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
  const rateChange  = key   => e => setVehicleRates(p => ({ ...p, [key]: e.target.value === '' ? 0 : Number(e.target.value) }));
  const passChange  = field => e => { setPasswordForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
  const togglePass  = field => setShowPass(p => ({ ...p, [field]: !p[field] }));

  const handleQRFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setSnackbar({ open: true, message: 'Please select an image file', severity: 'error' }); return; }
    if (file.size > 5 * 1024 * 1024) { setSnackbar({ open: true, message: 'File size should be less than 5MB', severity: 'error' }); return; }
    const formData = new FormData();
    formData.append('qrPhoto', file);
    setActionLoading(true);
    const result = await dispatch(uploadQRPhoto(formData));
    setActionLoading(false);
    if (!result.error) { dispatch(getProfile()); setShowQRPicker(false); setSnackbar({ open: true, message: 'QR code uploaded!', severity: 'success' }); }
    e.target.value = '';
  };

  const handleQRRemove = async () => {
    if (!selectedQR) return;
    const result = await dispatch(deleteQRPhoto(selectedQR));
    if (!result.error) { setShowDeleteQR(false); setSelectedQR(null); dispatch(getProfile()); }
  };

  const handleSaveProfile = async () => {
    const e = {};
    if (!form.name?.trim()) e.name = 'Name is required';
    setErrors(e);
    if (Object.keys(e).length) return;
    const update = { name: form.name.trim() };
    if (form.email?.trim()) update.email = form.email.trim();
    const result = await dispatch(updateAdminProfile(update));
    if (!result.error) { setEditing(false); dispatch(getProfile()); }
  };

  const handleSaveParkingSpot = async () => {
    if (!parkingSpotName.trim()) { setErrors(p => ({ ...p, parkingSpotName: 'Required' })); return; }
    const result = await dispatch(updateAdminProfile({ parkingSpotName: parkingSpotName.trim() }));
    if (!result.error) { setEditingParkingSpot(false); dispatch(getProfile()); }
  };

  const handleSaveVehicleRates = async () => {
    const vehicles = Object.entries(vehicleRates)
      .filter(([_, c]) => c > 0)
      .map(([key, charges]) => ({ vehicleType: Object.keys(VEHICLE_TYPES).find(t => VEHICLE_TYPES[t].key === key), charges }));
    const result = await dispatch(updateAdminProfile({ vehicles }));
    if (!result.error) { setEditingVehicles(false); dispatch(getProfile()); }
  };

  const handleSavePassword = async () => {
    const e = {};
    if (!passwordForm.currentPassword) e.currentPassword = 'Required';
    if (!passwordForm.newPassword) e.newPassword = 'Required';
    else if (passwordForm.newPassword.length < 6) e.newPassword = 'Min 6 characters';
    if (!passwordForm.confirmPassword) e.confirmPassword = 'Required';
    else if (passwordForm.newPassword !== passwordForm.confirmPassword) e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    if (Object.keys(e).length) return;
    const result = await dispatch(resetPassword({ oldPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword }));
    if (!result.error) { setChangingPassword(false); setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' }); }
  };

  const inputSx = { '& .MuiOutlinedInput-root': { borderRadius: '12px', fontSize: '0.875rem' } };

  // ── Shimmer Skeleton (initial load) ─────────────────────────────────────────
  if (loading && !profileData) return <SkeletonLoader />;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
        .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
        .profile-stats { display: grid; gap: 12px; grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 480px) { .profile-stats { grid-template-columns: repeat(1, 1fr); } }
        .profile-vehicles-grid { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) { .profile-vehicles-grid { grid-template-columns: repeat(3, 1fr); } }
        .qr-grid { display: grid; gap: 12px; grid-template-columns: repeat(3, 1fr); }
        @media (min-width: 480px) { .qr-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 768px) { .qr-grid { grid-template-columns: repeat(5, 1fr); } }
      `}</style>

      <input type="file" ref={qrFileInput} onChange={handleQRFileChange} accept="image/*" style={{ display: 'none' }} />

      <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* ── Header ── */}
          <div style={{ animation: 'fadeSlideUp 0.35s ease both' }}>
            <h1 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>My Profile</h1>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>Manage your personal information</p>
          </div>

          {/* ── Profile Banner ── */}
          <div style={{ background: '#1a3c5e', borderRadius: 16, padding: '24px 24px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(26,60,94,0.2)', animation: 'fadeSlideUp 0.4s ease both' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 60%)' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 24, flexShrink: 0, backdropFilter: 'blur(8px)' }}>
                {getInitials(vendorData?.name || user?.name)}
              </div>
              <div style={{ minWidth: 0 }}>
                <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 800, color: '#fff', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {vendorData?.name || user?.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <PhoneIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{user?.mobile}</span>
                </div>
                {user?.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <EmailIcon sx={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }} />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{user.email}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Stats Row ── */}
          <div className="profile-stats" style={{ animation: 'fadeSlideUp 0.45s ease both' }}>
            {[
              { icon: ParkingIcon,     bg: '#e8eef4', color: '#1a3c5e', value: Object.keys(vehicleRates).length, label: 'Vehicle Rates' },
              { icon: TrendingUpIcon,  bg: '#fef3c7', color: '#d97706', value: vendorData?.isOneTimeEntry ? 'One-Time' : 'Regular', label: 'Booking Type' },
              { icon: CheckCircleIcon, bg: '#d1fae5', color: '#059669', value: 'Active', label: 'Status' },
            ].map(({ icon: Icon, bg, color, value, label }) => (
              <div key={label} style={{ background: '#fff', borderRadius: 14, border: '1px solid #e5e7eb', padding: '14px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon sx={{ color, fontSize: 20 }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 16, fontWeight: 800, color: '#1a3c5e', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
                    <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Parking Spot ── */}
          <SectionCard title="Parking Spot" delay="0.5s"
            action={<EditActions editing={editingParkingSpot} onEdit={() => setEditingParkingSpot(true)} onCancel={() => { setEditingParkingSpot(false); setErrors(p => ({ ...p, parkingSpotName: '' })); }} onSave={handleSaveParkingSpot} loading={loading} />}>
            {editingParkingSpot ? (
              <TextField fullWidth size="small" label="Parking Spot Name" value={parkingSpotName}
                onChange={e => { setParkingSpotName(e.target.value); setErrors(p => ({ ...p, parkingSpotName: '' })); }}
                error={!!errors.parkingSpotName} helperText={errors.parkingSpotName} disabled={loading} sx={inputSx}
                InputProps={{ startAdornment: <InputAdornment position="start"><StorefrontIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
            ) : (
              <InfoRow icon={StorefrontIcon} label="Parking Spot Name" value={parkingSpotName || 'Not set'} border={false} />
            )}
          </SectionCard>

          {/* ── QR Codes ── */}
          <SectionCard title={`QR Codes (${qrCodeImages.length}/5)`} delay="0.55s"
            action={qrCodeImages.length < 5 && (
              <button onClick={() => setShowQRPicker(true)} disabled={uploadLoading || actionLoading}
                style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #1a3c5e', color: '#1a3c5e', background: '#fff', cursor: 'pointer', opacity: uploadLoading || actionLoading ? 0.6 : 1 }}>
                {uploadLoading || actionLoading
                  ? <div style={{ width: 12, height: 12, border: '2px solid #1a3c5e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  : <CameraIcon sx={{ fontSize: 14 }} />}
                Add QR
              </button>
            )}>
            {qrCodeImages.length > 0 ? (
              <div className="qr-grid">
                {qrCodeImages.map((qr, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <div onClick={() => { setSelectedQR(qr); setShowQRFull(true); }}
                      style={{ aspectRatio: '1/1', border: '2px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = '#1a3c5e')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}>
                      <img src={qr} alt={`QR ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <button onClick={() => { setSelectedQR(qr); setShowDeleteQR(true); }} disabled={deleteLoading}
                      style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', background: '#fee2e2', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}>
                      <DeleteIcon sx={{ fontSize: 12, color: '#dc2626' }} />
                    </button>
                  </div>
                ))}
                {qrCodeImages.length < 5 && (
                  <button onClick={() => setShowQRPicker(true)}
                    style={{ aspectRatio: '1/1', border: '2px dashed #e5e7eb', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a3c5e'; e.currentTarget.style.background = '#f8fafc'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = 'none'; }}>
                    <CameraIcon sx={{ fontSize: 24, color: '#d1d5db' }} />
                    <span style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>Add</span>
                  </button>
                )}
              </div>
            ) : (
              <button onClick={() => setShowQRPicker(true)}
                style={{ width: '100%', border: '2px dashed #e5e7eb', borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a3c5e'; e.currentTarget.style.background = '#f8fafc'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = 'none'; }}>
                <QrCodeIcon sx={{ fontSize: 40, color: '#d1d5db', marginBottom: 8 }} />
                <p style={{ fontSize: 14, fontWeight: 600, color: '#374151', margin: 0 }}>Add QR Code</p>
                <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>Upload QR codes for your parking location</p>
              </button>
            )}
          </SectionCard>

          {/* ── Profile Information ── */}
          <SectionCard title="Profile Information" delay="0.6s"
            action={<EditActions editing={editing} onEdit={() => setEditing(true)} onCancel={() => { setEditing(false); setForm({ name: vendorData?.name || user?.name || '', email: user?.email || '' }); }} onSave={handleSaveProfile} loading={loading} />}>
            {editing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TextField fullWidth size="small" label="Full Name" value={form.name} onChange={fieldChange('name')} error={!!errors.name} helperText={errors.name} disabled={loading} sx={inputSx}
                  InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
                <TextField fullWidth size="small" label="Email" value={form.email} onChange={fieldChange('email')} disabled={loading} sx={inputSx}
                  InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment> }} />
              </div>
            ) : (
              <div>
                <InfoRow icon={PersonIcon} label="Full Name" value={vendorData?.name || user?.name} />
                <InfoRow icon={PhoneIcon}  label="Mobile Number" value={user?.mobile} />
                {user?.email && <InfoRow icon={EmailIcon} label="Email" value={user.email} border={false} />}
              </div>
            )}
          </SectionCard>

          {/* ── Vehicle Rates ── */}
          {user?.role !== 'WORKER' && (
            <SectionCard title="Vehicle Parking Charges" delay="0.65s"
              action={<EditActions editing={editingVehicles} onEdit={() => setEditingVehicles(true)} onCancel={() => setEditingVehicles(false)} onSave={handleSaveVehicleRates} loading={loading} />}>
              {VEHICLES.map((vehicle, i) => (
                <div key={vehicle.vehicleType} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < VEHICLES.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#e8eef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <vehicle.icon sx={{ fontSize: 18, color: '#1a3c5e' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#1f2937', margin: 0 }}>{vehicle.label}</p>
                    <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{vehicle.description}</p>
                  </div>
                  {editingVehicles ? (
                    <TextField size="small" value={vehicleRates[vehicle.key] || ''} onChange={rateChange(vehicle.key)} disabled={loading} style={{ width: 90 }}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', fontSize: '0.875rem' } }}
                      InputProps={{ startAdornment: <InputAdornment position="start"><span style={{ fontSize: 14 }}>₹</span></InputAdornment> }} />
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999, background: '#e8eef4', color: '#1a3c5e', whiteSpace: 'nowrap' }}>₹{vehicleRates[vehicle.key] || 0}</span>
                  )}
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, marginTop: 4, borderTop: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: 12, color: '#9ca3af' }}>Rates Configured</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1a3c5e' }}>{Object.values(vehicleRates).filter(r => r && r > 0).length}/{VEHICLES.length}</span>
              </div>
            </SectionCard>
          )}

          {/* ── Location ── */}
          {vendorData?.location && (
            <SectionCard title="Location" delay="0.7s">
              <InfoRow icon={LocationIcon} label="Registered Location" value={`Lat: ${vendorData.location.latitude}, Lng: ${vendorData.location.longitude}`} border={false} />
            </SectionCard>
          )}

          {/* ── Account Info ── */}
          <SectionCard title="Account Information" delay="0.75s">
            <InfoRow icon={CalendarIcon} label="Member Since" value={vendorData?.createdAt ? new Date(vendorData.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'} />
            <InfoRow icon={ParkingIcon}  label="Account Type" value={vendorData?.isOneTimeEntry ? 'One-Time Entry' : 'Regular Parking'} border={false} />
          </SectionCard>

          {/* ── Security ── */}
          <SectionCard title="Security" delay="0.8s"
            action={!changingPassword ? (
              <button onClick={() => setChangingPassword(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>
                <LockIcon sx={{ fontSize: 14 }} /> Change Password
              </button>
            ) : (
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => { setChangingPassword(false); setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' }); setErrors({}); }} disabled={passwordLoading}
                  style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', cursor: 'pointer' }}>Cancel</button>
                <button onClick={handleSavePassword} disabled={passwordLoading}
                  style={{ padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, opacity: passwordLoading ? 0.7 : 1 }}>
                  {passwordLoading && <div style={{ width: 12, height: 12, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
                  {passwordLoading ? 'Updating…' : 'Update'}
                </button>
              </div>
            )}>
            {changingPassword ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { field: 'currentPassword', label: 'Current Password', icon: LockOpenIcon, show: 'current' },
                  { field: 'newPassword',      label: 'New Password',     icon: LockIcon,     show: 'new'     },
                  { field: 'confirmPassword',  label: 'Confirm Password', icon: LockIcon,     show: 'confirm' },
                ].map(({ field, label, icon: Icon, show }) => (
                  <TextField key={field} fullWidth size="small" label={label} type={showPass[show] ? 'text' : 'password'} value={passwordForm[field]} onChange={passChange(field)} error={!!errors[field]} helperText={errors[field]} disabled={passwordLoading} sx={inputSx}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><Icon sx={{ fontSize: 18, color: '#9ca3af' }} /></InputAdornment>,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small" onClick={() => togglePass(show)} edge="end" disabled={passwordLoading}>
                            {showPass[show] ? <VisibilityOffIcon sx={{ fontSize: 18 }} /> : <VisibilityIcon sx={{ fontSize: 18 }} />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }} />
                ))}
              </div>
            ) : (
              <div>
                <InfoRow icon={LockIcon} label="Password" value="••••••••" border={false} />
                <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 4, marginLeft: 48 }}>Change your password regularly to keep your account secure</p>
              </div>
            )}
          </SectionCard>

        </div>
      </div>

      {/* ── Modals ── */}
      <ImagePickerModal open={showQRPicker} onClose={() => setShowQRPicker(false)}
        onCamera={() => { setSnackbar({ open: true, message: 'Camera feature coming soon!', severity: 'info' }); setShowQRPicker(false); }}
        onGallery={() => { qrFileInput.current?.click(); setShowQRPicker(false); }} />

      <QRFullViewModal open={showQRFull} onClose={() => setShowQRFull(false)} qrCode={selectedQR} />

      <Dialog open={showDeleteQR} onClose={() => setShowDeleteQR(false)} PaperProps={{ style: { borderRadius: 20, maxWidth: 380, width: '100%' } }}>
        <DialogContent style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DeleteIcon sx={{ fontSize: 20, color: '#dc2626' }} />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1f2937', margin: 0 }}>Remove QR Code</h3>
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 20px' }}>Are you sure you want to remove this QR code? This action cannot be undone.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => setShowDeleteQR(false)} disabled={deleteLoading}
              style={{ flex: 1, padding: '10px 0', border: '1px solid #e5e7eb', color: '#374151', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: 'pointer', background: '#fff' }}>Cancel</button>
            <button onClick={handleQRRemove} disabled={deleteLoading}
              style={{ flex: 1, padding: '10px 0', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 600, fontSize: 13, cursor: deleteLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: deleteLoading ? 0.7 : 1 }}>
              {deleteLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
              {deleteLoading ? 'Removing…' : 'Yes, Remove'}
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={snackbar.severity} sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}