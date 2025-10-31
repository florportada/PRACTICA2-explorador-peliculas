import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../context/MovieContext'

export default function Navbar({ onSearch, onReset }) {
  // sacamos la información de las películas favoritas y la búsqueda de películas
  const { favorites } = useMovieContext()
  const [query, setQuery] = useState('')

  // se envia la búsqueda de la película
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query.trim())
  }

  // si se apreta la palabra 'Movieees' se muestran las películas populares
  const homeClick = () =>{
    onReset()
    setQuery('')
  }

  // devuelve el html
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={homeClick}> Movieees </Link>

        <form onSubmit={handleSubmit} className="nav-search-form">
          <input
            type="text"
            className="nav-search-input"
            placeholder="Buscar películas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="nav-search-btn">
            Buscar
          </button>
        </form>

        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
          <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>
            Favoritos  ({favorites.length})
          </Link>
        </div>
      </div>
    </nav>
  )
}