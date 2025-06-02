import axios from "axios";
import { getCookies } from "./healper";
// import { getCookie } from "cookies-next";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  withCredentials: true,
});

// Add a request interceptor to include the Bearer token
api.interceptors.request.use(
  async(config) => {
    // Get the token from cookies or any other storage
    // const token = getCookie("authToken");

    console.log("config----------", config);

    const getCookiesdata = await getCookies(["accessToken"]);

    console.log("getCookies----------", getCookiesdata);


    const tokenRaw = getCookiesdata.accessToken;
const token = tokenRaw ? JSON.parse(tokenRaw) : null;
    

console.log("token----------", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("config.headers.Authorization----------", config);

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle global errors
api.interceptors.response.use(
  (response) => {
    // Return the response data directly
    return response;
  },
  (error) => {
    // Handle global errors (e.g., unauthorized, server errors)
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Optionally, redirect to the login page
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;


// import axios from "axios";
// import { getCookies } from "./healper";

// // Create an Axios instance
// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
//   timeout: 10000, // Set a timeout for requests
//   withCredentials: true,
// });

// // Add a request interceptor to include the Bearer token
// api.interceptors.request.use(
//   async(config) => {
//     // Skip adding the token for refresh token requests to avoid loops
//     if (config.url === '/user-management/refresh-token' && config._isRefreshRequest) {
//       return config;
//     }

//     try {
//       const getCookiesdata = await getCookies(["accessToken"]);
//       const tokenRaw = getCookiesdata.accessToken;
//       const token = tokenRaw ? JSON.parse(tokenRaw) : null;
      
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
      
//       return config;
//     } catch (error) {
//       console.error("Error in request interceptor:", error);
//       return config;
//     }
//   },
//   (error) => {
//     // Handle request errors
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to handle global errors
// api.interceptors.response.use(
//   (response) => {
//     // Return the response data directly
//     return response;
//   },
//   async (error) => {
//     // Don't handle errors for refresh token requests to avoid infinite loops
//     if (error.config && error.config._isRefreshRequest) {
//       return Promise.reject(error);
//     }
    
//     // Check if the error is due to an expired token (401 Unauthorized)
//     if (error.response?.status === 401) {
//       console.error("Unauthorized! Token may be expired");
      
//       // You could optionally try to refresh the token here
//       // and retry the original request, but be careful of loops
      
//       // For now, we'll just let the error propagate so the user sees the login screen
//     }
    
//     return Promise.reject(error);
//   }
// );

// // Helper method to create new instances
// api.create = (config) => {
//   return axios.create(config);
// };

// export default api;