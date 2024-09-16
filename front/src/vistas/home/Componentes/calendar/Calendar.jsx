import './calendar.css';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState, useEffect } from 'react';


// Simulación de datos de turnos (JSON)
const turnosSimulados = {
  "2024-09-10": {
    "17:00": { "cliente": "Alfredo Caceres", "estado": "reservado" },
    "17:30": { "cliente": null, "estado": "disponible" },
    "18:00": { "cliente": null, "estado": "disponible" },
    "18:30": { "cliente": null, "estado": "disponible" },
    "19:00": { "cliente": null, "estado": "disponible" },
    "19:30": { "cliente": "Juan Perez", "estado": "reservado" }
  },
  "2024-09-11": {
    "17:00": { "cliente": null, "estado": "disponible" },
    "17:30": { "cliente": null, "estado": "disponible" },
    "18:00": { "cliente": "Maria Gomez", "estado": "reservado" },
    "18:30": { "cliente": null, "estado": "disponible" },
    "19:00": { "cliente": "Luis Lopez", "estado": "reservado" },
    "19:30": { "cliente": null, "estado": "disponible" }
  }
};

function Calendar({ selectedDate, onDateChange }) {
    const [turnos, setTurnos] = useState(turnosSimulados); // Turnos simulados
    const [diasMostrados, setDiasMostrados] = useState([]); // Días mostrados en columnas

    const horarios = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

    const handleDateChange = (date) => {
        onDateChange(date);
        generarDiasMostrados(date);
    };

    const generarDiasMostrados = (fechaBase) => {
        const dias = [];
        for (let i = 0; i < 5; i++) {
            dias.push(fechaBase.add(i, 'day').format('YYYY-MM-DD'));
        }
        setDiasMostrados(dias);
    };

    useEffect(() => {
        generarDiasMostrados(selectedDate); // Inicializar los días al cargar
    }, [selectedDate]);

    const renderTurno = (dia, hora) => {
        const turno = turnos[dia] && turnos[dia][hora];
        if (turno) {
            return (
                <div className={`boxHour ${turno.estado}`} key={hora}>
                    {turno.cliente ? turno.cliente : "Turno Disponible"}
                </div>
            );
        } else {
            return (
                <div className='boxHour disponible' key={hora}>
                    Turno Disponible
                </div>
            );
        }
    };

    return (
        <section className='sectionCalendar'>
            <div className='calendarMui'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={selectedDate} onChange={handleDateChange} />
                </LocalizationProvider>
            </div>

            <div className='hoursCalendar'>
                {horarios.map(hora => (
                    <div key={hora} className='hoursData'>{hora}</div>
                ))}
            </div>

            <div className='hoursDaysContainer'>
                {diasMostrados.map(dia => (
                    <div className='dayColumn' key={dia}>
                        {horarios.map(hora => (
                            renderTurno(dia, hora)
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Calendar;