<template>
  <nav>
    <ul id="top-nav">
      <li><router-link to=''>Link 1</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
  data() {
    return {
      msg: 'Welcome to the Meetup Connector',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
