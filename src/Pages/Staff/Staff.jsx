// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
//   TextField, InputAdornment, IconButton, Tooltip, Alert, Snackbar,
// } from '@mui/material';
// import {
//   Add, Search, Visibility, Edit, Delete, People, Close,
//   WarningAmberRounded, GridView, ViewList,
//   Phone, Lock, Person, VisibilityOff,
// } from '@mui/icons-material';
// import {
//   getAllWorkers, addWorker, updateWorker, deleteWorker,
//   selectAllWorkers, selectWorkersLoading,
//   selectAddWorkerLoading, selectUpdateWorkerLoading, selectDeleteWorkerLoading,
//   selectSuccessMessage, clearWorkersError, clearSuccessMessage,
// } from '../../../redux/slice/Vendor';

// const emptyForm = { name: '', mobile: '', password: '' };

// function getInitials(name) {
//   return name?.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '??';
// }

// const AVATAR_COLORS = [
//   { bg: '#dbeafe', text: '#1d4ed8' },
//   { bg: '#fce7f3', text: '#be185d' },
//   { bg: '#d1fae5', text: '#065f46' },
//   { bg: '#fef3c7', text: '#92400e' },
//   { bg: '#ede9fe', text: '#5b21b6' },
//   { bg: '#fee2e2', text: '#991b1b' },
// ];
// const getAvatarColor = (str) => AVATAR_COLORS[(str ? str.charCodeAt(0) : 0) % AVATAR_COLORS.length];

// // ── Shimmer Skeleton ───────────────────────────────────────────────────────────
// function Sk({ width, height, borderRadius = 6, style = {} }) {
//   return (
//     <div className="sk" style={{ width, height, borderRadius, flexShrink: 0, ...style }} />
//   );
// }

// function SkeletonLoader() {
//   return (
//     <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box' }}>
//       <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//         {/* Header */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div>
//             <Sk width={200} height={28} style={{ marginBottom: 8 }} />
//             <Sk width={120} height={14} />
//           </div>
//           <Sk width={120} height={38} borderRadius={12} />
//         </div>

//         {/* Toolbar */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '12px 16px' }}>
//           <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//             <Sk width="100%" height={36} borderRadius={10} style={{ flex: 1 }} />
//             <Sk width={32} height={32} borderRadius={8} />
//           </div>
//         </div>

//         {/* Table */}
//         <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
//           {/* Table header */}
//           <div style={{ background: '#f9fafb', padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center', borderBottom: '1px solid #f3f4f6' }}>
//             {[20, 130, 100, 70, 90].map((w, i) => (
//               <Sk key={i} width={w} height={12} />
//             ))}
//           </div>
//           {/* Table rows */}
//           {[1, 2, 3, 4, 5, 6].map(i => (
//             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
//               {/* Serial */}
//               <Sk width={16} height={12} />
//               {/* Avatar + name */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
//                 <Sk width={36} height={36} borderRadius="50%" />
//                 <div>
//                   <Sk width={130} height={13} style={{ marginBottom: 6 }} />
//                   <Sk width={85} height={11} />
//                 </div>
//               </div>
//               {/* Mobile */}
//               <Sk width={95} height={13} />
//               {/* Status badge */}
//               <Sk width={58} height={22} borderRadius={999} />
//               {/* Action buttons */}
//               <div style={{ display: 'flex', gap: 6 }}>
//                 <Sk width={32} height={32} borderRadius={8} />
//                 <Sk width={32} height={32} borderRadius={8} />
//                 <Sk width={32} height={32} borderRadius={8} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer count */}
//         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <Sk width={140} height={13} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Form Fields ────────────────────────────────────────────────────────────────
// function StaffFormFields({ form, setForm, errors, setErrors, showPass, setShowPass, loading }) {
//   const handle = field => e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
//   const sx = { mb: '18px', '& .MuiOutlinedInput-root': { borderRadius: '10px' } };
//   return (
//     <div>
//       <TextField fullWidth label="Full Name" value={form.name} onChange={handle('name')}
//         error={!!errors.name} helperText={errors.name} disabled={loading} sx={sx}
//         InputProps={{ startAdornment: <InputAdornment position="start"><Person style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment> }} />
//       <TextField fullWidth label="Mobile Number" value={form.mobile} onChange={handle('mobile')}
//         error={!!errors.mobile} helperText={errors.mobile} placeholder="10-digit number" disabled={loading} sx={sx}
//         InputProps={{ startAdornment: <InputAdornment position="start"><Phone style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment> }} />
//       <TextField fullWidth label="Password" type={showPass ? 'text' : 'password'} value={form.password}
//         onChange={handle('password')} error={!!errors.password} helperText={errors.password} disabled={loading}
//         sx={{ mb: 0, '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
//         InputProps={{
//           startAdornment: <InputAdornment position="start"><Lock style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment>,
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton size="small" onClick={() => setShowPass(v => !v)} edge="end" disabled={loading}>
//                 {showPass ? <VisibilityOff style={{ fontSize: 18 }} /> : <Visibility style={{ fontSize: 18 }} />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }} />
//     </div>
//   );
// }

// // ── Action Buttons ─────────────────────────────────────────────────────────────
// function ActionBtns({ onView, onEdit, onDelete, deleting }) {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//       {[
//         { title: 'View', bg: '#eff6ff', color: '#2563eb', hoverBg: '#dbeafe', icon: <Visibility sx={{ fontSize: 15 }} />, onClick: onView, disabled: false },
//         { title: 'Edit', bg: '#fffbeb', color: '#d97706', hoverBg: '#fef3c7', icon: <Edit sx={{ fontSize: 15 }} />, onClick: onEdit, disabled: false },
//         {
//           title: 'Delete', bg: '#fff1f2', color: '#dc2626', hoverBg: '#fee2e2',
//           icon: deleting
//             ? <div style={{ width: 14, height: 14, border: '2px solid #dc2626', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//             : <Delete sx={{ fontSize: 15 }} />,
//           onClick: onDelete, disabled: deleting,
//         },
//       ].map(({ title, bg, color, hoverBg, icon, onClick, disabled }) => (
//         <Tooltip key={title} title={title} arrow>
//           <button onClick={onClick} disabled={disabled}
//             style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: bg, color, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s' }}
//             onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = hoverBg)}
//             onMouseLeave={(e) => (e.currentTarget.style.background = bg)}
//           >
//             {icon}
//           </button>
//         </Tooltip>
//       ))}
//     </div>
//   );
// }

