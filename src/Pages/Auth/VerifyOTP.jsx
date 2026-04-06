// src/pages/VerifyOTP.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    ArrowBack,
    Verified,
    Email,
    Phone
} from '@mui/icons-material';

const VerifyOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [mobile, setMobile] = useState('');

    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    // Get mobile from location state or default
    useEffect(() => {
        if (location.state?.mobile) {
            setMobile(location.state.mobile);
        } else {
            // For demo, set a default
            setMobile('9876543210');
        }
    }, [location]);

    // Start countdown for OTP resend
    useEffect(() => {
        startTimer();
        return () => clearTimer();
    }, []);

    const clearTimer = () => {
        if (timerInterval) clearInterval(timerInterval);
    };

    let timerInterval;
    const startTimer = () => {
        setCanResend(false);
        setTimer(30);
        timerInterval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Handle OTP input change
    const handleOtpChange = (index, value) => {
        // Allow only numbers
        if (value && !/^\d+$/.test(value)) return;

        const newOtp = [...otp];
        // Take only the last character if multiple are pasted
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle key down for backspace
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                // Move to previous input on backspace if current is empty
                inputRefs.current[index - 1].focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle paste
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const pastedNumbers = pastedData.replace(/\D/g, '').slice(0, 6);

        if (pastedNumbers) {
            const newOtp = [...otp];
            for (let i = 0; i < pastedNumbers.length; i++) {
                newOtp[i] = pastedNumbers[i];
            }
            setOtp(newOtp);

            // Focus the next empty input or last input
            const nextIndex = Math.min(pastedNumbers.length, 5);
            inputRefs.current[nextIndex].focus();
        }
    };

    // Validate OTP
    const validateOtp = () => {
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setError('Please enter complete 6-digit OTP');
            return false;
        }
        return true;
    };

    // Handle verify OTP
    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        if (!validateOtp()) return;

        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // For demo, accept any 6-digit number
            setSuccessMessage('OTP verified successfully!');

            // Navigate to reset password after 1.5 seconds
            setTimeout(() => {
                navigate('/reset-password', {
                    state: {
                        mobile: mobile,
                        verified: true
                    }
                });
            }, 1500);
        }, 2000);
    };

    // Handle resend OTP
    const handleResendOtp = () => {
        if (canResend) {
            setIsLoading(true);
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false);
                startTimer();
                setSuccessMessage('OTP resent successfully');
                setTimeout(() => setSuccessMessage(''), 3000);

                // Clear OTP fields
                setOtp(['', '', '', '', '', '']);
                inputRefs.current[0].focus();
            }, 1500);
        }
    };

    // Handle back navigation
    const handleBack = () => {
        navigate('/forgot-password');
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

            {/* OTP Verification Card */}
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
                                <Email className="w-10 h-10 text-primary-contrast -rotate-45 hover:rotate-0 transition-all duration-500" />
                            </div>
                        </div>

                        <h1 className="font-heading font-bold mb-2">
                            <span className="text-4xl text-primary-main">Verify</span>
                            <span className="text-4xl text-secondary-main"> OTP</span>
                        </h1>

                        <p className="text-text-secondary font-body text-sm mb-2">
                            Enter the 6-digit code sent to
                        </p>

                        <div className="flex items-center justify-center space-x-2">
                            <Phone className="w-4 h-4 text-primary-500" />
                            <span className="font-heading font-semibold text-primary-600">
                                +91 {mobile.replace(/(\d{5})(\d{5})/, '$1 $2')}
                            </span>
                        </div>
                    </div>

                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-6 p-4 bg-success-light border border-success-main/20 rounded-lg animate-slide-down">
                            <p className="text-success-dark text-sm flex items-center">
                                <Verified className="w-5 h-5 mr-2" />
                                {successMessage}
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-error-light border border-error-main/20 rounded-lg animate-shake">
                            <p className="text-error-main text-sm flex items-center">
                                <span className="mr-2">⚠️</span>
                                {error}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleVerifyOtp} className="space-y-8">

                        {/* OTP Input Fields */}
                        <div className="flex justify-between space-x-3 animate-slide-right">
                            {otp.map((digit, index) => (
                                <div key={index} className="flex-1">
                                    <input
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        inputMode="numeric"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={index === 0 ? handlePaste : undefined}
                                        maxLength={1}
                                        className={`w-full aspect-square text-center text-2xl font-heading font-bold
                      border-2 rounded-xl outline-none transition-all duration-300 bg-background-card
                      ${error
                                                ? 'border-error-main focus:border-error-main bg-error-light/10'
                                                : digit
                                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                                    : 'border-border-light focus:border-secondary-500 hover:border-secondary-300 focus:ring-4 focus:ring-secondary-100'
                                            }`}
                                        autoFocus={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Timer and Resend */}
                        <div className="flex flex-col items-center space-y-3 animate-fade-in">
                            <div className="relative w-16 h-16">
                                <svg className="w-16 h-16 transform -rotate-90">
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="28"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                        className="text-neutral-200"
                                    />
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="28"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray={2 * Math.PI * 28}
                                        strokeDashoffset={2 * Math.PI * 28 * (1 - timer / 30)}
                                        className="text-primary-500 transition-all duration-1000"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-primary-600">
                                    {timer}s
                                </span>
                            </div>

                            <p className="text-sm font-body text-text-secondary">
                                {canResend ? (
                                    <>
                                        Didn't receive OTP?{' '}
                                        <button
                                            type="button"
                                            onClick={handleResendOtp}
                                            disabled={isLoading}
                                            className="font-semibold text-secondary-600 hover:text-primary-600 hover:underline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Resend OTP
                                        </button>
                                    </>
                                ) : (
                                    <span>Resend OTP in <span className="font-semibold text-primary-600">{timer} seconds</span></span>
                                )}
                            </p>
                        </div>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            disabled={isLoading || otp.join('').length !== 6}
                            className="w-full py-4 rounded-xl font-heading font-semibold text-primary-contrast transform transition-all duration-500
                       bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600
                       hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                       animate-pulse-once relative overflow-hidden group"
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

                        {/* Help Text */}
                        <p className="text-center text-text-secondary text-xs font-body">
                            For demo, any 6-digit number works
                        </p>

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
      `}</style>

        </div>
    );
};

export default VerifyOTP;