import Vue from 'vue';
import Vuex from 'vuex';
import { defaultState, mutations } from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  state: defaultState,
  mutations,
  plugins,
});
