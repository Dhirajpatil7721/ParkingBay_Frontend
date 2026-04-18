// src/pages/ResetPassword.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowBack,
  Lock,
  Visibility,
  VisibilityOff,
  CheckCircle,
  Verified
} from '@mui/icons-material';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Check if OTP was verified
  useEffect(() => {
    if (location.state?.verified) {
      setIsVerified(true);
    }
    if (location.state?.mobile) {
      setMobile(location.state.mobile);
    } else {
      // For demo, set a default
      setMobile('9876543210');
    }
  }, [location]);

  // Check password strength
  useEffect(() => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  }, [password]);

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: '' });
    }
    if (errors.confirmPassword && confirmPassword === e.target.value) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  // Calculate password strength percentage
  const getPasswordStrengthPercent = () => {
    const conditions = Object.values(passwordStrength).filter(Boolean).length;
    return (conditions / 5) * 100;
  };

  // Get password strength color
  const getPasswordStrengthColor = () => {
    const percent = getPasswordStrengthPercent();
    if (percent <= 40) return 'bg-error-main';
    if (percent <= 60) return 'bg-warning-main';
    if (percent <= 80) return 'bg-primary-500';
    return 'bg-success-main';
  };

  // Get password strength text
  const getPasswordStrengthText = () => {
    const percent = getPasswordStrengthPercent();
    if (percent <= 40) return 'Weak';
    if (percent <= 60) return 'Fair';
    if (percent <= 80) return 'Good';
    return 'Strong';
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setSuccessMessage('Password reset successfully!');

        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  // Handle back navigation
  const handleBack = () => {
    navigate('/verify-otp', { state: { mobile } });
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

      {/* Reset Password Card */}
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
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl rotate-45 transform hover:rotate-0 transition-all duration-500 flex items-center justify-center shadow-xl">
                <Lock className="w-10 h-10 text-primary-contrast -rotate-45 hover:rotate-0 transition-all duration-500" />
              </div>
            </div>

            <h1 className="font-heading font-bold mb-2">
              <span className="text-4xl text-primary-main">Reset</span>
              <span className="text-4xl text-secondary-main"> Password</span>
            </h1>

            {isVerified && (
              <div className="flex items-center justify-center space-x-2 mt-2">
                <Verified className="w-5 h-5 text-success-main" />
                <p className="text-success-main text-sm font-body">
                  Mobile verified successfully
                </p>
              </div>
            )}

            <p className="text-text-secondary font-body text-sm mt-2">
              Create a new password for your account
            </p>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-success-light border border-success-main/20 rounded-lg animate-slide-down">
              <p className="text-success-dark text-sm flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                {successMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* New Password Field */}
            <div className="space-y-2">
              <div className="relative group animate-slide-right">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className={`w-5 h-5 transition-all duration-300 ${errors.password ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                    }`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full pl-12 pr-12 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                    placeholder-text-disabled focus:placeholder-primary-300
                    ${errors.password
                      ? 'border-error-main focus:border-error-main bg-error-light/10'
                      : password
                        ? 'border-primary-500 bg-primary-50/30'
                        : 'border-border-light focus:border-primary-500 hover:border-primary-300 focus:ring-4 focus:ring-primary-100'
                    }`}
                  placeholder="New password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-primary-600 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-error-main text-xs animate-shake font-body pl-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <div className="relative group animate-slide-right animation-delay-200">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className={`w-5 h-5 transition-all duration-300 ${errors.confirmPassword ? 'text-error-main' : 'text-neutral-400 group-focus-within:text-primary-500'
                    }`} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full pl-12 pr-12 py-4 text-base font-body border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                    placeholder-text-disabled focus:placeholder-primary-300
                    ${errors.confirmPassword
                      ? 'border-error-main focus:border-error-main bg-error-light/10'
                      : confirmPassword && password === confirmPassword
                        ? 'border-success-main bg-success-light/20'
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
              </div>
              {errors.confirmPassword && (
                <p className="text-error-main text-xs animate-shake font-body pl-2">
                  {errors.confirmPassword}
                </p>
              )}
              {confirmPassword && password === confirmPassword && !errors.confirmPassword && (
                <p className="text-success-main text-xs flex items-center pl-2 animate-fade-in">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Passwords match
                </p>
              )}
            </div>

            {/* Password Strength Meter */}
            {password && (
              <div className="space-y-3 animate-fade-in animation-delay-300">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-body text-text-secondary">Password strength</span>
                    <span className={`text-xs font-heading font-semibold ${getPasswordStrengthPercent() <= 40 ? 'text-error-main' :
                        getPasswordStrengthPercent() <= 60 ? 'text-warning-main' :
                          getPasswordStrengthPercent() <= 80 ? 'text-primary-600' :
                            'text-success-main'
                      }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                      style={{ width: `${getPasswordStrengthPercent()}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl p-4">
                  <p className="text-sm font-body text-text-secondary mb-3">Password must contain:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`text-xs font-body flex items-center ${passwordStrength.length ? 'text-success-main' : 'text-text-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${passwordStrength.length ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                      At least 8 characters
                    </div>
                    <div className={`text-xs font-body flex items-center ${passwordStrength.uppercase ? 'text-success-main' : 'text-text-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${passwordStrength.uppercase ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                      Uppercase letter
                    </div>
                    <div className={`text-xs font-body flex items-center ${passwordStrength.lowercase ? 'text-success-main' : 'text-text-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${passwordStrength.lowercase ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                      Lowercase letter
                    </div>
                    <div className={`text-xs font-body flex items-center ${passwordStrength.number ? 'text-success-main' : 'text-text-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${passwordStrength.number ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                      Number
                    </div>
                    <div className={`text-xs font-body flex items-center ${passwordStrength.special ? 'text-success-main' : 'text-text-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${passwordStrength.special ? 'bg-success-main' : 'bg-text-secondary'}`}></div>
                      Special character
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !password || !confirmPassword || password !== confirmPassword}
              className="w-full py-4 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                       bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                       hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                       animate-pulse-once relative overflow-hidden group mt-8"
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

export default ResetPassword;