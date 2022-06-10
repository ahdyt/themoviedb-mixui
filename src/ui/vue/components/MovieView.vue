<script setup lang="ts">
import { POSTER_BASE_URL } from '../../../entities/themoviedb'

const props = defineProps({
  movie: {
    type: Object
  }
})
</script>


<template>
  <h2>{{ props.movie.title }}</h2>
  <img :src="`${POSTER_BASE_URL}${props.movie.poster_path}`" width="500" height="500" :alt="props.movie.title" />
  <p>{{ props.movie.overview }}</p>
  <p>{{ props.movie.vote_average }}</p>
</template>
