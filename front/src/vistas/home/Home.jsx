import './home.css';
import Header from './Componentes/header/Header';
import Calendar from './Componentes/calendar/Calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

function Home() {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Inicializa la fecha actual

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="sectionHome">
      <Header selectedDate={selectedDate} />
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
    </section>
  );
}

export default Home;