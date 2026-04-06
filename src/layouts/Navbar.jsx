// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   InputBase,
//   Badge,
//   Avatar,
//   Menu,
//   MenuItem,
//   Box,
//   useTheme,
//   Tooltip,
//   Chip,
//   ListItemIcon,
//   Divider,
//   CircularProgress,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   Notifications as NotificationsIcon,
//   Settings as SettingsIcon,
//   Person as PersonIcon,
//   Logout as LogoutIcon,
//   Close as CloseIcon,
//   FiberManualRecord as DotIcon,
//   KeyboardArrowDown as ArrowDownIcon,
//   Circle as CircleIcon,
// } from '@mui/icons-material';
// import { styled, alpha } from '@mui/material/styles';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getProfile } from '../../redux/slice/Vendor';
// import LogoutConfirmModal from '../Component/LogoutConfirmModal';

// const SearchIconWrap = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 1.5),
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   color: theme.palette.text.disabled,
// }));

// const StyledInput = styled(InputBase)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   flex: 1,
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(0.95, 1, 0.95, 0),
//     fontSize: '0.855rem',
//     fontFamily: '"DM Sans", sans-serif',
//     '&::placeholder': { color: theme.palette.text.disabled, opacity: 1 },
//   },
// }));

// // ── Notifications data ────────────────────────────────────────────────────────
// const notifications = [
//   { id: 1, title: 'New booking received', time: '2 minutes ago', unread: true, color: '#1565C0' },
//   { id: 2, title: 'Payment confirmed — ₹850', time: '1 hour ago', unread: true, color: '#2E7D32' },
//   { id: 3, title: 'System update completed', time: '5 hours ago', unread: false, color: '#757575' },
// ];

// // ── Component ─────────────────────────────────────────────────────────────────
// const Navbar = ({ sidebarOpen, toggleSidebar, onMobileMenuOpen, isMobile }) => {
//   const theme = useTheme();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [profileAnchor, setProfileAnchor] = useState(null);
//   const [notifAnchor, setNotifAnchor] = useState(null);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [profileData, setProfileData] = useState(null);
//   const [profileLoading, setProfileLoading] = useState(true);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   // Fetch profile data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         setProfileLoading(true);
//         const result = await dispatch(getProfile()).unwrap();
//         console.log('Profile Data:', result);
//         setProfileData(result.profile || result);
//       } catch (error) {
//         console.error('Failed to fetch profile:', error);
//       } finally {
//         setProfileLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [dispatch]);

//   const unreadCount = notifications.filter((n) => n.unread).length;

//   const closeAll = () => {
//     setProfileAnchor(null);
//     setNotifAnchor(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     navigate('/auth/login');
//   };

//   // Get initials from name
//   const getInitials = (name) => {
//     if (!name) return 'JD';
//     return name
//       .split(' ')
//       .map((n) => n[0])
//       .join('')
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   // Get role badge color
//   const getRoleColor = (role) => {
//     switch (role) {
//       case 'ADMIN':
//         return { bg: '#FF8C42', color: '#fff' };
//       case 'MANAGER':
//         return { bg: '#1565C0', color: '#fff' };
//       case 'WORKER':
//         return { bg: '#2E7D32', color: '#fff' };
//       default:
//         return { bg: '#757575', color: '#fff' };
//     }
//   };

//   const roleColor = getRoleColor(profileData?.role);
//   const userInitials = getInitials(profileData?.name);
//   const displayName = profileData?.name || 'John Doe';
//   const displayRole = profileData?.role || 'Admin';
//   const displayMobile = profileData?.mobile || '';

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: 'rgba(255,255,255,0.92)',
//           backdropFilter: 'blur(20px)',
//           WebkitBackdropFilter: 'blur(20px)',
//           borderBottom: `1px solid ${alpha('#1565C0', 0.1)}`,
//           width: '100%',
//           top: 0,
//           zIndex: 1100,
//         }}
//       >
//         <Toolbar
//           sx={{
//             px: { xs: 1.5, sm: 2.5, lg: 3 },
//             minHeight: { xs: 58, sm: 64 },
//             gap: 0.5,
//           }}
//         >
//           {/* ── Hamburger / Sidebar toggle ── */}
//           <Tooltip
//             title={
//               isMobile
//                 ? 'Open menu'
//                 : sidebarOpen
//                   ? 'Collapse sidebar'
//                   : 'Expand sidebar'
//             }
//             arrow
//           >
//             <IconButton
//               onClick={isMobile ? onMobileMenuOpen : toggleSidebar}
//               size="small"
//               sx={{
//                 color: '#1565C0',
//                 background: alpha('#1565C0', 0.08),
//                 borderRadius: '10px',
//                 width: 38,
//                 height: 38,
//                 transition: 'all 0.2s',
//                 '&:hover': {
//                   background: alpha('#1565C0', 0.15),
//                   transform: 'scale(1.05)',
//                 },
//               }}
//             >
//               <MenuIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>

