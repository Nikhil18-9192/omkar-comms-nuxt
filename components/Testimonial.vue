<template>
  <div id="testimonial">
    <div class="skew"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#testimonial {
  position: relative;
  width: 100%;
  height: 480px;
  background: #282828;
  overflow: hidden;
  .skew {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 50px;
    background: $primary;
    transform: skewY(-1deg);
    transform-origin: bottom left;
    z-index: 1;
  }
}
</style>
