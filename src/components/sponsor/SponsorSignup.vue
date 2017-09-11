<style scoped>
label {
  vertical-align: top;
  display: inline-block;
  width: 40%;
  text-align: right;
}
.form-input {
  text-align: left;
  margin: 10px 0;
}
.form-end {
  text-align: left;
  margin: 25px 0 0 40%;
}
.signup-button {
  margin-left: 4px;
}
ul.errors {
  display: inline-block;
  margin: 10px auto;
  color: red;
  text-align: left;
}
li {
  display: block;
}
textarea, input {
  width: 40%
}
textarea#notes {
  height: 80px;
}
</style>


<template>
  <div>
    <h1>{{ msg }}</h1>
    <form id='meetup-signup' v-on:submit="speakerSignup">
      <div class="form-input">
        <label for="email">Email Address</label>
        <input v-model.trim="presentation.speakerEmail" id="email" placeholder="johndoe@example.com">
      </div>
      <div class="form-input">
        <label for="name">Company Name</label>
        <input v-model.trim="presentation.companyName" id="name" placeholder="John's Tech Shop">
      </div>
      <div class="form-input">
        <label for="contact">Conteact Name</label>
        <input v-model.trim="presentation.contactName" id="contact" placeholder="John Doe">
      </div>
      <div class="form-input">
        <label for="phone">Phone Number</label>
        <input v-model="presentation.phoneNumber" id="phone" placeholder="555-555-5555">
      </div>
      <div class="form-input">
        <label for="notes">Notes</label>
        <textarea v-model="presentation.dateTime" id="notes"></textarea>
      </div>
      <div class="form-end">
        <input class="signup-button" type="submit" value="Sign up">
      </div>
    </form>
    <ul v-show="dirty" class="errors">
      <li v-show="!validation.speakerEmail">- Please provide a valid email address.</li>
      <li v-show="!validation.speakerName">- Name cannot be empty.</li>
      <li v-show="!validation.length">- Presentation Length cannot be empty.</li>
      <li v-show="!validation.dateTime">- Preferred Time Slot cannot be empty.</li>
    </ul>
  </div>
</template>


<script>
/* eslint-disable */
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* eslint-enable */

export default {
  name: 'sponsor-signup',
  methods: {
    speakerSignup(e) {
      e.preventDefault();
      this.dirty = true;
      if (this.isValid) {
        this.$store.dispatch('addSpeaker', this.presentation);
      }
    }
  },
  data() {
    return {
      msg: 'Sponsor Signup',
      dirty: false,
      presentation: {
        speakerEmail: '',
        speakerName: '',
        length: '',
        dateTime: ''
      }
    };
  },
  computed: {
    validation() {
      return {
        speakerEmail: emailRE.test(this.presentation.speakerEmail),
        speakerName: !!this.presentation.speakerName,
        length: !!this.presentation.length,
        dateTime: !!this.presentation.dateTime
      };
    },
    isValid() {
      const validation = this.validation;
      return Object.keys(validation).every(key => validation[key]);
    }
  }
};
</script>
