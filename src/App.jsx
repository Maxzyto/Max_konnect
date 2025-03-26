
import './App.css'
import  Navbar  from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { Login } from './pages/Login'
import Headers from './components/Header'

function App() {

  return (
    <>
      <Headers />
      <Dashboard />
      <Login />
      {/* <Navbar /> */}
    </>
  )
}

export default App