// // ── Empty State ────────────────────────────────────────────────────────────────
// function EmptyState({ search, onClear }) {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' }}>
//       <div style={{ width: 56, height: 56, borderRadius: 16, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
//         <People sx={{ fontSize: 32, color: '#93c5fd' }} />
//       </div>
//       {search ? (
//         <>
//           <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No results for "{search}"</p>
//           <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>Try a different search term</p>
//           <button onClick={onClear} style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
//             Clear search
//           </button>
//         </>
//       ) : (
//         <>
//           <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No Staff Members</p>
//           <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>Add your first staff member to get started</p>
//         </>
//       )}
//     </div>
//   );
// }

// // ── Main Component ─────────────────────────────────────────────────────────────
// export default function StaffManagement() {
//   const dispatch = useDispatch();
//   const workers = useSelector(selectAllWorkers);
//   const loading = useSelector(selectWorkersLoading);
//   const addLoading = useSelector(selectAddWorkerLoading);
//   const updateLoading = useSelector(selectUpdateWorkerLoading);
//   const deleteLoading = useSelector(selectDeleteWorkerLoading);
//   const successMessage = useSelector(selectSuccessMessage);

//   const [search, setSearch] = useState('');
//   const [viewMode, setViewMode] = useState('list');
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [viewTarget, setViewTarget] = useState(null);
//   const [addOpen, setAddOpen] = useState(false);
//   const [editTarget, setEditTarget] = useState(null);
//   const [form, setForm] = useState(emptyForm);
//   const [showPass, setShowPass] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   useEffect(() => { dispatch(getAllWorkers()); }, [dispatch]);

//   useEffect(() => {
//     if (successMessage) {
//       setSnackbar({ open: true, message: successMessage, severity: 'success' });
//       dispatch(clearSuccessMessage());
//     }
//   }, [successMessage, dispatch]);

//   const filtered = workers.filter(s =>
//     s.name?.toLowerCase().includes(search.toLowerCase()) ||
//     s.mobile?.toString().includes(search)
//   );

//   const validate = (f) => {
//     const e = {};
//     if (!f.name?.trim()) e.name = 'Name is required';
//     if (!f.mobile?.trim()) e.mobile = 'Mobile is required';
//     else if (!/^\d{10}$/.test(f.mobile.replace(/\s/g, ''))) e.mobile = 'Enter valid 10-digit number';
//     if (!f.password?.trim() && !editTarget) e.password = 'Password is required';
//     else if (f.password?.trim() && f.password.length < 6) e.password = 'Minimum 6 characters';
//     return e;
//   };

//   const handleAdd = async () => {
//     const e = validate(form);
//     if (Object.keys(e).length) { setErrors(e); return; }
//     const result = await dispatch(addWorker({ name: form.name.trim(), mobile: parseInt(form.mobile.replace(/\s/g, '')), password: form.password, isActive: true }));
//     if (!result.error) { setAddOpen(false); setForm(emptyForm); setErrors({}); setShowPass(false); }
//   };

//   const handleEditOpen = (member) => {
//     setEditTarget(member);
//     setForm({ name: member.name, mobile: member.mobile.toString(), password: '' });
//     setErrors({});
//     setShowPass(false);
//   };

//   const handleEditSave = async () => {
//     const e = validate(form);
//     if (Object.keys(e).length) { setErrors(e); return; }
//     const result = await dispatch(updateWorker({
//       workerId: editTarget._id,
//       workerData: { name: form.name.trim(), mobile: parseInt(form.mobile.replace(/\s/g, '')), ...(form.password.trim() && { password: form.password }) },
//     }));
//     if (!result.error) { setEditTarget(null); setForm(emptyForm); setErrors({}); setShowPass(false); }
//   };

//   const handleDelete = async () => {
//     const result = await dispatch(deleteWorker(deleteTarget._id));
//     if (!result.error) setDeleteTarget(null);
//   };

//   const closeAdd = () => { setAddOpen(false); setForm(emptyForm); setErrors({}); setShowPass(false); };
//   const closeEdit = () => { setEditTarget(null); setForm(emptyForm); setErrors({}); setShowPass(false); };

//   const paperRound = { borderRadius: '18px', width: '100%', maxWidth: 440, padding: '4px' };

//   // ── Shimmer Skeleton (initial load) ─────────────────────────────────────────
//   if (loading && !workers.length) {
//     return (
//       <>
//         <style>{`
//           @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
//           .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
//         `}</style>
//         <SkeletonLoader />
//       </>
//     );
//   }

//   // ── Render ──────────────────────────────────────────────────────────────────
//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
//         .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
//         @media (max-width: 640px) { .hide-on-mobile { display: none !important; } }
//         .staff-card-grid { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
//         @media (min-width: 640px)  { .staff-card-grid { grid-template-columns: repeat(2, 1fr); } }
//         @media (min-width: 1024px) { .staff-card-grid { grid-template-columns: repeat(3, 1fr); } }
//         @media (min-width: 1280px) { .staff-card-grid { grid-template-columns: repeat(4, 1fr); } }
//       `}</style>

//       <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '24px 16px', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
//         <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

//           {/* ── Header ── */}
//           <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, animation: 'fadeSlideUp 0.35s ease both' }}>
//             <div>
//               <h1 style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
//                 Staff Management
//               </h1>
//               <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{workers.length} total members</p>
//             </div>
//             <button
//               onClick={() => { setAddOpen(true); setForm(emptyForm); setErrors({}); }}
//               disabled={addLoading}
//               style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 12, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s', opacity: addLoading ? 0.6 : 1 }}
//               onMouseEnter={(e) => !addLoading && (e.currentTarget.style.background = '#0f2a44')}
//               onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3c5e')}
//             >
//               {addLoading
//                 ? <div style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
//                 : <Add sx={{ fontSize: 18 }} />}
//               Add Staff
//             </button>
//           </div>

