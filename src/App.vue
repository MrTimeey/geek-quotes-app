<template>
  <div id="app">
    <Background/>
    <QuoteContainer/>
  </div>
</template>

<script>
import Background from "@/components/Background";
import QuoteContainer from "@/components/QuoteContainer";

export default {
  name: 'App',
  components: {
    QuoteContainer,
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
