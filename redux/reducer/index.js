// redux/reducer/index.js
import { combineReducers } from 'redux';
import authReducer from '../slice/authSlice';
import vendorReducer from '../slice/Vendor';
import analyticsReducer from '../slice/analyticsSlice';
import bookingHistoryReducer from '../slice/BookingHistory';
import ContactReducer from '../slice/Contact';


const rootReducer = combineReducers({
  auth: authReducer,
  vendor: vendorReducer,
  analytics: analyticsReducer,
  bookingHistory: bookingHistoryReducer,
  Contact: ContactReducer,
});

export default rootReducer;