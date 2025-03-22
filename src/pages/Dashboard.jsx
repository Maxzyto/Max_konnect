import React from 'react'
import Upload from '../components/Upload'
import History from '../components/History'
import Receipt from '../components/Receipt'
import Chat from '../components/Chat'

const Dashboard = () => {
  return (
    <div className="p-4 h-100 w-100 bg-hero-img bg-cover ps-10 pt-20 pl-52 overflow-hidden ">
      <h1 className="color-black text-3xl text-bold">Welcome to Max Konnect</h1>
      <Upload />
      <History />
      <Receipt />
      <Chat />
    </div>
  );
}

export default Dashboard
