<template>
  <div class="background-wrapper">
    <div class="background" :style="imageStyle">
      <AdditionalTextFields/>
      <QuoteContainer/>
    </div>
  </div>
</template>

<script>
import AdditionalTextFields from "@/components/AdditionalTextFields";
import QuoteContainer from "@/components/QuoteContainer";

export default {
  name: "QuotePage",
  components: {AdditionalTextFields, QuoteContainer},
  data() {
    return {
      image: 'https://source.unsplash.com/4IxPVkFGJGI/1920x1600',
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

<style scoped lang="scss">
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>