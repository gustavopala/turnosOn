import './home.css';
import Header from './Componentes/header/Header';
import Calendar from './Componentes/calendar/Calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

import api from '../../api';

const handleLogin = async () => {
  const dni = 39616132
  const password = "Lidius";
  try {
    const response = await api.post('/user/login', { dni, password });

    // Guardar el Access Token en Redux o Context API
    const accessToken = response.data.token;
    console.log(accessToken);

    // Agregar el Access Token a los headers de Axios
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // Ahora puedes usar `api` para todas las solicitudes autenticadas
  } catch (error) {
    console.error('Error de autenticación', error);
  }
};

function Home() {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Inicializa la fecha actual

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="sectionHome">
      <button onClick={() => handleLogin()}>login</button>
      <Header selectedDate={selectedDate} />
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
    </section>
  );
}

export default Home;