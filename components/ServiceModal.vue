<template>
  <div id="modal">
    <div class="container">
      <div class="top">
        <img :src="service.icon" :alt="service.name" />
        <h4>{{ service.name }}</h4>
        <img
          class="close"
          src="/close.svg"
          alt="close"
          @click="$emit('dismiss')"
        />
      </div>
      <div class="bottom">
        <h4>{{ service.q1 }}</h4>
        <p class="desc">{{ service.desc1 }}</p>
        <h4>{{ service.h1 }} -</h4>
        <p class="advantages" v-for="(item, i) in service.advantages" :key="i">
          {{ item }}
        </p>
        <div class="btn">
          <a href="/" class="enquire-btn">ENQUIRE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: ['service'],
}
</script>

<style lang="scss" scoped>
#modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.616);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    width: 60%;
    height: 624px;
    background: #fff;
    @include for-phone-only {
      width: 95%;
      height: 93%;
    }
    .top {
      position: relative;
      border: 1px solid #bfbfbf;
      padding: 25px 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include for-phone-only {
        padding: 15px 10px;
      }
      img {
        width: 44px;
        height: 40px;
        object-fit: contain;
      }
      h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 185.5%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #313131;
        margin-left: 24px;
        @include for-phone-only {
          margin-left: 10px;
          font-size: 10px;
        }
      }
      .close {
        width: 15px;
        height: 15px;
        object-fit: contain;
        position: absolute;
        right: 32px;
        top: 32px;
        cursor: pointer;
        @include for-phone-only {
          right: 10px;
          top: 25px;
        }
      }
    }
    .bottom {
      padding: 27px 100px 0 98px;
      @include for-phone-only {
        padding: 20px 10px 0 10px;
      }
      h4 {
        margin-bottom: 15px;
        @include for-phone-only {
          margin-bottom: 8px;
        }
      }
      .desc {
        margin-bottom: 20px;
        @include for-phone-only {
          margin-bottom: 12px;
        }
      }
      .advantages {
        margin-bottom: 8px;
      }
      .btn {
        margin-top: 35px;

        .enquire-btn {
          text-decoration: none;
          width: 134px;
          height: 40px;
          background: $primary;
          border: none;
          padding: 10px 30px;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
          line-height: 185.5%;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
