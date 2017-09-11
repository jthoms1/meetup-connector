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
    <h2>What is MadJS</h2>
    <p></p>
    <h2>Past speaker topics and synopsis</h2>
    <p></p>
    <h2>Why would I want to speak at MadJS</h2>
    <p></p>
    <form id='meetup-signup' v-on:submit="speakerSignup">
      <div class="form-input">
        <label for="email">Email Address</label>
        <input v-model.trim="presentation.speakerEmail" id="email" placeholder="johndoe@example.com">
      </div>
      <div class="form-input">
        <label for="name">Name</label>
        <input v-model.trim="presentation.speakerName" id="name" placeholder="John Doe">
      </div>
      <div class="form-input">
        <label for="length">Presentation Length</label>
        <input v-model="presentation.length" id="length">
      </div>
      <div class="form-input">
        <label for="date-time">Preferred Time Slot</label>
        <input v-model="presentation.dateTime" id="date-time">
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
import validateEmail from '../../utils/validateEmail';

export default {
  name: 'speaker-signup',
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
      msg: 'Speaker Signup',
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
        speakerEmail: validateEmail(this.presentation.speakerEmail),
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
