<template>
  <div id="services">
    <ServiceModal v-if="modal" :service="service" @dismiss="modal = false" />
    <h2 class="title">our services</h2>
    <div class="container">
      <div
        class="card"
        v-for="(item, i) in services"
        :key="i"
        @click="openModal(item)"
      >
        <img :src="item.icon" :alt="item.name" />
        <h4>{{ item.name }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '@/utils'
export default {
  name: 'ServicesComponent',
  data() {
    return {
      modal: false,
      service: {},
    }
  },
  methods: {
    openModal(service) {
      this.service = service
      this.modal = true
    },
  },
  computed: {
    services() {
      return services
    },
  },
}
</script>

<style lang="scss" scoped>
#services {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  padding: 60px 0 100px 0;
  @include for-phone-only {
    padding: 30px 0 50px 0;
  }

  .title {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 185.5%;
    color: #313131;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 47px;
    @include for-phone-only {
      margin-bottom: 30px;
    }
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1136px;
    margin: 0 auto;
    gap: 0;
    @include for-phone-only {
      grid-template-columns: repeat(1, 1fr);
    }
    .card {
      width: 379px;
      height: 275px;
      background: #fff;
      border: 1px solid #dadada;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include for-phone-only {
        width: 310px;
        height: 255px;
        margin: 0 auto;
      }
      img {
        width: 100%;
        height: 50px;
        object-fit: contain;
        margin-bottom: 28px;
      }
      h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 185.5%;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #313131;
        max-width: 255px;
        margin-bottom: 15px;
      }
      p {
        font-weight: normal;
        font-size: 12px;
        line-height: 146%;
        text-align: center;
        color: #a0a0a0;
        max-width: 255px;
      }
    }
  }
}
</style>
