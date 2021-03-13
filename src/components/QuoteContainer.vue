<template>
  <div class="fullscreen-centered">
    <div class="quote-wrapper">
      <transition name="fade">
        <div class="quote-card" :key="'quote-card'" v-if="$store.getters['quoteLoaded']">
          <span class="quote-text">{{ $store.state.quote }}</span>
          <span class="quote-author">{{ $store.state.author }}</span>
        </div>
      </transition>
      <transition name="fade">
        <div class="quote-refresh" :key="'quote-card'" @click="$store.dispatch('loadQuote')"
             v-if="$store.getters['quoteLoaded']">
          <em class="fas fa-sync"></em>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteContainer",
  mounted() {
    this.$store.dispatch("loadQuote");
  }
}
</script>

<style scoped lang="scss">

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
  z-index: -1;
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

.quote-text:before,
.quote-text:after {
  position: absolute;
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 8rem;
  width: 4rem;
  height: 4rem;
}

.quote-text:before {
  content: '“';
  left: -6rem;
  top: -2rem;
}

.quote-text:after {
  content: '”';
  right: -6rem;
  bottom: 1rem;
}

.quote-author {
  line-height: 3;
  font-style: italic;
}

.quote-card {
  background: hsla(0, 0%, 100%, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;

  padding: 1rem;

  -webkit-box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.1);
}

.quote-refresh {
  position: relative;
  margin-top: 10px;
  padding: 10px 0 10px 0;
  border-radius: 40px;
  background: hsla(0, 0%, 100%, 0.6);
  width: 50px;
  cursor: pointer;

  em {
    font-size: x-large;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .quote-card {
    max-width: 80%;
    padding: 0;
  }
  .quote-text {
    font-size: 1.5rem;
    padding: .75rem;
  }
  .quote-author {
    font-size: 0.8rem;
  }
  .quote-text:before {
    left: -3.2rem;
    font-size: 6rem;
  }

  .quote-text:after {
    right: -3.2rem;
    font-size: 6rem;
  }
}

</style>