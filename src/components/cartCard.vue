<template>
  <div class="container">
    <div class="heading">
      <div class="img-container">
        <img :src="item.image" alt="" class="img-container__img" />
      </div>
      <p class="container__title">
        {{ item.title }}
      </p>
      <p class="delete"><i class="fa-solid fa-trash"></i></p>
    </div>

    <div class="quantity-price">
      <p class="quantity">${{ item.price }} x {{ item.qty }}</p>
      <p class="divider">|</p>
      <p class="price">${{ Number(item.price) * item.qty }}</p>
    </div>

    <div class="add-minus">
      <p class="minus" @click="decreaseQuantity">&mdash;</p>
      <p class="number">{{ item.qty }}</p>
      <p class="add" @click="increaseQuantity">+</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'cart-card',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    // increaseQuantity() {
    //   this.quantity++;
    //   console.log('adams');
    // },
    decreaseQuantity() {
      this.quantity--;
    },

    increaseQuantity() {
      this.$store.dispatch('addToCart', this.item);
      console.log(this.item);
      console.log(this.$store.state.cart);
    },
  },

  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartLength', 'getUniqueCart']),
  },
};
</script>

<style scoped>
.container {
  min-width: 20rem;
  max-width: 30rem;
  /* padding: 4rem 0; */
  background: white;
  padding: 2rem;
  box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  /* border: 1px solid #4ca2e4; */
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.img-container {
  max-width: 10rem;
  height: 5rem;
}

.img-container__img {
  width: 100%;
  height: 100%;
}

.container__title {
  align-self: center;
}

.delete {
  align-self: center;
  cursor: pointer;
}

.quantity-price {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid #4ca2e4;
  margin-bottom: 2rem;
}

.quantity {
}

.divider {
  align-self: center;
}

.price {
}

.add-minus {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #4ca2e4;
}

.minus,
.add {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: white;
  /* border: 1px solid white; */
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}

.minus {
}

.add {
}
</style>
