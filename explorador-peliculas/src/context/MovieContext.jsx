import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  // inicializamos desde localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('movieFavorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch (error) {
      console.error('Error al cargar favoritos:', error)
      return []
    }
  })

  // guardamos en localStorage cada vez que cambien los favoritos
  useEffect(() => {
    try {
      localStorage.setItem('movieFavorites', JSON.stringify(favorites))
    } catch (error) {
      console.error('Error al guardar favoritos:', error)
    }
  }, [favorites])

  // si es favorito se guarda en favoritos
  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId)
  }

  // se marca como favoritos o se elimina de favoritos
  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.some(fav => fav.id === movie.id)
      
      if (exists) {
        // eliminamos de favoritos
        return prevFavorites.filter(fav => fav.id !== movie.id)
      } else {
        // se marca como favoritos
        return [...prevFavorites, movie]
      }
    })
  }

  // la añadimos a favoritos
  const addFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.some(fav => fav.id === movie.id)
      if (!exists) {
        return [...prevFavorites, movie]
      }
      return prevFavorites
    })
  }

  // la eliminamos de favoritos
  const removeFavorite = (movieId) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(fav => fav.id !== movieId)
    )
  }

  // vaciamos favoritos
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

  // devolvemos el html
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

// busca toda la información de la película
export function useMovieContext() {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovieContext debe usarse dentro de MovieProvider')
  }
  return context
}

export { MovieContext }