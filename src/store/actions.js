import * as types from './mutation-types';
import guid from '../utils/guid';

const addSpeaker = ({ commit }, speaker) => {
  const id = guid();

  commit(types.ADD_SPEAKER, {
    ...speaker,
    id
  });
};

const addSponsor = ({ commit }, sponsor) => {
  const id = guid();

  commit(types.ADD_SPONSOR, {
    ...sponsor,
    id
  });
};

export default {
  addSpeaker,
  addSponsor
};
