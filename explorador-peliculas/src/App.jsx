import React, { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  // obtiene la consulta y las rutas a los diferentes archivos con sus funcionalidades
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  // busca la consulta
  const handleSearch = (query) => {
    setSearchQuery(query)
    navigate('/') 
  }

  // resetea la consulta para que se muestren solo las películas populares
  const resetSearch = () => {
    setSearchQuery('')
    navigate('/')
  }

  // devolvemos el html
  return (
    <div className="app-root">
      <NavBar onSearch={handleSearch} onReset={resetSearch}/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery}/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
