<template>
  <div class="cart">
    <p class="cancel" @click="cancelCart()">
      <i class="fa-solid fa-xmark"></i>
    </p>
    <div class="heading">
      <p class="cart__heading">Your Cart</p>
      <p class="clear__cart" @click="clearCart">Clear Cart</p>
    </div>
    <div v-for="(item, index) in cart" :key="index">
      <cartCard class="cart-card" :item="item" />
    </div>

    <p class="cart__text">Your cart is empty</p>
    <p class="cart__total">Total: ${{ getTotal }}</p>

    <a href="#" class="checkout">Checkout</a>
  </div>
</template>

<script>
import cartCard from '@/components/cartCard';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'kc-cart',
  components: {
    cartCard,
  },

  computed: {
    ...mapState(['cart', 'uniqueCart', 'total']),
    ...mapGetters(['cartLength', 'getUniqueCart', 'getTotal']),
  },

  methods: {
    cancelCart() {
      let cancel = document.querySelector('.cart');
      cancel.classList.add('hidden');
      console.log('kenny');
    },

    clearCart() {
      this.$store.dispatch('clearCart');
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none !important;
}
.cart {
  width: 50%;
  padding: 3rem;
  height: 100vh;
  background: white;
  overflow: auto;
}

.cancel {
  text-align: right;
  font-size: 2.4rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 3rem;
}

.heading {
  display: flex;
  justify-content: space-between;
}

.cart__heading {
  font-size: 2rem;
  font-weight: 600;
}

.clear__cart {
  font-weight: 600;
  cursor: pointer;
}

.cart-card {
  margin: 3rem auto;
}

.cart__text {
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}

.cart__total {
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.checkout {
  width: 60%;
  margin: 0 auto;
  display: block;
  text-align: center;
  background: #4ca2e4;
  padding: 1rem 0;
  text-decoration: none;
  color: black;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.checkout:hover {
  border: 1px solid #4ca2e4;
  background-color: transparent;
}

@media only screen and (max-width: 689.99px) {
  .cart {
    width: 100%;
  }
}
</style>
