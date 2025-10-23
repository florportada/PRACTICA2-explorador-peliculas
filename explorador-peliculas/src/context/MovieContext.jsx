import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  // Inicializar desde localStorage o array vacío
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('movieFavorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch (error) {
      console.error('Error al cargar favoritos:', error)
      return []
    }
  })

  // Guardar en localStorage cada vez que cambien los favoritos
  useEffect(() => {
    try {
      localStorage.setItem('movieFavorites', JSON.stringify(favorites))
    } catch (error) {
      console.error('Error al guardar favoritos:', error)
    }
  }, [favorites])

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId)
  }

  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.some(fav => fav.id === movie.id)
      
      if (exists) {
        // Eliminar de favoritos
        return prevFavorites.filter(fav => fav.id !== movie.id)
      } else {
        // Agregar a favoritos
        return [...prevFavorites, movie]
      }
    })
  }

  const addFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.some(fav => fav.id === movie.id)
      if (!exists) {
        return [...prevFavorites, movie]
      }
      return prevFavorites
    })
  }

  const removeFavorite = (movieId) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(fav => fav.id !== movieId)
    )
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem('movieFavorites')
  }

  const value = {
    favorites,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovieContext debe usarse dentro de MovieProvider')
  }
  return context
}

export { MovieContext }