//           {/* ── Page title ── */}
//           {!mobileSearchOpen && (
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
//               <Typography
//                 noWrap
//                 sx={{
//                   fontWeight: 800,
//                   fontSize: { xs: '0.95rem', sm: '1.05rem', lg: '1.1rem' },
//                   color: '#0D1B3E',
//                   letterSpacing: '-0.025em',
//                   fontFamily: '"DM Sans", sans-serif',
//                 }}
//               >
//                 Welcome back 👋 ,{displayName}
//               </Typography>
//             </Box>
//           )}

//           <Box sx={{ flex: 1 }} />



//           {/* ── Right action icons ── */}
//           <Box
//             sx={{
//               display: mobileSearchOpen ? 'none' : 'flex',
//               alignItems: 'center',
//               gap: { xs: 0.25, sm: 0.75 },
//             }}
//           >


//             {/* ── Profile button ── */}
//             <Tooltip title="Account" arrow>
//               <Box
//                 onClick={(e) => setProfileAnchor(e.currentTarget)}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 0.8,
//                   cursor: 'pointer',
//                   borderRadius: '12px',
//                   px: { xs: 0.5, sm: 1 },
//                   py: 0.5,
//                   ml: 0.5,
//                   transition: 'all 0.2s',
//                   border: '1.5px solid transparent',
//                   '&:hover': {
//                     backgroundColor: alpha('#1565C0', 0.06),
//                     borderColor: alpha('#1565C0', 0.15),
//                   },
//                 }}
//               >
//                 {profileLoading ? (
//                   <CircularProgress size={32} thickness={4} sx={{ color: '#1565C0' }} />
//                 ) : (
//                   <>
//                     <Avatar
//                       sx={{
//                         width: { xs: 32, sm: 36 },
//                         height: { xs: 32, sm: 36 },
//                         background: `linear-gradient(135deg, ${roleColor.bg} 0%, ${roleColor.bg}CC 100%)`,
//                         fontSize: { xs: '0.72rem', sm: '0.82rem' },
//                         fontWeight: 800,
//                         boxShadow: `0 2px 8px ${alpha(roleColor.bg, 0.35)}`,
//                         fontFamily: '"DM Sans", sans-serif',
//                       }}
//                     >
//                       {userInitials}
//                     </Avatar>
//                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//                       <Typography
//                         sx={{
//                           fontSize: '0.78rem',
//                           fontWeight: 700,
//                           color: '#0D1B3E',
//                           lineHeight: 1.1,
//                           fontFamily: '"DM Sans", sans-serif',
//                         }}
//                       >
//                         {displayName}
//                       </Typography>
//                       <Typography
//                         sx={{ fontSize: '0.62rem', color: '#78909C', lineHeight: 1 }}
//                       >
//                         {displayRole}
//                       </Typography>
//                     </Box>
//                     <ArrowDownIcon
//                       sx={{
//                         fontSize: 16,
//                         color: '#90A4AE',
//                         display: { xs: 'none', sm: 'block' },
//                       }}
//                     />
//                   </>
//                 )}
//               </Box>
//             </Tooltip>
//           </Box>
//         </Toolbar>

