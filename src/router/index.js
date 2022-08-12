import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/all-products',
    name: 'products',
    component: () => import('../views/AllProductsView.vue'),
  },

  {
    path: '/all-products',
    name: 'categories',
    component: () => import('../views/CategoriesView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
