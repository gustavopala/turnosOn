import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const clientesExistentes = ['gustavo montes', 'alfredo gomez', 'agustina ramirez']

const TurnoModal = ({ open, handleClose }) => {
    const [crearCliente, setCrearCliente] = useState(false)

    const handleCreateClient = () => setCrearCliente(true)
    const handleCancelCreateClient = () => setCrearCliente(false)

    const handleSubmitCreateClient = () => { }

    const handleSubmitCreateTurno = () => { }



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="turno-modal-title"
            aria-describedby="turno-modal-description"
        >
            <Box sx={style}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {!crearCliente ?
                        <Typography id="turno-modal-title" variant="h6" component="h2">
                            Asignar turno
                        </Typography> :
                        <Typography id="turno-modal-title" variant="h6" component="h2">
                            Crear Cliente
                        </Typography>}
                    {!crearCliente && <Button variant="contained" color="primary" sx={{}} onClick={handleCreateClient}>
                        Crear cliente
                    </Button>}
                </div>
                {!crearCliente ?
                    <div >
                        <div style={{ padding: '5%', display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Autocomplete
                                    disablePortal
                                    options={clientesExistentes}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Cliente" />}
                                />
                                <TextField id="outlined-basic" label="Motivo" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker label="Basic time picker" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'center' }}>
                            <Button onClick={handleSubmitCreateTurno} variant="contained" color="primary" sx={{ mt: 2, marginRight: '1%' }}>
                                Crear
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                                Cerrar
                            </Button>
                        </div>
                    </div>
                    :
                    <div style={{ padding: '5%' }}>

                        <TextField id="outlined-basic" label="Nombre" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                        <TextField id="outlined-basic" label="Apellido" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                        <TextField id="outlined-basic" label="CUIT" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                        <TextField id="outlined-basic" label="DNI" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                        <TextField id="outlined-basic" label="Fecha Nacimiento" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />
                        <TextField id="outlined-basic" label="Numero telefono" variant="outlined" sx={{ width: 300, marginTop: '5%' }} />

                        <div style={{ display: 'flex', marginTop: '2%', justifyContent: 'center' }}>
                            <Button onClick={handleSubmitCreateClient} variant="contained" color="primary" sx={{ mt: 2, marginRight: '1%' }}>
                                Crear
                            </Button>
                            <Button onClick={handleCancelCreateClient} variant="contained" color="primary" sx={{ mt: 2 }}>
                                Cancelar
                            </Button>
                        </div>
                    </div>
                }
                {/* <Typography id="turno-modal-description" sx={{ mt: 2 }}>
                    Aquí puedes poner el contenido que desees.
                </Typography> */}

            </Box>
        </Modal>
    );
};

export default TurnoModal;