//         {/* ── Mobile search overlay ── */}
//         {mobileSearchOpen && (
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               height: { xs: 58, sm: 64 },
//               backgroundColor: '#fff',
//               zIndex: 1400,
//               display: 'flex',
//               alignItems: 'center',
//               px: 2,
//               gap: 1,
//               borderBottom: `1px solid ${alpha('#1565C0', 0.1)}`,
//               boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//             }}
//           >
//             <SearchIcon sx={{ color: '#90A4AE', fontSize: 20 }} />
//             <InputBase
//               autoFocus
//               placeholder="Search bookings, vehicles, drivers…"
//               fullWidth
//               sx={{
//                 fontSize: '0.875rem',
//                 color: '#0D1B3E',
//                 fontFamily: '"DM Sans", sans-serif',
//               }}
//             />
//             <IconButton size="small" onClick={() => setMobileSearchOpen(false)}>
//               <CloseIcon fontSize="small" sx={{ color: '#90A4AE' }} />
//             </IconButton>
//           </Box>
//         )}

//         {/* ── Profile Menu ── */}
//         <Menu
//           anchorEl={profileAnchor}
//           open={Boolean(profileAnchor)}
//           onClose={closeAll}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               mt: 1.5,
//               borderRadius: '16px',
//               minWidth: 260,
//               border: `1.5px solid ${alpha('#1565C0', 0.12)}`,
//               boxShadow: '0 8px 40px rgba(21,101,192,0.12)',
//               overflow: 'visible',
//               '&::before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: -7,
//                 right: 18,
//                 width: 13,
//                 height: 13,
//                 backgroundColor: '#fff',
//                 transform: 'rotate(45deg)',
//                 borderTop: `1.5px solid ${alpha('#1565C0', 0.12)}`,
//                 borderLeft: `1.5px solid ${alpha('#1565C0', 0.12)}`,
//               },
//             },
//           }}
//         >
//           {/* Profile header */}
//           <Box sx={{ px: 2.5, py: 2, borderBottom: `1px solid ${alpha('#1565C0', 0.08)}` }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//               <Avatar
//                 sx={{
//                   width: 44,
//                   height: 44,
//                   background: `linear-gradient(135deg, ${roleColor.bg} 0%, ${roleColor.bg}CC 100%)`,
//                   fontWeight: 800,
//                   fontSize: '1rem',
//                   boxShadow: `0 3px 10px ${alpha(roleColor.bg, 0.3)}`,
//                 }}
//               >
//                 {userInitials}
//               </Avatar>
//               <Box>
//                 <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#0D1B3E' }}>
//                   {displayName}
//                 </Typography>
//                 <Typography sx={{ fontSize: '0.7rem', color: '#78909C', mb: 0.5 }}>
//                   {displayRole}
//                 </Typography>
//                 {displayMobile && (
//                   <Typography sx={{ fontSize: '0.65rem', color: '#90A4AE' }}>
//                     📞 {displayMobile}
//                   </Typography>
//                 )}
//               </Box>
//             </Box>
//           </Box>

//           <Box sx={{ p: 0.75 }}>
//             <MenuItem
//               onClick={closeAll}
//               sx={{
//                 borderRadius: '10px',
//                 py: 1.2,
//                 px: 1.5,
//                 gap: 1.2,
//                 '&:hover': { backgroundColor: alpha('#1565C0', 0.06) },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 'auto' }}>
//                 <PersonIcon sx={{ fontSize: 18, color: '#546E7A' }} />
//               </ListItemIcon>
//               <Typography sx={{ fontSize: '0.84rem', fontWeight: 600, color: '#263238' }}>
//                 My Profile
//               </Typography>
//             </MenuItem>

//             <Divider sx={{ my: 0.5, borderColor: alpha('#1565C0', 0.08) }} />

//             <MenuItem
//               onClick={() => {
//                 closeAll();
//                 setShowLogoutModal(true);
//               }}
//               sx={{
//                 borderRadius: '10px',
//                 py: 1.2,
//                 px: 1.5,
//                 gap: 1.2,
//                 '&:hover': { backgroundColor: alpha('#FF3B5C', 0.06) },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 'auto' }}>
//                 <LogoutIcon sx={{ fontSize: 18, color: '#FF3B5C' }} />
//               </ListItemIcon>
//               <Typography sx={{ fontSize: '0.84rem', fontWeight: 600, color: '#FF3B5C' }}>
//                 Logout
//               </Typography>
//             </MenuItem>
//           </Box>
//         </Menu>

