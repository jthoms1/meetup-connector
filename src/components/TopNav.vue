<template>
  <nav>
    <ul id="top-nav">
      <li v-for="page in pages" :key="page.routeName">
        <router-link :to="{ name: page.routeName }">{{page.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
  data() {
    return {
      msg: 'Welcome to the Meetup Connector',
      pages: [
        {
          name: 'Home',
          routeName: 'home',
        }, {
          name: 'Meetups',
          routeName: 'meetup-home',
        }, {
          name: 'Sponsors',
          routeName: 'sponsor-signup',
        }, {
          name: 'Speakers',
          routeName: 'speaker-signup',
        }
      ]
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
