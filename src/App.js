import React from 'react'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import Service from './pages/service/Service.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

