import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import SpeakerSignup from '../components/speaker/SpeakerSignup';
import SpeakerHome from '../components/speaker/SpeakerHome';
import SpeakerInfo from '../components/speaker/SpeakerInfo';
import SpeakerPresentation from '../components/speaker/SpeakerPresentation';
import SponsorSignup from '../components/sponsor/SponsorSignup';
import SponsorInfo from '../components/sponsor/SponsorInfo';
import MeetupHome from '../components/meetup/MeetupHome';

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
      name: 'meetup-home',
      component: MeetupHome,
    },
    {
      path: '/speaker',
      name: 'speaker-signup',
      component: SpeakerSignup,
    },
    {
      path: '/speaker/:id',
      component: SpeakerInfo,
      props: true,
      children: [
        { path: '', name: 'speaker-info', component: SpeakerHome },
        { path: 'presentation/:presentationId', name: 'speaker-presentation', component: SpeakerPresentation, props: true }
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
