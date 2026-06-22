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

function App() {
  return (
    <Dashboard/>

  )
}

export default App