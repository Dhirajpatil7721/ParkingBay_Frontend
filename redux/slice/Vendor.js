// redux/slice/vendorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Initial state
const initialState = {
  // Profile
  profile: null,
  profileLoading: false,
  profileError: null,

  // Workers
  workers: [],
  workersLoading: false,
  workersError: null,
  totalWorkers: 0,

  // Single Worker
  currentWorker: null,
  workerLoading: false,
  workerError: null,

  // QR Photos
  qrPhotos: [],
  qrPhotosLoading: false,
  qrPhotosError: null,

  // Password Reset
  passwordResetLoading: false,
  passwordResetSuccess: false,
  passwordResetError: null,

  // Operation Status
  addWorkerLoading: false,
  updateWorkerLoading: false,
  deleteWorkerLoading: false,
  uploadQRLoading: false,
  deleteQRLoading: false,

  // Success Messages
  successMessage: null,
};

// ==================== Async Thunks ====================

// Get Profile
export const getProfile = createAsyncThunk(
  'vendor/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
    }
  }
);

// Update Admin Profile
export const updateAdminProfile = createAsyncThunk(
  'vendor/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await api.put('/admin/profileupdate', profileData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

// Get All Workers
export const getAllWorkers = createAsyncThunk(
  'vendor/getAllWorkers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/workers');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch workers');
    }
  }
);

// Get Worker by Mobile
export const getWorkerByMobile = createAsyncThunk(
  'vendor/getWorkerByMobile',
  async (mobile, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/worker/${mobile}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch worker');
    }
  }
);

// Add Worker
export const addWorker = createAsyncThunk(
  'vendor/addWorker',
  async (workerData, { rejectWithValue }) => {
    try {
      const response = await api.post('/admin/worker', workerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add worker');
    }
  }
);

// Update Worker
export const updateWorker = createAsyncThunk(
  'vendor/updateWorker',
  async ({ workerId, workerData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/worker/${workerId}`, workerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update worker');
    }
  }
);

// Delete Worker
export const deleteWorker = createAsyncThunk(
  'vendor/deleteWorker',
  async (workerId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/worker/${workerId}`);
      return { workerId, message: response.data.message };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete worker');
    }
  }
);

// Upload QR Photo
export const uploadQRPhoto = createAsyncThunk(
  'vendor/uploadQRPhoto',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to upload QR photo');
    }
  }
);

// Get QR Photos
export const getQRPhotos = createAsyncThunk(
  'vendor/getQRPhotos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/qr');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch QR photos');
    }
  }
);

