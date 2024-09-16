const getWeekDays = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    let monday;

    // Si hoy es sábado (6) o domingo (0), calculamos el lunes de la próxima semana
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        const nextMonday = new Date(today.setDate(today.getDate() + (8 - dayOfWeek)));
        monday = nextMonday;
    } else {
        // Si es entre lunes y viernes, calculamos el lunes de la semana actual
        const currentMonday = new Date(today.setDate(today.getDate() - (dayOfWeek - 1)));
        monday = currentMonday;
    }

    // Generamos las fechas de lunes a viernes
    const weekDays = [];
    for (let i = 0; i < 5; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        weekDays.push({
            dayName: date.toLocaleDateString('es-ES', { weekday: 'long' }), // Día en español
            dayNumber: date.getDate(), // Día del mes
        });
    }

    return weekDays;
};


export default getWeekDays;