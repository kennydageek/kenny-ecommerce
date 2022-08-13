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
    path: '/categories',
    name: 'categories',
    component: () => import('../views/CategoriesView.vue'),
  },

  {
    path: '/shop-men',
    name: 'shop-men',
    component: () => import('../views/ShopMenView.vue'),
  },

  {
    path: '/shop-women',
    name: 'shop-women',
    component: () => import('../views/ShopWomenView.vue'),
  },

  {
    path: '/jewelleries',
    name: 'jewelleries',
    component: () => import('../views/JewelleriesView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
