import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import api from '../../services/api';

// Initial state
const initialState = {
  // Vendor History Data
  vendorHistory: {
    data: [],
    loading: false,
    error: null,
  },

  // Delete History Data
  deleteHistory: {
    data: null,
    loading: false,
    error: null,
  },

  // Active Bookings Data
  activeBookings: {
    data: [],
    loading: false,
    error: null,
    total: 0,
  },

  // Pagination
  pagination: {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 25,
    hasNextPage: false,
    hasPrevPage: false,
  },

  // Statistics
  statistics: {
    summary: null,
    breakdown: null,
    dateRange: null,
  },

  // Filters
  filters: {
    vendor_id: null,
    startDate: null,
    endDate: null,
  },

  // Active Bookings Filters (local UI only)
  activeBookingsFilters: {
    status: 'ACTIVE',
    vehicleTypes: [],
    paymentMethods: [],
    showPreBooked: false,
  },

  // Delete Dialog State
  deleteDialog: {
    open: false,
    amount: null,
    loading: false,
  },

  // Success Message
  successMessage: null,
};

// ==================== Async Thunks ====================

/**
 * 📊 Get Vendor History with Pagination and Filters
 */
export const getVendorHistory = createAsyncThunk(
  'history/getVendorHistory',
  async ({ vendor_id, startDate, endDate, page = 1, limit = 25 }, { rejectWithValue }) => {
    try {
      if (!vendor_id) return rejectWithValue('Vendor ID is required');

      const response = await api.post('/booking/history/vendor', {
        vendor_id,
        startDate,
        endDate,
        page,
        limit
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch history');
    }
  }
);

/**
 * 🗑️ Delete History by Amount (Subset Sum Algorithm)
 */
// export const deleteHistoryByAmount = createAsyncThunk(
//   'history/deleteHistoryByAmount',
//   async ({ vendor_id, amount, startDate, endDate }, { rejectWithValue }) => {
//     try {
//       if (!vendor_id || amount === undefined) {
//         return rejectWithValue('Vendor ID and amount are required');
//       }

//       const response = await api.delete('/booking/deleteHistoryByAmount', {
//         vendor_id,
//         amount,
//         startDate,
//         endDate
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to delete history');
//     }
//   }
// );
/**
 * 🗑️ Delete History by Amount (Subset Sum Algorithm)
 */
export const deleteHistoryByAmount = createAsyncThunk(
  'history/deleteHistoryByAmount',
  async ({ vendor_id, amount, startDate, endDate }, { rejectWithValue }) => {
    try {
      if (!vendor_id || amount === undefined) {
        return rejectWithValue('Vendor ID and amount are required');
      }

      console.log('📤 Sending DELETE request with payload:', {
        vendor_id,
        amount,
        startDate,
        endDate
      });

      // For DELETE requests with data, use the config object
      const response = await api.delete('/booking/deleteHistoryByAmount', {
        data: {
          vendor_id,
          amount: parseFloat(amount),
          startDate: startDate || null,
          endDate: endDate || null
        }
      });

      console.log('📥 DELETE response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Delete error:', error);
      console.error('Error response:', error.response?.data);
      return rejectWithValue(error.response?.data?.message || 'Failed to delete history');
    }
  }
);
/**
 * 🚗 Get Active Bookings for Dashboard
 */
export const getActiveBookingsForDashboard = createAsyncThunk(
  'history/getActiveBookingsForDashboard',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/activebooking/');
      return response.data;
    } catch (error) {
      console.error('❌ Active Bookings API Error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch active bookings');
    }
  }
);

// Add this to your BookingHistory slice file

/**
 * 📄 Generate PDF Report for Vendor History
 */
export const generateVendorHistoryPDF = createAsyncThunk(
  'history/generateVendorHistoryPDF',
  async ({ vendor_id, startDate, endDate }, { rejectWithValue }) => {
    try {
      if (!vendor_id) {
        return rejectWithValue('Vendor ID is required');
      }

      const response = await api.post('/booking/history/vendor/pdf', {
        vendor_id,
        startDate,
        endDate
      }, {
        responseType: 'blob' // Important: This tells axios to return the response as a blob
      });

      return response.data;
    } catch (error) {
      console.error('PDF Generation Error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to generate PDF');
    }
  }
);

// ==================== Slice ====================

