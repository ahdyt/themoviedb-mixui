<script lang="ts">
  import type { Movie } from '../../../entities/movie'
  import { POSTER_BASE_URL } from '../../../entities/themoviedb'
  export let movie: Movie
</script>

<div>
  <h2>{movie.title}</h2>
  <img
    src={`${POSTER_BASE_URL}${movie.poster_path}`}
    width="500px"
    height="500px"
    alt={movie.title}
  />
  <p>{movie.overview}</p>
</div>
