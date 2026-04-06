import axios from "axios";

const api = axios.create({
    // baseURL: "https://parkingbay.in/api", 
    baseURL: "http://localhost:5000/api", 
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ REQUEST INTERCEPTOR - Add token to every request
api.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        // Debug log
        // console.log('🔍 API Request:', {
        //     url: config.url,
        //     method: config.method,
        //     hasToken: !!token,
        // });

        // If token exists, add it to headers
        if (token) {
            // Remove any quotes if present
            const cleanToken = token.replace(/"/g, '');
            config.headers.Authorization = `Bearer ${cleanToken}`;
        } else {
            console.warn('⚠️ No token found in localStorage');
        }
        
        return config;
    },
    (error) => {
        console.error('❌ Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// ✅ RESPONSE INTERCEPTOR - Handle errors globally
api.interceptors.response.use(
    (response) => {
        // Success response - just return it
        return response;
    },
    (error) => {
        // Error response - handle globally
        console.error('❌ API Error:', {
            url: error.config?.url,
            status: error.response?.status,
            message: error.response?.data?.message || error.message,
        });

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401) {
            console.log('🔒 Unauthorized - redirecting to login');
            
            // Clear all storage
            localStorage.clear();
            sessionStorage.clear();
            
            // Redirect to login page
            window.location.href = '/auth/login';
        }
        
        return Promise.reject(error);
    }
);

export default api;