<template>
  <h1>Hello</h1>
  <p>
    <strong>{{ amount }}</strong> {{ base }} are {{ rates.USD }} USD on {{ date }}
  </p>
</template>

<script setup lang="ts">
import { CurrencyDetail } from "./types";

interface CurrencyDetail {
  amount: number
  base: string
  date: string
  rates: {
    "USD": number;
  };
}

defineProps<CurrencyDetail>();

</script>