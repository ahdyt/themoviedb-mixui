import { useEffect, useState } from 'react'
import { discoverMovies } from '../../controller/themoviedb'
import type { Movie } from '../../entities/movie'
import MovieView from './components/MovieView'

const initialMovies: Movie[] = []
function App() {
  const [movies, setMovies] = useState(initialMovies)

  useEffect(() => {
    discoverMovies((xs) => setMovies(xs))
  }, [])
  return (
    <div className="App">
      <main>
        <h1>Movies</h1>
        <div>
          {movies.map((movie) => (
            <MovieView key={movie.title} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
