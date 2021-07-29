<template>
  <div id="footer">
    <ServiceModal v-if="modal" :service="service" @dismiss="modal = false" />
    <div class="container">
      <div class="top">
        <div class="quick-links">
          <h4 class="heading">Quick Links</h4>
          <div class="links">
            <p v-for="(item, i) in services" :key="i" @click="openModal(item)">
              {{ item.name }}
            </p>
          </div>
        </div>
        <div class="contact-us">
          <h4 class="heading">Contact Us</h4>
          <div class="form">
            <input v-model="email" type="email" placeholder="Email ID *" />
            <input
              v-model="number"
              type="number"
              placeholder="Mobile Number *"
            />
            <label for="interested in">I’m interested in</label>
            <select name="interested" v-model="interestedIn">
              <option disabled value="-- Select Service --">
                -- Select Service --
              </option>
              <option v-for="(item, i) in services" :key="i" :value="item.name">
                {{ item.name }}
              </option>
            </select>
            <textarea
              v-model="comment"
              cols="30"
              rows="10"
              placeholder="Comments (Optional)"
            ></textarea>
            <button @click="submit">Submit</button>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>copyright 2021 | All rights reserved</p>
        <p class="formec-media">
          Designed with ❤️ by
          <a href="https://formecmedia.com/" target="_blank" rel="noopener"
            >Formec Media.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from '@/utils'
import { formValidation } from '@/utils/validation'
export default {
  name: 'FooterComponent',
  data() {
    return {
      email: '',
      number: '',
      interestedIn: '-- Select Service --',
      comment: '',
      modal: false,
      service: {},
    }
  },
  methods: {
    openModal(service) {
      this.service = service
      this.modal = true
    },
    async submit() {
      const { email, number, interestedIn, comment } = this
      const validation = formValidation({
        email,
        number,
      })
      if (validation.error) {
        this.$toast.error(validation.error.message)
        return
      }
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
#footer {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  @include for-phone-only {
    padding-bottom: 34px;
    padding-top: 30px;
  }
  .container {
    max-width: 1132px;
    margin: 0 auto;
    @include for-phone-only {
      max-width: 350px;
    }
    @include for-tablet-only {
      max-width: 700px;
    }
    .top {
      display: flex;
      @include for-phone-only {
        flex-direction: column;
      }
      @include for-tablet-only {
        flex-direction: column;
      }
      .quick-links {
        width: 50%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        .heading {
          font-weight: 500;
          font-size: 16px;
          line-height: 185.5%;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #313131;
          margin-bottom: 45px;
          @include for-phone-only {
            margin-bottom: 18px;
          }
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
            @include for-phone-only {
              font-size: 10px;
            }
          }
        }
      }
      .contact-us {
        width: 50%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        .heading {
          font-weight: 500;
          font-size: 22px;
          line-height: 185.5%;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #313131;
          text-align: right;
          margin-bottom: 45px;
          @include for-phone-only {
            text-align: left;
            margin-bottom: 18px;
          }
          @include for-tablet-only {
            text-align: left;
            margin-bottom: 18px;
          }
        }
        .form {
          input {
            width: 100%;
            height: 65px;
            border: 1px solid #dddddd;
            outline: none;
            margin-bottom: 15px;
            box-sizing: border-box;
            padding-left: 25px;
            @include for-phone-only {
              height: 50px;
              padding-left: 10px;
            }
            &::placeholder {
              font-weight: 400;
              font-size: 16px;
              line-height: 146%;
              color: #737373;
            }
          }
          label {
            font-weight: 500;
            font-size: 16px;
            line-height: 146%;
            color: #343434;
            padding-left: 25px;
            @include for-phone-only {
              padding-left: 10px;
            }
          }
          select {
            width: 100%;
            height: 65px;
            border: 1px solid #dddddd;
            outline: none;
            margin-top: 8px;
            margin-bottom: 15px;
            text-align: center;
            text-align-last: center;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';
            @include for-phone-only {
              height: 50px;
            }
          }
          textarea {
            width: 100%;
            height: 130px;
            border: 1px solid #dddddd;
            outline: none;
            font-weight: normal;
            font-size: 16px;
            line-height: 146%;
            padding-left: 25px;
            padding-top: 23px;
            box-sizing: border-box;
            @include for-phone-only {
              padding-left: 10px;
              padding-top: 10px;
            }
            &::placeholder {
              color: #737373;
            }
          }
          button {
            cursor: pointer;
            width: 134px;
            height: 40px;
            background: $primary;
            border: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 185.5%;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #ffffff;
            float: right;
            margin-top: 30px;
            margin-bottom: 45px;
          }
        }
      }
    }
    .copyright {
      padding: 10px 0;
      border-bottom: 0.5px solid #979797;
      display: flex;
      justify-content: space-between;
      p {
        font-weight: 400;
        font-size: 10px;
        line-height: 185.5%;
        text-transform: capitalize;
        color: #292929;
        @include for-phone-only {
          font-size: 9px;
        }
      }
    }
  }
}
</style>
