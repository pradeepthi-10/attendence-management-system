import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import DashboardCard from './components/DashboardCard'
import StudentStatus from './components/StudentStatus'
import Dashboard from './pages/Dashboard'
import { Routes,Route } from 'react-router-dom'
<Route path='/students' element={<Students />} />
import Attendence from './pages/Attendence'
import Reports from './pages/Reports'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/students' element={<Students />} />
      <Route path='/attendence' element={<Attendence />} />
      <Route path='/Reports' element={<Reports />} />
    </Routes>


  )
}

export default App