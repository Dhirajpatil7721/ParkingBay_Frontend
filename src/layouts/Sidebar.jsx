// import React, { useEffect, useState } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Divider,
//   Tooltip,
//   Drawer,
//   IconButton,
//   Avatar,
//   Chip,
// } from '@mui/material';
// import {
//   BookOnline as BookingIcon,
//   History as HistoryIcon,
//   Analytics as AnalyticsIcon,
//   Person as ProfileIcon,
//   Store as StoreIcon,
//   Close as CloseIcon,
//   Logout as LogoutIcon,
//   FiberManualRecord as DotIcon,
//   ManageAccounts as ManageIcon,
//   LocalParking as ParkingIcon,
//   GridView as DashboardIcon,
// } from '@mui/icons-material';
// import { styled, alpha } from '@mui/material/styles';
// import { getProfile } from '../../redux/slice/Vendor';
// import { useDispatch } from 'react-redux';

// // ── Nav items ─────────────────────────────────────────────────────────────────
// const navItems = [
//   {
//     path: '/active-bookings',
//     label: 'Active Bookings',
//     icon: <BookingIcon />,
//     badgeColor: '#69F0AE',
//     badgeTextColor: '#1B5E20',
//   },
//   {
//     path: '/history',
//     label: 'History',
//     icon: <HistoryIcon />,
//   },
//   {
//     path: '/analytics',
//     label: 'Analytics',
//     icon: <AnalyticsIcon />,
//   },
//   {
//     path: '/staff-management',
//     label: 'Staff Management',
//     icon: <ManageIcon />,
//   },
//   {
//     path: '/profile-management',
//     label: 'Profile Management',
//     icon: <ProfileIcon />,
//   },
// ];

// // ── Styled helpers ────────────────────────────────────────────────────────────
// const SidebarWrap = styled(Box)(() => ({
//   height: '100%',
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   overflowY: 'auto',
//   overflowX: 'hidden',
//   // Rich deep navy-to-blue gradient
//   background: 'linear-gradient(175deg, #0A1628 0%, #0D2137 30%, #0F3460 65%, #1565C0 100%)',
//   padding: '20px 14px',
//   position: 'relative',
//   // Decorative circle blobs
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: -60,
//     right: -60,
//     width: 200,
//     height: 200,
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(21,101,192,0.35) 0%, transparent 70%)',
//     pointerEvents: 'none',
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 80,
//     left: -80,
//     width: 220,
//     height: 220,
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(2,136,209,0.2) 0%, transparent 70%)',
//     pointerEvents: 'none',
//   },
//   // Custom scrollbar
//   '&::-webkit-scrollbar': { width: 3 },
//   '&::-webkit-scrollbar-track': { background: 'transparent' },
//   '&::-webkit-scrollbar-thumb': {
//     background: 'rgba(255,255,255,0.2)',
//     borderRadius: 4,
//   },
// }));

// const NavBtn = styled(ListItemButton)(({ theme }) => ({
//   borderRadius: 12,
//   marginBottom: 2,
//   padding: '10px 14px',
//   transition: 'all 0.22s cubic-bezier(.34,1.56,.64,1)',
//   position: 'relative',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     left: 0,
//     top: '50%',
//     transform: 'translateY(-50%) scaleY(0)',
//     width: 3,
//     height: '65%',
//     borderRadius: '0 3px 3px 0',
//     backgroundColor: '#fff',
//     transition: 'transform 0.2s ease',
//   },
//   '&:hover': {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     transform: 'translateX(4px)',
//     '&::before': { transform: 'translateY(-50%) scaleY(0.6)' },
//   },
//   '&.Mui-selected': {
//     background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
//     '&::before': { transform: 'translateY(-50%) scaleY(1)' },
//     '&:hover': {
//       backgroundColor: 'rgba(255,255,255,0.22)',
//       transform: 'translateX(4px)',
//     },
//   },
// }));

