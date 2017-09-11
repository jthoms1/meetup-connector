<template>
  <div>
    <h1>{{ group.name }}</h1>
    <div v-html="group.description"></div>
    <dl class="stats">
      <dt>Members</dt>
      <dd>{{ group.members }}</dd>
      <dt>Location</dt>
      <dd>{{ group.localized_location }}</dd>
      <dt>Group Status</dt>
      <dd>{{ group.status }}</dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'meetup-home',
  props: ['id'],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getGroupData');
  },
  computed: mapGetters({
    group: 'getGroup'
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
dl {
  display: block;
  width: 300px;
  margin: 30px auto 0;
  overflow: hidden;
}
dt {
  width: 150px;
  text-align: right;
  float: left;
  clear: left;
}
dt::after {
  content: ':'
}
dd {
  float: left;
  margin-left: 20px;
}
</style>
