<template>
  <div id="app">
    <Background/>
  </div>
</template>

<script>
import Background from "@/components/Background";

export default {
  name: 'App',
  components: {
    Background,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