// const NavIcon = styled(ListItemIcon)(() => ({
//   minWidth: 38,
//   color: 'rgba(255,255,255,0.75)',
//   '& .MuiSvgIcon-root': {
//     fontSize: '1.25rem',
//     transition: 'all 0.2s',
//   },
//   '.Mui-selected &': {
//     color: '#fff',
//     '& .MuiSvgIcon-root': { filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4))' },
//   },
// }));

// const LogoutBtn = styled(ListItemButton)(() => ({
//   borderRadius: 12,
//   padding: '10px 14px',
//   transition: 'all 0.22s ease',
//   color: 'rgba(255,255,255,0.6)',
//   '&:hover': {
//     backgroundColor: 'rgba(255,80,80,0.15)',
//     color: '#FF8A80',
//     transform: 'translateX(4px)',
//   },
// }));

// // ── Section label ─────────────────────────────────────────────────────────────
// const SectionLabel = ({ label, show }) =>
//   show ? (
//     <Typography
//       sx={{
//         color: 'rgba(255,255,255,0.3)',
//         fontSize: '0.58rem',
//         fontWeight: 700,
//         letterSpacing: 1.5,
//         textTransform: 'uppercase',
//         px: 1.8,
//         mb: 0.5,
//         mt: 1.5,
//         fontFamily: '"DM Sans", sans-serif',
//       }}
//     >
//       {label}
//     </Typography>
//   ) : (
//     <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', my: 1 }} />
//   );

// // ── Inner Sidebar Content ─────────────────────────────────────────────────────
// const SidebarContent = ({ sidebarOpen, isMobile, onClose }) => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;
//   const showLabels = isMobile || sidebarOpen;

//   const dispatch = useDispatch();
//   const [parkingSpotName, setparkingSpotName] = useState("");
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     dispatch(getProfile())
//       .then((result) => {
//         if (result.payload?.profile) {
//           setparkingSpotName(result.payload.profile.parkingSpotName);
//           setRole(result.payload.profile.role);
//         }
//       })
//       .catch((error) => {
//         console.error('❌ Error fetching profile:', error);
//       });
//   }, [dispatch]);


//   const getInitials = (str) => {
//     if (!str) return '';
//     return str
//       .split(' ')
//       .map(word => word[0])
//       .join('')
//       .toUpperCase();
//   };

//   return (
//     <SidebarWrap>