const BookingHistory = createSlice({
  name: 'history',
  initialState,
  reducers: {
    // Filters
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    setDateRange: (state, action) => {
      state.filters.startDate = action.payload.startDate;
      state.filters.endDate = action.payload.endDate;
    },
    setVendorId: (state, action) => {
      state.filters.vendor_id = action.payload;
    },

    // Active Bookings Filters (local)
    setActiveBookingsFilters: (state, action) => {
      state.activeBookingsFilters = { ...state.activeBookingsFilters, ...action.payload };
    },
    resetActiveBookingsFilters: (state) => {
      state.activeBookingsFilters = initialState.activeBookingsFilters;
    },
    setActiveBookingsStatus: (state, action) => {
      state.activeBookingsFilters.status = action.payload;
    },
    setActiveBookingsVehicleTypes: (state, action) => {
      state.activeBookingsFilters.vehicleTypes = action.payload;
    },
    setActiveBookingsPaymentMethods: (state, action) => {
      state.activeBookingsFilters.paymentMethods = action.payload;
    },
    setShowPreBooked: (state, action) => {
      state.activeBookingsFilters.showPreBooked = action.payload;
    },

    // Pagination
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.pagination.itemsPerPage = action.payload;
    },
    resetPagination: (state) => {
      state.pagination = initialState.pagination;
    },

    // Delete Dialog
    openDeleteDialog: (state, action) => {
      state.deleteDialog.open = true;
      state.deleteDialog.amount = action.payload?.amount || null;
    },
    closeDeleteDialog: (state) => {
      state.deleteDialog.open = false;
      state.deleteDialog.amount = null;
      state.deleteDialog.loading = false;
    },

    // Clear data
    clearVendorHistory: (state) => {
      state.vendorHistory.data = [];
      state.statistics = { summary: null, breakdown: null, dateRange: null };
      state.pagination = initialState.pagination;
    },
    clearDeleteHistoryData: (state) => {
      state.deleteHistory.data = null;
    },
    clearActiveBookings: (state) => {
      state.activeBookings.data = [];
      state.activeBookings.total = 0;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    resetHistoryState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // ===== Get Vendor History =====
      .addCase(getVendorHistory.pending, (state) => {
        state.vendorHistory.loading = true;
        state.vendorHistory.error = null;
      })
      .addCase(getVendorHistory.fulfilled, (state, action) => {

        state.vendorHistory.loading = false;
        if (action.payload.success) {
          state.vendorHistory.data = action.payload.data || [];
          state.statistics.summary = action.payload.summary || null;
          state.statistics.breakdown = action.payload.breakdown || null;
          state.statistics.dateRange = action.payload.dateRange || null;

          // console.log('💰 Total Amount in store:', action.payload.summary?.totalAmount);
          // console.log('🔢 Total Bookings in store:', action.payload.summary?.totalBookings);

          if (action.payload.pagination) {
            state.pagination = {
              currentPage: action.payload.pagination.currentPage,
              totalPages: action.payload.pagination.totalPages,
              totalItems: action.payload.pagination.totalItems,
              itemsPerPage: action.payload.pagination.itemsPerPage,
              hasNextPage: action.payload.pagination.hasNextPage,
              hasPrevPage: action.payload.pagination.hasPrevPage,
            };
            // console.log('📄 Pagination info:', state.pagination);
          }
          state.successMessage = action.payload.message || 'History loaded successfully';
        } else {
          state.vendorHistory.error = action.payload.message || 'Failed to load history';
        }
      })
      .addCase(getVendorHistory.rejected, (state, action) => {
        state.vendorHistory.loading = false;
        state.vendorHistory.error = action.payload || 'Failed to fetch history';
        state.vendorHistory.data = [];
      })

      // ===== Delete History by Amount =====
      .addCase(deleteHistoryByAmount.pending, (state) => {
        state.deleteHistory.loading = true;
        state.deleteHistory.error = null;
        state.deleteDialog.loading = true;
      })
      .addCase(deleteHistoryByAmount.fulfilled, (state, action) => {
        state.deleteHistory.loading = false;
        state.deleteHistory.data = action.payload;
        state.deleteDialog.loading = false;
        state.deleteDialog.open = false;
        state.successMessage = action.payload.message || 'History deleted successfully';
      })
      .addCase(deleteHistoryByAmount.rejected, (state, action) => {
        state.deleteHistory.loading = false;
        state.deleteHistory.error = action.payload || 'Failed to delete history';
        state.deleteDialog.loading = false;
      })

      // ===== Get Active Bookings =====
      .addCase(getActiveBookingsForDashboard.pending, (state) => {
        state.activeBookings.loading = true;
        state.activeBookings.error = null;
      })
      .addCase(getActiveBookingsForDashboard.fulfilled, (state, action) => {
        state.activeBookings.loading = false;
        const payload = action.payload;

        if (payload && Array.isArray(payload.activeBookings)) {
          state.activeBookings.data = payload.activeBookings;
          state.activeBookings.total = payload.total ?? payload.activeBookings.length;
        } else if (Array.isArray(payload)) {
          state.activeBookings.data = payload;
          state.activeBookings.total = payload.length;
        } else {
          state.activeBookings.data = [];
          state.activeBookings.total = 0;
        }
      })
      .addCase(getActiveBookingsForDashboard.rejected, (state, action) => {
        state.activeBookings.loading = false;
        state.activeBookings.error = action.payload || 'Failed to fetch active bookings';
        state.activeBookings.data = [];
        state.activeBookings.total = 0;
      });
  },
});

