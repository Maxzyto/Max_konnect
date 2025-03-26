
import './App.css'
import Dashboard from './pages/Dashboard'
import { Login } from './pages/Login'
import Headers from './components/Header'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Headers />
      <Dashboard />
      <Login />
    </BrowserRouter>
  )
}

export default App
