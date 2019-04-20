import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      component: () => import('./layout/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('./views/Main.vue'),
        },
        {
          path: 'question',
          name: 'question',
          component: () => import('./views/Question.vue'),
        },
      ],
    },
  ],
});