// ==================== Base Selectors ====================

// Vendor History
export const selectVendorHistoryData = (state) => state.history?.vendorHistory?.data || [];
export const selectVendorHistoryLoading = (state) => state.history?.vendorHistory?.loading;
export const selectVendorHistoryError = (state) => state.history?.vendorHistory?.error;

// Delete History
export const selectDeleteHistoryData = (state) => state.history?.deleteHistory?.data;
export const selectDeleteHistoryLoading = (state) => state.history?.deleteHistory?.loading;
export const selectDeleteHistoryError = (state) => state.history?.deleteHistory?.error;

// Active Bookings (Memoized)
const selectActiveBookingsRaw = (state) => state.history?.activeBookings?.data || [];
export const selectActiveBookings = createSelector(
  [selectActiveBookingsRaw],
  (activeBookings) => activeBookings
);
export const selectActiveBookingsLoading = (state) => state.history?.activeBookings?.loading;
export const selectActiveBookingsError = (state) => state.history?.activeBookings?.error;
export const selectActiveBookingsTotal = (state) => state.history?.activeBookings?.total || 0;

// Active Bookings Filters
export const selectActiveBookingsFilters = (state) => state.history?.activeBookingsFilters;
export const selectActiveBookingsStatus = (state) => state.history?.activeBookingsFilters?.status;
export const selectActiveBookingsVehicleTypes = (state) => state.history?.activeBookingsFilters?.vehicleTypes || [];
export const selectActiveBookingsPaymentMethods = (state) => state.history?.activeBookingsFilters?.paymentMethods || [];
export const selectShowPreBooked = (state) => state.history?.activeBookingsFilters?.showPreBooked || false;

// Pagination
export const selectHistoryPagination = (state) => state.history?.pagination;
export const selectCurrentPage = (state) => state.history?.pagination?.currentPage || 1;
export const selectTotalPages = (state) => state.history?.pagination?.totalPages || 0;
export const selectTotalItems = (state) => state.history?.pagination?.totalItems || 0;
export const selectHasNextPage = (state) => state.history?.pagination?.hasNextPage || false;
export const selectHasPrevPage = (state) => state.history?.pagination?.hasPrevPage || false;

// Statistics
export const selectHistoryStatistics = (state) => state.history?.statistics;
export const selectHistorySummary = (state) => state.history?.statistics?.summary;
export const selectHistoryBreakdown = (state) => state.history?.statistics?.breakdown;
export const selectHistoryDateRange = (state) => state.history?.statistics?.dateRange;

// Filters
export const selectHistoryFilters = (state) => state.history?.filters;
export const selectVendorId = (state) => state.history?.filters?.vendor_id;
export const selectStartDate = (state) => state.history?.filters?.startDate;
export const selectEndDate = (state) => state.history?.filters?.endDate;

// Delete Dialog
export const selectDeleteDialogOpen = (state) => state.history?.deleteDialog?.open;
export const selectDeleteAmount = (state) => state.history?.deleteDialog?.amount;
export const selectDeleteDialogLoading = (state) => state.history?.deleteDialog?.loading;

// Success Message
export const selectSuccessMessage = (state) => state.history?.successMessage;

// ==================== Memoized Statistics Selectors ====================

export const selectTotalAmount = createSelector(
  [selectHistorySummary],
  (summary) => summary?.totalAmount || 0
);

export const selectTotalBookings = createSelector(
  [selectHistorySummary],
  (summary) => summary?.totalBookings || 0
);

export const selectAverageAmount = createSelector(
  [selectHistorySummary],
  (summary) => summary?.averageAmount || 0
);

export const selectPaymentBreakdown = createSelector(
  [selectHistorySummary],
  (summary) => summary?.paymentBreakdown || {
    CASH: { count: 0, totalAmount: 0, percentage: 0 },
    UPI: { count: 0, totalAmount: 0, percentage: 0 }
  }
);

