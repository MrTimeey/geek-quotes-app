<template>
  <div id="app">
    <QuotePage/>
  </div>
</template>

<script>

import QuotePage from "@/views/QuotePage";
export default {
  name: 'App',
  components: {
    QuotePage
  },
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
