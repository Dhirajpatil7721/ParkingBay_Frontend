import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Visibility, 
  VisibilityOff, 
  Phone,
  Lock
} from '@mui/icons-material';
import { login, clearError, clearMessage } from '../../../redux/slice/authSlice';

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    mobile: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get auth state from Redux
  const { isLoading, error, success, message, token, user } = useSelector(
    (state) => state.auth
  );

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (token || localStorage.getItem('token')) {
      navigate('/active-bookings');
    }
  }, [token, navigate]);

  // Handle successful login
  useEffect(() => {
    if (success && token) {
      dispatch(clearMessage());
      navigate('/active-bookings');
    }
  }, [success, token, navigate, dispatch]);

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setLoginData({ ...loginData, [name]: numericValue });
    } else {
      setLoginData({ ...loginData, [name]: type === 'checkbox' ? checked : value });
    }

    if (errors[name]) setErrors({ ...errors, [name]: '' });
    if (error) dispatch(clearError());
  };

  // Validate login form
  const validateLogin = () => {
    const newErrors = {};
    
    if (!loginData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{1}$/.test(loginData.mobile)) {
      newErrors.mobile = 'Enter valid 10-digit mobile number';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    } else if (loginData.password.length < 2) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  // Handle login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length === 0) {
      dispatch(login({ mobile: loginData.mobile, password: loginData.password }));
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="h-screen bg-background-body flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-40 bg-gradient-to-t from-secondary-400 to-primary-400 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 border-4 border-primary-200 rounded-lg animate-spin-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border-4 border-secondary-200 rounded-lg animate-spin-slow animation-delay-1000 opacity-50"></div>
      </div>

      {/* Auth Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-background-card/90 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-6 transform transition-all duration-500 hover:scale-[1.02] animate-fade-in-up border border-border-light">
          
          {/* Header */}
          <div className="text-center mb-5 animate-slide-down">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl rotate-45 transform hover:rotate-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                <span className="text-primary-contrast font-heading font-bold text-2xl -rotate-45 hover:rotate-0 transition-all duration-500">P</span>
              </div>
            </div>
            <h1 className="font-heading font-bold mb-1">
              <span className="text-3xl text-primary-main">Welcome</span>
              <span className="text-3xl text-secondary-main"> Back!</span>
            </h1>
            <p className="text-text-secondary font-body text-sm">
              Sign in to continue to ParkingWeb
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-error-light border border-error-main/20 rounded-lg animate-shake">
              <p className="text-error-main text-sm flex items-center">
                <span className="mr-2">⚠️</span>
                {error}
              </p>
            </div>
          )}

          {/* Success Message */}
          {success && message && (
            <div className="mb-4 p-3 bg-success-light border border-success-main/20 rounded-lg animate-slide-down">
              <p className="text-success-dark text-sm flex items-center">
                <span className="mr-2">✓</span>
                {message}
              </p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* Mobile Field */}
            <div className="relative group animate-slide-right">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Phone className={`w-5 h-5 transition-all duration-300 ${
                  errors.mobile ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-secondary-500'
                }`} />
              </div>
              <input
                type="tel"
                name="mobile"
                value={loginData.mobile}
                onChange={handleLoginChange}
                maxLength="10"
                className={`w-full pl-12 pr-4 py-3 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                  placeholder-text-disabled focus:placeholder-secondary-300
                  ${errors.mobile 
                    ? 'border-error-main focus:border-error-main bg-error-light/10' 
                    : 'border-border-light focus:border-secondary-500 hover:border-secondary-300 focus:ring-4 focus:ring-secondary-100'
                  }`}
                placeholder="Enter 10-digit mobile number"
              />
              {errors.mobile && (
                <p className="text-error-main text-xs mt-1 animate-shake font-body">{errors.mobile}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative group animate-slide-right animation-delay-200">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Lock className={`w-5 h-5 transition-all duration-300 ${
                  errors.password ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                }`} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className={`w-full pl-12 pr-12 py-3 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                  placeholder-text-disabled focus:placeholder-primary-300
                  ${errors.password 
                    ? 'border-error-main focus:border-error-main bg-error-light/10' 
                    : 'border-border-light focus:border-primary-500 hover:border-primary-300 focus:ring-4 focus:ring-primary-100'
                  }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-600 transition-all duration-300 hover:scale-110"
              >
                {showPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
              </button>
              {errors.password && (
                <p className="text-error-main text-xs mt-1 animate-shake font-body">{errors.password}</p>
              )}
            </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between animate-fade-in animation-delay-300">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  className="w-4 h-4 rounded border-border-main text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm font-body text-text-secondary">Remember me</span>
              </label>
              <button 
                type="button"
                onClick={() => navigate('/auth/forgot-password')}
                className="text-sm font-body text-primary-600 hover:text-secondary-600 transition-all duration-300 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                       bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                       hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                       animate-pulse-once relative overflow-hidden group mt-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-primary-contrast border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-2 font-body">Signing in...</span>
                </div>
              ) : (
                <span className="font-body">Sign In</span>
              )}
            </button>

            {/* Back to Home */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-sm font-body text-text-secondary hover:text-primary-600 transition-all duration-300 hover:inline-flex items-center gap-1"
              >
                ← Back to Home
              </button>
            </div>

          </form>

          {/* Footer */}
          <p className="text-center text-text-secondary text-xs mt-4 font-body border-t border-border-light pt-4">
            By signing in, you agree to our{' '}
            <button 
              onClick={() => navigate('/terms')}
              className="font-semibold text-secondary-600 hover:text-primary-600 hover:underline transition-colors"
            >
              Terms
            </button>
            {' '}and{' '}
            <button 
              onClick={() => navigate('/privacy')}
              className="font-semibold text-secondary-600 hover:text-primary-600 hover:underline transition-colors"
            >
              Privacy Policy
            </button>
          </p>

        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.5s ease-out forwards; }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right { opacity: 0; animation: slideRight 0.5s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-pulse-once { animation: pulseOnce 0.3s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>

    </div>
  );
};

export default AuthPage;