//       {/* ── Logo / Brand ── */}
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: showLabels ? 'space-between' : 'center',
//           mb: 2.5,
//           minHeight: 48,
//           position: 'relative',
//           zIndex: 1,
//         }}
//       >
//         {showLabels ? (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }}>
//               {/* Logo icon */}
//               <Box
//                 sx={{
//                   width: 38,
//                   height: 38,
//                   borderRadius: '12px',
//                   background: 'linear-gradient(135deg, #1976D2, #0288D1)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   boxShadow: '0 4px 16px rgba(2,136,209,0.5)',
//                   border: '1.5px solid rgba(255,255,255,0.2)',
//                   flexShrink: 0,
//                 }}
//               >
//                 <ParkingIcon sx={{ color: '#fff', fontSize: 20 }} />
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{
//                     color: '#fff',
//                     fontWeight: 800,
//                     fontSize: '1rem',
//                     letterSpacing: '-0.02em',
//                     lineHeight: 1,
//                     fontFamily: '"DM Sans", sans-serif',
//                   }}
//                 >
//                   Vendor Panel
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: 'rgba(255,255,255,0.4)',
//                     fontSize: '0.58rem',
//                     letterSpacing: 2,
//                     fontWeight: 600,
//                     textTransform: 'uppercase',
//                   }}
//                 >
//                   Parking Bay
//                 </Typography>
//               </Box>
//             </Box>

//             {/* Close button on mobile */}
//             {isMobile && (
//               <IconButton
//                 onClick={onClose}
//                 size="small"
//                 sx={{
//                   color: 'rgba(255,255,255,0.6)',
//                   background: 'rgba(255,255,255,0.08)',
//                   borderRadius: '10px',
//                   width: 32,
//                   height: 32,
//                   '&:hover': { background: 'rgba(255,255,255,0.15)', color: '#fff' },
//                 }}
//               >
//                 <CloseIcon sx={{ fontSize: 16 }} />
//               </IconButton>
//             )}
//           </>
//         ) : (
//           <Tooltip title="Vendor Panel — Parking System" placement="right" arrow>
//             <Box
//               sx={{
//                 width: 38,
//                 height: 38,
//                 borderRadius: '12px',
//                 background: 'linear-gradient(135deg, #1976D2, #0288D1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 4px 16px rgba(2,136,209,0.4)',
//               }}
//             >
//               <ParkingIcon sx={{ color: '#fff', fontSize: 20 }} />
//             </Box>
//           </Tooltip>
//         )}
//       </Box>

//       {/* ── Vendor / User Card ── */}
//       {showLabels ? (
//         <Box
//           sx={{
//             background: 'rgba(255,255,255,0.07)',
//             border: '1px solid rgba(255,255,255,0.12)',
//             borderRadius: '14px',
//             px: 1.8,
//             py: 1.4,
//             mb: 2.5,
//             backdropFilter: 'blur(12px)',
//             position: 'relative',
//             zIndex: 1,
//             overflow: 'hidden',
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               right: 0,
//               width: '40%',
//               height: '100%',
//               background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03))',
//             },
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }}>
//             <Avatar
//               sx={{
//                 width: 40,
//                 height: 40,
//                 background: 'linear-gradient(135deg, #FF8C42 0%, #FF3B5C 100%)',
//                 fontSize: '0.88rem',
//                 fontWeight: 800,
//                 boxShadow: '0 3px 12px rgba(255,60,80,0.4)',
//                 flexShrink: 0,
//                 fontFamily: '"DM Sans", sans-serif',
//               }}
//             >
//               {parkingSpotName && getInitials(parkingSpotName)}
//             </Avatar>
//             <Box sx={{ flex: 1, minWidth: 0 }}>
//               <Typography
//                 noWrap
//                 sx={{
//                   color: '#fff',
//                   fontWeight: 700,
//                   fontSize: '0.84rem',
//                   lineHeight: 1.2,
//                   fontFamily: '"DM Sans", sans-serif',
//                 }}
//               >
//                 {parkingSpotName}
//               </Typography>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mt: 0.4 }}>
//                 <Box
//                   sx={{
//                     width: 6,
//                     height: 6,
//                     borderRadius: '50%',
//                     backgroundColor: '#69F0AE',
//                     flexShrink: 0,
//                     boxShadow: '0 0 6px #69F0AE',
//                     animation: 'glow 2s infinite',
//                     '@keyframes glow': {
//                       '0%,100%': { boxShadow: '0 0 4px #69F0AE' },
//                       '50%': { boxShadow: '0 0 10px #69F0AE' },
//                     },
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     color: 'rgba(255,255,255,0.55)',
//                     fontSize: '0.62rem',
//                     fontWeight: 600,
//                     letterSpacing: 0.3,
//                   }}
//                 >
//                   {role}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       ) : (
//         <Tooltip title="John Doe's Parking — Premium Active" placement="right" arrow>
//           <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
//             <Avatar
//               sx={{
//                 width: 36,
//                 height: 36,
//                 background: 'linear-gradient(135deg, #FF8C42 0%, #FF3B5C 100%)',
//                 fontSize: '0.75rem',
//                 fontWeight: 800,
//                 boxShadow: '0 3px 10px rgba(255,60,80,0.4)',
//               }}
//             >
//               {parkingSpotName && getInitials(parkingSpotName)}
//             </Avatar>
//           </Box>
//         </Tooltip>
//       )}

//       <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 1 }} />

//       {/* ── Navigation Items ── */}
//       <List disablePadding sx={{ flex: 1, position: 'relative', zIndex: 1 }}>

//         {/* <SectionLabel label="Navigation" show={showLabels} /> */}

