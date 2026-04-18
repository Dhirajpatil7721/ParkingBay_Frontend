// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box, useTheme, useMediaQuery } from '@mui/material';
// import Sidebar from './Sidebar';
// import DashboardNavbar from './Navbar';

// const SIDEBAR_COLLAPSED_WIDTH = 72;

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [mobileOpen, setMobileOpen]   = useState(false);
//   const theme = useTheme();

//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
//   const isXL     = useMediaQuery(theme.breakpoints.up('xl'));

//   const sidebarPercent = isXL ? 20 : 22;
//   const mainPercent    = isXL ? 80 : 78;

//   const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
//   const handleDrawerClose  = () => setMobileOpen(false);
//   const toggleSidebar      = () => setSidebarOpen((prev) => !prev);

//   const mainMarginLeft = !isMobile
//     ? sidebarOpen ? `${sidebarPercent}%` : `${SIDEBAR_COLLAPSED_WIDTH}px`
//     : 0;

//   const mainWidth = !isMobile
//     ? sidebarOpen ? `${mainPercent}%` : `calc(100% - ${SIDEBAR_COLLAPSED_WIDTH}px)`
//     : '100%';

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%', bgcolor: '#f1f4f8' }}>

//       {/* ── Desktop Sidebar ── */}
//       {!isMobile && (
//         <Box sx={{
//           width: sidebarOpen ? `${sidebarPercent}%` : `${SIDEBAR_COLLAPSED_WIDTH}px`,
//           flexShrink: 0,
//           transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//           }),
//           height: '100vh',
//           position: 'fixed',
//           left: 0, top: 0,
//           overflow: 'hidden',
//           zIndex: theme.zIndex.drawer,
//         }}>
//           <Sidebar sidebarOpen={sidebarOpen} isMobile={false} onClose={handleDrawerClose} />
//         </Box>
//       )}

//       {/* ── Mobile Drawer ── */}
//       {isMobile && (
//         <Sidebar
//           mobileOpen={mobileOpen}
//           onClose={handleDrawerClose}
//           onToggle={handleDrawerToggle}
//           isMobile={true}
//         />
//       )}

//       {/* ── Main Area ── */}
//       <Box
//         sx={{
//           width: mainWidth,
//           marginLeft: mainMarginLeft,
//           transition: theme.transitions.create(['margin-left', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//           }),
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           overflowX: 'hidden',
//           bgcolor: '#f1f4f8',
//         }}
//       >
//         {/* Navbar is just a normal flow element — no fixed needed */}
//         <DashboardNavbar
//           sidebarOpen={sidebarOpen}
//           toggleSidebar={toggleSidebar}
//           onMobileMenuOpen={handleDrawerToggle}
//           isMobile={isMobile}
//         />

//         {/* Page content */}
//         <Box component="main" sx={{ flexGrow: 1, width: '100%', bgcolor: '#f1f4f8' }}>
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardLayout;





import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';
import DashboardNavbar from './Navbar';

const SIDEBAR_COLLAPSED_WIDTH = 72;

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isXL     = useMediaQuery(theme.breakpoints.up('xl'));

  const sidebarPercent = isXL ? 20 : 22;
  const mainPercent    = isXL ? 80 : 78;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleDrawerClose  = () => setMobileOpen(false);
  const toggleSidebar      = () => setSidebarOpen((prev) => !prev);

  const mainMarginLeft = !isMobile
    ? sidebarOpen ? `${sidebarPercent}%` : `${SIDEBAR_COLLAPSED_WIDTH}px`
    : 0;

  const mainWidth = !isMobile
    ? sidebarOpen ? `${mainPercent}%` : `calc(100% - ${SIDEBAR_COLLAPSED_WIDTH}px)`
    : '100%';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%', bgcolor: '#f1f4f8' }}>

      {/* ── Desktop Sidebar ── */}
      {!isMobile && (
        <Box sx={{
          width: sidebarOpen ? `${sidebarPercent}%` : `${SIDEBAR_COLLAPSED_WIDTH}px`,
          flexShrink: 0,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          height: '100vh',
          position: 'fixed',
          left: 0, top: 0,
          overflow: 'hidden',
          zIndex: theme.zIndex.drawer,
        }}>
          <Sidebar sidebarOpen={sidebarOpen} isMobile={false} onClose={handleDrawerClose} />
        </Box>
      )}

      {/* ── Mobile Drawer ── */}
      {isMobile && (
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={handleDrawerClose}
          onToggle={handleDrawerToggle}
          isMobile={true}
        />
      )}

      {/* ── Main Area ── */}
      <Box
        sx={{
          width: mainWidth,
          marginLeft: mainMarginLeft,
          transition: theme.transitions.create(['margin-left', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#f1f4f8',
        }}
      >
        {/* Navbar is just a normal flow element — no fixed needed */}
        <DashboardNavbar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onMobileMenuOpen={handleDrawerToggle}
          isMobile={isMobile}
        />

        {/* Page content */}
        <Box component="main" sx={{ flexGrow: 1, width: '100%', bgcolor: '#f1f4f8' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;