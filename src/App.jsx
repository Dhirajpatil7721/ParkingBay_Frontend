import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from '../Constant/muiTheme';

// Layouts
import StaticLayout from './layouts/StaticLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Static Pages
import Home from './Pages/Static/Home';
import ContactUs from './Pages/Static/ContactUs';

// Auth Pages
import AuthPage from './Pages/Auth/AuthPage';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import VerifyOTP from './Pages/Auth/VerifyOTP';
import ResetPassword from './Pages/Auth/ResetPassword';

// Dashboard Pages
// import Booking from './Pages/Bookings/Booking';
import Analytics from './Pages/Analytics/Analytics';
import Staff from './Pages/Staff/Staff';
import Profile from './Pages/Profile/Profile';
import ActiveBookings from './Pages/ActiveBooking/ActiveBookings';
import History from './Pages/History/History';
import WhyUs from './Pages/Static/WhyUs';
import AboutUs from './Pages/Static/AboutUs';

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Static Routes with Navbar & Footer */}
          <Route element={<StaticLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* Add more static pages here */}
          </Route>

          {/* Auth Routes - No Navbar/Footer */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<AuthPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/verify-otp" element={<VerifyOTP />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
          </Route>

          {/* Dashboard Routes - After Login (with Sidebar on Left and Navbar on Right) */}
          <Route element={<DashboardLayout />}>
            <Route path="/active-bookings" element={<ActiveBookings />} />
            <Route path="/history" element={<History />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/staff-management" element={<Staff />} />
            <Route path="/profile-management" element={<Profile />} />
            {/* Add more dashboard routes here */}
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;