//           {/* ── Toolbar ── */}
//           <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 16px', animation: 'fadeSlideUp 0.4s ease both' }}>
//             <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
//               {/* Search */}
//               <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
//                 <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}>
//                   <Search sx={{ fontSize: 18 }} />
//                 </span>
//                 <input type="text" placeholder="Search by name or mobile…" value={search}
//                   onChange={e => setSearch(e.target.value)}
//                   style={{ width: '100%', paddingLeft: 36, paddingRight: search ? 34 : 12, paddingTop: 9, paddingBottom: 9, fontSize: 13, borderRadius: 10, border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
//                   onFocus={e => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
//                   onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
//                 />
//                 {search && (
//                   <button onClick={() => setSearch('')}
//                     style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
//                     <Close sx={{ fontSize: 16 }} />
//                   </button>
//                 )}
//               </div>

//               {/* Right controls */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
//                 <span className="hide-on-mobile" style={{ fontSize: 13, color: '#6b7280' }}>
//                   {filtered.length} member{filtered.length !== 1 ? 's' : ''}
//                 </span>
//                 <Tooltip arrow>
//                   <button
//                     onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
//                     style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', cursor: 'pointer', transition: 'background 0.15s', color: '#374151', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', borderRadius: 8 }}
//                   >
//                     {viewMode === 'list' ? <GridView sx={{ fontSize: 18 }} /> : <ViewList sx={{ fontSize: 18 }} />}
//                   </button>
//                 </Tooltip>
//               </div>
//             </div>
//             {search && (
//               <p style={{ fontSize: 12, color: '#9ca3af', margin: '8px 0 0' }}>
//                 {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
//               </p>
//             )}
//           </div>

//           {/* ── LIST VIEW ── */}
//           {viewMode === 'list' && (
//             <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', animation: 'fadeSlideUp 0.45s ease both' }}>
//               {filtered.length === 0 ? (
//                 <EmptyState search={search} onClear={() => setSearch('')} />
//               ) : (
//                 <div style={{ overflowX: 'auto' }}>
//                   <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                     <thead>
//                       <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
//                         {['#', 'Staff Member', 'Mobile', 'Status', 'Actions'].map((h, i) => (
//                           <th key={h} className={i === 2 || i === 3 ? 'hide-on-mobile' : ''}
//                             style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filtered.map((member, idx) => {
//                         const av = getAvatarColor(member.name);
//                         return (
//                           <tr key={member._id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s' }}
//                             onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
//                             onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
//                             <td style={{ padding: '12px 16px', fontSize: 12, color: '#9ca3af' }}>{idx + 1}</td>
//                             <td style={{ padding: '12px 16px' }}>
//                               <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                 <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0, background: av.bg, color: av.text }}>
//                                   {getInitials(member.name)}
//                                 </div>
//                                 <div>
//                                   <p style={{ fontWeight: 600, fontSize: 13, color: '#111827', margin: 0 }}>{member.name}</p>
//                                   <p className="hide-on-mobile" style={{ fontSize: 11, color: '#9ca3af', margin: '2px 0 0' }}>{member.mobile}</p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//                               <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6b7280' }}>
//                                 <Phone sx={{ fontSize: 14, color: '#9e9e9e' }} /> {member.mobile}
//                               </div>
//                             </td>
//                             <td className="hide-on-mobile" style={{ padding: '12px 16px' }}>
//                               <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#15803d' : '#dc2626' }}>
//                                 {member.isActive ? 'Active' : 'Inactive'}
//                               </span>
//                             </td>
//                             <td style={{ padding: '12px 16px' }}>
//                               <ActionBtns
//                                 onView={() => setViewTarget(member)}
//                                 onEdit={() => handleEditOpen(member)}
//                                 onDelete={() => setDeleteTarget(member)}
//                                 deleting={deleteLoading && deleteTarget?._id === member._id}
//                               />
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* ── CARD VIEW ── */}
//           {viewMode === 'card' && (
//             filtered.length === 0
//               ? <EmptyState search={search} onClear={() => setSearch('')} />
//               : (
//                 <div className="staff-card-grid" style={{ animation: 'fadeSlideUp 0.45s ease both' }}>
//                   {filtered.map((member, idx) => {
//                     const av = getAvatarColor(member.name);
//                     return (
//                       <div key={member._id}
//                         style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 20, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${idx * 40}ms` }}
//                         onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
//                         onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
//                       >
//                         {/* Avatar + name */}
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                           <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0, background: av.bg, color: av.text }}>
//                             {getInitials(member.name)}
//                           </div>
//                           <div style={{ minWidth: 0 }}>
//                             <p style={{ fontWeight: 600, fontSize: 13, color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{member.name}</p>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
//                               <Phone sx={{ fontSize: 11, color: '#9e9e9e' }} />
//                               <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{member.mobile}</p>
//                             </div>
//                           </div>
//                         </div>

//                         <div style={{ height: 1, background: '#f3f4f6' }} />

//                         {/* Status */}
//                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                           <span style={{ fontSize: 12, color: '#6b7280' }}>Status</span>
//                           <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#15803d' : '#dc2626' }}>
//                             {member.isActive ? 'Active' : 'Inactive'}
//                           </span>
//                         </div>

//                         <div style={{ height: 1, background: '#f3f4f6' }} />

//                         {/* Actions */}
//                         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                           <ActionBtns
//                             onView={() => setViewTarget(member)}
//                             onEdit={() => handleEditOpen(member)}
//                             onDelete={() => setDeleteTarget(member)}
//                             deleting={deleteLoading && deleteTarget?._id === member._id}
//                           />
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )
//           )}

//           {/* Footer count */}
//           <p style={{ textAlign: 'right', fontSize: 13, color: '#9ca3af' }}>
//             {filtered.length} of {workers.length} staff members
//           </p>
//         </div>
//       </div>

//       {/* ══ ADD DIALOG ══ */}
//       <Dialog open={addOpen} onClose={closeAdd} PaperProps={{ style: paperRound }}>
//         <DialogTitle style={{ paddingBottom: 4 }}>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//               <div style={{ width: 40, height: 40, borderRadius: 10, background: '#e6f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Add style={{ color: '#1a3c5e', fontSize: 20 }} />
//               </div>
//               <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Add New Staff</span>
//             </div>
//             <IconButton size="small" onClick={closeAdd}><Close style={{ fontSize: 18, color: '#9e9e9e' }} /></IconButton>
//           </div>
//         </DialogTitle>
//         <DialogContent style={{ paddingTop: 20 }}>
//           <StaffFormFields form={form} setForm={setForm} errors={errors} setErrors={setErrors} showPass={showPass} setShowPass={setShowPass} loading={addLoading} />
//         </DialogContent>
//         <DialogActions style={{ padding: '8px 24px 20px', gap: 8 }}>
//           <button onClick={closeAdd} disabled={addLoading}
//             style={{ padding: '8px 20px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
//             Cancel
//           </button>
//           <button onClick={handleAdd} disabled={addLoading}
//             style={{ padding: '8px 24px', borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, opacity: addLoading ? 0.7 : 1 }}>
//             {addLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
//             Add Staff
//           </button>
//         </DialogActions>
//       </Dialog>

