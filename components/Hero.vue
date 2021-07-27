<template>
  <div id="hero">
    <img src="/hero.jpg" alt="hero image" />
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
}
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  width: 100%;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
