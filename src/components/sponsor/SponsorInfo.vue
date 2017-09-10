<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'sponsor-info',
  props: ['id'],
  data() {
    return {
      msg: 'Sponsor Info',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