export const selectVehicleBreakdown = createSelector(
  [selectHistorySummary],
  (summary) => summary?.vehicleBreakdown || {}
);

export const selectDailyBreakdown = createSelector(
  [selectHistoryBreakdown],
  (breakdown) => {
    const daily = breakdown?.daily || {};
    return Object.entries(daily).map(([date, data]) => ({ date, ...data }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }
);

export const selectMonthlyBreakdown = createSelector(
  [selectHistoryBreakdown],
  (breakdown) => {
    const monthly = breakdown?.monthly || {};
    return Object.entries(monthly).map(([month, data]) => ({ month, ...data }))
      .sort((a, b) => b.month.localeCompare(a.month));
  }
);

export const selectTopVehiclesByFrequency = createSelector(
  [selectHistoryBreakdown],
  (breakdown) => breakdown?.topVehicles?.byFrequency || []
);

export const selectTopVehiclesByRevenue = createSelector(
  [selectHistoryBreakdown],
  (breakdown) => breakdown?.topVehicles?.byRevenue || []
);

export const selectFormattedHistoryData = createSelector(
  [selectVendorHistoryData],
  (data) => data.map(booking => ({
    id: booking._id,
    vehicleNumber: booking.vehicleNo,
    vehicleType: booking.vehicleType,
    inTime: booking.inTime,
    outTime: booking.outTime,
    duration: booking.total_min,
    amount: booking.amount,
    paymentMethod: booking.paymentMethod,
    advance: booking.advance,
    advancePaymentMethod: booking.advance_payment_method,
    createdBy: booking.createdBy?.name || 'Unknown',
    createdAt: booking.createdAt,
    status: booking.paymentSucsess ? 'Completed' : 'Pending',
  }))
);

export const selectDeleteSummary = createSelector(
  [selectDeleteHistoryData],
  (data) => data?.summary || null
);

export const selectRemainingData = createSelector(
  [selectDeleteHistoryData],
  (data) => data?.remainingData || []
);

export const selectRemainingStatistics = createSelector(
  [selectDeleteHistoryData],
  (data) => data?.remainingStatistics || null
);

export const selectAuditLog = createSelector(
  [selectDeleteHistoryData],
  (data) => data?.auditLog || null
);

// Active Bookings Memoized Selectors
export const selectActiveVehiclesCount = createSelector(
  [selectActiveBookings],
  (activeBookings) => activeBookings.length
);

export const selectActiveBookingsByVehicleType = createSelector(
  [selectActiveBookings],
  (activeBookings) => {
    if (!activeBookings.length) return {};
    return activeBookings.reduce((acc, booking) => {
      const type = booking.vehicleType;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
  }
);

export const selectActiveBookingsByPaymentMethod = createSelector(
  [selectActiveBookings],
  (activeBookings) => {
    if (!activeBookings.length) return { CASH: 0, UPI: 0 };
    return activeBookings.reduce((acc, booking) => {
      if (booking.isAdvance) {
        acc.ADVANCE = (acc.ADVANCE || 0) + 1;
      } else {
        const method = booking.paymentMethod || 'CASH';
        acc[method] = (acc[method] || 0) + 1;
      }
      return acc;
    }, {});
  }
);

export const selectActiveBookingsList = createSelector(
  [selectActiveBookings],
  (activeBookings) => activeBookings.map(booking => ({
    id: booking._id,
    vehicleNumber: booking.vehicleNo,
    vehicleType: booking.vehicleType,
    inTime: booking.createdAt,
    duration: booking.total_min,
    amount: booking.amount,
    advance: booking.advance,
    isAdvance: booking.isAdvance,
    paymentMethod: booking.paymentMethod,
    isPreBooked: booking.isPreBooked,
  }))
);

// ==================== Actions ====================
export const {
  setFilters,
  resetFilters,
  setDateRange,
  setVendorId,
  setActiveBookingsFilters,
  resetActiveBookingsFilters,
  setActiveBookingsStatus,
  setActiveBookingsVehicleTypes,
  setActiveBookingsPaymentMethods,
  setShowPreBooked,
  setPage,
  setItemsPerPage,
  resetPagination,
  openDeleteDialog,
  closeDeleteDialog,
  clearVendorHistory,
  clearDeleteHistoryData,
  clearActiveBookings,
  clearSuccessMessage,
  resetHistoryState,
} = BookingHistory.actions;

export default BookingHistory.reducer;