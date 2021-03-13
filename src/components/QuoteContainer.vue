<template>
  <div class="fullscreen-centered">
    <div class="quote-wrapper">
      <div class="quote-card">
      <span class="quote-text">{{ quote }}</span>
      <span class="quote-author">{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteContainer",
  data: () => ({
    quote: "Programming is like any other sport. You might know the rules but you have to play to learn.",
    author: "Zuckerbeg"
  })
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Special+Elite');

.fullscreen-centered {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.quote-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Special Elite', cursive;
}

.quote-text {
  font-weight: 100;
  font-size: 2rem;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: .5rem;
}

.quote-author {
  line-height: 3;
  font-style: italic;
}

.quote-card {
  background: hsla(0,0%,100%,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

</style>