<template>
  <div id="footer">
    <div class="container">
      <div class="top">
        <div class="quick-links">
          <h4 class="heading">Quick Links</h4>
          <div class="links">
            <p v-for="(item, i) in services" :key="i">{{ item.name }}</p>
          </div>
        </div>
        <div class="contact-us">
          <h4 class="heading">Contact Us</h4>
          <div class="form">
            <input type="email" />
            <input type="number" />
            <label for="interested in">I’m interested in</label>
            <select name="interested">
              <option disabled value="">--Select Service</option>
            </select>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>copyright 2021 | All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '@/utils'
export default {
  name: 'FooterComponent',
  computed: {
    services() {
      return services
    },
  },
}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  .container {
    max-width: 1132px;
    margin: 0 auto;
    .top {
      display: flex;

      .quick-links {
        width: 50%;
        .heading {
          font-weight: 500;
          font-size: 16px;
          line-height: 185.5%;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #313131;
          margin-bottom: 45px;
        }
        .links {
          max-height: 260px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          p {
            font-weight: 500;
            font-size: 12px;
            line-height: 185.5%;
            text-transform: capitalize;
            color: #a0a0a0;
            margin-bottom: 14px;
          }
        }
      }
      .contact-us {
        width: 50%;

        .heading {
          font-weight: 500;
          font-size: 22px;
          line-height: 185.5%;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #313131;
          text-align: right;
          margin-bottom: 45px;
        }
      }
    }
    .copyright {
      padding: 10px 0;
      border-bottom: 0.5px solid #979797;
      p {
        font-weight: 400;
        font-size: 10px;
        line-height: 185.5%;
        text-transform: capitalize;
        color: #292929;
      }
    }
  }
}
</style>
