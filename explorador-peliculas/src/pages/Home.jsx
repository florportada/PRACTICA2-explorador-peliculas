import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default function Home({searchQuery}) {
  // cargamos las películas
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // reiniciamos los resultados cuando la búsqueda cambia
  useEffect(() => {
    setMovies([])
    setPage(1)
    setHasMore(true)
  }, [searchQuery])

  // cargamos las películas populares si no hay ninguna búsqueda
  useEffect(() => {
    if (searchQuery) fetchSearch(searchQuery, page)
    else fetchPopular(page)
  }, [searchQuery, page])

  // cargamos las películas populares
  async function fetchPopular(pageNum = 1) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=EN&page=${pageNum}&include_adult=false`)
      if (!res.ok) throw new Error('Error al obtener populares')
      const data = await res.json()
      setMovies(prev => pageNum === 1 ? data.results: [...prev, ...data.results])
      setHasMore(data.page < data.total_pages)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // buscamos las películas que tienen ese nombre
  async function fetchSearch(query, pageNum = 1) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=EN&query=${encodeURIComponent(query)}&page=${pageNum}&include_adult=false`)
      if (!res.ok) throw new Error('Error al buscar películas')
      const data = await res.json()
      setMovies(prev => pageNum === 1 ? data.results: [...prev, ...data.results])
      setHasMore(data.page < data.total_pages)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // cargamos más películas para hacer scroll infinito
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
          document.documentElement.scrollHeight &&
        hasMore &&
        !loading
      ) {
        setPage(prev => prev + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore, loading])


  // devolvemos el html 
  return (
  <section>
    {loading && <p className="status">Cargando más películas...</p>}
    {error && <p className="status error">{error}</p>}

    <div className="grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
  )
}