// redux/slice/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api'; // Adjust path as needed

// Async Thunks
export const registerMobile = createAsyncThunk(
  'auth/registerMobile',
  async ({ mobile, name }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/mobile', { mobile, name });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const verifyMobileOTP = createAsyncThunk(
  'auth/verifyMobileOTP',
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/mobile/verify-otp', { mobile, otp });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const resendMobileOTP = createAsyncThunk(
  'auth/resendMobileOTP',
  async ({ mobile }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/mobile/resend-otp', { mobile });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const saveVehicleRates = createAsyncThunk(
  'auth/saveVehicleRates',
  async ({ mobile, vehicles, isOneTimeEntry }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/vehicles', {
        mobile, vehicles, isOneTimeEntry
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const saveLocation = createAsyncThunk(
  'auth/saveLocation',
  async ({ mobile, location }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/location', { mobile, location });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const completeRegistration = createAsyncThunk(
  'auth/completeRegistration',
  async ({ mobile, password, name, vendorDetails }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/complete', {
        mobile, password, name, vendorDetails
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ mobile, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', { mobile, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const getRegistrationStatus = createAsyncThunk(
  'auth/getRegistrationStatus',
  async ({ mobile }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/status/${mobile}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const updateVehicleRates = createAsyncThunk(
  'auth/updateVehicleRates',
  async ({ mobile, vehicles, isOneTimeEntry }, { rejectWithValue }) => {
    try {
      const response = await api.put('/auth/vehicle-rates', {
        mobile, vehicles, isOneTimeEntry
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const getVehicleRates = createAsyncThunk(
  'auth/getVehicleRates',
  async ({ mobile }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/vehicle-rates/${mobile}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ mobile, currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/change-password', {
        mobile, currentPassword, newPassword
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);


//Forgt otp
export const forgetPasswordRequest = createAsyncThunk(
  'auth/forgetPasswordRequest',
  async ({ mobile }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/forget-password/request', { mobile });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/forget-password/verify-otp', { mobile, otp });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ mobile, resetToken, newPassword }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/forget-password/reset', {
        mobile, resetToken, newPassword
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async ({ mobile }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/resend-otp', { mobile });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;

      // Call the logout API
      const response = await api.get('/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  registrationStep: null,
  isLoading: false,
  error: null,
  success: false,
  message: null,
  otpVerified: false,
  vehicles: null,
  location: null,
  resetToken: null,
  otpSent: false,
  registrationData: {
    mobile: null,
    name: null,
    step: 'mobile',
    otpVerified: false,
    userId: null
  }
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    // Update your existing logout reducer in reducers
    logout: (state) => {
      // Optional: Call API logout in background
      if (state.token) {
        api.get('/auth/logout', {
          headers: { Authorization: `Bearer ${state.token}` }
        }).catch(err => console.error('Logout API error:', err));
      }

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.user = null;
      state.token = null;
      state.registrationStep = null;
      state.otpVerified = false;
      state.vehicles = null;
      state.location = null;
      state.resetToken = null;
      state.otpSent = false;
      state.registrationData = {
        mobile: null,
        name: null,
        step: 'mobile',
        otpVerified: false,
        userId: null
      };
    },
    setRegistrationData: (state, action) => {
      state.registrationData = { ...state.registrationData, ...action.payload };
    },
    resetRegistration: (state) => {
      state.registrationData = {
        mobile: null,
        name: null,
        step: 'mobile',
        otpVerified: false,
        userId: null
      };
      state.vehicles = null;
      state.location = null;
      state.otpVerified = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload?.token) {
        state.token = action.payload.token;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Register Mobile
      .addCase(registerMobile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerMobile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.registrationData.mobile = action.payload.user?.mobile;
        state.registrationData.name = action.payload.user?.name;
        state.registrationData.step = action.payload.user?.step || 'mobile';
        state.registrationData.userId = action.payload.user?.id;
      })
      .addCase(registerMobile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Registration failed';
      })

      // Verify Mobile OTP
      .addCase(verifyMobileOTP.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyMobileOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.otpVerified = true;
        state.registrationData.otpVerified = true;
        state.registrationData.step = 'vehicles';
      })
      .addCase(verifyMobileOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'OTP verification failed';
        state.otpVerified = false;
      })

      // Resend Mobile OTP
      .addCase(resendMobileOTP.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resendMobileOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(resendMobileOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to resend OTP';
      })

      // Save Vehicle Rates
      .addCase(saveVehicleRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveVehicleRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.vehicles = action.payload.vehicles;
        state.registrationData.step = action.payload.step || 'location';
        if (action.payload.isOneTimeEntry !== undefined) {
          state.user = { ...state.user, isOneTimeEntry: action.payload.isOneTimeEntry };
        }
      })
      .addCase(saveVehicleRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to save vehicle rates';
      })

      // Save Location
      .addCase(saveLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.location = action.payload.location;
        state.registrationData.step = action.payload.step || 'password';
      })
      .addCase(saveLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to save location';
      })

      // Complete Registration
      .addCase(completeRegistration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(completeRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.registrationStep = 'completed';
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(completeRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Registration completion failed';
      })

      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.vehicles = action.payload.user?.charges || null;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Login failed';
      })

      // Get Registration Status
      .addCase(getRegistrationStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRegistrationStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.registered) {
          state.registrationStep = action.payload.step;
          state.user = action.payload.user;
          state.vehicles = action.payload.user?.vehicles;
          state.location = action.payload.user?.location;
        }
      })
      .addCase(getRegistrationStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to get registration status';
      })

      // Update Vehicle Rates
      .addCase(updateVehicleRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateVehicleRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.vehicles = action.payload.vehicles;
        if (action.payload.isOneTimeEntry !== undefined) {
          state.user = { ...state.user, isOneTimeEntry: action.payload.isOneTimeEntry };
        }
      })
      .addCase(updateVehicleRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to update vehicle rates';
      })

      // Get Vehicle Rates
      .addCase(getVehicleRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getVehicleRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vehicles = action.payload.vehicles;
        if (action.payload.isOneTimeEntry !== undefined) {
          state.user = { ...state.user, isOneTimeEntry: action.payload.isOneTimeEntry };
        }
      })
      .addCase(getVehicleRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to get vehicle rates';
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to change password';
      })

      // Forget Password Request
      .addCase(forgetPasswordRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.otpSent = false;
      })
      .addCase(forgetPasswordRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.otpSent = true;
        state.registrationData.mobile = action.payload.mobile;
      })
      .addCase(forgetPasswordRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to send OTP';
        state.otpSent = false;
      })

      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.otpVerified = true;
        state.resetToken = action.payload.resetToken;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'OTP verification failed';
        state.otpVerified = false;
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.resetToken = null;
        state.otpVerified = false;
        state.otpSent = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to reset password';
      })

      // Resend OTP
      .addCase(resendOTP.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resendOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
        state.otpSent = true;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Failed to resend OTP';
      })
      // Add this to your extraReducers builder
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;

        // Clear all auth data
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        state.user = null;
        state.token = null;
        state.registrationStep = null;
        state.otpVerified = false;
        state.vehicles = null;
        state.location = null;
        state.resetToken = null;
        state.otpSent = false;
        state.registrationData = {
          mobile: null,
          name: null,
          step: 'mobile',
          otpVerified: false,
          userId: null
        };
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Logout failed';

        // Still clear local data even if API call fails
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        state.user = null;
        state.token = null;
      });
      
  }
});

// Export actions
export const {
  clearError,
  clearMessage,
  logout,
  setRegistrationData,
  resetRegistration,
  setUser
} = authSlice.actions;

// Export reducer
export default authSlice.reducer;