//         {navItems.map((item) => (
//           <ListItem key={item.path} disablePadding sx={{ mb: 0.25 }}>
//             {!showLabels ? (
//               <Tooltip title={item.label} placement="right" arrow>
//                 <NavBtn
//                   component={RouterLink}
//                   to={item.path}
//                   selected={isActive(item.path)}
//                   sx={{ justifyContent: 'center', px: 1 }}
//                 >
//                   <NavIcon sx={{ minWidth: 'auto' }}>{item.icon}</NavIcon>
//                 </NavBtn>
//               </Tooltip>
//             ) : (
//               <NavBtn
//                 component={RouterLink}
//                 to={item.path}
//                 selected={isActive(item.path)}
//                 onClick={isMobile ? onClose : undefined}
//                 sx={{ justifyContent: 'space-between' }}
//               >
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1 }}>
//                   <NavIcon>{item.icon}</NavIcon>
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       sx: {
//                         color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.75)',
//                         fontWeight: isActive(item.path) ? 700 : 500,
//                         fontSize: '0.86rem',
//                         letterSpacing: '0.1px',
//                         whiteSpace: 'nowrap',
//                         fontFamily: '"DM Sans", sans-serif',
//                         transition: 'color 0.2s',
//                       },
//                     }}
//                   />
//                 </Box>
//                 {/* Badge */}
//                 {item.badge && (
//                   <Box
//                     sx={{
//                       backgroundColor: item.badgeColor || 'rgba(255,255,255,0.2)',
//                       color: item.badgeTextColor || '#fff',
//                       fontSize: '0.6rem',
//                       fontWeight: 800,
//                       borderRadius: '6px',
//                       px: 0.7,
//                       py: 0.15,
//                       lineHeight: 1.5,
//                       minWidth: 20,
//                       textAlign: 'center',
//                     }}
//                   >
//                     {item.badge}
//                   </Box>
//                 )}
//               </NavBtn>
//             )}
//           </ListItem>
//         ))}
//       </List>

//       {/* ── Logout ── */}
//       <Box sx={{ mt: 'auto', pt: 1.5, position: 'relative', zIndex: 1 }}>
//         <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 1.5 }} />

//         {!showLabels ? (
//           <Tooltip title="Logout" placement="right" arrow>
//             <LogoutBtn sx={{ justifyContent: 'center', px: 1 }}>
//               <NavIcon sx={{ minWidth: 'auto' }}>
//                 <LogoutIcon />
//               </NavIcon>
//             </LogoutBtn>
//           </Tooltip>
//         ) : (
//           <LogoutBtn>
//             <NavIcon>
//               <LogoutIcon />
//             </NavIcon>
//             <ListItemText
//               primary="Logout"
//               primaryTypographyProps={{
//                 sx: {
//                   color: 'inherit',
//                   fontWeight: 600,
//                   fontSize: '0.86rem',
//                   whiteSpace: 'nowrap',
//                   fontFamily: '"DM Sans", sans-serif',
//                 },
//               }}
//             />
//           </LogoutBtn>
//         )}


//       </Box>
//     </SidebarWrap>
//   );
// };

// // ── Main Sidebar Export ───────────────────────────────────────────────────────
// const Sidebar = ({ sidebarOpen, mobileOpen, onClose, onToggle, isMobile }) => {

//   if (isMobile) {
//     return (
//       <Drawer
//         variant="temporary"
//         anchor="left"
//         open={mobileOpen}
//         onClose={onClose}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           // Show as drawer for xs, sm, md (all < lg = 1200px)
//           display: { xs: 'block', lg: 'none' },
//           '& .MuiDrawer-paper': {
//             // Mobile: 78% | Tablet: 50% | capped at 320px
//             width: { xs: '78%', sm: '50%', md: '38%' },
//             maxWidth: 320,
//             backgroundColor: 'transparent',
//             border: 'none',
//             boxSizing: 'border-box',
//             boxShadow: '8px 0 40px rgba(0,0,0,0.35)',
//           },
//           '& .MuiBackdrop-root': {
//             backdropFilter: 'blur(4px)',
//             backgroundColor: 'rgba(0,0,0,0.5)',
//           },
//         }}
//       >
//         <SidebarContent sidebarOpen={true} isMobile={true} onClose={onClose} />
//       </Drawer>
//     );
//   }

//   // ── Desktop fixed sidebar (lg+)
//   return (
//     <SidebarContent
//       sidebarOpen={sidebarOpen}
//       isMobile={false}
//       onClose={onClose}
//     />
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
  Drawer,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  BookOnline as BookingIcon,
  History as HistoryIcon,
  Analytics as AnalyticsIcon,
  Person as ProfileIcon,
  Close as CloseIcon,
  Logout as LogoutIcon,
  ManageAccounts as ManageIcon,
  LocalParking as ParkingIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../redux/slice/Vendor';
import { logoutUser } from '../../redux/slice/authSlice';
import LogoutConfirmModal from '../Component/LogoutConfirmModal';

// ── Nav items ──────────────────────────────────────────────────
const navItems = [
  { path: '/active-bookings',    label: 'Active Bookings',    icon: <BookingIcon />,  badgeColor: '#69F0AE', badgeTextColor: '#1B5E20' },
  { path: '/history',            label: 'History',            icon: <HistoryIcon /> },
  { path: '/analytics',          label: 'Analytics',          icon: <AnalyticsIcon /> },
  { path: '/staff-management',   label: 'Staff Management',   icon: <ManageIcon /> },
  { path: '/profile-management', label: 'Profile Management', icon: <ProfileIcon /> },
];

// ── Styled components ──────────────────────────────────────────
const SidebarWrap = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overflowX: 'hidden',
  background: 'linear-gradient(175deg, #0A1628 0%, #0D2137 30%, #0F3460 65%, #1565C0 100%)',
  padding: '20px 14px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -60, right: -60,
    width: 200, height: 200,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(21,101,192,0.35) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 80, left: -80,
    width: 220, height: 220,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(2,136,209,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::-webkit-scrollbar': { width: 3 },
  '&::-webkit-scrollbar-track': { background: 'transparent' },
  '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.2)', borderRadius: 4 },
}));

