<template>
  <div class="product-card">
    <router-link :to="`/product/${choice.id}`">
      <div class="product-image">
        <img
          :src="choice.image"
          alt="product image"
          class="product-image__image"
        />
      </div>
      <h1 class="product__title">{{ choice.title }}</h1>

      <p class="product__price">${{ choice.price }}</p>
    </router-link>
    <button class="btn" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
// import kcbuttonsec from '@/components/kcbuttonsec';
export default {
  name: 'product-card',
  props: {
    choice: Object,
  },

  components: {
    // kcbuttonsec,
  },

  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.choice);
      // this.$store.dispatch('addToUniqueCart', this.choice);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.product-card {
  position: relative;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.7);
  padding: 2rem;
  width: 30rem;
  margin-top: 2rem;
  margin-right: 2rem;
  /* max-height: 30rem; */
}

.product-image {
  width: 60%;
  margin: 0 auto 2rem auto;
  height: 20rem;
}

.product-image__image {
  width: 100%;
  height: 100%;
}

.product__title {
  margin-bottom: 2rem;
  color: #4ca2e4;
  text-transform: capitalize;
  font-family: montserrat, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  position: relative;
}

.product__price {
  text-align: center;
  margin: 2rem 0;
  font-size: 2.4rem;
  font-weight: 300;
  font-family: quicksand, sans-serif;
}

.btn {
  position: relative;
  bottom: 0;
  /* z-index; */
  /* left: 50%;
  transform: translateX(-50%); */
}

button {
  display: block;
  padding: 1rem 3.5rem;
  background-color: #4ca2e4;
  border: 1px solid #4ca2e4;
  cursor: pointer;
  font-family: montserrat, sans-serif;
  font-size: 1.4rem;
  text-transform: capitalize;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: transparent;
}
</style>
