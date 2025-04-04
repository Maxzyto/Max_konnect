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
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

    const handleLogin = (userData) => {
      setUser(userData);
    };

    const handleLogout = () => {
      setUser(null);
    };

    const handleUploadComplete = (uploadedFiles) => {
      setHistory([...history, ...uploadedFiles]);
      // After updating history, navigate to the receipt page with the last uploaded file
      if (uploadedFiles.length > 0) {
        navigate("/receipt", {
          state: { receipt: uploadedFiles[uploadedFiles.length - 1] },
        });
      }
    };

    const handleReceiptClick = (receipt) => {
      setSelectedReceipt(receipt);
    };

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} toggleSidebar={toggleSidebar} />
          <div className="flex flex-1">
            <Sidebar user={user} onLogout={handleLogout} isSidebarOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<DashboardContent />} />
                <Route path="/dashboard" element={<Dashboard user={user} onLogin={handleLogin} onLogout={handleLogout} history={history} onUploadComplete={handleUploadComplete} onReceiptClick={handleReceiptClick} selectedReceipt={selectedReceipt} />} />
                <Route path="/history" element={<History history={history} onReceiptClick={handleReceiptClick} />} />
                <Route path="/upload" element={<Upload onUploadComplete={handleUploadComplete} />} />
                <Route path="/chat" element={<Chat user={user} />} />
                <Route path="/receipt" element={<Receipt />} /> {/* Receipt component will get data from location state */}
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );

}
export default App;