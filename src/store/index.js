import Vue from 'vue';
import Vuex from 'vuex';
import productservice from '@/services/productservice.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    customerChoice: [],
    limitedProducts: [],
    cart: [],
    uniqueCart: [],
  },
  getters: {
    cartLength: (state) => {
      return state.cart.length;
    },
    getPrductById: (state, id) => {
      state.products.find((cur) => {
        return cur.id === id;
      });
    },
  },
  mutations: {
    SAVE_CHOICE(state, products) {
      state.customerChoice = products;
    },
    ADD_TO_CART(state, product) {
      console.log(state.cart);
      state.cart.push(product);
      console.log(state.cart);
      const uniqueIds = [];

      const unique = state.cart.filter((cur) => {
        const isDuplicate = uniqueIds.includes(cur.id);
        if (!isDuplicate) {
          uniqueIds.push(cur.id);
          return true;
        }
        return false;
      });

      state.cart = unique;
    },

    SAVE_LIMITED_PRODUCTS(state, products) {
      state.limitedProducts = products;
    },
  },
  actions: {
    fetchChoice({ commit }) {
      productservice
        .getProductByLimit(4)
        .then((res) => {
          console.log(res.data);
          commit('SAVE_CHOICE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchProducts({ commit }, lim) {
      productservice
        .getProductByLimit(lim)
        .then((res) => {
          commit('SAVE_LIMITED_PRODUCTS', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart({ commit }, product) {
      let obj = {
        id: product.id,
        qty: 1,
        category: product.category,
        title: product.title,
        price: product.price,
        image: product.image,
      };
      commit('ADD_TO_CART', obj);
    },
  },
  modules: {},
});
