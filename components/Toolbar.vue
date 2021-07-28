<template>
  <div id="toolbar">
    <svg
      width="837"
      height="684"
      viewBox="0 0 837 684"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="shape"
    >
      <path
        d="M861.372 8.02771L-5.43853e-05 149.405L178.35 449.106L807.522 485.775L861.372 8.02771Z"
        fill="url(#paint0_linear)"
        fill-opacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="397"
          y1="23"
          x2="391.5"
          y2="248"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0476185" stop-color="#E40000" />
          <stop offset="1" stop-color="#E40000" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <div class="container">
      <img src="/logo.png" alt="logo" />
      <div class="navigation">
        <div class="menu" v-for="(item, i) in menus" :key="i">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from '@/utils'
export default {
  name: 'ToolbarComponent',
  computed: {
    menus() {
      return menus
    },
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: relative;
  background: radial-gradient(
    87.74% 88.57% at 50.47% 100%,
    #2e2e2e 0%,
    #101010 100%
  );
  height: 100px;
  width: 100%;
  border-bottom: 4px solid $primary;
  overflow: hidden;
  padding-bottom: 24px;
  @include for-phone-only {
    height: 55px;
  }
  .shape {
    position: absolute;
    right: 0;
    display: none;
  }
  .container {
    margin: 0 120px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    @include for-phone-only {
      margin: 0 20px;
    }
    img {
      width: 138px;
      height: 33px;
      object-fit: contain;
      margin-right: 50px;
      @include for-phone-only {
        width: 110px;
        margin-right: 0;
      }
    }
    .navigation {
      display: flex;
      @include for-phone-only {
        display: none;
      }
      .menu {
        margin-right: 42px;

        a {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          font-size: 12px;
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
  }
}
</style>
