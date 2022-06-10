import type { Movie } from '../../../entities/movie'
import { POSTER_BASE_URL } from '../../../entities/themoviedb'

type props = {
  movie: Movie
}
export default function MovieView({ movie }: props) {
  return (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <img
        src={`${POSTER_BASE_URL}${movie.poster_path}`}
        width="500px"
        height="500px"
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>{movie.vote_average}</p>
    </div>
  )
}
