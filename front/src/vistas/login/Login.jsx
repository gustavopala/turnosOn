import React, { useState } from 'react';
import axios from 'axios';

function Login (){
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/user/login', {
        dni, // Aquí envías el dni
        password
      }, {
        withCredentials: true // Asegúrate de que se envíen las cookies/credenciales si es necesario
      });

      // Procesar respuesta exitosa, guardar token si es necesario
      console.log('Login exitoso:', response.data);
      // Aquí puedes redirigir o realizar alguna acción
    } catch (err) {
      console.error(err);
      setError('Credenciales incorrectas o error en el servidor.');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  );
};

export default Login;