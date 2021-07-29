<template>
  <div id="testimonial">
    <div class="skew"></div>
    <h4 class="title">What our clients say</h4>
    <div class="testimonial-wrap">
      <img src="/quates.svg" alt="quates" />

      <div class="content" v-for="(item, i) in testimonials" :key="i">
        <transition name="slide">
          <div v-if="currentSlide == i">
            <p>{{ item.feedback }}</p>
            <h4>- {{ item.name }}</h4>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonials } from '@/utils'
export default {
  name: 'TestimonialComponent',
  data() {
    return {
      currentSlide: 0,
      slideDuration: 7000,
    }
  },
  mounted() {
    setInterval(this.showSlide, this.slideDuration)
  },
  methods: {
    showSlide() {
      this.currentSlide < this.testimonials.length - 1
        ? this.currentSlide++
        : (this.currentSlide = 0)
    },
  },
  computed: {
    testimonials() {
      return testimonials
    },
  },
}
</script>

<style lang="scss" scoped>
#testimonial {
  position: relative;
  width: 100%;
  height: 100%;
  background: #282828;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 100px;
  @include for-phone-only {
    padding-top: 25px;
  }
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
  .title {
    font-weight: 300;
    font-size: 22px;
    line-height: 185.5%;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 30px;
  }
  .testimonial-wrap {
    text-align: center;
    width: 48%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    @include for-phone-only {
      width: 93%;
    }
    @include for-tablet-only {
      width: 80%;
    }
    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      position: absolute;
      top: 0;
    }
    .content {
      position: absolute;
      top: 0;
      margin-top: 50px;
      overflow: hidden;
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 185.5%;
        text-align: center;
        text-transform: capitalize;
        color: #ffffff;
        margin-bottom: 25px;
      }
      h4 {
        font-weight: normal;
        font-size: 14px;
        line-height: 185.5%;
        text-align: center;
        text-transform: capitalize;
        color: #868686;
      }
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter {
  opacity: 0;
  transform: translateX(50%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