// Delete QR Photo
export const deleteQRPhoto = createAsyncThunk(
  'vendor/deleteQRPhoto',
  async (photoUrl, { rejectWithValue }) => {
    try {
      const response = await api.delete('/admin/qr', { data: { photoUrl } });
      return { photoUrl, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete QR photo');
    }
  }
);

// Reset Password
export const resetPassword = createAsyncThunk(
  'vendor/resetPassword',
  async (passwordData, { rejectWithValue }) => {
    try {
      const response = await api.put('/admin/reset-current-password', passwordData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to reset password');
    }
  }
);

// ==================== Slice ====================

const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
    clearProfileError: (state) => {
      state.profileError = null;
    },
    clearWorkersError: (state) => {
      state.workersError = null;
    },
    clearWorkerError: (state) => {
      state.workerError = null;
    },
    clearQRError: (state) => {
      state.qrPhotosError = null;
    },
    clearPasswordResetError: (state) => {
      state.passwordResetError = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    clearCurrentWorker: (state) => {
      state.currentWorker = null;
    },
    resetVendorState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // ===== Get Profile =====
      .addCase(getProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.profile = action.payload.profile || action.payload;
        state.successMessage = 'Profile fetched successfully';
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
      })

      // ===== Update Profile =====
      .addCase(updateAdminProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
      })
      .addCase(updateAdminProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.profile = action.payload.admin || action.payload;
        state.successMessage = action.payload.message || 'Profile updated successfully';
      })
      .addCase(updateAdminProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload;
      })

      // ===== Get All Workers =====
      .addCase(getAllWorkers.pending, (state) => {
        state.workersLoading = true;
        state.workersError = null;
      })
      .addCase(getAllWorkers.fulfilled, (state, action) => {
        state.workersLoading = false;
        state.workers = action.payload.workers || [];
        state.totalWorkers = action.payload.total || 0;
      })
      .addCase(getAllWorkers.rejected, (state, action) => {
        state.workersLoading = false;
        state.workersError = action.payload;
      })

      // ===== Get Worker by Mobile =====
      .addCase(getWorkerByMobile.pending, (state) => {
        state.workerLoading = true;
        state.workerError = null;
      })
      .addCase(getWorkerByMobile.fulfilled, (state, action) => {
        state.workerLoading = false;
        state.currentWorker = action.payload;
      })
      .addCase(getWorkerByMobile.rejected, (state, action) => {
        state.workerLoading = false;
        state.workerError = action.payload;
      })

      // ===== Add Worker =====
      .addCase(addWorker.pending, (state) => {
        state.addWorkerLoading = true;
        state.workersError = null;
      })
      .addCase(addWorker.fulfilled, (state, action) => {
        state.addWorkerLoading = false;
        state.workers = action.payload.workers || [];
        state.successMessage = action.payload.message || 'Worker added successfully';
      })
      .addCase(addWorker.rejected, (state, action) => {
        state.addWorkerLoading = false;
        state.workersError = action.payload;
      })

      // ===== Update Worker =====
      .addCase(updateWorker.pending, (state) => {
        state.updateWorkerLoading = true;
        state.workerError = null;
      })
      .addCase(updateWorker.fulfilled, (state, action) => {
        state.updateWorkerLoading = false;
        // Update the worker in the workers array
        const updatedWorker = action.payload.worker;
        if (updatedWorker) {
          const index = state.workers.findIndex(w => w._id === updatedWorker._id);
          if (index !== -1) {
            state.workers[index] = { ...state.workers[index], ...updatedWorker };
          }
        }
        state.currentWorker = updatedWorker;
        state.successMessage = action.payload.message || 'Worker updated successfully';
      })
      .addCase(updateWorker.rejected, (state, action) => {
        state.updateWorkerLoading = false;
        state.workerError = action.payload;
      })

      // ===== Delete Worker =====
      .addCase(deleteWorker.pending, (state) => {
        state.deleteWorkerLoading = true;
        state.workersError = null;
      })
      .addCase(deleteWorker.fulfilled, (state, action) => {
        state.deleteWorkerLoading = false;
        state.workers = state.workers.filter(w => w._id !== action.payload.workerId);
        state.successMessage = action.payload.message || 'Worker deleted successfully';
        if (state.currentWorker?._id === action.payload.workerId) {
          state.currentWorker = null;
        }
      })
      .addCase(deleteWorker.rejected, (state, action) => {
        state.deleteWorkerLoading = false;
        state.workersError = action.payload;
      })

      // ===== Upload QR Photo =====
      .addCase(uploadQRPhoto.pending, (state) => {
        state.uploadQRLoading = true;
        state.qrPhotosError = null;
      })
      .addCase(uploadQRPhoto.fulfilled, (state, action) => {
        state.uploadQRLoading = false;
        state.qrPhotos = action.payload.data?.qrPhotos || [];
        state.successMessage = action.payload.message || 'QR photo uploaded successfully';
      })
      .addCase(uploadQRPhoto.rejected, (state, action) => {
        state.uploadQRLoading = false;
        state.qrPhotosError = action.payload;
      })

      // ===== Get QR Photos =====
      .addCase(getQRPhotos.pending, (state) => {
        state.qrPhotosLoading = true;
        state.qrPhotosError = null;
      })
      .addCase(getQRPhotos.fulfilled, (state, action) => {
        state.qrPhotosLoading = false;
        state.qrPhotos = action.payload.data?.qrPhotos || [];
      })
      .addCase(getQRPhotos.rejected, (state, action) => {
        state.qrPhotosLoading = false;
        state.qrPhotosError = action.payload;
      })

      // ===== Delete QR Photo =====
      .addCase(deleteQRPhoto.pending, (state) => {
        state.deleteQRLoading = true;
        state.qrPhotosError = null;
      })
      .addCase(deleteQRPhoto.fulfilled, (state, action) => {
        state.deleteQRLoading = false;
        state.qrPhotos = state.qrPhotos.filter(photo => photo !== action.payload.photoUrl);
        state.successMessage = action.payload.data?.message || 'QR photo deleted successfully';
      })
      .addCase(deleteQRPhoto.rejected, (state, action) => {
        state.deleteQRLoading = false;
        state.qrPhotosError = action.payload;
      })

      // ===== Reset Password =====
      .addCase(resetPassword.pending, (state) => {
        state.passwordResetLoading = true;
        state.passwordResetError = null;
        state.passwordResetSuccess = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.passwordResetLoading = false;
        state.passwordResetSuccess = true;
        state.successMessage = action.payload.message || 'Password reset successfully';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.passwordResetLoading = false;
        state.passwordResetError = action.payload;
        state.passwordResetSuccess = false;
      });
  },
});

// ==================== Selectors ====================

// Profile Selectors
export const selectProfile = (state) => state.vendor.profile;
export const selectProfileLoading = (state) => state.vendor.profileLoading;
export const selectProfileError = (state) => state.vendor.profileError;

// Workers Selectors
export const selectAllWorkers = (state) => state.vendor.workers;
export const selectWorkersLoading = (state) => state.vendor.workersLoading;
export const selectWorkersError = (state) => state.vendor.workersError;
export const selectTotalWorkers = (state) => state.vendor.totalWorkers;

// Single Worker Selectors
export const selectCurrentWorker = (state) => state.vendor.currentWorker;
export const selectWorkerLoading = (state) => state.vendor.workerLoading;
export const selectWorkerError = (state) => state.vendor.workerError;

// QR Photos Selectors
export const selectQRPhotos = (state) => state.vendor.qrPhotos;
export const selectQRPhotosLoading = (state) => state.vendor.qrPhotosLoading;
export const selectQRPhotosError = (state) => state.vendor.qrPhotosError;

// Operation Loading States
export const selectAddWorkerLoading = (state) => state.vendor.addWorkerLoading;
export const selectUpdateWorkerLoading = (state) => state.vendor.updateWorkerLoading;
export const selectDeleteWorkerLoading = (state) => state.vendor.deleteWorkerLoading;
export const selectUploadQRLoading = (state) => state.vendor.uploadQRLoading;
export const selectDeleteQRLoading = (state) => state.vendor.deleteQRLoading;

// Password Reset Selectors
export const selectPasswordResetLoading = (state) => state.vendor.passwordResetLoading;
export const selectPasswordResetSuccess = (state) => state.vendor.passwordResetSuccess;
export const selectPasswordResetError = (state) => state.vendor.passwordResetError;

// General Selectors
export const selectSuccessMessage = (state) => state.vendor.successMessage;

// ==================== Actions ====================



export const {
  clearProfileError,
  clearWorkersError,
  clearWorkerError,
  clearQRError,
  clearPasswordResetError,
  clearSuccessMessage,
  clearCurrentWorker,
  resetVendorState,
} = vendorSlice.actions;

export default vendorSlice.reducer;