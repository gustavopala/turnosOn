import axios from 'axios';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true // Para asegurarte de que las cookies (Refresh Token) se envíen con las solicitudes
});

// Interceptor para manejar errores de token expirado
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Si recibimos un error 401 y no hemos reintentado aún
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Solicitar nuevo Access Token usando el Refresh Token
        const { data } = await api.post('/user/refresh');
        
        // Actualizar el token en los headers de la solicitud original
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.token}`;
        
        // Reintentar la solicitud original
        return api(originalRequest);
      } catch (refreshError) {
        // Si falla la actualización del token, probablemente el Refresh Token esté expirado
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;