import type { Movie } from '../entities/movie'
import { API_URL } from '../entities/themoviedb'

export async function getMovies(url: string) {
  const res = await fetch(url)
  const data = res.json()
  return data
}

export async function discoverMovies(f: (m: Movie[]) => void) {
  const data = await getMovies(API_URL)
  f(data.results)
}
