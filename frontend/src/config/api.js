
const API_BASE_URL = "https://chatrapati-gurukul.onrender.com" || 'http://localhost:5000';

// Debug logging
console.log('=== API Configuration ===');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('Environment:', import.meta.env.MODE);
console.log('=======================');

export default API_BASE_URL;