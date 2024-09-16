import '../Nav/nav.css'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';


function Nav() {
    const navigate = useNavigate()
    return (
        <section className='section-container'>
            <div className='containerLogo'>
                <button className='logoNav'>TurnosOn</button>
                <div className='containerBotones'>
                    <Stack spacing={2} direction="row">
                        <Button variant="text" sx={{ color: '#EEEEEE', fontSize: '13px' }} onClick={()=>navigate('/')}>Turnos</Button>
                        <Button variant="text" sx={{ color: '#EEEEEE', fontSize: '13px' }} onClick={()=>navigate('/seguimiento')}>Seguimiento</Button>
                        <Button variant="text" sx={{ color: '#EEEEEE', fontSize: '13px' }} onClick={()=>navigate('/clientes')}>Clientes</Button>
                    </Stack>
                </div>
            </div>
            <div className='containerLoginCuenta'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>MC</Avatar>
            </div>
        </section>
    )
}

export default Nav