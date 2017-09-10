import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import SpeakerSignup from '../components/speaker/SpeakerSignup';
import SpeakerHome from '../components/speaker/SpeakerHome';
import SpeakerInfo from '../components/speaker/SpeakerInfo';
import SpeakerPresentation from '../components/speaker/SpeakerPresentation';
import SponsorSignup from '../components/sponsor/SponsorSignup';
import SponsorInfo from '../components/sponsor/SponsorInfo';
import MeetupSignup from '../components/meetup/MeetupSignup';
import MeetupHome from '../components/meetup/MeetupHome';
import MeetupInfo from '../components/meetup/MeetupInfo';
import MeetupEvent from '../components/meetup/MeetupEvent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meetup',
      name: 'meetup-signup',
      component: MeetupSignup,
    },
    {
      path: '/meetup/:id',
      name: 'meetup-info',
      component: MeetupInfo,
      props: true,
      children: [
        { path: '', component: MeetupHome },
        { path: 'event/:id', name: 'meetup-event', component: MeetupEvent, props: true }
      ]
    },
    {
      path: '/speaker',
      name: 'speaker-signup',
      component: SpeakerSignup,
    },
    {
      path: '/speaker/:id',
      name: 'speaker-info',
      component: SpeakerInfo,
      props: true,
      children: [
        { path: '', component: SpeakerHome },
        { path: 'presentation/:id', name: 'speaker-presentation', component: SpeakerPresentation, props: true }
      ]
    },
    {
      path: '/sponsor',
      name: 'sponsor-signup',
      component: SponsorSignup,
    },
    {
      path: '/sponsor/:id',
      name: 'sponsor-info',
      component: SponsorInfo,
      props: true,
    },
  ]
});