const NavBtn = styled(ListItemButton)(() => ({
  borderRadius: 12,
  marginBottom: 2,
  padding: '10px 14px',
  transition: 'all 0.22s cubic-bezier(.34,1.56,.64,1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0, top: '50%',
    transform: 'translateY(-50%) scaleY(0)',
    width: 3, height: '65%',
    borderRadius: '0 3px 3px 0',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: 'translateX(4px)',
    '&::before': { transform: 'translateY(-50%) scaleY(0.6)' },
  },
  '&.Mui-selected': {
    background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    '&::before': { transform: 'translateY(-50%) scaleY(1)' },
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.22)',
      transform: 'translateX(4px)',
    },
  },
}));

const NavIcon = styled(ListItemIcon)(() => ({
  minWidth: 38,
  color: 'rgba(255,255,255,0.75)',
  '& .MuiSvgIcon-root': { fontSize: '1.25rem', transition: 'all 0.2s' },
  '.Mui-selected &': {
    color: '#fff',
    '& .MuiSvgIcon-root': { filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.4))' },
  },
}));

const LogoutBtn = styled(ListItemButton)(() => ({
  borderRadius: 12,
  padding: '10px 14px',
  transition: 'all 0.22s ease',
  color: 'rgba(255,255,255,0.6)',
  '&:hover': {
    backgroundColor: 'rgba(255,80,80,0.15)',
    color: '#FF8A80',
    transform: 'translateX(4px)',
  },
}));

