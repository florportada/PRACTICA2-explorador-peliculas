import { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
const [favorites, setFavorites] = useState([])

// Cargar favoritos desde localStorage al iniciar
useEffect(() => {
  try {
    const raw = localStorage.getItem('tmdb_favorites')
    if (raw) setFavorites(JSON.parse(raw))
  } catch (e) {
    console.error('Error al leer favoritos desde localStorage', e)
  }
}, [])

// Guardar favoritos en localStorage cuando cambien
useEffect(() => {
  try {
    localStorage.setItem('tmdb_favorites', JSON.stringify(favorites))
  } catch (e) {
    console.error('Error al guardar favoritos en localStorage', e)
  }
}, [favorites])

const isFavorite = (movieId) => favorites.some(m => m.id === movieId)

const addFavorite = (movie) => {
  if (!isFavorite(movie.id)) setFavorites(prev => [movie, ...prev])
}

const removeFavorite = (movieId) => {
  setFavorites(prev => prev.filter(m => m.id !== movieId))
}

const toggleFavorite = (movie) => {
  if (isFavorite(movie.id)) removeFavorite(movie.id)
  else addFavorite(movie)
}

return (
  <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}>
    {children}
  </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const ctx = useContext(MovieContext)
  if (!ctx) throw new Error('useMovieContext debe usarse dentro de MovieProvider')
  return ctx
}