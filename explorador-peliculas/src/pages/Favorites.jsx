import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
const { favorites } = useMovieContext()

if (favorites.length === 0) {
return <p className="empty">Aún no hay favoritos. Agrega películas desde Home.</p>
}

return (
  <section>
    <h2 className="page-title">Tus Favoritos</h2>
    <div className="grid">
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
  )
}