import React, { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (query) => {
    setSearchQuery(query)
    navigate('/') // redirige a Home al buscar
  }
  return (
    <div className="app-root">
      <NavBar onSearch={handleSearch}/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery}/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
