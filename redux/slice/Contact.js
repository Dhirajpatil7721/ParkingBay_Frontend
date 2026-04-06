// src/redux/slices/Contact.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// ==================== Initial State ====================
const initialState = {
  // Contacts List
  contacts: [],
  contactsLoading: false,
  contactsError: null,
  
  // Single Contact
  currentContact: null,
  currentContactLoading: false,
  currentContactError: null,
  
  // Statistics
  stats: null,
  statsLoading: false,
  statsError: null,
  
  // Pagination
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  },
  
  // Filters
  filters: {
    status: '',
    search: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  },
  
  // Operation Status
  createContactLoading: false,
  updateStatusLoading: false,
  replyContactLoading: false,
  deleteContactLoading: false,
  bulkDeleteLoading: false,
  
  // General State
  loading: false,
  error: null,
  success: false,
  successMessage: null,
};

// ==================== Async Thunks ====================

// @desc    Create new contact message (Public)
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await api.post('/contact', contactData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send message');
    }
  }
);

// @desc    Get all contacts (Admin only)
export const getAllContacts = createAsyncThunk(
  'contact/getAllContacts',
  async (params = {}, { rejectWithValue }) => {
    try {
      const {
        page = 1,
        limit = 10,
        status = '',
        search = '',
        sortBy = 'createdAt',
        sortOrder = 'desc'
      } = params;
      
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sortBy,
        sortOrder
      });
      
      if (status && status !== 'all') queryParams.append('status', status);
      if (search) queryParams.append('search', search);
      
      const response = await api.get(`/contact?${queryParams.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
  }
);

// @desc    Get single contact by ID (Admin only)
export const getContactById = createAsyncThunk(
  'contact/getContactById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/contact/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contact');
    }
  }
);

// @desc    Update contact status (Admin only)
export const updateContactStatus = createAsyncThunk(
  'contact/updateContactStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/contact/${id}/status`, { status });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update status');
    }
  }
);

// @desc    Reply to contact (Admin only)
export const replyToContact = createAsyncThunk(
  'contact/replyToContact',
  async ({ id, adminReply }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/contact/${id}/reply`, { adminReply });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send reply');
    }
  }
);

// @desc    Delete single contact (Admin only)
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/contact/${id}`);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete contact');
    }
  }
);

// @desc    Bulk delete contacts (Admin only)
export const bulkDeleteContacts = createAsyncThunk(
  'contact/bulkDeleteContacts',
  async (ids, { rejectWithValue }) => {
    try {
      const response = await api.delete('/contact/bulk/delete', { data: { ids } });
      return { ids, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete contacts');
    }
  }
);

// @desc    Get contact statistics (Admin only)
export const getContactStats = createAsyncThunk(
  'contact/getContactStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/contact/stats/summary');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch statistics');
    }
  }
);

// ==================== Slice ====================

