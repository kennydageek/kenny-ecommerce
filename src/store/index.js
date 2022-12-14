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
    total: 0,
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

    getTotal(state) {
      let total = 0;
      state.cart.forEach((cur) => {
        total += cur.total();
        console.log(total);
      });

      return (total = total.toFixed(2));
      // ('UPDATE_TOTAL', total);
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

    DELETE_CARD(state, product) {
      console.log(state);
      console.log(product);

      state.cart = state.cart.filter((cur) => {
        return cur.id != product.id;
      });
    },

    CLEAR_CART(state) {
      state.cart = [];
    },

    INCREASE_QTY(state, product) {
      state.cart.find((cur) => cur.id === product.id).qty++;

      console.log(state.cart);
      // console.log(total);
    },

    DECREASE_QTY(state, product) {
      // if (state.cart.length === 0) return;
      if (product.qty === 1) return;
      state.cart.find((cur) => cur.id === product.id).qty--;
    },

    SAVE_LIMITED_PRODUCTS(state, products) {
      state.limitedProducts = products;
    },

    UPDATE_TOTAL(state, total) {
      state.total = total;
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
        total() {
          return this.price * this.qty;
        },
      };
      commit('ADD_TO_CART', obj);
    },

    deleteCard({ commit }, product) {
      commit('DELETE_CARD', product);
    },

    clearCart({ commit }) {
      commit('CLEAR_CART');
    },

    increaseQty({ commit }, products) {
      commit('INCREASE_QTY', products);
    },

    decreaseQty({ commit }, products) {
      commit('DECREASE_QTY', products);
    },

    inCart: ({ state }, id) => {
      let foundCart = state.cart.find((cur) => {
        return cur.id === id;
      });

      if (foundCart) {
        alert('Already in cart');
        return true;
      } else {
        // console.log(false);
        return false;
      }
    },
  },
  modules: {},
});
