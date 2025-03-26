
import './App.css'
import  Navbar  from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { Login } from './pages/Login'
import Headers from './components/Header'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Headers />
    {/* <Navbar /> */}
      <Dashboard />
      <Login />
    </BrowserRouter>
  )
}

export default App