//         {/* ── Notifications Menu ── */}
//         <Menu
//           anchorEl={notifAnchor}
//           open={Boolean(notifAnchor)}
//           onClose={closeAll}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               mt: 1.5,
//               borderRadius: '16px',
//               width: { xs: 300, sm: 360 },
//               maxHeight: 440,
//               border: `1.5px solid ${alpha('#1565C0', 0.12)}`,
//               boxShadow: '0 8px 40px rgba(21,101,192,0.12)',
//             },
//           }}
//         >
//           {/* Header */}
//           <Box
//             sx={{
//               px: 2.5,
//               py: 1.8,
//               borderBottom: `1px solid ${alpha('#1565C0', 0.08)}`,
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}
//           >
//             <Typography sx={{ fontWeight: 800, fontSize: '0.92rem', color: '#0D1B3E' }}>
//               Notifications
//             </Typography>
//             {unreadCount > 0 && (
//               <Chip
//                 label={`${unreadCount} unread`}
//                 size="small"
//                 sx={{
//                   height: 22,
//                   fontSize: '0.64rem',
//                   fontWeight: 700,
//                   backgroundColor: alpha('#1565C0', 0.1),
//                   color: '#1565C0',
//                   borderRadius: '8px',
//                 }}
//               />
//             )}
//           </Box>

//           <Box sx={{ p: 0.75 }}>
//             {notifications.map((n) => (
//               <MenuItem
//                 key={n.id}
//                 onClick={closeAll}
//                 sx={{
//                   borderRadius: '12px',
//                   py: 1.5,
//                   px: 1.5,
//                   alignItems: 'flex-start',
//                   gap: 1.5,
//                   mb: 0.3,
//                   backgroundColor: n.unread ? alpha(n.color, 0.04) : 'transparent',
//                   '&:hover': { backgroundColor: alpha(n.color, 0.08) },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 8,
//                     height: 8,
//                     borderRadius: '50%',
//                     backgroundColor: n.unread ? n.color : '#CFD8DC',
//                     mt: 0.6,
//                     flexShrink: 0,
//                   }}
//                 />
//                 <Box sx={{ flex: 1 }}>
//                   <Typography
//                     sx={{
//                       fontWeight: n.unread ? 700 : 400,
//                       fontSize: '0.82rem',
//                       color: n.unread ? '#0D1B3E' : '#546E7A',
//                       lineHeight: 1.35,
//                     }}
//                   >
//                     {n.title}
//                   </Typography>
//                   <Typography sx={{ fontSize: '0.68rem', color: '#90A4AE', mt: 0.4, fontWeight: 500 }}>
//                     {n.time}
//                   </Typography>
//                 </Box>
//               </MenuItem>
//             ))}
//           </Box>

//           <Box
//             sx={{
//               px: 2,
//               py: 1.2,
//               borderTop: `1px solid ${alpha('#1565C0', 0.08)}`,
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '0.78rem',
//                 fontWeight: 700,
//                 color: '#1565C0',
//                 cursor: 'pointer',
//                 '&:hover': { textDecoration: 'underline' },
//               }}
//             >
//               View all notifications
//             </Typography>
//           </Box>
//         </Menu>
//       </AppBar>

//       {/* Logout Modal - MUST be outside all menus */}
//       <LogoutConfirmModal
//         open={showLogoutModal}
//         onClose={() => setShowLogoutModal(false)}
//         onConfirm={handleLogout}
//       />
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  useTheme,
  Tooltip,
  Chip,
  ListItemIcon,
  Divider,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
  FiberManualRecord as DotIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Circle as CircleIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProfile } from '../../redux/slice/Vendor';
import LogoutConfirmModal from '../Component/LogoutConfirmModal';

const SearchIconWrap = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.disabled,
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  flex: 1,
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.95, 1, 0.95, 0),
    fontSize: '0.855rem',
    fontFamily: '"DM Sans", sans-serif',
    '&::placeholder': { color: theme.palette.text.disabled, opacity: 1 },
  },
}));

