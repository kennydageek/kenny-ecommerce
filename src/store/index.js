import Vue from 'vue';
import Vuex from 'vuex';
import productservice from '@/services/productservice.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: productservice,
    cart: [],
  },
  getters: {
    cartLength: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
  },
  modules: {},
});
