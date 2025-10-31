import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
  // sacamos la información de las películas favoritas
  const { favorites } = useMovieContext()

  // verifica que no haya favoritas y muestra un mensaje
  if (favorites.length === 0) {
  return <p className="empty">Aún no hay favoritos. Agrega películas desde Home.</p>
  }

  // devolvemos el html de las películas favoritas que fueron almacenadas anteriormente
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