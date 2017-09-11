import * as types from '../mutation-types';

const STORAGE_KEY = 'sponsors_store';

const defaultState = {
  all: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
};

const getters = {
  getSponsors: state => state.all
};

const mutations = {
  [types.ADD_SPONSOR](state, sponsor) {
    state.all[sponsor.id] = sponsor;
  }
};

export default {
  STORAGE_KEY,
  state: defaultState,
  getters,
  mutations
};
