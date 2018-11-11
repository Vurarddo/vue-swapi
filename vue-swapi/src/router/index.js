import Vue from 'vue';
import Router from 'vue-router';
import PeopleComponent from '@/components/PeopleComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PeopleComponent',
      component: PeopleComponent
    },
  ],

});

