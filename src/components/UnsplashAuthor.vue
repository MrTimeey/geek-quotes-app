<template>
  <transition name="fade">
    <span class="author" v-if="isMounted">
        Photo by <a
        href="https://unsplash.com/@kensuarez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank">Ken Suarez</a> on
        <a href="https://unsplash.com/photos/4IxPVkFGJGI" target="_blank">Unsplash</a>
    </span>
  </transition>
</template>

<script>
export default {
  name: "UnsplashAuthor",
  data: () => ({
      image: 'https://source.unsplash.com/4IxPVkFGJGI/1920x1600',
      isMounted: false,
  }),
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    }
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');

.author {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: hsla(0, 0%, 100%, 0.6);
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 20px;
  z-index: 9999;
  -webkit-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.1);
  -moz-box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.1);
  box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.1);
}

a {
  color: lighten(black, 20%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>