import meetupapi from '../../api/meetup';
import * as types from '../mutation-types';

const STORAGE_KEY = 'meetup_store';

const defaultState = {
  group: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
};

const getters = {
  getGroup: state => state.group
};

const actions = {
  getGroupData({ commit }) {
    meetupapi.getGroup(group => (
      commit(types.RECEIVE_GROUP, group)
    ));
  }
};

const mutations = {
  [types.RECEIVE_GROUP](state, group) {
    state.group = group;
  }
};

export default {
  STORAGE_KEY,
  state: defaultState,
  getters,
  actions,
  mutations
};
