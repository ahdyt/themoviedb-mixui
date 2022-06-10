<script lang="ts">
  import '../../../css/App.scss'
  import type { Movie } from '../../entities/movie'
  import { discoverMovies } from '../../controller/themoviedb'
  import { onMount } from 'svelte'
  import MovieView from './lib/MovieView.svelte'

  let movies: Movie[] = []
  onMount(() => {
    discoverMovies((xs: Movie[]) => {
      movies = xs
    })
  })
</script>

<main>
  <h1>Movies</h1>

  {#each movies as movie}
    <MovieView {movie} />
  {/each}
</main>