//       {/* ══ EDIT DIALOG ══ */}
//       <Dialog open={!!editTarget} onClose={closeEdit} PaperProps={{ style: paperRound }}>
//         <DialogTitle style={{ paddingBottom: 4 }}>
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//               <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Edit style={{ color: '#92400e', fontSize: 18 }} />
//               </div>
//               <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Edit Staff</span>
//             </div>
//             <IconButton size="small" onClick={closeEdit}><Close style={{ fontSize: 18, color: '#9e9e9e' }} /></IconButton>
//           </div>
//         </DialogTitle>
//         <DialogContent style={{ paddingTop: 20 }}>
//           <StaffFormFields form={form} setForm={setForm} errors={errors} setErrors={setErrors} showPass={showPass} setShowPass={setShowPass} loading={updateLoading} />
//         </DialogContent>
//         <DialogActions style={{ padding: '8px 24px 20px', gap: 8 }}>
//           <button onClick={closeEdit} disabled={updateLoading}
//             style={{ padding: '8px 20px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
//             Cancel
//           </button>
//           <button onClick={handleEditSave} disabled={updateLoading}
//             style={{ padding: '8px 24px', borderRadius: 10, background: '#d97706', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, opacity: updateLoading ? 0.7 : 1 }}>
//             {updateLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
//             Save Changes
//           </button>
//         </DialogActions>
//       </Dialog>

//       {/* ══ VIEW DIALOG ══ */}
//       <Dialog open={!!viewTarget} onClose={() => setViewTarget(null)}
//         PaperProps={{ style: { borderRadius: 18, maxWidth: 360, width: '100%' } }}>
//         {viewTarget && (() => {
//           const av = getAvatarColor(viewTarget.name);
//           return (
//             <>
//               <div style={{ background: viewTarget.isActive ? '#d1fae5' : '#fee2e2', padding: '32px 24px 24px', position: 'relative' }}>
//                 <IconButton size="small" onClick={() => setViewTarget(null)}
//                   style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.7)', padding: 4 }}>
//                   <Close style={{ fontSize: 16, color: '#616161' }} />
//                 </IconButton>
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                   <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, background: '#fff', color: av.text, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
//                     {getInitials(viewTarget.name)}
//                   </div>
//                   <h2 style={{ marginTop: 12, fontWeight: 700, fontSize: 18, color: '#1f2937', textAlign: 'center' }}>{viewTarget.name}</h2>
//                 </div>
//               </div>
//               <DialogContent style={{ padding: '20px 24px 24px' }}>
//                 {[
//                   { icon: <Phone style={{ fontSize: 16, color: '#1d4ed8' }} />, iconBg: '#dbeafe', label: 'Mobile', value: viewTarget.mobile, border: true },
//                   { icon: <span style={{ width: 10, height: 10, borderRadius: '50%', background: viewTarget.isActive ? '#065f46' : '#dc2626', display: 'block' }} />, iconBg: viewTarget.isActive ? '#d1fae5' : '#fee2e2', label: 'Status', value: null, border: false },
//                 ].map(({ icon, iconBg, label, value, border }) => (
//                   <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: border ? '1px solid #f0f0f0' : 'none' }}>
//                     <div style={{ width: 36, height: 36, borderRadius: 9, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                       {icon}
//                     </div>
//                     <div>
//                       <p style={{ margin: 0, fontSize: 11, color: '#9e9e9e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
//                       {value
//                         ? <p style={{ margin: 0, fontSize: 15, color: '#212121', fontWeight: 500 }}>{value}</p>
//                         : <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 999, background: viewTarget.isActive ? '#dcfce7' : '#fee2e2', color: viewTarget.isActive ? '#15803d' : '#dc2626' }}>
//                           {viewTarget.isActive ? 'Active' : 'Inactive'}
//                         </span>
//                       }
//                     </div>
//                   </div>
//                 ))}
//               </DialogContent>
//             </>
//           );
//         })()}
//       </Dialog>

//       {/* ══ DELETE DIALOG ══ */}
//       <Dialog open={!!deleteTarget} onClose={() => !deleteLoading && setDeleteTarget(null)}
//         PaperProps={{ style: { borderRadius: 16, padding: 8, maxWidth: 420, width: '100%' } }}>
//         <DialogTitle style={{ paddingBottom: 0 }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//             <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <WarningAmberRounded style={{ color: '#dc2626', fontSize: 22 }} />
//             </div>
//             <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Delete Staff Member</span>
//           </div>
//         </DialogTitle>
//         <DialogContent style={{ paddingTop: 16 }}>
//           <DialogContentText style={{ color: '#616161', fontSize: '0.9375rem', lineHeight: 1.6 }}>
//             Are you sure you want to delete{' '}
//             <strong style={{ color: '#1a3c5e' }}>{deleteTarget?.name}</strong>?{' '}
//             This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions style={{ padding: '8px 24px 16px', gap: 8 }}>
//           <button onClick={() => setDeleteTarget(null)} disabled={deleteLoading}
//             style={{ flex: 1, padding: '9px 0', border: '1px solid #e5e7eb', background: '#fff', color: '#374151', borderRadius: 10, fontWeight: 500, fontSize: 13, cursor: 'pointer' }}>
//             Cancel
//           </button>
//           <button onClick={handleDelete} disabled={deleteLoading}
//             style={{ flex: 1, padding: '9px 0', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: 13, cursor: deleteLoading ? 'not-allowed' : 'pointer', opacity: deleteLoading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
//             {deleteLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
//             {deleteLoading ? 'Deleting…' : 'Yes, Delete'}
//           </button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar open={snackbar.open} autoHideDuration={3000}
//         onClose={() => setSnackbar(s => ({ ...s, open: false }))}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <Alert onClose={() => setSnackbar(s => ({ ...s, open: false }))} severity={snackbar.severity}
//           sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  TextField, InputAdornment, IconButton, Tooltip, Alert, Snackbar,
} from '@mui/material';
import {
  Add, Search, Visibility, Edit, Delete, People, Close,
  WarningAmberRounded, GridView, ViewList,
  Phone, Lock, Person, VisibilityOff,
} from '@mui/icons-material';
import {
  getAllWorkers, addWorker, updateWorker, deleteWorker,
  selectAllWorkers, selectWorkersLoading,
  selectAddWorkerLoading, selectUpdateWorkerLoading, selectDeleteWorkerLoading,
  selectSuccessMessage, clearWorkersError, clearSuccessMessage,
} from '../../../redux/slice/Vendor';

