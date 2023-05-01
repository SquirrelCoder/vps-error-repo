import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state: () => ({ count: 0, name: 'A B' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
});