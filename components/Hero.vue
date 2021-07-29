<template>
  <div id="hero"></div>
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
  background-image: url('/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  @include for-phone-only {
    background-position: 51% 100%;
  }
  @include for-tablet-only {
    background-position: 50% 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
