import { useMovieContext } from '../context/MovieContext'

// saca el poster de la API
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie }) {
  // obtiene la información de la película
  const { isFavorite, toggleFavorite } = useMovieContext()
  const fav = isFavorite(movie.id)
  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—'

  // devuelve el html de la película con toda su información
  return (
    <article className="card">
      <div className="poster-wrap">
        {movie.poster_path ? (
          <img 
            src={`${IMAGE_BASE}${movie.poster_path}`} 
            alt={movie.title} 
            className="poster" 
          />
        ) : (
          <div className="poster placeholder">Sin póster</div>
        )}
        
        <div className="overlay">
          <button 
            className={`fav-btn ${fav ? 'active' : ''}`}
            onClick={() => toggleFavorite(movie)}
            aria-label={fav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            ♥
          </button>
          {movie.vote_average > 0 && (
            <div className="movie-rating">
              ⭐ {movie.vote_average.toFixed(1)}
            </div>
          )}
          {movie.overview && (
            <p className="movie-overview">
              {movie.overview}
            </p>
          )}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="title">{movie.title}</h3>
        <p className="anio">{year}</p>
      </div>
    </article>
  )
}