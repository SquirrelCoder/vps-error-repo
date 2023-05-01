<template>
  <h1>Hello</h1>
  <p>
    {{ episode_id }}
  </p>
  <p>
    {{ title }}
  </p>
  <p>
    {{ release_date }}
  </p>
  <p>
    {{ director }}
  </p>
</template>

<script setup lang="ts">

interface MovieDetails {
  episode_id: number
  title: string
  release_date: string
  director: string
  producer: string
}

defineProps<MovieDetails>();

</script>