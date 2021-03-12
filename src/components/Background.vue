<template>
  <div class="background-wrapper">
    <div class="background" :style="imageStyle">
    </div>
    <span class="author">Photo by <a href="https://unsplash.com/@headwayio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Headway</a> on <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </span>
  </div>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {
      image: 'https://source.unsplash.com/NWmcp5fE_4M/1920x1600',
    }
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    }

  }
}
</script>

<style lang="scss">
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
}
.background {
  width:100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
}
.author {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
}
a {
  color: darkgrey;
}
</style>