// ── Notifications data ────────────────────────────────────────────────────────
const notifications = [
  { id: 1, title: 'New booking received', time: '2 minutes ago', unread: true, color: '#1565C0' },
  { id: 2, title: 'Payment confirmed — ₹850', time: '1 hour ago', unread: true, color: '#2E7D32' },
  { id: 3, title: 'System update completed', time: '5 hours ago', unread: false, color: '#757575' },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Navbar = ({ sidebarOpen, toggleSidebar, onMobileMenuOpen, isMobile }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Responsive breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [profileAnchor, setProfileAnchor] = useState(null);
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setProfileLoading(true);
        const result = await dispatch(getProfile()).unwrap();
        console.log('Profile Data:', result);
        setProfileData(result.profile || result);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setProfileLoading(false);
      }
    };
    fetchProfile();
  }, [dispatch]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const closeAll = () => {
    setProfileAnchor(null);
    setNotifAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  // Get initials from name
  const getInitials = (name) => {
    if (!name) return 'JD';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get role badge color
  const getRoleColor = (role) => {
    switch (role) {
      case 'ADMIN':
        return { bg: '#FF8C42', color: '#fff' };
      case 'MANAGER':
        return { bg: '#1565C0', color: '#fff' };
      case 'WORKER':
        return { bg: '#2E7D32', color: '#fff' };
      default:
        return { bg: '#757575', color: '#fff' };
    }
  };

  const roleColor = getRoleColor(profileData?.role);
  const userInitials = getInitials(profileData?.name);
  const displayName = profileData?.name || 'John Doe';
  const displayRole = profileData?.role || 'Admin';
  const displayMobile = profileData?.mobile || '';

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${alpha('#1565C0', 0.1)}`,
          width: '100%',
          top: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 1, sm: 1.5, md: 2.5, lg: 3 },
            minHeight: { xs: 56, sm: 60, md: 64 },
            gap: { xs: 0.5, sm: 0.5, md: 1 },
          }}
        >
          {/* ── Hamburger / Sidebar toggle ── */}
          <Tooltip
            title={
              isMobile
                ? 'Open menu'
                : sidebarOpen
                  ? 'Collapse sidebar'
                  : 'Expand sidebar'
            }
            arrow
          >
            <IconButton
              onClick={isMobile ? onMobileMenuOpen : toggleSidebar}
              size="small"
              sx={{
                color: '#1565C0',
                // background: alpha('#1565C0', 0.08),
                borderRadius: '10px',
                width: { xs: 32, sm: 35, md: 38 },
                height: { xs: 32, sm: 35, md: 38 },
                transition: 'all 0.2s',
                // '&:hover': {
                //   background: alpha('#1565C0', 0.15),
                //   transform: 'scale(1.05)',
                // },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {/* ── Page title ── */}
          {!mobileSearchOpen && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
              <Typography
                noWrap
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem', lg: '1.1rem' },
                  color: '#0D1B3E',
                  letterSpacing: '-0.025em',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                Welcome back 👋
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem', lg: '1.1rem' },
                  color: '#1565C0',
                  letterSpacing: '-0.025em',
                  fontFamily: '"DM Sans", sans-serif',
                  maxWidth: { xs: 100, sm: 150, md: 200 },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {displayName.split(' ')[0]}
              </Typography>
            </Box>
          )}

          <Box sx={{ flex: 1 }} />

          {/* ── Right action icons ── */}
          <Box
            sx={{
              display: mobileSearchOpen ? 'none' : 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
          

            {/* ── Profile button ── */}
            <Tooltip title="Account" arrow>
              <Box
                onClick={(e) => setProfileAnchor(e.currentTarget)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 0.5, sm: 0.8 },
                  cursor: 'pointer',
                  borderRadius: '12px',
                  px: { xs: 0.5, sm: 0.8, md: 1 },
                  py: 0.5,
                  transition: 'all 0.2s',
                  border: '1.5px solid transparent',
                  '&:hover': {
                    backgroundColor: alpha('#1565C0', 0.06),
                    borderColor: alpha('#1565C0', 0.15),
                  },
                }}
              >
                {profileLoading ? (
                  <CircularProgress size={{ xs: 28, sm: 32, md: 36 }} thickness={4} sx={{ color: '#1565C0' }} />
                ) : (
                  <>
                    <Avatar
                      sx={{
                        width: { xs: 28, sm: 32, md: 36 },
                        height: { xs: 28, sm: 32, md: 36 },
                        background: `linear-gradient(135deg, ${roleColor.bg} 0%, ${roleColor.bg}CC 100%)`,
                        fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.82rem' },
                        fontWeight: 800,
                        boxShadow: `0 2px 8px ${alpha(roleColor.bg, 0.35)}`,
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {userInitials}
                    </Avatar>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.78rem' },
                          fontWeight: 700,
                          color: '#0D1B3E',
                          lineHeight: 1.1,
                          fontFamily: '"DM Sans", sans-serif',
                          maxWidth: { sm: 100, md: 150 },
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {displayName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.62rem' },
                          color: '#78909C',
                          lineHeight: 1
                        }}
                      >
                        {displayRole}
                      </Typography>
                    </Box>
                    <ArrowDownIcon
                      sx={{
                        fontSize: { xs: 14, sm: 16 },
                        color: '#90A4AE',
                        display: { xs: 'none', sm: 'block' },
                      }}
                    />
                  </>
                )}
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>


        {/* ── Profile Menu (Smaller on mobile) ── */}
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={closeAll}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: 1.5,
              borderRadius: { xs: '12px', sm: '16px' },
              minWidth: { xs: 220, sm: 260 },
              border: `1.5px solid ${alpha('#1565C0', 0.12)}`,
              boxShadow: '0 8px 40px rgba(21,101,192,0.12)',
              overflow: 'visible',
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: -7,
                right: 18,
                width: 13,
                height: 13,
                backgroundColor: '#fff',
                transform: 'rotate(45deg)',
                borderTop: `1.5px solid ${alpha('#1565C0', 0.12)}`,
                borderLeft: `1.5px solid ${alpha('#1565C0', 0.12)}`,
              },
            },
          }}
        >
          {/* Profile header - Smaller on mobile */}
          <Box sx={{
            px: { xs: 1.5, sm: 2.5 },
            py: { xs: 1.5, sm: 2 },
            borderBottom: `1px solid ${alpha('#1565C0', 0.08)}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
              <Avatar
                sx={{
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  background: `linear-gradient(135deg, ${roleColor.bg} 0%, ${roleColor.bg}CC 100%)`,
                  fontWeight: 800,
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  boxShadow: `0 3px 10px ${alpha(roleColor.bg, 0.3)}`,
                }}
              >
                {userInitials}
              </Avatar>
              <Box>
                <Typography sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  color: '#0D1B3E'
                }}>
                  {displayName}
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.6rem', sm: '0.7rem' },
                  color: '#78909C',
                  mb: 0.5
                }}>
                  {displayRole}
                </Typography>
                {displayMobile && (
                  <Typography sx={{
                    fontSize: { xs: '0.55rem', sm: '0.65rem' },
                    color: '#90A4AE'
                  }}>
                    📞 {displayMobile}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ p: { xs: 0.5, sm: 0.75 } }}>
            <MenuItem
              onClick={closeAll}
              sx={{
                borderRadius: '10px',
                py: { xs: 1, sm: 1.2 },
                px: { xs: 1.2, sm: 1.5 },
                gap: 1.2,
                '&:hover': { backgroundColor: alpha('#1565C0', 0.06) },
              }}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <PersonIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#546E7A' }} />
              </ListItemIcon>
              <Typography sx={{
                fontSize: { xs: '0.75rem', sm: '0.84rem' },
                fontWeight: 600,
                color: '#263238'
              }}>
                My Profile
              </Typography>
            </MenuItem>

            <Divider sx={{ my: 0.5, borderColor: alpha('#1565C0', 0.08) }} />

            <MenuItem
              onClick={() => {
                closeAll();
                setShowLogoutModal(true);
              }}
              sx={{
                borderRadius: '10px',
                py: { xs: 1, sm: 1.2 },
                px: { xs: 1.2, sm: 1.5 },
                gap: 1.2,
                '&:hover': { backgroundColor: alpha('#FF3B5C', 0.06) },
              }}
            >
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <LogoutIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#FF3B5C' }} />
              </ListItemIcon>
              <Typography sx={{
                fontSize: { xs: '0.75rem', sm: '0.84rem' },
                fontWeight: 600,
                color: '#FF3B5C'
              }}>
                Logout
              </Typography>
            </MenuItem>
          </Box>
        </Menu>


      </AppBar>

      {/* Logout Modal - MUST be outside all menus */}
      <LogoutConfirmModal
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;