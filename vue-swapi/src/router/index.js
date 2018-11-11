import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import PeopleComponent from '@/components/PeopleComponent.vue';
import FilmsComponent from '@/components/FilmsComponent.vue';
import PeopleDescComponent from '@/components/PeopleDescComponent.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent,
    },
    {
      path: '/people',
      name: 'PeopleComponent',
      component: PeopleComponent
    },
    {
      path: '/films',
      name: 'FilmsComponent',
      component: FilmsComponent
    },
    {
      path: '/people/:id',
      name: 'PeopleDescComponent',
      component: PeopleDescComponent,
      props: {
        id: '',
      }
    }
  ],
});
