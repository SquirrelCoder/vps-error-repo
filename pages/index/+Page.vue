<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <span>Counter that keeps its state on <strong>navigation</strong>!</span>:
    <button type="button" @click="increment">Counter {{ doubleCount }}</button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCounter } from '../../stores/useCounter';

const counterStore = useCounter();

const { name, doubleCount } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>