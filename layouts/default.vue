<template>
  <div>
    <Toolbar />
    <MenuBtn />
    <transition name="slide">
      <PhoneToolbar v-if="menuState" />
    </transition>
    <div
      v-if="menuState"
      class="menuModal"
      @click="$store.commit('toggleMenuState')"
    ></div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {},
  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>
<style lang="scss">
html {
  font-family: 'Milliard';
  font-style: normal;
  width: 100%;
  position: relative;
  scroll-behavior: smooth;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}

.menuModal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.192);
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
