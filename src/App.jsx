import React, { useState } from 'react'
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
import Footer from './components/Footer'

function App() {
  
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  // const [darMode, setDarkMode] = useState(false);
  // const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  const handleLogin = (user) => {
    setUser(user);
  }

  const handleUploadComplete =(uploadedFile) => {
    setHistory((prevHistory) => [...prevHistory, uploadedFile]);
  }
  const handleReceiptSelect = (receipt) => {
    setSelectedReceipt(receipt);
  }
  // const handleDarkModeToggle = () => {
  //   setDarkMode(!darkMode);
  // }
  // const handleSidebarToggle = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // }
  // const handleMobileToggle = () => {
  //   setIsMobile(!isMobile);
  // }

  

  return (
    <BrowserRouter>
      <div className="flex">
        <Headers />
        <div className="hidden md:block w-60 bg-gray-800 h-screen fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="ml-60 p-4 w-full mt-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard user={user} onLogin={handleLogin} history={history} onUploadComplete={handleUploadComplete} onReceiptClick={handleReceiptSelect} selectedReceipt={selectedReceipt} />} />
            <Route path="/history" element={<History history={history} onReceiptClick={ handleReceiptSelect} />} />
            <Route path="/upload" element={<Upload onUploadComplete={handleUploadComplete}/>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/receipt" element={<Receipt receipt={selectedReceipt} onClose={() => setSelectedReceipt(null)} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );

  }
export default App;