const emptyForm = { name: '', mobile: '', password: '' };

function getInitials(name) {
  return name?.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '??';
}

const AVATAR_COLORS = [
  { bg: '#dbeafe', text: '#1d4ed8' },
  { bg: '#fce7f3', text: '#be185d' },
  { bg: '#d1fae5', text: '#065f46' },
  { bg: '#fef3c7', text: '#92400e' },
  { bg: '#ede9fe', text: '#5b21b6' },
  { bg: '#fee2e2', text: '#991b1b' },
];
const getAvatarColor = (str) => AVATAR_COLORS[(str ? str.charCodeAt(0) : 0) % AVATAR_COLORS.length];

function Sk({ width, height, borderRadius = 6, style = {} }) {
  return (
    <div className="sk" style={{ width, height, borderRadius, flexShrink: 0, ...style }} />
  );
}

function SkeletonLoader() {
  return (
    <div style={{ minHeight: '100vh', background: '#f1f4f8', padding: '16px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <Sk width={200} height={28} style={{ marginBottom: 8 }} />
            <Sk width={120} height={14} />
          </div>
          <Sk width={120} height={38} borderRadius={12} />
        </div>
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '12px 16px' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Sk width="100%" height={36} borderRadius={10} style={{ flex: 1 }} />
            <Sk width={32} height={32} borderRadius={8} />
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ background: '#f9fafb', padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center', borderBottom: '1px solid #f3f4f6' }}>
            {[20, 130, 100, 70, 90].map((w, i) => <Sk key={i} width={w} height={12} />)}
          </div>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
              <Sk width={16} height={12} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
                <Sk width={36} height={36} borderRadius="50%" />
                <div>
                  <Sk width={130} height={13} style={{ marginBottom: 6 }} />
                  <Sk width={85} height={11} />
                </div>
              </div>
              <Sk width={95} height={13} />
              <Sk width={58} height={22} borderRadius={999} />
              <div style={{ display: 'flex', gap: 6 }}>
                <Sk width={32} height={32} borderRadius={8} />
                <Sk width={32} height={32} borderRadius={8} />
                <Sk width={32} height={32} borderRadius={8} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StaffFormFields({ form, setForm, errors, setErrors, showPass, setShowPass, loading }) {
  const handle = field => e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: '' })); };
  const sx = { mb: '18px', '& .MuiOutlinedInput-root': { borderRadius: '10px' } };
  return (
    <div>
      <TextField fullWidth label="Full Name" value={form.name} onChange={handle('name')}
        error={!!errors.name} helperText={errors.name} disabled={loading} sx={sx}
        InputProps={{ startAdornment: <InputAdornment position="start"><Person style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment> }} />
      <TextField fullWidth label="Mobile Number" value={form.mobile} onChange={handle('mobile')}
        error={!!errors.mobile} helperText={errors.mobile} placeholder="10-digit number" disabled={loading} sx={sx}
        InputProps={{ startAdornment: <InputAdornment position="start"><Phone style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment> }} />
      <TextField fullWidth label="Password" type={showPass ? 'text' : 'password'} value={form.password}
        onChange={handle('password')} error={!!errors.password} helperText={errors.password} disabled={loading}
        sx={{ mb: 0, '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><Lock style={{ fontSize: 18, color: '#9e9e9e' }} /></InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setShowPass(v => !v)} edge="end" disabled={loading}>
                {showPass ? <VisibilityOff style={{ fontSize: 18 }} /> : <Visibility style={{ fontSize: 18 }} />}
              </IconButton>
            </InputAdornment>
          ),
        }} />
    </div>
  );
}

function ActionBtns({ onView, onEdit, onDelete, deleting }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {[
        { title: 'View', bg: '#eff6ff', color: '#2563eb', hoverBg: '#dbeafe', icon: <Visibility sx={{ fontSize: 15 }} />, onClick: onView, disabled: false },
        { title: 'Edit', bg: '#fffbeb', color: '#d97706', hoverBg: '#fef3c7', icon: <Edit sx={{ fontSize: 15 }} />, onClick: onEdit, disabled: false },
        {
          title: 'Delete', bg: '#fff1f2', color: '#dc2626', hoverBg: '#fee2e2',
          icon: deleting
            ? <div style={{ width: 14, height: 14, border: '2px solid #dc2626', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            : <Delete sx={{ fontSize: 15 }} />,
          onClick: onDelete, disabled: deleting,
        },
      ].map(({ title, bg, color, hoverBg, icon, onClick, disabled }) => (
        <Tooltip key={title} title={title} arrow>
          <button onClick={onClick} disabled={disabled}
            style={{ width: 32, height: 32, borderRadius: 8, border: 'none', background: bg, color, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s' }}
            onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.background = bg)}
          >
            {icon}
          </button>
        </Tooltip>
      ))}
    </div>
  );
}

function EmptyState({ search, onClear }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <People sx={{ fontSize: 32, color: '#93c5fd' }} />
      </div>
      {search ? (
        <>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No results for "{search}"</p>
          <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>Try a different search term</p>
          <button onClick={onClear} style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: '#1a3c5e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            Clear search
          </button>
        </>
      ) : (
        <>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#374151', margin: 0 }}>No Staff Members</p>
          <p style={{ fontSize: 13, color: '#9ca3af', margin: '4px 0 0' }}>Add your first staff member to get started</p>
        </>
      )}
    </div>
  );
}

