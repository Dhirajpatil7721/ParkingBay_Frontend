// redux/slice/analyticsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Initial state
const initialState = {
    // Analytics data
    analyticsData: null,
    analyticsLoading: false,
    analyticsError: null,

    // Selected month/year
    selectedMonth: new Date().getMonth() + 1, // Current month (1-12)
    selectedYear: new Date().getFullYear(),

    // UI state
    showMonthPicker: false,
    showNoDataModal: false,

    // Success messages
    successMessage: null,
};

// ==================== Async Thunks ====================

// Get Monthly Analytics
export const getMonthlyAnalytics = createAsyncThunk(
    'analytics/getMonthlyAnalytics',
    async ({ year, month }, { rejectWithValue, getState }) => {
        try {
            // Validate month and year
            if (!year || !month || month < 1 || month > 12) {
                return rejectWithValue('Invalid month or year parameters');
            }

            const response = await api.get(`/admin-analytic/dashboard/analytics/${year}/${month}`);
            return response.data;
        } catch (error) {
            console.error('Analytics API Error:', error);

            // Handle specific error cases
            if (error.response?.status === 401) {
                return rejectWithValue('Unauthorized access. Please login again.');
            } else if (error.response?.status === 403) {
                return rejectWithValue('You do not have permission to view analytics.');
            } else if (error.response?.status === 404) {
                return rejectWithValue('Analytics data not found for the selected period.');
            }

            return rejectWithValue(
                error.response?.data?.message ||
                error.response?.data?.error ||
                'Failed to fetch analytics data'
            );
        }
    }
);

// Get Analytics for Current Month (convenience thunk)
export const getCurrentMonthAnalytics = createAsyncThunk(
    'analytics/getCurrentMonthAnalytics',
    async (_, { dispatch, getState }) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;

        return dispatch(getMonthlyAnalytics({ year, month }));
    }
);

// ==================== Slice ====================

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        // Set selected month/year
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        },
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload;
        },
        setSelectedMonthYear: (state, action) => {
            const { year, month } = action.payload;
            if (year) state.selectedYear = year;
            if (month) state.selectedMonth = month;
        },

        // UI controls
        setShowMonthPicker: (state, action) => {
            state.showMonthPicker = action.payload;
        },
        setShowNoDataModal: (state, action) => {
            state.showNoDataModal = action.payload;
        },

        // Clear data
        clearAnalyticsData: (state) => {
            state.analyticsData = null;
        },
        clearAnalyticsError: (state) => {
            state.analyticsError = null;
        },
        clearSuccessMessage: (state) => {
            state.successMessage = null;
        },

        // Reset state
        resetAnalyticsState: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            // ===== Get Monthly Analytics =====
            .addCase(getMonthlyAnalytics.pending, (state) => {
                state.analyticsLoading = true;
                state.analyticsError = null;
            })
            .addCase(getMonthlyAnalytics.fulfilled, (state, action) => {
                state.analyticsLoading = false;

                // Store the analytics data
                if (action.payload.success && action.payload.data) {
                    state.analyticsData = action.payload.data;

                    // Update selected month/year from response if available
                    if (action.payload.data.month) {
                        state.selectedMonth = action.payload.data.month;
                    }
                    if (action.payload.data.year) {
                        state.selectedYear = action.payload.data.year;
                    }

                    // Check if there's data (BookingCount > 0)
                    if (action.payload.data.BookingCount === 0) {
                        state.showNoDataModal = true;
                    } else {
                        state.showNoDataModal = false;
                    }

                    state.successMessage = action.payload.message || 'Analytics loaded successfully';
                } else {
                    state.analyticsData = null;
                    state.showNoDataModal = true;
                }
            })
            .addCase(getMonthlyAnalytics.rejected, (state, action) => {
                state.analyticsLoading = false;
                state.analyticsError = action.payload || 'Failed to fetch analytics';
                state.analyticsData = null;

                // Show no data modal for certain errors
                if (action.payload?.includes('not found') || action.payload?.includes('No data')) {
                    state.showNoDataModal = true;
                }
            });
    },
});

// ==================== Selectors ====================

// Main analytics data
export const selectAnalyticsData = (state) => state.analytics.analyticsData;
export const selectAnalyticsLoading = (state) => state.analytics.analyticsLoading;
export const selectAnalyticsError = (state) => state.analytics.analyticsError;

