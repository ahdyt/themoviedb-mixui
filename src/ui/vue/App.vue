<script setup lang="ts">
import type { Movie } from '../../entities/movie'
import MovieView from './components/MovieView.vue'
import { discoverMovies } from '../../controller/themoviedb'
import { onMounted } from 'vue'

import { reactive } from 'vue'

const initialMovies: Movie[] = []

const store = reactive({
  movies: initialMovies
})

onMounted(() => {
  discoverMovies((xs) => {
    store.movies = xs
  })
})
</script>

<template>
  <h1>Movies</h1>

  <div v-for="movie in store.movies">
    <MovieView :movie="movie" />
  </div>
</template>
