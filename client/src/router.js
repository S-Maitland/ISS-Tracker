import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@/views/MainPage';

Vue.use(Router);

export const router = new Router ({
  routes: [
    {
      path: "",
      name: 'mainpage',
      component: MainPage,
      props: true
    }
  ]
});
