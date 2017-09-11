import * as types from '../mutation-types';

const STORAGE_KEY = 'speakers_store';

const defaultState = {
  all: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
};

const getters = {
  getSpeakers: state => state.all
};

const mutations = {
  [types.ADD_SPEAKER](state, speaker) {
    state.all[speaker.id] = speaker;
  }
};

export default {
  STORAGE_KEY,
  state: defaultState,
  getters,
  mutations
};
