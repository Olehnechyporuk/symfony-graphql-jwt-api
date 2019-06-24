import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login/Login';
import Registration from '@/views/Registration/Registration';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
  ],
});
