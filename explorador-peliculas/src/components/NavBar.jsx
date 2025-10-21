import { Link, useLocation } from 'react-router-dom'
import { useMovieContext } from '../context/MovieContext'

export default function NavBar() {
const location = useLocation()
const { favorites } = useMovieContext()

return (
<header className="nav">
  <div className="nav-inner">
    <Link to="/" className="brand">Movieees</Link>
    <nav className="nav-links">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>
        Favoritos ({favorites.length})
      </Link>
  </nav>
  </div>
</header>
)
}