const Contact = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.contactsError = null;
      state.currentContactError = null;
      state.statsError = null;
    },
    clearSuccess: (state) => {
      state.success = false;
      state.successMessage = null;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    clearCurrentContact: (state) => {
      state.currentContact = null;
    },
    resetContactState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // ========== Create Contact ==========
      .addCase(createContact.pending, (state) => {
        state.createContactLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.createContactLoading = false;
        state.success = true;
        state.successMessage = action.payload.message || 'Message sent successfully';
        state.contacts.unshift(action.payload.data);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.createContactLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // ========== Get All Contacts ==========
      .addCase(getAllContacts.pending, (state) => {
        state.contactsLoading = true;
        state.contactsError = null;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.contactsLoading = false;
        state.contacts = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.contactsLoading = false;
        state.contactsError = action.payload;
      })

      // ========== Get Contact By ID ==========
      .addCase(getContactById.pending, (state) => {
        state.currentContactLoading = true;
        state.currentContactError = null;
      })
      .addCase(getContactById.fulfilled, (state, action) => {
        state.currentContactLoading = false;
        state.currentContact = action.payload.data;
      })
      .addCase(getContactById.rejected, (state, action) => {
        state.currentContactLoading = false;
        state.currentContactError = action.payload;
      })

      // ========== Update Contact Status ==========
      .addCase(updateContactStatus.pending, (state) => {
        state.updateStatusLoading = true;
        state.error = null;
      })
      .addCase(updateContactStatus.fulfilled, (state, action) => {
        state.updateStatusLoading = false;
        state.success = true;
        state.successMessage = action.payload.message || 'Status updated successfully';
        
        // Update in contacts array
        const index = state.contacts.findIndex(
          contact => contact._id === action.payload.data.id
        );
        if (index !== -1) {
          state.contacts[index].status = action.payload.data.status;
        }
        
        // Update current contact if it's the same
        if (state.currentContact?._id === action.payload.data.id) {
          state.currentContact.status = action.payload.data.status;
        }
      })
      .addCase(updateContactStatus.rejected, (state, action) => {
        state.updateStatusLoading = false;
        state.error = action.payload;
      })

      // ========== Reply to Contact ==========
      .addCase(replyToContact.pending, (state) => {
        state.replyContactLoading = true;
        state.error = null;
      })
      .addCase(replyToContact.fulfilled, (state, action) => {
        state.replyContactLoading = false;
        state.success = true;
        state.successMessage = action.payload.message || 'Reply sent successfully';
        
        // Update in contacts array
        const index = state.contacts.findIndex(
          contact => contact._id === action.payload.data.id
        );
        if (index !== -1) {
          state.contacts[index].status = action.payload.data.status;
          state.contacts[index].adminReply = action.payload.data.reply;
          state.contacts[index].repliedAt = action.payload.data.repliedAt;
        }
        
        // Update current contact if it's the same
        if (state.currentContact?._id === action.payload.data.id) {
          state.currentContact.status = action.payload.data.status;
          state.currentContact.adminReply = action.payload.data.reply;
          state.currentContact.repliedAt = action.payload.data.repliedAt;
        }
      })
      .addCase(replyToContact.rejected, (state, action) => {
        state.replyContactLoading = false;
        state.error = action.payload;
      })

      // ========== Delete Contact ==========
      .addCase(deleteContact.pending, (state) => {
        state.deleteContactLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.deleteContactLoading = false;
        state.success = true;
        state.successMessage = action.payload.message || 'Contact deleted successfully';
        
        // Remove from contacts array
        state.contacts = state.contacts.filter(
          contact => contact._id !== action.payload.id
        );
        
        // Clear current contact if it's the same
        if (state.currentContact?._id === action.payload.id) {
          state.currentContact = null;
        }
        
        // Update pagination total
        if (state.pagination.total > 0) {
          state.pagination.total -= 1;
        }
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.deleteContactLoading = false;
        state.error = action.payload;
      })

      // ========== Bulk Delete Contacts ==========
      .addCase(bulkDeleteContacts.pending, (state) => {
        state.bulkDeleteLoading = true;
        state.error = null;
      })
      .addCase(bulkDeleteContacts.fulfilled, (state, action) => {
        state.bulkDeleteLoading = false;
        state.success = true;
        state.successMessage = action.payload.message || 'Contacts deleted successfully';
        
        // Remove selected contacts from array
        state.contacts = state.contacts.filter(
          contact => !action.payload.ids.includes(contact._id)
        );
        
        // Update pagination total
        if (state.pagination.total > 0) {
          state.pagination.total -= action.payload.deletedCount || action.payload.ids.length;
        }
      })
      .addCase(bulkDeleteContacts.rejected, (state, action) => {
        state.bulkDeleteLoading = false;
        state.error = action.payload;
      })

      // ========== Get Contact Stats ==========
      .addCase(getContactStats.pending, (state) => {
        state.statsLoading = true;
        state.statsError = null;
      })
      .addCase(getContactStats.fulfilled, (state, action) => {
        state.statsLoading = false;
        state.stats = action.payload.data;
      })
      .addCase(getContactStats.rejected, (state, action) => {
        state.statsLoading = false;
        state.statsError = action.payload;
      });
  },
});

// ==================== Selectors ====================

// Contacts List Selectors
export const selectAllContacts = (state) => state.contact.contacts;
export const selectContactsLoading = (state) => state.contact.contactsLoading;
export const selectContactsError = (state) => state.contact.contactsError;

// Single Contact Selectors
export const selectCurrentContact = (state) => state.contact.currentContact;
export const selectCurrentContactLoading = (state) => state.contact.currentContactLoading;
export const selectCurrentContactError = (state) => state.contact.currentContactError;

// Statistics Selectors
export const selectContactStats = (state) => state.contact.stats;
export const selectStatsLoading = (state) => state.contact.statsLoading;
export const selectStatsError = (state) => state.contact.statsError;

// Pagination Selectors
export const selectPagination = (state) => state.contact.pagination;

// Filters Selectors
export const selectFilters = (state) => state.contact.filters;

// Operation Loading States
export const selectCreateContactLoading = (state) => state.contact.createContactLoading;
export const selectUpdateStatusLoading = (state) => state.contact.updateStatusLoading;
export const selectReplyContactLoading = (state) => state.contact.replyContactLoading;
export const selectDeleteContactLoading = (state) => state.contact.deleteContactLoading;
export const selectBulkDeleteLoading = (state) => state.contact.bulkDeleteLoading;

// General Selectors
export const selectContactLoading = (state) => state.contact.loading;
export const selectContactError = (state) => state.contact.error;
export const selectContactSuccess = (state) => state.contact.success;
export const selectContactSuccessMessage = (state) => state.contact.successMessage;

// ==================== Export Actions & Reducer ====================

export const {
  clearError,
  clearSuccess,
  setFilters,
  resetFilters,
  setPage,
  clearCurrentContact,
  resetContactState,
} = Contact.actions;

export default Contact.reducer;