
import './App.css'
import Dashboard from './pages/Dashboard'
import  Login  from './pages/Login'
import Headers from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import History from './pages/History' 
import Upload from './pages/Upload'
import Chat from './pages/Chat'
import Receipt from './pages/Receipt'




function App() {

  return (
    <BrowserRouter>
      <div className="flex">
        <Headers />
        <div className="hidden md:block w-60 bg-gray-800 h-screen fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="ml-60 p-4 w-full mt-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
