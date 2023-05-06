<template>
  <h1>Hello</h1>
  <p>
    <strong>{{ amount }}</strong> {{ base }} are {{ rates.USD }} USD on {{ date }}
  </p>
</template>

<script setup lang="ts">
import { CurrencyDetail } from "./types";
import { useSeoMeta } from "@vueuse/head";

interface CurrencyDetail {
  amount: number
  base: string
  date: string
  rates: {
    "USD": number;
  };
}

const props = defineProps<CurrencyDetail>();

useSeoMeta({
  title: 'Currency Converter',
  description: 'My Currency Converter Test',
  ogDescription: `${ props.amount } was converted to ${ props.base } on ${ props.date }!`,
});


</script>