import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './vistas/home/Home'
import Nav from './componentes/Nav/Nav'
import Seguimiento from './vistas/seguimiento/Seguimiento'
import Clientes from './vistas/clientes/Clientes'
import Login from './vistas/login/Login'

function App(){  
  return(
    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/seguimiento" element={<Seguimiento/>}/>
        <Route path ="/clientes" element={<Clientes/>}/>
        <Route path ="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App