// Selected month/year
export const selectSelectedMonth = (state) => state.analytics.selectedMonth;
export const selectSelectedYear = (state) => state.analytics.selectedYear;
export const selectSelectedMonthYear = (state) => ({
    year: state.analytics.selectedYear,
    month: state.analytics.selectedMonth,
});

// UI state
export const selectShowMonthPicker = (state) => state.analytics.showMonthPicker;
export const selectShowNoDataModal = (state) => state.analytics.showNoDataModal;

// Success message
export const selectAnalyticsSuccessMessage = (state) => state.analytics.successMessage;

// ==================== Computed Selectors ====================

// Check if data exists
export const selectHasAnalyticsData = (state) => {
    const data = state.analytics.analyticsData;
    return data && data.BookingCount > 0;
};

// Get peak day
export const selectPeakDay = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.daysWithBookings || data.daysWithBookings.length === 0) {
        return { day: 0, bookingCount: 0 };
    }

    return data.daysWithBookings.reduce((max, day) =>
        day.bookingCount > max.bookingCount ? day : max,
        { day: 0, bookingCount: 0 }
    );
};

// Get total days with bookings
export const selectTotalDaysWithBookings = (state) => {
    const data = state.analytics.analyticsData;
    return data?.daysWithBookings?.length || 0;
};

// Get booking rate
export const selectBookingRate = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.daysInMonth || data.daysInMonth === 0) return '0.0';

    const totalDays = data.daysWithBookings?.length || 0;
    return ((totalDays / data.daysInMonth) * 100).toFixed(1);
};

// Format vehicle types for charts
export const selectFormattedVehicleTypes = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.VehicalType) return [];

    const colors = ['#0066cc', '#ff9900', '#10B981', '#8B5CF6', '#EF4444'];

    return Object.entries(data.VehicalType).map(([type, count], index) => ({
        label: type === '2' ? '2-Wheeler' :
            type === '4' ? '4-Wheeler' :
                type === '17' ? 'Heavy Vehicle' :
                    type === '55' ? 'Bus' : `${type}-Wheeler`,
        value: count,
        color: colors[index % colors.length],
        type,
    }));
};

// Format payment methods for charts
// Fix the 'any' type
export const selectFormattedPaymentMethods = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.PymentMethod) return [];

    const paymentTotals = { UPI: 0, CASH: 0 };

    // Fix: properly type the parameter
    Object.values(data.PymentMethod).forEach((week) => {
        if (week.UPI) paymentTotals.UPI += week.UPI;
        if (week.CASH) paymentTotals.CASH += week.CASH;
    });

    return [
        { label: 'UPI', value: paymentTotals.UPI, color: '#8B5CF6' },
        { label: 'Cash', value: paymentTotals.CASH, color: '#10B981' },
    ];
};

// Format daily bookings for charts
export const selectFormattedDailyBookings = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.daysWithBookings) return [];

    // Create array for all days in month
    const allDays = Array.from({ length: data.daysInMonth || 31 }, (_, i) => {
        const day = i + 1;
        const dayData = data.daysWithBookings.find(d => d.day === day);
        return {
            day,
            bookings: dayData?.bookingCount || 0,
        };
    });

    return allDays;
};

// Format peak hours
export const selectFormattedPeakHours = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.PeakHours) return [];

    return Object.entries(data.PeakHours).map(([day, hour]) => ({
        day: parseInt(day),
        hour,
    }));
};

// Get top performing days
export const selectTopPerformingDays = (state, limit = 5) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.daysWithBookings) return [];

    return [...data.daysWithBookings]
        .sort((a, b) => b.bookingCount - a.bookingCount)
        .slice(0, limit);
};

// Get revenue data
export const selectRevenueData = (state) => {
    const data = state.analytics.analyticsData;
    if (!data || !data.Revenue) return {};

    return data.Revenue;
};

// Get total revenue
export const selectTotalRevenue = (state) => {
    const data = state.analytics.analyticsData;
    if (!data) return 0;

    return data.totalRevenue || 0;
};

// ==================== Actions ====================

export const {
    setSelectedMonth,
    setSelectedYear,
    setSelectedMonthYear,
    setShowMonthPicker,
    setShowNoDataModal,
    clearAnalyticsData,
    clearAnalyticsError,
    clearSuccessMessage,
    resetAnalyticsState,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;