import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
  // Carga inicial: películas populares
    fetchPopular()
  }, [])


  async function fetchPopular() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`)
      if (!res.ok) throw new Error('Error al obtener populares')
      const data = await res.json()
      setMovies(data.results || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleSearch(e) {
    e.preventDefault()
    if (!searchQuery.trim()) return fetchPopular()

    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(searchQuery)}&page=1&include_adult=false`)
      if (!res.ok) throw new Error('Error al buscar películas')
      const data = await res.json()
      setMovies(data.results || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
  <section>
    <header className="home-header">
      <form className="search-form" onSubmit={handleSearch}>
        <input placeholder="Buscar películas por título..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"/>
        <button className="search-btn" type="submit">Buscar</button>
      </form>
    </header>

    {loading && <p className="status">Cargando...</p>}
    {error && <p className="status error">{error}</p>}

    <div className="grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
  )
}