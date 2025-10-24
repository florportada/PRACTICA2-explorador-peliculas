import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMovieContext } from '../context/MovieContext'

export default function Navbar({ onSearch, onReset }) {
  const location = useLocation()
  const { favorites } = useMovieContext()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query.trim())
  }

  const homeClick = () =>{
    onReset()
    setQuery('')
  }

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