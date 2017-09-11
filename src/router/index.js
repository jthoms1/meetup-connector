import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/Home');
const SpeakerSignup = () => import('../components/speaker/SpeakerSignup');
const SpeakerHome = () => import('../components/speaker/SpeakerHome');
const SpeakerInfo = () => import('../components/speaker/SpeakerInfo');
const SpeakerPresentation = () => import('../components/speaker/SpeakerPresentation');
const SponsorSignup = () => import('../components/sponsor/SponsorSignup');
const SponsorInfo = () => import('../components/sponsor/SponsorInfo');
const MeetupHome = () => import('../components/meetup/MeetupHome');


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
