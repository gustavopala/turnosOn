import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './seguimiento.css'
import IconButton from '@mui/material/IconButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';


/* 
nombre completo, motivo de alerta, telefono, turno, eliminar
si se le asigna un turno se va de la dashboard
*/


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#393E46', // Cambia al color que prefieras
        color: '#EEEEEE', // Color del texto
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Juan Pérez', 'Divorcio', '+54 11 1234-5678', 24, 4.0),
    createData('María López', 'Herencia', '+54 9 351 234-5678', 37, 4.3),
    createData('Carlos González', 'Accidente de tráfico', '+54 9 11 4321-8765', 24, 6.0),
    createData('Laura Martínez', 'Contratos laborales', '+54 11 9876-5432', 67, 4.3),
    createData('Ana Fernández', 'Custodia de hijos', '+54 9 261 345-6789', 49, 3.9),
    createData('Pedro Sánchez', 'Consulta sobre impuestos', '+54 9 341 456-7890', 49, 3.9),
];



function Seguimiento() {
    return (
        <section className='sectionSeguimiento'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nombre completo</StyledTableCell>
                            <StyledTableCell align="right">Alerta</StyledTableCell>
                            <StyledTableCell align="right">Contacto</StyledTableCell>
                            <StyledTableCell align="right">Turno</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton variant="contained" color="primary">
                                    <EditCalendarIcon />
                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton variant="contained">
                                    <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

export default Seguimiento;