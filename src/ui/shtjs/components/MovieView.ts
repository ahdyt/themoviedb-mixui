import { createElement } from 'shtjs'
import type { Movie } from '../../../entities/movie'
import { POSTER_BASE_URL } from '../../../entities/themoviedb'

export default function MovieView(movie: Movie) {
  return createElement('div')({})([
    createElement('h2')({})([`${movie.title}`]),
    createElement('img')({
      src: `${POSTER_BASE_URL}${movie.poster_path}`,
      width: '500px',
      height: '500px',
      alt: movie.title
    })([]),
    createElement('p')({})([`${movie.overview}`]),
    createElement('h2')({})([`${movie.vote_average}`])
  ])
}
