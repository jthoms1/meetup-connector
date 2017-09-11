import createLogger from 'vuex/dist/logger';
import MeetupsModule from './modules/meetups';
import SpeakersModule from './modules/speakers';
import SponsorModule from './modules/sponsors';

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { meetups, speakers, sponsors }) => {
    window.localStorage.setItem(MeetupsModule.STORAGE_KEY, JSON.stringify(meetups.group));
    window.localStorage.setItem(SpeakersModule.STORAGE_KEY, JSON.stringify(speakers.all));
    window.localStorage.setItem(SponsorModule.STORAGE_KEY, JSON.stringify(sponsors.all));
  });
};

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin];
