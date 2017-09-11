import Vue from 'vue';
import Vuex from 'vuex';
import meetups from './modules/meetups';
import speakers from './modules/speakers';
import sponsors from './modules/sponsors';
import actions from './actions';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meetups,
    speakers,
    sponsors
  },
  actions,
  plugins,
});
