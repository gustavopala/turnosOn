import './header.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TurnoModal from './componentes/TurnoModal';
import dayjs from 'dayjs';

const diasEnEspanol = {
    'Monday': 'Lunes',
    'Tuesday': 'Martes',
    'Wednesday': 'Miércoles',
    'Thursday': 'Jueves',
    'Friday': 'Viernes',
    'Saturday': 'Sábado',
    'Sunday': 'Domingo'
};

const getWeekDays = (startDate) => {
    const days = [];
    for (let i = 0; i < 5; i++) {
        const day = startDate.add(i, 'day');
        const dayName = day.format('dddd'); // Nombre del día en inglés
        days.push({
            dayNumber: day.format('DD'),
            dayName: diasEnEspanol[dayName] || dayName // Convertir al español
        });
    }
    return days;
};

function Header({ selectedDate }) {
    const [openModal, setOpenModal] = useState(false);
    const [weekDays, setWeekDays] = useState([]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    useEffect(() => {
        const days = getWeekDays(dayjs(selectedDate));
        setWeekDays(days);
    }, [selectedDate]);

    return (
        <section className='sectionHeader'>
            <TurnoModal open={openModal} handleClose={handleCloseModal}/>
            <div className='containerBotton'>
                <Button variant="contained" startIcon={<AddCircleIcon />} onClick={handleOpenModal} >
                    Turno
                </Button>
            </div>
            <div className='containerDays'>
                {weekDays.map((day, index) => (
                    <div className='boxDate' key={index}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {day.dayNumber}
                            </div>
                            <div>
                                {day.dayName} {/* Nombre del día en español */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Header;