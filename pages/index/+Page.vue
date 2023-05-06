<template>
  <div>
    <h1>Pinia Example</h1>
    <h1>Hello {{ name }}</h1>
    <span>Counter that keeps its state on <strong>navigation</strong>!</span>:
    <button type="button" @click="increment">Counter {{ doubleCount }}</button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCounter } from '../../stores/useCounter';
import { useSeoMeta, useServerSeoMeta } from "@vueuse/head";

useSeoMeta({
  title: 'Index | Rendered on on the CLIENT',
  description: 'My Index Page | Rendered on on the CLIENT',
  ogDescription: `Still on the Index page ... | Rendered on on the CLIENT`,
});

useServerSeoMeta({
  title: 'Index | Rendered on on the SERVER',
  description: 'My Index Page | Rendered on on the SERVER',
  ogDescription: 'Still on the Index page ... | Rendered on on the SERVER',
});

const counterStore = useCounter();

const { name, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>