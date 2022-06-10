import { render, grabId, createElement } from 'shtjs'
import { discoverMovies } from '../../controller/themoviedb'
import MovieView from './components/MovieView'

function MovieContainer() {
  discoverMovies((xs) => {
    xs.map((movie) => {
      render(MovieView(movie))(grabId('movies'))
    })
  })
  return createElement('div')({ id: 'movies' })([])
}

export default function App() {
  const props = {}
  const childs = [createElement('h1')({})(['Movies']), MovieContainer]

  return createElement('main')(props)(childs)
}
