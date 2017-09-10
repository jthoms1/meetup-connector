<template>
  <div>
    <h1>{{ msg }}</h1>
    <button>Signin</button>
  </div>
</template>

<script>
export default {
  name: 'meetup-signup',
  data() {
    return {
      msg: 'Meetup Signup',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
