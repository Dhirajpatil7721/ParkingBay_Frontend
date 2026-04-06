// src/pages/ForgotPassword.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  ArrowBack,
  Phone,
  Lock,
  Verified,
  Email,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { 
  forgetPasswordRequest,
  verifyOTP,
  resetPassword,
  resendOTP,
  clearError,
  clearMessage 
} from '../../../redux/slice/authSlice';

const ForgotPassword = () => {
  const [step, setStep] = useState('mobile'); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [localErrors, setLocalErrors] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get auth state from Redux
  const { 
    isLoading, 
    error, 
    success, 
    message, 
    otpSent, 
    otpVerified, 
    resetToken 
  } = useSelector((state) => state.auth);

  // Handle API responses
  useEffect(() => {
    if (success && message) {
      if (step === 'mobile' && otpSent) {
        setStep('otp');
        startTimer();
      }
      if (step === 'otp' && otpVerified) {
        setStep('newPassword');
      }
      if (step === 'newPassword' && message.includes('success')) {
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      }
    }
  }, [success, message, otpSent, otpVerified, step, navigate]);

  // Clear Redux errors when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(clearMessage());
    };
  }, [dispatch]);

  // Start countdown for OTP resend
  const startTimer = () => {
    setCanResend(false);
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle mobile input change
  const handleMobileChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setMobile(numericValue);
    if (localErrors.mobile) {
      setLocalErrors({ ...localErrors, mobile: '' });
    }
    if (error) {
      dispatch(clearError());
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    if (numericValue.length <= 6) {
      setOtp(numericValue);
      if (localErrors.otp) {
        setLocalErrors({ ...localErrors, otp: '' });
      }
    }
  };

  // Handle new password change
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (localErrors.newPassword) {
      setLocalErrors({ ...localErrors, newPassword: '' });
    }
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (localErrors.confirmPassword) {
      setLocalErrors({ ...localErrors, confirmPassword: '' });
    }
  };

  // Validate mobile step
  const validateMobile = () => {
    const newErrors = {};
    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = 'Enter valid 10-digit mobile number';
    }
    return newErrors;
  };

  // Validate OTP step
  const validateOtp = () => {
    const newErrors = {};
    if (!otp) {
      newErrors.otp = 'OTP is required';
    } else if (!/^\d{6}$/.test(otp)) {
      newErrors.otp = 'Enter valid 6-digit OTP';
    }
    return newErrors;
  };

  // Validate new password step
  const validateNewPassword = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  // Handle send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const newErrors = validateMobile();
    
    if (Object.keys(newErrors).length === 0) {
      dispatch(forgetPasswordRequest({ mobile }));
    } else {
      setLocalErrors(newErrors);
    }
  };

  // Handle verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const newErrors = validateOtp();
    
    if (Object.keys(newErrors).length === 0) {
      dispatch(verifyOTP({ mobile, otp }));
    } else {
      setLocalErrors(newErrors);
    }
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    if (canResend) {
      dispatch(resendOTP({ mobile }));
      startTimer();
    }
  };

  // Handle reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const newErrors = validateNewPassword();
    
    if (Object.keys(newErrors).length === 0) {
      dispatch(resetPassword({ 
        mobile, 
        resetToken, 
        newPassword 
      }));
    } else {
      setLocalErrors(newErrors);
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (step === 'otp') {
      setStep('mobile');
      setOtp('');
      dispatch(clearError());
      dispatch(clearMessage());
    } else if (step === 'newPassword') {
      setStep('otp');
      setNewPassword('');
      setConfirmPassword('');
      dispatch(clearError());
      dispatch(clearMessage());
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <div className="min-h-screen bg-background-body flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Animated Background Elements using theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Animated lines */}
        <div className="absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-40 bg-gradient-to-t from-secondary-400 to-primary-400 rounded-full animate-pulse-slow animation-delay-1000"></div>
        
        {/* Rotating squares */}
        <div className="absolute top-1/3 right-20 w-20 h-20 border-4 border-primary-200 rounded-lg animate-spin-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border-4 border-secondary-200 rounded-lg animate-spin-slow animation-delay-1000 opacity-50"></div>
      </div>

      {/* Forgot Password Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-background-card/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 animate-fade-in-up border border-border-light">
          
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 p-2 rounded-lg hover:bg-neutral-100 transition-all duration-300 group"
          >
            <ArrowBack className="w-5 h-5 text-text-secondary group-hover:text-primary-600" />
          </button>

          {/* Header */}
          <div className="text-center mb-8 animate-slide-down">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl rotate-45 transform hover:rotate-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                <Lock className="w-8 h-8 text-primary-contrast -rotate-45 hover:rotate-0 transition-all duration-500" />
              </div>
            </div>
            
            {step === 'mobile' && (
              <>
                <h1 className="font-heading font-bold mb-2">
                  <span className="text-3xl text-primary-main">Forgot</span>
                  <span className="text-3xl text-secondary-main"> Password?</span>
                </h1>
                <p className="text-text-secondary font-body text-sm">
                  Enter your mobile number to receive an OTP
                </p>
              </>
            )}
            
            {step === 'otp' && (
              <>
                <h1 className="font-heading font-bold mb-2">
                  <span className="text-3xl text-primary-main">Verify</span>
                  <span className="text-3xl text-secondary-main"> OTP</span>
                </h1>
                <p className="text-text-secondary font-body text-sm">
                  Enter the 6-digit OTP sent to {mobile}
                </p>
              </>
            )}
            
            {step === 'newPassword' && (
              <>
                <h1 className="font-heading font-bold mb-2">
                  <span className="text-3xl text-primary-main">Reset</span>
                  <span className="text-3xl text-secondary-main"> Password</span>
                </h1>
                <p className="text-text-secondary font-body text-sm">
                  Create a new password for your account
                </p>
              </>
            )}
          </div>

          {/* Error Message from Redux */}
          {error && (
            <div className="mb-6 p-4 bg-error-light border border-error-main/20 rounded-lg animate-shake">
              <p className="text-error-main text-sm flex items-center">
                <span className="mr-2">⚠️</span>
                {error}
              </p>
            </div>
          )}

          {/* Success Message from Redux */}
          {success && message && (
            <div className="mb-6 p-4 bg-success-light border border-success-main/20 rounded-lg animate-slide-down">
              <p className="text-success-dark text-sm flex items-center">
                <Verified className="w-5 h-5 mr-2" />
                {message}
              </p>
            </div>
          )}

          {/* Step 1: Mobile Number */}
          {step === 'mobile' && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="relative group animate-slide-right">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Phone className={`w-5 h-5 transition-all duration-300 ${
                    localErrors.mobile ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-secondary-500'
                  }`} />
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={handleMobileChange}
                  maxLength="10"
                  className={`w-full pl-12 pr-4 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                    placeholder-text-disabled focus:placeholder-secondary-300
                    ${localErrors.mobile 
                      ? 'border-error-main focus:border-error-main bg-error-light/10' 
                      : 'border-border-light focus:border-secondary-500 hover:border-secondary-300 focus:ring-4 focus:ring-secondary-100'
                    }`}
                  placeholder="Enter 10-digit mobile number"
                />
                {localErrors.mobile && (
                  <p className="text-error-main text-xs mt-2 animate-shake font-body">
                    {localErrors.mobile}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                         bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                         hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                         animate-pulse-once mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-primary-contrast border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2 font-body">Sending OTP...</span>
                  </div>
                ) : (
                  <span className="font-body">Send OTP</span>
                )}
              </button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="relative group animate-slide-right">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Email className={`w-5 h-5 transition-all duration-300 ${
                    localErrors.otp ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                  }`} />
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  maxLength="6"
                  className={`w-full pl-12 pr-4 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card text-center tracking-widest
                    placeholder-text-disabled focus:placeholder-primary-300
                    ${localErrors.otp 
                      ? 'border-error-main focus:border-error-main bg-error-light/10' 
                      : 'border-border-light focus:border-primary-500 hover:border-primary-300 focus:ring-4 focus:ring-primary-100'
                    }`}
                  placeholder="Enter 6-digit OTP"
                />
                {localErrors.otp && (
                  <p className="text-error-main text-xs mt-2 animate-shake font-body">
                    {localErrors.otp}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between animate-fade-in">
                <p className="text-sm font-body text-text-secondary">
                  {canResend ? (
                    <>
                      Didn't receive OTP?{' '}
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isLoading}
                        className="font-semibold text-secondary-600 hover:text-primary-600 hover:underline transition-colors disabled:opacity-50"
                      >
                        Resend
                      </button>
                    </>
                  ) : (
                    <span>Resend OTP in <span className="font-semibold text-primary-600">{timer}s</span></span>
                  )}
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="w-full py-4 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                         bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                         hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                         animate-pulse-once mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-primary-contrast border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2 font-body">Verifying...</span>
                  </div>
                ) : (
                  <span className="font-body">Verify OTP</span>
                )}
              </button>
            </form>
          )}

          {/* Step 3: New Password */}
          {step === 'newPassword' && (
            <form onSubmit={handleResetPassword} className="space-y-5">
              {/* New Password Field */}
              <div className="relative group animate-slide-right">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className={`w-5 h-5 transition-all duration-300 ${
                    localErrors.newPassword ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                  }`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  className={`w-full pl-12 pr-12 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                    placeholder-text-disabled
                    ${localErrors.newPassword 
                      ? 'border-error-main focus:border-error-main bg-error-light/10' 
                      : newPassword && newPassword.length >= 6
                        ? 'border-success-main bg-success-light/10'
                        : 'border-border-light focus:border-primary-500 hover:border-primary-300 focus:ring-4 focus:ring-primary-100'
                    }`}
                  placeholder="New password (min. 6 characters)"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
                </button>
                {localErrors.newPassword && (
                  <p className="text-error-main text-xs mt-1 font-body">{localErrors.newPassword}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="relative group animate-slide-right animation-delay-200">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className={`w-5 h-5 transition-all duration-300 ${
                    localErrors.confirmPassword ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                  }`} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full pl-12 pr-12 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                    placeholder-text-disabled
                    ${localErrors.confirmPassword 
                      ? 'border-error-main focus:border-error-main bg-error-light/10' 
                      : confirmPassword && newPassword === confirmPassword
                        ? 'border-success-main bg-success-light/10'
                        : 'border-border-light focus:border-primary-500 hover:border-primary-300 focus:ring-4 focus:ring-primary-100'
                    }`}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                >
                  {showConfirmPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
                </button>
                {localErrors.confirmPassword && (
                  <p className="text-error-main text-xs mt-1 font-body">{localErrors.confirmPassword}</p>
                )}
                {confirmPassword && newPassword === confirmPassword && !localErrors.confirmPassword && (
                  <p className="text-success-main text-xs mt-1 flex items-center">
                    <Verified className="w-3 h-3 mr-1" />
                    Passwords match
                  </p>
                )}
              </div>

              {/* Password Requirements */}
              <div className="bg-neutral-50 rounded-xl p-4 animate-fade-in animation-delay-300">
                <p className="text-sm font-body text-text-secondary mb-2">Password must contain:</p>
                <ul className="space-y-1">
                  <li className={`text-xs font-body flex items-center ${newPassword.length >= 6 ? 'text-success-main' : 'text-text-secondary'}`}>
                    <div className={`w-1 h-1 rounded-full mr-2 ${newPassword.length >= 6 ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                    Minimum 6 characters
                  </li>
                  <li className={`text-xs font-body flex items-center ${/[A-Z]/.test(newPassword) ? 'text-success-main' : 'text-text-secondary'}`}>
                    <div className={`w-1 h-1 rounded-full mr-2 ${/[A-Z]/.test(newPassword) ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                    At least one uppercase letter
                  </li>
                  <li className={`text-xs font-body flex items-center ${/[0-9]/.test(newPassword) ? 'text-success-main' : 'text-text-secondary'}`}>
                    <div className={`w-1 h-1 rounded-full mr-2 ${/[0-9]/.test(newPassword) ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                    At least one number
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                         bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                         hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                         animate-pulse-once mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-primary-contrast border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2 font-body">Resetting password...</span>
                  </div>
                ) : (
                  <span className="font-body">Reset Password</span>
                )}
              </button>
            </form>
          )}

          {/* Back to Login Link */}
          <p className="text-center text-text-secondary text-sm mt-6 font-body border-t border-border-light pt-6">
            Remember your password?{' '}
            <button
              onClick={() => navigate('/auth/login')}
              className="font-semibold text-secondary-600 hover:text-primary-600 hover:underline transition-colors"
            >
              Sign in here
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-right {
          opacity: 0;
          animation: slideRight 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-pulse-once {
          animation: pulseOnce 0.3s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

    </div>
  );
};

export default ForgotPassword;