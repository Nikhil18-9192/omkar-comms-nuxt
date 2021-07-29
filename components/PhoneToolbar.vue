<template>
  <div id="phone-toolbar">
    <div
      class="menu"
      v-for="(item, i) in menus"
      :key="i"
      @click="$store.commit('toggleMenuState')"
    >
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { menus } from '@/utils'
export default {
  name: 'PhoneToolbarComponent',
  computed: {
    menus() {
      return menus
    },
  },
}
</script>

<style lang="scss" scoped>
#phone-toolbar {
  position: fixed;
  top: 0;
  right: 0;
  background: #282828;
  width: 60%;
  height: 100vh;
  z-index: 2;
  padding-top: 85px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  .menu {
    margin-bottom: 12px;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease all;
      &:hover {
        color: $primary;
      }
      &.nuxt-link-exact-active {
        color: $primary;
      }
    }
  }
}
</style>