// ── Sidebar Content ────────────────────────────────────────────
const SidebarContent = ({ sidebarOpen, isMobile, onClose }) => {
  const location  = useLocation();
  const dispatch  = useDispatch();
  const navigate  = useNavigate();

  const isActive  = (path) => location.pathname === path;
  const showLabels = isMobile || sidebarOpen;

  const [parkingSpotName, setParkingSpotName] = useState('');
  const [role, setRole]                       = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false); // ✅ logout modal state

  useEffect(() => {
    dispatch(getProfile())
      .then((result) => {
        if (result.payload?.profile) {
          setParkingSpotName(result.payload.profile.parkingSpotName);
          setRole(result.payload.profile.role);
        }
      })
      .catch((err) => console.error('❌ Profile fetch error:', err));
  }, [dispatch]);

  const getInitials = (str) => {
    if (!str) return '';
    return str.split(' ').map((w) => w[0]).join('').toUpperCase();
  };

  // ✅ Full logout: API + Redux + localStorage + navigate
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch (err) {
      console.error('Logout API failed, clearing frontend anyway:', err);
    } finally {
      localStorage.clear();
      sessionStorage.clear();
      navigate('/auth/login', { replace: true });
    }
  };

  return (
    <SidebarWrap>

      {/* ── Logo ── */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: showLabels ? 'space-between' : 'center',
        mb: 2.5, minHeight: 48,
        position: 'relative', zIndex: 1,
      }}>
        {showLabels ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }}>
              <Box sx={{
                width: 38, height: 38, borderRadius: '12px',
                background: 'linear-gradient(135deg, #1976D2, #0288D1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(2,136,209,0.5)',
                border: '1.5px solid rgba(255,255,255,0.2)', flexShrink: 0,
              }}>
                <ParkingIcon sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography sx={{
                  color: '#fff', fontWeight: 800, fontSize: '1rem',
                  letterSpacing: '-0.02em', lineHeight: 1,
                  fontFamily: '"DM Sans", sans-serif',
                }}>
                  Vendor Panel
                </Typography>
                <Typography sx={{
                  color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem',
                  letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase',
                }}>
                  Parking Bay
                </Typography>
              </Box>
            </Box>

            {isMobile && (
              <IconButton onClick={onClose} size="small" sx={{
                color: 'rgba(255,255,255,0.6)',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '10px', width: 32, height: 32,
                '&:hover': { background: 'rgba(255,255,255,0.15)', color: '#fff' },
              }}>
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            )}
          </>
        ) : (
          <Tooltip title="Vendor Panel — Parking System" placement="right" arrow>
            <Box sx={{
              width: 38, height: 38, borderRadius: '12px',
              background: 'linear-gradient(135deg, #1976D2, #0288D1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(2,136,209,0.4)',
            }}>
              <ParkingIcon sx={{ color: '#fff', fontSize: 20 }} />
            </Box>
          </Tooltip>
        )}
      </Box>

      {/* ── User Card ── */}
      {showLabels ? (
        <Box sx={{
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '14px', px: 1.8, py: 1.4, mb: 2.5,
          backdropFilter: 'blur(12px)',
          position: 'relative', zIndex: 1, overflow: 'hidden',
          '&::after': {
            content: '""', position: 'absolute', top: 0, right: 0,
            width: '40%', height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03))',
          },
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }}>
            <Avatar sx={{
              width: 40, height: 40,
              background: 'linear-gradient(135deg, #FF8C42 0%, #FF3B5C 100%)',
              fontSize: '0.88rem', fontWeight: 800,
              boxShadow: '0 3px 12px rgba(255,60,80,0.4)',
              flexShrink: 0, fontFamily: '"DM Sans", sans-serif',
            }}>
              {getInitials(parkingSpotName)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography noWrap sx={{
                color: '#fff', fontWeight: 700, fontSize: '0.84rem',
                lineHeight: 1.2, fontFamily: '"DM Sans", sans-serif',
              }}>
                {parkingSpotName}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mt: 0.4 }}>
                <Box sx={{
                  width: 6, height: 6, borderRadius: '50%',
                  backgroundColor: '#69F0AE', flexShrink: 0,
                  boxShadow: '0 0 6px #69F0AE',
                  animation: 'glow 2s infinite',
                  '@keyframes glow': {
                    '0%,100%': { boxShadow: '0 0 4px #69F0AE' },
                    '50%':     { boxShadow: '0 0 10px #69F0AE' },
                  },
                }} />
                <Typography sx={{
                  color: 'rgba(255,255,255,0.55)', fontSize: '0.62rem',
                  fontWeight: 600, letterSpacing: 0.3,
                }}>
                  {role}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Tooltip title={`${parkingSpotName || 'Vendor'} — Active`} placement="right" arrow>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
            <Avatar sx={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #FF8C42 0%, #FF3B5C 100%)',
              fontSize: '0.75rem', fontWeight: 800,
              boxShadow: '0 3px 10px rgba(255,60,80,0.4)',
            }}>
              {getInitials(parkingSpotName)}
            </Avatar>
          </Box>
        </Tooltip>
      )}

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 1 }} />

      {/* ── Nav Items ── */}
      <List disablePadding sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 0.25 }}>
            {!showLabels ? (
              <Tooltip title={item.label} placement="right" arrow>
                {/* span needed so Tooltip can attach its ref */}
                <span style={{ display: 'block', width: '100%' }}>
                  <NavBtn
                    component={RouterLink}
                    to={item.path}
                    selected={isActive(item.path)}
                    sx={{ justifyContent: 'center', px: 1 }}
                  >
                    <NavIcon sx={{ minWidth: 'auto' }}>{item.icon}</NavIcon>
                  </NavBtn>
                </span>
              </Tooltip>
            ) : (
              <NavBtn
                component={RouterLink}
                to={item.path}
                selected={isActive(item.path)}
                onClick={isMobile ? onClose : undefined}
                sx={{ justifyContent: 'space-between' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <NavIcon>{item.icon}</NavIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.75)',
                        fontWeight: isActive(item.path) ? 700 : 500,
                        fontSize: '0.86rem',
                        letterSpacing: '0.1px',
                        whiteSpace: 'nowrap',
                        fontFamily: '"DM Sans", sans-serif',
                        transition: 'color 0.2s',
                      },
                    }}
                  />
                </Box>
                {item.badge && (
                  <Box sx={{
                    backgroundColor: item.badgeColor || 'rgba(255,255,255,0.2)',
                    color: item.badgeTextColor || '#fff',
                    fontSize: '0.6rem', fontWeight: 800,
                    borderRadius: '6px', px: 0.7, py: 0.15,
                    lineHeight: 1.5, minWidth: 20, textAlign: 'center',
                  }}>
                    {item.badge}
                  </Box>
                )}
              </NavBtn>
            )}
          </ListItem>
        ))}
      </List>

      {/* ── Logout ── */}
      <Box sx={{ mt: 'auto', pt: 1.5, position: 'relative', zIndex: 1 }}>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 1.5 }} />

        {!showLabels ? (
          <Tooltip title="Logout" placement="right" arrow>
            <span style={{ display: 'block' }}>
              <LogoutBtn
                onClick={() => setShowLogoutModal(true)}
                sx={{ justifyContent: 'center', px: 1 }}
              >
                <NavIcon sx={{ minWidth: 'auto' }}>
                  <LogoutIcon />
                </NavIcon>
              </LogoutBtn>
            </span>
          </Tooltip>
        ) : (
          <LogoutBtn onClick={() => setShowLogoutModal(true)}>
            <NavIcon>
              <LogoutIcon />
            </NavIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                sx: {
                  color: 'inherit',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  whiteSpace: 'nowrap',
                  fontFamily: '"DM Sans", sans-serif',
                },
              }}
            />
          </LogoutBtn>
        )}
      </Box>

      {/* ✅ Logout Confirm Modal — lives right here, no extra file needed */}
      <LogoutConfirmModal
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

    </SidebarWrap>
  );
};

// ── Main Sidebar Export ────────────────────────────────────────
const Sidebar = ({ sidebarOpen, mobileOpen, onClose, onToggle, isMobile }) => {
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: '78%', sm: '50%', md: '38%' },
            maxWidth: 320,
            backgroundColor: 'transparent',
            border: 'none',
            boxSizing: 'border-box',
            boxShadow: '8px 0 40px rgba(0,0,0,0.35)',
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <SidebarContent sidebarOpen={true} isMobile={true} onClose={onClose} />
      </Drawer>
    );
  }

  return (
    <SidebarContent sidebarOpen={sidebarOpen} isMobile={false} onClose={onClose} />
  );
};

export default Sidebar;