// Mobile staff row card (replaces table row on mobile)
function MobileStaffRow({ member, idx, onView, onEdit, onDelete, deleting }) {
  const av = getAvatarColor(member.name);
  return (
    <div style={{ padding: '14px 16px', borderBottom: '1px solid #f3f4f6' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, background: av.bg, color: av.text }}>
          {getInitials(member.name)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <p style={{ fontWeight: 600, fontSize: 14, color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{member.name}</p>
            <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999, flexShrink: 0, background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#15803d' : '#dc2626' }}>
              {member.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
            <Phone sx={{ fontSize: 12, color: '#9e9e9e' }} />
            <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{member.mobile}</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        <ActionBtns onView={onView} onEdit={onEdit} onDelete={onDelete} deleting={deleting} />
      </div>
    </div>
  );
}

export default function StaffManagement() {
  const dispatch = useDispatch();
  const workers = useSelector(selectAllWorkers);
  const loading = useSelector(selectWorkersLoading);
  const addLoading = useSelector(selectAddWorkerLoading);
  const updateLoading = useSelector(selectUpdateWorkerLoading);
  const deleteLoading = useSelector(selectDeleteWorkerLoading);
  const successMessage = useSelector(selectSuccessMessage);

  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [viewTarget, setViewTarget] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    dispatch(getAllWorkers());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (successMessage) {
      setSnackbar({ open: true, message: successMessage, severity: 'success' });
      dispatch(clearSuccessMessage());
    }
  }, [successMessage, dispatch]);

  const filtered = workers.filter(s =>
    s.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.mobile?.toString().includes(search)
  );

  const validate = (f) => {
    const e = {};
    if (!f.name?.trim()) e.name = 'Name is required';
    if (!f.mobile?.trim()) e.mobile = 'Mobile is required';
    else if (!/^\d{10}$/.test(f.mobile.replace(/\s/g, ''))) e.mobile = 'Enter valid 10-digit number';
    if (!f.password?.trim() && !editTarget) e.password = 'Password is required';
    else if (f.password?.trim() && f.password.length < 6) e.password = 'Minimum 6 characters';
    return e;
  };

  const handleAdd = async () => {
    const e = validate(form);
    if (Object.keys(e).length) { setErrors(e); return; }
    const result = await dispatch(addWorker({ name: form.name.trim(), mobile: parseInt(form.mobile.replace(/\s/g, '')), password: form.password, isActive: true }));
    if (!result.error) { setAddOpen(false); setForm(emptyForm); setErrors({}); setShowPass(false); }
  };

  const handleEditOpen = (member) => {
    setEditTarget(member);
    setForm({ name: member.name, mobile: member.mobile.toString(), password: '' });
    setErrors({});
    setShowPass(false);
  };

  const handleEditSave = async () => {
    const e = validate(form);
    if (Object.keys(e).length) { setErrors(e); return; }
    const result = await dispatch(updateWorker({
      workerId: editTarget._id,
      workerData: { name: form.name.trim(), mobile: parseInt(form.mobile.replace(/\s/g, '')), ...(form.password.trim() && { password: form.password }) },
    }));
    if (!result.error) { setEditTarget(null); setForm(emptyForm); setErrors({}); setShowPass(false); }
  };

  const handleDelete = async () => {
    const result = await dispatch(deleteWorker(deleteTarget._id));
    if (!result.error) setDeleteTarget(null);
  };

  const closeAdd = () => { setAddOpen(false); setForm(emptyForm); setErrors({}); setShowPass(false); };
  const closeEdit = () => { setEditTarget(null); setForm(emptyForm); setErrors({}); setShowPass(false); };

  // Responsive dialog paper style
  const paperRound = {
    borderRadius: isMobile ? '14px' : '18px',
    width: '100%',
    maxWidth: 440,
    margin: isMobile ? '16px' : '32px',
    padding: isMobile ? '2px' : '4px',
  };

  if (loading && !workers.length) {
    return (
      <>
        <style>{`
          @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
          .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }
        `}</style>
        <SkeletonLoader />
      </>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
        .sk { background: linear-gradient(90deg, #f0f2f5 25%, #e4e7ec 37%, #f0f2f5 63%); background-size: 600px 100%; animation: shimmer 1.4s ease infinite; border-radius: 6px; display: inline-block; }

        .staff-card-grid { display: grid; gap: 14px; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 480px)  { .staff-card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px)  { .staff-card-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .staff-card-grid { grid-template-columns: repeat(4, 1fr); } }

        /* Desktop-only table columns */
        @media (max-width: 639px) {
          .col-mobile-hide { display: none !important; }
          .col-mobile-show { display: table-cell !important; }
          .staff-mobile-card-row { display: block !important; }
          .staff-desktop-row { display: none !important; }
        }
        @media (min-width: 640px) {
          .staff-mobile-card-row { display: none !important; }
          .staff-desktop-row { display: table-row !important; }
        }

        .sm-page-pad { padding: 16px 12px; }
        @media (min-width: 640px) { .sm-page-pad { padding: 24px 16px; } }

        .sm-header-title { font-size: 1.4rem; }
        @media (min-width: 480px) { .sm-header-title { font-size: clamp(1.4rem, 3vw, 1.9rem); } }

        /* Ensure table doesn't overflow on mobile */
        .staff-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }

        /* Dialog full-width on mobile */
        @media (max-width: 480px) {
          .MuiDialog-paper { margin: 12px !important; width: calc(100% - 24px) !important; }
        }
      `}</style>

      <div className="sm-page-pad" style={{ minHeight: '100vh', background: '#f1f4f8', boxSizing: 'border-box', animation: 'fadeIn 0.25s ease' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* ── Header ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, animation: 'fadeSlideUp 0.35s ease both' }}>
            <div>
              <h1 className="sm-header-title" style={{ fontWeight: 800, color: '#1a3c5e', margin: 0, letterSpacing: '-0.025em' }}>
                Staff Management
              </h1>
              <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{workers.length} total members</p>
            </div>
            <button
              onClick={() => { setAddOpen(true); setForm(emptyForm); setErrors({}); }}
              disabled={addLoading}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 12, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'background 0.15s', opacity: addLoading ? 0.6 : 1, whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => !addLoading && (e.currentTarget.style.background = '#0f2a44')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3c5e')}
            >
              {addLoading
                ? <div style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                : <Add sx={{ fontSize: 18 }} />}
              Add Staff
            </button>
          </div>

          {/* ── Toolbar ── */}
          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '12px 14px', animation: 'fadeSlideUp 0.4s ease both' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: 10 }}>
              {/* Search */}
              <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', display: 'flex', pointerEvents: 'none' }}>
                  <Search sx={{ fontSize: 17 }} />
                </span>
                <input
                  type="text"
                  placeholder={isMobile ? 'Search…' : 'Search by name or mobile…'}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ width: '100%', paddingLeft: 32, paddingRight: search ? 32 : 10, paddingTop: 8, paddingBottom: 8, fontSize: 13, borderRadius: 10, border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none', color: '#111827', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={e => { e.target.style.borderColor = '#1a3c5e'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,94,0.12)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                />
                {search && (
                  <button onClick={() => setSearch('')}
                    style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 0 }}>
                    <Close sx={{ fontSize: 16 }} />
                  </button>
                )}
              </div>

              {/* Count + Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                {!isMobile && (
                  <span style={{ fontSize: 13, color: '#6b7280', whiteSpace: 'nowrap' }}>
                    {filtered.length} member{filtered.length !== 1 ? 's' : ''}
                  </span>
                )}
                <Tooltip title={viewMode === 'list' ? 'Card view' : 'List view'} arrow>
                  <button
                    onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, cursor: 'pointer', color: '#374151', background: '#f3f4f6', border: 'none', borderRadius: 8, flexShrink: 0 }}
                  >
                    {viewMode === 'list' ? <GridView sx={{ fontSize: 18 }} /> : <ViewList sx={{ fontSize: 18 }} />}
                  </button>
                </Tooltip>
              </div>
            </div>
            {search && (
              <p style={{ fontSize: 12, color: '#9ca3af', margin: '8px 0 0' }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
              </p>
            )}
          </div>

          {/* ── LIST VIEW ── */}
          {viewMode === 'list' && (
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', animation: 'fadeSlideUp 0.45s ease both' }}>
              {filtered.length === 0 ? (
                <EmptyState search={search} onClear={() => setSearch('')} />
              ) : (
                <>
                  {/* Mobile: card-style rows */}
                  <div className="staff-mobile-card-row">
                    {filtered.map((member, idx) => (
                      <MobileStaffRow
                        key={member._id}
                        member={member}
                        idx={idx}
                        onView={() => setViewTarget(member)}
                        onEdit={() => handleEditOpen(member)}
                        onDelete={() => setDeleteTarget(member)}
                        deleting={deleteLoading && deleteTarget?._id === member._id}
                      />
                    ))}
                  </div>

                  {/* Desktop: table */}
                  <div className="staff-table-wrap">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                          {['#', 'Staff Member', 'Mobile', 'Status', 'Actions'].map((h) => (
                            <th key={h}
                              style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((member, idx) => {
                          const av = getAvatarColor(member.name);
                          return (
                            <tr key={member._id} className="staff-desktop-row" style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.15s' }}
                              onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                              <td style={{ padding: '12px 16px', fontSize: 12, color: '#9ca3af' }}>{idx + 1}</td>
                              <td style={{ padding: '12px 16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                  <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0, background: av.bg, color: av.text }}>
                                    {getInitials(member.name)}
                                  </div>
                                  <div>
                                    <p style={{ fontWeight: 600, fontSize: 13, color: '#111827', margin: 0 }}>{member.name}</p>
                                    <p style={{ fontSize: 11, color: '#9ca3af', margin: '2px 0 0' }}>{member.mobile}</p>
                                  </div>
                                </div>
                              </td>
                              <td style={{ padding: '12px 16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6b7280' }}>
                                  <Phone sx={{ fontSize: 14, color: '#9e9e9e' }} /> {member.mobile}
                                </div>
                              </td>
                              <td style={{ padding: '12px 16px' }}>
                                <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#15803d' : '#dc2626' }}>
                                  {member.isActive ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                              <td style={{ padding: '12px 16px' }}>
                                <ActionBtns
                                  onView={() => setViewTarget(member)}
                                  onEdit={() => handleEditOpen(member)}
                                  onDelete={() => setDeleteTarget(member)}
                                  deleting={deleteLoading && deleteTarget?._id === member._id}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── CARD VIEW ── */}
          {viewMode === 'card' && (
            filtered.length === 0
              ? <EmptyState search={search} onClear={() => setSearch('')} />
              : (
                <div className="staff-card-grid" style={{ animation: 'fadeSlideUp 0.45s ease both' }}>
                  {filtered.map((member, idx) => {
                    const av = getAvatarColor(member.name);
                    return (
                      <div key={member._id}
                        style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 18, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'default', animation: 'fadeSlideUp 0.4s ease both', animationDelay: `${idx * 40}ms` }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0, background: av.bg, color: av.text }}>
                            {getInitials(member.name)}
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <p style={{ fontWeight: 600, fontSize: 13, color: '#111827', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{member.name}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                              <Phone sx={{ fontSize: 11, color: '#9e9e9e' }} />
                              <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>{member.mobile}</p>
                            </div>
                          </div>
                        </div>
                        <div style={{ height: 1, background: '#f3f4f6' }} />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: 12, color: '#6b7280' }}>Status</span>
                          <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#15803d' : '#dc2626' }}>
                            {member.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <div style={{ height: 1, background: '#f3f4f6' }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <ActionBtns
                            onView={() => setViewTarget(member)}
                            onEdit={() => handleEditOpen(member)}
                            onDelete={() => setDeleteTarget(member)}
                            deleting={deleteLoading && deleteTarget?._id === member._id}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
          )}

          {/* Footer count */}
          <p style={{ textAlign: 'right', fontSize: 13, color: '#9ca3af', margin: 0 }}>
            {filtered.length} of {workers.length} staff members
          </p>
        </div>
      </div>

      {/* ══ ADD DIALOG ══ */}
      <Dialog open={addOpen} onClose={closeAdd} PaperProps={{ style: paperRound }}>
        <DialogTitle style={{ paddingBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#e6f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Add style={{ color: '#1a3c5e', fontSize: 20 }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Add New Staff</span>
            </div>
            <IconButton size="small" onClick={closeAdd}><Close style={{ fontSize: 18, color: '#9e9e9e' }} /></IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ paddingTop: 20 }}>
          <StaffFormFields form={form} setForm={setForm} errors={errors} setErrors={setErrors} showPass={showPass} setShowPass={setShowPass} loading={addLoading} />
        </DialogContent>
        <DialogActions style={{ padding: '8px 24px 20px', gap: 8 }}>
          <button onClick={closeAdd} disabled={addLoading}
            style={{ padding: '9px 20px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontSize: 13, fontWeight: 500, cursor: 'pointer', flex: isMobile ? 1 : 'none' }}>
            Cancel
          </button>
          <button onClick={handleAdd} disabled={addLoading}
            style={{ padding: '9px 24px', borderRadius: 10, background: '#1a3c5e', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: addLoading ? 0.7 : 1, flex: isMobile ? 1 : 'none' }}>
            {addLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
            Add Staff
          </button>
        </DialogActions>
      </Dialog>

      {/* ══ EDIT DIALOG ══ */}
      <Dialog open={!!editTarget} onClose={closeEdit} PaperProps={{ style: paperRound }}>
        <DialogTitle style={{ paddingBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Edit style={{ color: '#92400e', fontSize: 18 }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#1a3c5e' }}>Edit Staff</span>
            </div>
            <IconButton size="small" onClick={closeEdit}><Close style={{ fontSize: 18, color: '#9e9e9e' }} /></IconButton>
          </div>
        </DialogTitle>
        <DialogContent style={{ paddingTop: 20 }}>
          <StaffFormFields form={form} setForm={setForm} errors={errors} setErrors={setErrors} showPass={showPass} setShowPass={setShowPass} loading={updateLoading} />
        </DialogContent>
        <DialogActions style={{ padding: '8px 24px 20px', gap: 8 }}>
          <button onClick={closeEdit} disabled={updateLoading}
            style={{ padding: '9px 20px', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontSize: 13, fontWeight: 500, cursor: 'pointer', flex: isMobile ? 1 : 'none' }}>
            Cancel
          </button>
          <button onClick={handleEditSave} disabled={updateLoading}
            style={{ padding: '9px 24px', borderRadius: 10, background: '#d97706', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: updateLoading ? 0.7 : 1, flex: isMobile ? 1 : 'none' }}>
            {updateLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
            Save Changes
          </button>
        </DialogActions>
      </Dialog>

      {/* ══ VIEW DIALOG ══ */}
      <Dialog open={!!viewTarget} onClose={() => setViewTarget(null)}
        PaperProps={{ style: { borderRadius: 18, maxWidth: 360, width: '100%', margin: isMobile ? '16px' : '32px' } }}>
        {viewTarget && (() => {
          const av = getAvatarColor(viewTarget.name);
          return (
            <>
              <div style={{ background: viewTarget.isActive ? '#d1fae5' : '#fee2e2', padding: '28px 24px 20px', position: 'relative' }}>
                <IconButton size="small" onClick={() => setViewTarget(null)}
                  style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.7)', padding: 4 }}>
                  <Close style={{ fontSize: 16, color: '#616161' }} />
                </IconButton>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, background: '#fff', color: av.text, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    {getInitials(viewTarget.name)}
                  </div>
                  <h2 style={{ marginTop: 12, fontWeight: 700, fontSize: 18, color: '#1f2937', textAlign: 'center', margin: '12px 0 0', wordBreak: 'break-word' }}>{viewTarget.name}</h2>
                </div>
              </div>
              <DialogContent style={{ padding: '16px 20px 20px' }}>
                {[
                  { icon: <Phone style={{ fontSize: 16, color: '#1d4ed8' }} />, iconBg: '#dbeafe', label: 'Mobile', value: viewTarget.mobile, border: true },
                  { icon: <span style={{ width: 10, height: 10, borderRadius: '50%', background: viewTarget.isActive ? '#065f46' : '#dc2626', display: 'block' }} />, iconBg: viewTarget.isActive ? '#d1fae5' : '#fee2e2', label: 'Status', value: null, border: false },
                ].map(({ icon, iconBg, label, value, border }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: border ? '1px solid #f0f0f0' : 'none' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 11, color: '#9e9e9e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                      {value
                        ? <p style={{ margin: 0, fontSize: 15, color: '#212121', fontWeight: 500 }}>{value}</p>
                        : <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 999, background: viewTarget.isActive ? '#dcfce7' : '#fee2e2', color: viewTarget.isActive ? '#15803d' : '#dc2626' }}>
                          {viewTarget.isActive ? 'Active' : 'Inactive'}
                        </span>
                      }
                    </div>
                  </div>
                ))}
              </DialogContent>
            </>
          );
        })()}
      </Dialog>

      {/* ══ DELETE DIALOG ══ */}
      <Dialog open={!!deleteTarget} onClose={() => !deleteLoading && setDeleteTarget(null)}
        PaperProps={{ style: { borderRadius: 16, padding: isMobile ? 4 : 8, maxWidth: 420, width: '100%', margin: isMobile ? '16px' : '32px' } }}>
        <DialogTitle style={{ paddingBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <WarningAmberRounded style={{ color: '#dc2626', fontSize: 22 }} />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1a3c5e' }}>Delete Staff Member</span>
          </div>
        </DialogTitle>
        <DialogContent style={{ paddingTop: 14 }}>
          <DialogContentText style={{ color: '#616161', fontSize: '0.9375rem', lineHeight: 1.6 }}>
            Are you sure you want to delete{' '}
            <strong style={{ color: '#1a3c5e' }}>{deleteTarget?.name}</strong>?{' '}
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ padding: '8px 20px 16px', gap: 8 }}>
          <button onClick={() => setDeleteTarget(null)} disabled={deleteLoading}
            style={{ flex: 1, padding: '9px 0', border: '1px solid #e5e7eb', background: '#fff', color: '#374151', borderRadius: 10, fontWeight: 500, fontSize: 13, cursor: 'pointer' }}>
            Cancel
          </button>
          <button onClick={handleDelete} disabled={deleteLoading}
            style={{ flex: 1, padding: '9px 0', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: 13, cursor: deleteLoading ? 'not-allowed' : 'pointer', opacity: deleteLoading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            {deleteLoading && <div style={{ width: 14, height: 14, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
            {deleteLoading ? 'Deleting…' : 'Yes, Delete'}
          </button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar(s => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: isMobile ? 'center' : 'right' }}
      >
        <Alert onClose={() => setSnackbar(s => ({ ...s, open: false }))} severity={snackbar.severity}
          sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: isMobile ? '90vw' : 'auto' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
} 