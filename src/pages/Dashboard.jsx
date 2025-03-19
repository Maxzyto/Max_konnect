import React from 'react'
import Upload from '../components/Upload'
import History from '../components/History'
import Receipt from '../components/Receipt'
import Chat from '../components/Chat'

const Dashboard = () => {
  return (
    <div>
      <h1 className='color-black bg-blue-400 text-3xl text-bold'>Welcome to Max Konnect</h1>
      <Upload />
      <History />
      <Receipt />
      <Chat />
    </div>
  )
}

export default Dashboard
