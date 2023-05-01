<template>
  <div>
    <h1>404 Page Not Found</h1>
    <p>This page could not be found.</p>
    <p>{{ errorInfo }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps([ 'is404', 'errorInfo' ]);
</script>